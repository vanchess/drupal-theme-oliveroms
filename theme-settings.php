<?php

/**
 * @file
 * Functions to support Olivero theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 */
function oliveroms_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $form['olivero_settings']['olivero_utilities']['center_align_layout'] = [
    '#type' => 'checkbox',
    '#title' => t('Center align site layout'),
    '#default_value' => theme_get_setting('center_align_layout'),
    '#description' => t('Shifts layout from side-aligned to center-aligned'),
  ];
}
