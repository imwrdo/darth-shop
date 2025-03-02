<?php
/**
 * Creative Elements - live Theme & Page Builder
 *
 * @author    WebshopWorks, Elementor
 * @copyright 2019-2024 WebshopWorks.com & Elementor.com
 * @license   https://www.gnu.org/licenses/gpl-3.0.html
 */
namespace CE;

if (!defined('_PS_VERSION_')) {
    exit;
}

/**
 * Elementor base data control.
 *
 * An abstract class for creating new data controls in the panel.
 *
 * @since 1.5.0
 * @abstract
 */
abstract class BaseDataControl extends BaseControl
{
    /**
     * Get data control default value.
     *
     * Retrieve the default value of the data control. Used to return the default
     * values while initializing the data control.
     *
     * @since 1.5.0
     *
     * @return string Control default value
     */
    public function getDefaultValue()
    {
        return '';
    }

    /**
     * Get data control value.
     *
     * Retrieve the value of the data control from a specific Controls_Stack settings.
     *
     * @since 1.5.0
     *
     * @param array $control Control
     * @param array $settings Element settings
     *
     * @return mixed Control values
     */
    public function getValue($control, $settings)
    {
        if (!isset($control['default'])) {
            $control['default'] = $this->getDefaultValue();
        }

        if (isset($settings[$control['name']])) {
            $value = $settings[$control['name']];
        } else {
            $value = $control['default'];
        }

        return $value;
    }

    /**
     * Parse dynamic tags.
     *
     * Iterates through all the controls and renders all the dynamic tags.
     *
     * @since 2.0.0
     *
     * @param string $dynamic_value The dynamic tag text
     * @param array $dynamic_settings The dynamic tag settings
     *
     * @return string|string[]|mixed a string or an array of strings with the
     *                               return value from each tag callback function
     */
    public function parseTags($dynamic_value, $dynamic_settings)
    {
        $current_dynamic_settings = $this->getSettings('dynamic');

        if (is_array($current_dynamic_settings)) {
            $dynamic_settings = array_merge($current_dynamic_settings, $dynamic_settings);
        }

        return Plugin::$instance->dynamic_tags->parseTagsText($dynamic_value, $dynamic_settings, [Plugin::$instance->dynamic_tags, 'getTagDataContent']);
    }

    /**
     * Get data control style value.
     *
     * Retrieve the style of the control. Used when adding CSS rules to the control
     * while extracting CSS from the `selectors` data argument.
     *
     * @since 1.5.0
     * @since 2.3.3 New `$control_data` parameter added.
     *
     * @param string $css_property CSS property
     * @param string $control_value Control value
     * @param array $control_data Control Data
     *
     * @return string Control style value
     */
    public function getStyleValue($css_property, $control_value, array $control_data)
    {
        if ('DEFAULT' === $css_property) {
            return $control_data['default'];
        }

        return $control_value;
    }

    /**
     * Get data control unique ID.
     *
     * Retrieve the unique ID of the control. Used to set a uniq CSS ID for the
     * element.
     *
     * @since 1.5.0
     *
     * @param string $input_type Input type. Default is 'default'
     *
     * @return string Unique ID
     */
    protected function getControlUid($input_type = 'default')
    {
        return 'elementor-control-' . $input_type . '-{{{ data._cid }}}';
    }
}
