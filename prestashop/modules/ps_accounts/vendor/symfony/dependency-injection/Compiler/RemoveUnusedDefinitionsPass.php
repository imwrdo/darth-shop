<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\DependencyInjection\Compiler;

use PrestaShop\Module\PsAccounts\Vendor\Symfony\Component\DependencyInjection\ContainerBuilder;
/**
 * Removes unused service definitions from the container.
 *
 * @author Johannes M. Schmitt <schmittjoh@gmail.com>
 */
class RemoveUnusedDefinitionsPass implements RepeatablePassInterface
{
    private $repeatedPass;
    /**
     * {@inheritdoc}
     */
    public function setRepeatedPass(RepeatedPass $repeatedPass)
    {
        $this->repeatedPass = $repeatedPass;
    }
    /**
     * Processes the ContainerBuilder to remove unused definitions.
     */
    public function process(ContainerBuilder $container)
    {
        $graph = $container->getCompiler()->getServiceReferenceGraph();
        $hasChanged = \false;
        foreach ($container->getDefinitions() as $id => $definition) {
            if ($definition->isPublic() || $definition->isPrivate()) {
                continue;
            }
            if ($graph->hasNode($id)) {
                $edges = $graph->getNode($id)->getInEdges();
                $referencingAliases = [];
                $sourceIds = [];
                foreach ($edges as $edge) {
                    if ($edge->isWeak()) {
                        continue;
                    }
                    $node = $edge->getSourceNode();
                    $sourceIds[] = $node->getId();
                    if ($node->isAlias()) {
                        $referencingAliases[] = $node->getValue();
                    }
                }
                $isReferenced = \count(\array_unique($sourceIds)) - \count($referencingAliases) > 0;
            } else {
                $referencingAliases = [];
                $isReferenced = \false;
            }
            if (1 === \count($referencingAliases) && \false === $isReferenced) {
                $container->setDefinition((string) \reset($referencingAliases), $definition);
                $definition->setPublic(!$definition->isPrivate());
                $definition->setPrivate(\reset($referencingAliases)->isPrivate());
                $container->removeDefinition($id);
                $container->log($this, \sprintf('Removed service "%s"; reason: replaces alias %s.', $id, \reset($referencingAliases)));
            } elseif (0 === \count($referencingAliases) && \false === $isReferenced) {
                $container->removeDefinition($id);
                $container->resolveEnvPlaceholders(\serialize($definition));
                $container->log($this, \sprintf('Removed service "%s"; reason: unused.', $id));
                $hasChanged = \true;
            }
        }
        if ($hasChanged) {
            $this->repeatedPass->setRepeat();
        }
    }
}
