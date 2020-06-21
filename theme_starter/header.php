<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <title><?php if(is_archive()):echo get_the_archive_title();else:echo $post->post_title;endif;?> - <?php echo bloginfo('name')?></title>

     <!--
     We will add this to description when we will add this description custom field to each page
     if(is_archive()): echo get_field('short_text', 'option'); elseif (is_front_page()): echo get_field('short_text'); else: echo get_field('short_text', $page->id); endif; -->

    <meta name="description" content="<?php echo bloginfo('description')?>">
    <meta name="author" content="Kuba Mikołajczyk">
    <meta name="generator" content="Wordpress">
    <link rel="shortcut icon" type="image/x-icon" href="<?php get_site_icon_url($size = 32); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="manifest" href="<?php echo get_template_directory_uri()?>/manifest.json">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <![endif]-->
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php get_template_part('_partials/header'); ?>
<main class="page">
    <?php if(!is_front_page()): ?>
        <section class="top-page">
            <?php custom_breadcrumbs(); ?>
        </section>
    <?php endif; ?>