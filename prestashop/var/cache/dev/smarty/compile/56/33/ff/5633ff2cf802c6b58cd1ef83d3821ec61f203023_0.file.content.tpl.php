<?php
/* Smarty version 3.1.48, created on 2024-11-04 17:40:46
  from '/var/www/html/admin087pqsbei/themes/default/template/content.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_6728f90ed64b39_19678390',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5633ff2cf802c6b58cd1ef83d3821ec61f203023' => 
    array (
      0 => '/var/www/html/admin087pqsbei/themes/default/template/content.tpl',
      1 => 1702485415,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6728f90ed64b39_19678390 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="ajax_confirmation" class="alert alert-success hide"></div>
<div id="ajaxBox" style="display:none"></div>

<div class="row">
	<div class="col-lg-12">
		<?php if ((isset($_smarty_tpl->tpl_vars['content']->value))) {?>
			<?php echo $_smarty_tpl->tpl_vars['content']->value;?>

		<?php }?>
	</div>
</div>
<?php }
}
