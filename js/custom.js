/* Parters Page*/
$(function() {
    $(".el-input__inner").click(function(event){
        $(this).closest(".el-select").find(".el-select-dropdown").show();
        $(this).closest(".el-select").find(".el-scrollbar").show();
        $(this).closest(".el-select").find(".el-select-dropdown__empty").hide();
    });
    $(".el-select-dropdown__item").click(function(event){
        var select = $(this).closest(".el-select")
        select.find(".el-select-dropdown").hide();
        select.find(".el-scrollbar").hide();
        select.find(".el-select-dropdown__empty").hide();
        select.find(".el-input__inner").val($(this).find("span").text())
    });
    $(".el-checkbox").click(function () {
      var $checkbox = $(this).find(".el-checkbox__original");
      var $inputBox = $(this).find(".el-checkbox__input");
    
      var newState = !$checkbox.prop("checked");
      $checkbox.prop("checked", newState);
    
      // set/remove class properly
      $inputBox.toggleClass("is-checked", newState);
    });
});
/* Parters Page*/

/* Supports Plans Page*/


$(function(){
                $(".option .option-title").click(function(event){
                    $(".option").removeClass("active");
                    var option = $(this).closest(".option");
                    option.addClass("active");
                    //option.find(".option-text").toggle();
                });
            })
            
            $(window).on("scroll", function () {
              if ($(this).scrollTop() > 50) {
                   $(".header").removeClass("header-transparent");
              } else {
                $(".header").addClass("header-transparent");
               }
            });
/* Supports Plans Page*/


/* Mobile Menu Functionality */
$(document).ready(function() {
    // Mobile menu toggle functionality
    $('.header-btns-mobile').on('click', function() {
        $('#mobileMenuOverlay').addClass('active');
        $('body').css('overflow', 'hidden'); // Prevent body scroll when menu is open
    });

    // Close mobile menu
    $('#mobileMenuClose').on('click', function() {
        closeMobileMenu();
    });

    // Close mobile menu when clicking on overlay
    $('#mobileMenuOverlay').on('click', function(e) {
        if (e.target === this) {
            closeMobileMenu();
        }
    });

    // Close mobile menu with escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#mobileMenuOverlay').hasClass('active')) {
            closeMobileMenu();
        }
    });

    // Mobile submenu toggle functionality
    $('.mobile-nav-title').on('click', function(e) {
        var $navItem = $(this).closest('.mobile-nav-item');
        var $submenu = $navItem.find('.mobile-submenu');
        
        // Check if this is a direct link item (no submenu)
        if ($navItem.find('.mobile-submenu').length === 0) {
            var linkUrl = $(this).data('link');
            if (linkUrl) {
                window.location.href = linkUrl;
                closeMobileMenu();
                return;
            }
        }
        
        e.preventDefault();
        
        // Close all other submenus
        $('.mobile-nav-item').not($navItem).removeClass('active');
        
        // Toggle current submenu
        if ($navItem.hasClass('active')) {
            $navItem.removeClass('active');
        } else {
            $navItem.addClass('active');
        }
    });

    // Handle direct links (like Pricing)
    $('.mobile-nav-link').on('click', function() {
        closeMobileMenu();
    });

    // Handle submenu item clicks
    $('.mobile-submenu-item').on('click', function() {
        closeMobileMenu();
    });

    // Handle app download button clicks
    $('.mobile-app-btn').on('click', function() {
        closeMobileMenu();
    });

    // Handle chat button click
    $('.mobile-menu-chat-btn').on('click', function() {
        // Add your chat functionality here
        console.log('Chat button clicked');
    });

    // Function to close mobile menu
    function closeMobileMenu() {
        $('#mobileMenuOverlay').removeClass('active');
        $('body').css('overflow', ''); // Restore body scroll
        // Close all submenus
        $('.mobile-nav-item').removeClass('active');
    }
    
    // Footer menu collapsible functionality for mobile/tablet
    $('.footer-container .footer-menu-list .title').on('click', function(e) {
        e.preventDefault();
        
        // Check if we're on mobile/tablet (max-width: 1023px)
        if ($(window).width() <= 1023) {
            var $title = $(this);
            var $mobileWrapper = $title.next('.m-list-wrapper');
            
            // Toggle current menu item
            if ($title.hasClass('active')) {
                $title.removeClass('active');
                $mobileWrapper.hide();
            } else {
                // Close all other menu items first
                $('.footer-container .footer-menu-list .title').removeClass('active');
                $('.footer-container .footer-menu-list .m-list-wrapper').hide();
                
                // Open current menu item
                $title.addClass('active');
                $mobileWrapper.show();
            }
        }
    });
    
    // Handle window resize to reset footer menu state
    $(window).on('resize', function() {
        if ($(window).width() > 1023) {
            // Reset footer menu on desktop
            $('.footer-container .footer-menu-list .title').removeClass('active');
            $('.footer-container .footer-menu-list .list-wrapper').show();
            $('.footer-container .footer-menu-list .m-list-wrapper').hide();
        } else {
            // On mobile/tablet, hide all submenus by default
            $('.footer-container .footer-menu-list .title').removeClass('active');
            $('.footer-container .footer-menu-list .list-wrapper').hide();
            $('.footer-container .footer-menu-list .m-list-wrapper').hide();
        }
    });
    
    // Initialize footer menu state on page load
    if ($(window).width() <= 1023) {
        $('.footer-container .footer-menu-list .title').removeClass('active');
        $('.footer-container .footer-menu-list .list-wrapper').hide();
        $('.footer-container .footer-menu-list .m-list-wrapper').hide();
    } else {
        $('.footer-container .footer-menu-list .list-wrapper').show();
        $('.footer-container .footer-menu-list .m-list-wrapper').hide();
    }
});