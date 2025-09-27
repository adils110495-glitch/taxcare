function qs(sel, root) { return (root || document).querySelector(sel); }
    function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
    function on(el, evt, selOrHandler, handler) {
      if (typeof selOrHandler === 'string') {
        el.addEventListener(evt, function (e) {
          var t = e.target.closest(selOrHandler);
          if (t && el.contains(t)) handler.call(t, e);
        });
      } else {
        el.addEventListener(evt, selOrHandler);
      }
    }
    function isMobile() { return window.matchMedia && window.matchMedia('(max-width: 900px)').matches; }

    // =====================================================
    // 1) "Design Team" module (scoped: [data-v-ee36c2d2])
    // =====================================================
    function setCurActiveIndex(side) {
      var left = qs('.plans .left[data-v-ee36c2d2]');
      var right = qs('.plans .right[data-v-ee36c2d2]');
      var bannerL = qs('.plans .left[data-v-ee36c2d2] .banner') || qs('#leftBanner');
      var bannerR = qs('.plans .right[data-v-ee36c2d2] .banner') || qs('#rightBanner');
      var titleL = qs('#left-plans-title');
      var titleR = qs('#right-plans-title');
      var iconL = qs('#leftIcon');
      var iconR = qs('#rightIcon');
      var descL = qs('#left-plans-desc');
      var descR = qs('#right-plans-desc');
      var listL = qs('#left-feature-list');
      var listR = qs('#right-feature-list');
      var detailL = qs('#left-feature-detail');
      var detailR = qs('#right-feature-detail');

      if (!left || !right) return;

      if (side === 'left') {
        anime({ targets: left, width: '66%' });
        anime({ targets: right, width: '33%' });
        if (titleL) anime({ targets: titleL, fontSize: '48px' });
        if (titleR) anime({ targets: titleR, fontSize: '40px' });
        if (iconL) anime({ targets: iconL, scale: 1 });
        if (iconR) anime({ targets: iconR, scale: 0.83 });
        if (descL) anime({ targets: descL, translateY: 0, easing: 'easeInOutQuad', duration: 300 });
        if (descR) anime({ targets: descR, easing: 'easeInOutQuad', duration: 300 });
        anime({ targets: [listL, bannerL].filter(Boolean), opacity: 1, delay: 200 });
        anime({ targets: [listR, bannerR].filter(Boolean), opacity: 0 });
        if (detailL) anime({ targets: detailL, opacity: 0 });
        if (detailR) anime({ targets: detailR, opacity: 1, delay: 200 });
      } else {
        anime({ targets: left, width: '33%' });
        anime({ targets: right, width: '66%' });
        if (titleL) anime({ targets: titleL, fontSize: '40px' });
        if (titleR) anime({ targets: titleR, fontSize: '48px' });
        if (descR) anime({ targets: descR, translateY: 0, easing: 'easeInOutQuad', duration: 300 });
        if (descL) anime({ targets: descL, easing: 'easeInOutQuad', duration: 300 });
        if (iconL) anime({ targets: iconL, scale: 0.83 });
        if (iconR) anime({ targets: iconR, scale: 1 });
        anime({ targets: [listL, bannerL].filter(Boolean), opacity: 0 });
        anime({ targets: [listR, bannerR].filter(Boolean), opacity: 1, delay: 200 });
        if (detailL) anime({ targets: detailL, opacity: 1, delay: 200 });
        if (detailR) anime({ targets: detailR, opacity: 0 });
      }
    }
    (function wireDesignTeam() {
      var left = qs('.plans .left[data-v-ee36c2d2]');
      var right = qs('.plans .right[data-v-ee36c2d2]');
      if (!left || !right) return;
      left.addEventListener('mouseenter', function () { setCurActiveIndex('left'); });
      right.addEventListener('mouseenter', function () { setCurActiveIndex('right'); });
      document.addEventListener('DOMContentLoaded', function () { setCurActiveIndex('left'); });
    })();

    // =====================================================
    // 2) Product Swiper (scoped: [data-v-694ba369])
    //    Replace Swiper with simple class toggling + Anime.js
    // =====================================================
    (function initProductSwiper() {
      var root = qs('#ProductSwiper');
      if (!root) return;

      var paginationBtns = qsa('.product-swiper .pagination .pagination-list .item-btn[data-v-694ba369], .product-swiper .pagination .pagination-list .item-btn', root);
      // desktop
      var desktopContainer = qs('.product-swiper .swiper-container[data-v-694ba369]:not(.mobile), .product-swiper .swiper-container:not(.mobile)', root);
      var desktopSlides = qsa('.product-swiper .swiper-container .swiper-wrapper .swiper-slide[data-v-694ba369], .product-swiper .swiper-container .swiper-wrapper .swiper-slide', root);
      // mobile
      var mobileContainer = qs('.product-swiper .swiper-container.mobile[data-v-694ba369], .product-swiper .swiper-container.mobile', root);
      var mobileSlides = qsa('.product-swiper .swiper-container.mobile .swiper-wrapper .swiper-slide[data-v-694ba369], .product-swiper .swiper-container.mobile .swiper-wrapper .swiper-slide', root);
      desktopSlides.forEach(function (slide, index) {
        var offset = -index * 1206; // px
        slide.style.width = '1206px';
        slide.style.opacity = '1';
        slide.style.transform = 'translate3d(' + offset + 'px, 0px, 0px)';
        slide.style.transitionDuration = '0ms';
        slide.style.willChange = 'transform';
      });
      function setActive(idx) {
        paginationBtns.forEach(function (btn, i) {
          btn.classList.toggle('active', i === idx);
        });
        desktopSlides.forEach(function (slide, i) {
          var active = (i === idx);
          slide.classList.toggle('active', active);


          anime({ targets: slide.querySelector('.left'), opacity: active ? 1 : 0, duration: 300, easing: 'easeOutQuad' });
          anime({ targets: slide.querySelector('.right, .right-m'), opacity: active ? 1 : 0, duration: 300, easing: 'easeOutQuad' });
        });
        mobileSlides.forEach(function (slide, i) {
          var active = (i === idx);
          slide.classList.toggle('active', active);
        });
      }


      paginationBtns.forEach(function (btn, idx) {
        btn.addEventListener('click', function () { setActive(idx); });
      });

      function toggleDevice() {
        var mobile = isMobile();
        if (desktopContainer) desktopContainer.style.display = mobile ? 'none' : '';
        if (mobileContainer) mobileContainer.style.display = mobile ? '' : 'none';
      }
      toggleDevice();
      if (window.matchMedia) {
        var mm = window.matchMedia('(max-width: 900px)');
        mm.addEventListener('change', toggleDevice);
      }

      setActive(0);
      // Make pagination buttons show & switch the Product Swiper
      on(document, 'click', '#ProductSwiper .pagination .item-btn', function () {
        // figure out which button was clicked
        var btns = qsa('#ProductSwiper .pagination .item-btn');
        var idx = Array.prototype.indexOf.call(btns, this);
        if (idx < 0) return;

        // reveal the swiper container if it was hidden (e.g., by device toggle)
        var desktopContainer = qs('#ProductSwiper .product-swiper .swiper-container:not(.mobile)');
        var mobileContainer = qs('#ProductSwiper .product-swiper .swiper-container.mobile');
        var mobile = isMobile && typeof isMobile === 'function' ? isMobile() : window.matchMedia('(max-width: 900px)').matches;

        if (desktopContainer) desktopContainer.style.display = mobile ? 'none' : '';
        if (mobileContainer) mobileContainer.style.display = mobile ? '' : 'none';

        // activate the corresponding slide
        setActive(idx);

      });

      // CTA click handler (delegated)
      on(root, 'click', '.product-swiper .btn', function (e) {
        var link = this.getAttribute('data-link') || (this.closest('.swiper-slide') && this.closest('.swiper-slide').getAttribute('data-btn-link'));
        if (link) window.location.href = link;
      });
    })();

    // =====================================================
    // 3) ProductDesign section scroll animations
    // =====================================================
    function onScrollTo(id) {
      switch (id) {
        case 'ProductLine':
          anime({ targets: '#leftLine', scaleY: 1 });
          break;
        case 'ProductDesign':
          anime({ targets: '.detail .animate-word', translateY: 0, opacity: 1 });
          anime({ targets: '#leftLine2', scaleY: 0 });
          break;
        case 'ProductSwiper':
          anime({ targets: '#ProductSwiper', translateY: 0, translateX: -34, opacity: 1 });
        // fall through intentionally
        case 'ProductSubDetail':
          anime({ targets: '#leftLine2', scaleY: 1 });
          anime({ targets: '#ProductSubDetail .content', translateY: 0, opacity: 1 });
          break;
        case 'DeveloperCode':
          anime({ targets: '#leftLine3', scaleY: 1 });
          anime({ targets: '#DeveloperCode .detail .animate-word', translateY: 0, opacity: 1 });
          break;
        case 'DeveloperCode_module':
          anime({ targets: '#DeveloperCode .code-module', translateY: 0, opacity: 1 });
          break;
        case 'LaunchCode':
          anime({ targets: '#leftLine5', scaleY: 1 });
          anime({ targets: '#LaunchCode .detail .animate-word', translateY: 0, opacity: 1 });
          anime({ targets: '#LaunchCode .content', translateY: 10, opacity: 0 });
          break;
        case 'LaunchCode_Cards':
          anime({ targets: '#leftLine4', scaleY: 1 });
          anime({ targets: '#LaunchCode .content', translateY: 0, opacity: 1 });
          break;
      }
    }
    function onScrollLeft(id) {
      switch (id) {
        case 'ProductLine':
          anime({ targets: '#leftLine', scaleY: 0 });
          break;
        case 'ProductDesign':
          anime({ targets: '.detail .animate-word', translateY: 10, opacity: 0 });
          break;
        case 'ProductSwiper':
          anime({ targets: '#ProductSwiper', translateY: 10, translateX: -34, opacity: 0 });
          break;
        // fall through
        case 'ProductSubDetail':
          anime({ targets: '#leftLine2', scaleY: 0 });
          anime({ targets: '#ProductSubDetail .content', translateY: 10, opacity: 0 });
          break;
        case 'DeveloperCode':
          anime({ targets: '#leftLine3', scaleY: 0 });
          //anime({ targets: '#DeveloperCode .code-module', translateY: 10, opacity: 0 });
          anime({ targets: '#DeveloperCode .detail .animate-word', translateY: 10, opacity: 0 });
          break;
        case 'DeveloperCode_module':
          anime({ targets: '#DeveloperCode .code-module', translateY: 10, opacity: 0 });
          break;
        case 'LaunchCode':
          anime({ targets: '#leftLine4', scaleY: 0 });
          anime({ targets: '#leftLine5', scaleY: 0 });
          anime({ targets: '#LaunchCode .detail .animate-word', translateY: 10, opacity: 0 });
          anime({ targets: '#LaunchCode .content', translateY: 10, opacity: 0 });
          break;
        case 'LaunchCode_Cards':
          anime({ targets: '#LaunchCode .content', translateY: 10, opacity: 0 });
          break;
      }
    }

    
(function triggerAt500() {
  var qs = document.querySelector.bind(document);

  // Your sections
  var sections = [
    { key: 'StepByStep',        el: qs('.steps-by-steps') },
    { key: 'ProductLine',       el: qs('#leftLine') },
    { key: 'ProductDesign',     el: qs('#ProductDesign .detail') },
    { key: 'ProductSwiper',     el: qs('#ProductSwiper') },
    { key: 'ProductSubDetail',  el: qs('#ProductSubDetail .content') },
    { key: 'DeveloperCode',     el: qs('#DeveloperCode .detail .animate-word') },
    { key: 'DeveloperCode_module', el: qs('#DeveloperCode .code-module') },
    { key: 'LaunchCode',        el: qs('#LaunchCode .detail .animate-word') },
    { key: 'LaunchCode_Cards',  el: qs('#LaunchCode .content') },
  ].filter(function(s){ return !!s.el; });

  var LINE = 430;                 // px from viewport top
  var state = new WeakMap();      // el -> boolean (past the line?)
  var ticking = false;
  var lastY = window.pageYOffset || 0;

  function getDir() {
    var y = window.pageYOffset || 0;
    var dir = (y > lastY) ? 'down' : (y < lastY) ? 'up' : 'none';
    lastY = y;
    return dir;
  }

  function fire(el, key, dir){
    // CustomEvent for anyone to listen to
    if( dir === 'down' ) {
       onScrollTo(key);
    }
   
    // Optional callback hook if you define it
    if (typeof window.onSectionAt500 === 'function') {
      window.onSectionAt500(key, dir);
    }
  }

  function check() {
    var dir = getDir();
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      var top = s.el.getBoundingClientRect().top;
      var past = top <= LINE; 
      if( past ){
        onScrollTo(s.key)
      }  else{
        onScrollLeft(s.key)
      }         // crossed the 500px line
      var prev = state.get(s.el);
      if (prev === undefined) {          // initialize without firing
        state.set(s.el, past);
        continue;
      }
      if (past !== prev) {               // fire only on crossing
        state.set(s.el, past);
        fire(s.el, s.key, past ? 'down' : 'up');
      }
    }
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function(){ check(); ticking = false; });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  check(); // initial pass
})();


    // =====================================================
    // 4) "Our Products" card click-through
    // =====================================================
    on(document, 'click', '.our-products .icon-container .item[data-v-4eee7d0a], .our-products .icon-container .item', function () {
      var url = this.getAttribute('data-url') || (this.querySelector('a[href]') && this.querySelector('a[href]').getAttribute('href'));
      if (url) window.location.href = url;
    });

    // =====================================================
    // 5) "Success Example" simple slider with bullets
    // =====================================================
    (function initSuccessSlider() {
      if (typeof Swiper !== "undefined") {
      var swiper = new Swiper(".success-example .swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        loopedSlides: 1, 
        pagination: {
          el: ".my-swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".success-example .next-btn",
          prevEl: ".success-example .prev-btn",
        },
      });
      var AppSwiper = new Swiper(".pc.swiper", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      }
    })();

    // =====================================================
    // 6) Code module: language tabs & moving glow
    // =====================================================
    on(document, 'click', '.code-language .language', function () {
      var tabs = qsa('.code-language .language', this.parentElement);
      var i = tabs.indexOf ? tabs.indexOf(this) : tabs.findIndex(function (x) { return x === this; }, this);
      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      var container = this.closest('.code-module, .code-container, .animate-container') || document;
      var panes = qsa('.code-wrapper', container);
      panes.forEach(function (p, k) { p.classList.toggle('active', k === i); });
      var imgs = qsa('.tab-bg img, .tab-bg-m img', container);
      imgs.forEach(function (img, k) { img.classList.toggle('active', k === i); });
    });

    on(document, 'mousemove', '.code-module .animate-container', function (e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      this.style.setProperty('--mouse-x', x + 'px');
      this.style.setProperty('--mouse-y', y + 'px');
    });

    // =====================================================
    // 7) Launch-code glow card
    // =====================================================
    on(document, 'mousemove', '.launch-code .car', function (e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left - 110;
      var y = e.clientY - rect.top - 110;
      this.style.setProperty('--mouse-x', x + 'px');
      this.style.setProperty('--mouse-y', y + 'px');
    });

    on(document,'hover','#LaunchCode .cards', function(e) {
        anime({ targets: '#LaunchCode .cards', translateY: 10, opacity: 0 });
    });
    $(function() {
      $(".calibration-tail .scale_active").hover(function () {
  var index = $(this).index() + 1; // index among siblings

  // remove previous classes
  $(".calibration-tail .scale_active")
    .removeClass("sale_active")
    .removeClass(function (i, cls) {
      return (cls.match(/(^|\s)active-\d+/g) || []).join(" ");
    });

  // add new active class
  $(this).addClass("active-" + index);
});
    if (typeof WOW !== "undefined") {
      new WOW().init();
    }
      if (typeof Swiper !== "undefined") {
      var swiper = new Swiper(".roll-img", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type:"progressbar",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      on: {
        init: function () {
          $(".swiper-slide").attr("style","margin-right: 30px;")
        },
      },
      });
    }
        $(".CommonSidebar .menu:first .submenu").show();
            $(".CommonSidebar .menu .subTitle").click(function(event){
                //$(".CommonSidebar .menu .submenu").hide();
                $(this).closest(".menu").find(".submenu").toggle();
            });
            var $menu = $('.CommonSidebar .menu');
            var $hoverLine = $('.CommonSidebar .menu .line');
            
            $menu.find('li').on('mouseenter', function () {
              var firstRect = $('.CommonSidebar .menu .submenu li:first')[0].getBoundingClientRect()
              var rect = this.getBoundingClientRect();
              var parentRect = $menu[0].getBoundingClientRect();
              var paddingTop = parseFloat($(this).css('padding-top'));
              var paddingBottom = parseFloat($(this).css('padding-bottom'));
              var index = $(this).index();
              var translateY = 0;
              if (index > 1) {
                translateY = rect.top  - firstRect.top ;
              }
            
              $hoverLine.css({
                transform: 'translateY(' + translateY + 'px)',
                height: rect.height - ( paddingTop + paddingBottom ) + 'px'
              });
            });
            
            $menu.find('li').on('mouseleave', function () {
              $hoverLine.css({
                height: '0px'
              });
            });

            $('.CommonSidebar .menu li').on('click', function () {
              var text = $.trim($(this).text()); // li text (trimmed)

              var $heading = $('h1, h2, h3, h4, h5, h6').filter(function () {
                return $.trim($(this).text()) === text;
              }).first();
            
              if ($heading.length) {
                $('html, body').animate(
                  { scrollTop: $heading.offset().top - 150 },
                  600 // speed in ms
                );
              }
            });
            $(".product-nav .nav-item").click(function(event){
          $(".product-nav .nav-item").removeClass("nav-selected");
          var index = $(".product-nav .nav-item").index(this)
          $(this).addClass("nav-selected")
          var product_swiper = $(this).closest(".product-swiper")
          product_swiper.find(".desc-item").hide()
          product_swiper.find(".desc-item").eq(index).show()
      })
      var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
        $(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("header-background");
  } else {
    $(".header").removeClass("header-background");
  }
});

  });