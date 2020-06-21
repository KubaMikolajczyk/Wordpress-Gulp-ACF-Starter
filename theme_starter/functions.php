<?php

//---------------------FUNCTIONS THAT LOAD OR HIDE SOME ELEMENTS------------------------------

//-----------------------------
//LOAD STYLES AND SCRIPTS
//   to load all the scripts and styles at the right time
//   in the process of page loading and not to clutter
//   footer nor head with additional unnecesary text

function _themename_assets() {
//    here connect the fonts used in project
    wp_enqueue_style('material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    wp_enqueue_style('slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    wp_enqueue_style('fancybox-stylesheet', '//cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css');
    wp_enqueue_style('aos-styles', 'https://unpkg.com/aos@2.3.1/dist/aos.css');
    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js');
    wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );

    wp_enqueue_script('jquery',"https://code.jquery.com/jquery-3.4.1.min.js");
    wp_enqueue_script('slick-js', "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js");
    wp_enqueue_script('fancybox-script', '//cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js');
    wp_enqueue_script('aos',"https://unpkg.com/aos@2.3.1/dist/aos.js");
    wp_enqueue_script('_bootstrap-scripts','https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js','','',true);
    wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', '1.0.0', true );
}
add_action('wp_enqueue_scripts', '_themename_assets');

//----------------------------------------------
//REMOVE WORDPRESS PANEL FROM TOP
//    I hate it like hell - I mean top panel of wordpress
//    So I hide it - it's better like that

add_filter('show_admin_bar', '__return_false');

//----------------------------------------------
//GETTING RID OF TAXONOMY LABELS
//   It looks like this: you add the page title
//   to be displayed at the top of the current page
//   and when its actually an archive
//   Wordpress adds the word "Archive"
//   and you want just the name of your custom post
//   so here we remove the first word

function my_theme_archive_title( $title ) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
        $title = single_tag_title( '', false );
    } elseif ( is_author() ) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif ( is_post_type_archive() ) {
        $title = post_type_archive_title( '', false );
    } elseif ( is_tax() ) {
        $title = single_term_title( '', false );
    }

    return $title;
}

add_filter( 'get_the_archive_title', 'my_theme_archive_title' );

//----------------------------------------------
//CUSTOM POST INIT
//   as I mentioned this is an ACF & Gulp Wordpress setup
//   below you have a custom post init
//   replace "postname" with your actual post name
//   like for eg : "Rooms", "Articles", "Movies"
//   Whatever fits your content

function postname_init() {

    $args = array(
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'exclude_from_search' => false,
        'show_in_nav_menus' => true,
        'has_archive' => true,
        'rewrite' => true,
        'label'  => 'Postname',
        'menu_icon' => 'dashicons-format-aside',
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'page-attributes')
    );
    register_post_type( 'postname', $args );
}

add_action( 'init', 'postname_init' );

//----------------------------------------------
// CUSTOM POSTNAME ARCHIVE REGISTER AS OPTION PAGE
//    acf pro gives you a possibility to build options page
//    and you use that to have something like big category containers
//    create one for your custom post above
//    just change all "postname" to the name of custom post you created

if( function_exists('acf_add_options_page') )
{
    acf_add_options_page(array(
        'page_title'    => 'Postname Settings',
        'menu_title'    => 'Postname Settings',
        'menu_slug'     => 'options_postname',
        'capability'    => 'edit_posts',
        'parent_slug'   => 'edit.php?post_type=postname',
        'position'      => false,
        'icon_url'      => 'dashicons-images-alt2',
        'redirect'      => false,
    ));
}

//-----------------------------
//THEME SETTINGS
//   if you want some custom fields to be accesible from
//   the global project perspective like cta that appear on each page
//   then creating an option page like ""CTA Settings"" would be nice
//   here you have Theme, Header and Footer settings for a good start


if( function_exists('acf_add_options_page') ) {
    acf_add_options_page([
        'page_title'   => 'Theme Settings',
        'menu_title'   => 'Theme Settings',
        'menu_slug'    => 'theme-general-settings',
        'capability'   => 'edit_posts',
        'redirect'    => false
    ]);

    acf_add_options_sub_page(array(
        'page_title' 	=> 'Header Settings',
        'menu_title'	=> 'Header Settings',
        'parent_slug'	=> 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title' 	=> 'Footer Settings',
        'menu_title'	=> 'Footer Settings',
        'parent_slug'	=> 'theme-general-settings',
    ));
}

//------------------------------
// POST THUMBNAILS
//   you will probably need to get some post thumbnails along the way
//   it activates the possibility to do that

add_theme_support('post-thumbnails');


//---------------------FUNCTIONS THAT YOU CAN ACTUALLY USE------------------------------

//-----------------------------
//PRINTING
//   just write inside php "pr($anything)"
//   like post or variable
//   it will print you something to the screen
//   it's usefull as hell

function pr($a)
{
    echo '<pre>' . print_r($a, true) . '</pre>';
}

//-----------------------------
//REMOVE SPACES
//   So you want a number of your client to be a continuous line of digits
//   let him enter it how he wants
//   but when you make a link that let you call automatically like <a href="tel:the_number">
//   then the_number has to be without spaces to work
//   +48 123 456 789  --->  +48123456789

function remove_spaces($a){
    $a = str_replace(' ', '', $a);
    echo $a;
}

//-----------------------------
//ADMIN PANEL MENU REGISTER
//   Here you register menus that are on your site
//   and you link them later with menus created in Wordpress Admin Panel

function site_menu()
{
    // think how many menus you will have
    // topbar - probably menu, mobile slide out navigation - menu, bottom navigation - menu
    // register each of them here and later connect them in WP Admin Panel
    // under "Apperance/Menus"
    register_nav_menu('top_navigation', __('Top Navigation'));
}
add_action('init', 'site_menu');

//----------------------------------------------
//DEFAULT POST & COMMENTS REMOVE
// if you dont use default post type you can simply remove it

function post_remove ()
{
    //uncomment if you want to use or use as template

    //remove_menu_page('edit.php');
    //to remove default posts

    //remove_menu_page( 'edit-comments.php' );
    //to remove comments
}
add_action('admin_menu', 'post_remove');


//----------------------------------------------
//SHORTENING TEXT TO REQUIRED LENGTH
//   You need something to show only 60 letters
//   of what admin wrote in the field
//   just use short_text($your_text,60) in php field

function short_text($text, $size)
{
    $text = strip_tags($text);
    if (strlen($text) > $size) {
        $index = strpos($text, ' ', $size);
        if ($index == false) {
            return $text;
        }
        return mb_substr($text, 0, $index) . '...';
    }
    return $text;
}

//----------------------------------------------
//IMAGE SIZE
//   add sizes in a manner showed below
//   where after size name you have width and then height

add_image_size( 'size_name', 1400, 900);


//-----------------------------
//LOAD MENUS
//   this function you can use to load
//   the navigation menu you created above
//   and linked with menus in "Apperance/Menus"
//   you use it like:
//   get_menus('Menu name you gave', 'class name you want it to have','menu item classes', 'menu item tag (like ul or nav)');

function get_menus($menu_name, $classes, $item_classes, $tag)
{
    $menu = wp_get_nav_menu_object($menu_name);
    $menu_items = wp_get_nav_menu_items($menu->term_id);
    echo '<'. $tag .' class="'. $classes .'">';
    $items = array();
    foreach ($menu_items as $key => $menu_item) {
        if($menu_item->menu_item_parent == 0)
        {
            $items[$menu_item->ID] = array(
                'content' => $menu_item,
                'children' => array()
            );
        }
    }
    foreach ($menu_items as $key => $menu_item) {
        if($menu_item->menu_item_parent != 0)
        {
            $items[$menu_item->menu_item_parent]['children'][] = $menu_item;
        }
    }
    foreach ($items as $key => $item) {
        $title = $item['content']->title;
        $url = $item['content']->url;
        $icon = $item['content']->classes;
        $id = $item['content']->ID;
        if($tag == 'ul')
            echo '<li class="'. $item_classes .'">';
        echo '<a href="' . $url . '" class="'. $item_classes .'" title="'. $title .'"><span>' . $title . '</span></a>';
        if(sizeof($item['children']))
        {
            echo '<ul class="submenu">';
            foreach ($item['children'] as $child)
            {
                echo '<li>';
                echo '<a href="' . $child->url . '" title='. $title .'>' . (strlen($child->classes[0]) ? '<i class=' . $child->classes[0] . '></i>' : '') . $child->title . '</a>';
                echo '</li>';
            }
            echo '</ul>';
        }
        if($tag == 'ul')
            echo '</li>';
    }
    echo '</'. $tag .'>';
}

//-----------------------------
//GET LOGO
//   a useful logo shortcut to import your header and footer logos
//   and make them a link with everything a logo link needs

function get_logo($a)
{
    if($a=='header'){
        $custom_logo = get_field('header', 'option')['logo'];
    } else if($a=='footer') {
        $custom_logo = get_field('footer', 'option')['logo'];
    }
    $custom_logo_id = $custom_logo['id'];
    $image = wp_get_attachment_image_src($custom_logo_id, 'full');
    echo '<a href="' . get_home_url() . '" title="' . get_bloginfo('name') . ' - ' . get_bloginfo('description') . '" class="site-logo"><img src="' . $image[0] . '" alt="' . get_bloginfo('name') . ' - ' . get_bloginfo('description') . '" class="img-fluid"/></a>';
}



//-----------------------------
//CUSTOM BREADCRUMBS
//   i love this function!
//   it was written by one of my collegues Pawel Stryzh
//   it lets you add breadcrumbs to all types of pages

function custom_breadcrumbs()
{
    $separator = '<span class="material-icons">chevron_right</span>';
    $breadcrumbs_id = 'breadcrumbs';
    $breadcrumbs_class = 'breadcrumbs d-flex justify-content-start align-items-center mb-0';
    $home_title = get_the_title( get_option('page_on_front') );
    $custom_taxonomy = 'product_cat';
    global $post, $wp_query;
    if (!is_front_page()) {
        echo '<div class="breadcrumbs-holder">';
        echo '<div class="container"><div class="row"><div class="col-12">';
        echo '<ul id="' . $breadcrumbs_id . '" class="' . $breadcrumbs_class . '">';
        echo '<li class="item-home"><a class="bread-link nice-link white-color bread-home" href="' . get_home_url() . '" title="' . $home_title . '">' . $home_title . '</a></li>';
        echo '<li class="separator mx-2 separator-home"> ' . $separator . ' </li>';
        if (is_archive() && !is_tax() && !is_category() && !is_tag() && !is_author() && !is_day() && !is_month() && !is_year()) {
            if (post_type_archive_title('', false) == 'Produkty')
            {
                echo '<li class="item-current item-archive"><span class="bread-current bread-archive">Oferty</span></li>';
            } else
            {
                echo '<li class="item-current item-archive"><span class="bread-current bread-archive">' . post_type_archive_title('', false) . '</span></li>';
            }
        } else if (is_archive() && is_tax() && !is_category() && !is_tag()) {
            $post_type = get_post_type();
            if ($post_type != 'post') {
                $taxObj = get_taxonomy(get_queried_object()->taxonomy);
                $post_type_custom = $taxObj->object_type[0];
                $get_singular = get_post_type_object($post_type_custom);
                $post_type_object = get_post_type_object($post_type);
                $post_type_archive = get_post_type_archive_link($post_type_custom);
                if ($post_type == 'product')
                {
                    echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat nice-link white-color bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="Oferty">Oferty</a></li>';
                } else
                {
                    echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat nice-link white-color bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $get_singular->label . '">' . $get_singular->label . '</a></li>';
                }
                echo '<li class="separator mx-2"> ' . $separator . ' </li>';
            }
            $custom_tax_name = get_queried_object()->name;
            echo '<li class="item-current item-archive"><span class="bread-current bread-archive">' . $custom_tax_name . '</span></li>';
        } else if (is_single()) {
            $post_type = get_post_type();
            if ($post_type != 'post') {
                $post_type_object = get_post_type_object($post_type);
                $post_type_archive = get_post_type_archive_link($post_type);
                if ($post_type == 'product')
                {
                    echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat nice-link white-color bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="Oferty">Oferty</a></li>';
                } else
                {
                    echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat nice-link white-color bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
                }
                echo '<li class="separator mx-2"> ' . $separator . ' </li>';
            }
            $category = get_the_category();
            if (!empty($category)) {
                $last_category = end(array_values($category));
                $get_cat_parents = rtrim(get_category_parents($last_category->term_id, true, ','), ',');
                $cat_parents = explode(',', $get_cat_parents);
                $cat_display = '';
                foreach ($cat_parents as $parents) {
                    $cat_display .= '<li class="item-cat">' . $parents . '</li>';
                    $cat_display .= '<li class="separator mx-2"> ' . $separator . ' </li>';
                }
            }
            $taxonomy_exists = taxonomy_exists($custom_taxonomy);
            if (empty($last_category) && !empty($custom_taxonomy) && $taxonomy_exists) {
                $taxonomy_terms = get_the_terms($post->ID, $custom_taxonomy);
                $cat_id = $taxonomy_terms[0]->term_id;
                $cat_nicename = $taxonomy_terms[0]->slug;
                $cat_link = get_term_link($taxonomy_terms[0]->term_id, $custom_taxonomy);
                $cat_name = $taxonomy_terms[0]->name;
            }
            if (!empty($last_category)) {
                echo $cat_display;
                echo '<li class="item-current item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</span></li>';
            } else if (!empty($cat_id)) {
                echo '<li class="item-cat item-cat-' . $cat_id . ' item-cat-' . $cat_nicename . '"><a class="bread-cat nice-link white-color bread-cat-' . $cat_id . ' bread-cat-' . $cat_nicename . '" href="' . $cat_link . '" title="' . $cat_name . '">' . $cat_name . '</a></li>';
                echo '<li class="separator mx-2"> ' . $separator . ' </li>';
                echo '<li class="item-current item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</span></li>';
            } else {
                echo '<li class="item-current item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</span></li>';
            }
        } else if (is_category()) {
            echo '<li class="item-current item-cat"><span class="bread-current bread-cat">Kategoria: ' . single_cat_title('', false) . '</span></li>';
        } else if (is_page()) {
            if ($post->post_parent) {
                $anc = get_post_ancestors($post->ID);
                $anc = array_reverse($anc);
                if (!isset($parents)) $parents = null;
                foreach ($anc as $ancestor) {
                    $parents .= '<li class="item-parent item-parent-' . $ancestor . '"><a class="bread-parent nice-link white-color bread-parent-' . $ancestor . '" href="' . get_permalink($ancestor) . '" title="' . get_the_title($ancestor) . '">' . get_the_title($ancestor) . '</a></li>';
                    $parents .= '<li class="separator mx-2 separator-' . $ancestor . '"> ' . $separator . ' </li>';
                }
                echo $parents;
                echo '<li class="item-current item-' . $post->ID . '"><span title="' . get_the_title() . '"> ' . get_the_title() . '</span></li>';
            } else {
                echo '<li class="item-current item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '"> ' . get_the_title() . '</span></li>';
            }
        } else if (is_tag()) {
            $term_id = get_query_var('tag_id');
            $taxonomy = 'post_tag';
            $args = 'include=' . $term_id;
            $terms = get_terms($taxonomy, $args);
            $get_term_id = $terms[0]->term_id;
            $get_term_slug = $terms[0]->slug;
            $get_term_name = $terms[0]->name;
            echo '<li class="item-current item-tag-' . $get_term_id . ' item-tag-' . $get_term_slug . '"><span class="bread-current bread-tag-' . $get_term_id . ' bread-tag-' . $get_term_slug . '">tag: ' . $get_term_name . '</span></li>';
        } elseif (is_day()) {
            echo '<li class="item-year item-year-' . get_the_time('Y') . '"><a class="bread-year nice-link white-color bread-year-' . get_the_time('Y') . '" href="' . get_year_link(get_the_time('Y')) . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' </a></li>';
            echo '<li class="separator mx-2 separator-' . get_the_time('Y') . '"> ' . $separator . ' </li>';
            echo '<li class="item-month item-month-' . get_the_time('m') . '"><a class="bread-month nice-link white-color bread-month-' . get_the_time('m') . '" href="' . get_month_link(get_the_time('Y'), get_the_time('m')) . '" title="' . get_the_time('M') . '">' . get_the_time('m') . ' </a></li>';
            echo '<li class="separator mx-2 separator-' . get_the_time('m') . '"> ' . $separator . ' </li>';
            echo '<li class="item-current item-' . get_the_time('d') . '"><span class="bread-current bread-' . get_the_time('d') . '"> ' . get_the_time('d') . '</span></li>';
        } else if (is_month()) {
            echo '<li class="item-year item-year-' . get_the_time('Y') . '"><a class="bread-year nice-link white-color bread-year-' . get_the_time('Y') . '" href="' . get_year_link(get_the_time('Y')) . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' </a></li>';
            echo '<li class="separator mx-2 separator-' . get_the_time('Y') . '"> ' . $separator . ' </li>';
            echo '<li class="item-month item-month-' . get_the_time('m') . '"><span class="bread-month bread-month-' . get_the_time('m') . '" title="' . get_the_time('M') . '">' . get_the_time('m') . ' </span></li>';
        } else if (is_year()) {
            echo '<li class="item-current item-current-' . get_the_time('Y') . '"><span class="bread-current bread-current-' . get_the_time('Y') . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' </span></li>';
        } else if ($wp_query->query_vars['author']) {
            global $author;
            $userdata = get_userdata($author);
            echo '<li class="item-current item-current-' . $userdata->user_nicename . '"><span class="bread-current bread-current-' . $userdata->user_nicename . '" title="' . $userdata->display_name . '">' . 'Autor: ' . $userdata->display_name . '</span></li>';
        } else if (get_query_var('paged')) {
            echo '<li class="item-current item-current-' . get_query_var('paged') . '"><span class="bread-current bread-current-' . get_query_var('paged') . '" title="Page ' . get_query_var('paged') . '">' . __('Page') . ' ' . get_query_var('paged') . '</span></li>';
        } else if (is_search()) {
            echo '<li class="item-current item-current-' . get_search_query() . '"><span class="bread-current bread-current-' . get_search_query() . '" title="Search results for: ' . get_search_query() . '">Wyniki wyszukiwania dla: ' . get_search_query() . '</span></li>';
        } elseif (is_404()) {
            echo '<li>' . 'Błąd 404' . '</li>';
        }
        echo '</ul>';
        echo '</div>';
        echo '</div>';
        echo '</div>';
        echo '</div>';
    }
}
