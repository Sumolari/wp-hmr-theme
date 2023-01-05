<?php
/**
 * The main helper functions file
 * php version 7.4.9
 *
 * @category Helpers
 * @package  WPHMRTheme
 * @author   Lluís Ulzurrun de Asanza i Sàez <me@llu.is>
 * @license  MIT https://github.com/Sumolari/wp-hmr-theme/blob/main/LICENSE.md
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

// Enables HMR if Vite dev server is available.
require_once get_theme_file_path('/inc/hmr.php');

add_action(
    'wp_enqueue_scripts', function () {
        $handle = 'hello-world';
        $dependencies = array();
        $version = null;

        if (isViteHMRAvailable()) {
            loadJSScriptAsESModule($handle);
            wp_enqueue_script(
                $handle,
                getViteDevServerAddress() . '/ts/hello-world.ts',
                $dependencies,
                $version
            );
        } else {
            wp_enqueue_script(
                $handle,
                get_stylesheet_directory_uri() . '/js/hello-world.js',
                $dependencies,
                $version
            );
        }
    }
);