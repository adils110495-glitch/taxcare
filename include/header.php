<?php
//define('THEME_URL', 'https://dka.pw/taxcare/'); 
define('THEME_URL', 'http://localhost/taxcare/');
define('THEME_PATH', dirname(__DIR__) . "/");

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$segments = explode('/', rtrim($path, '/'));
$filename = end($segments);
if (str_ends_with($path, '.php')) {
  $filename = pathinfo(basename($path), PATHINFO_FILENAME);
} 
$file_array = [
  //'' => 'index',
  'partners' => 'partners',
  'tools' => 'partners',
  'itr-filing' => 'product',
  'tds-filing' => 'product',
  'reply-itd-notice' => 'product',
  'personal-expert' => 'product',
  'itd-portal' => 'itd-portal',
  'integrations' => 'integrations',
  'tools' => 'partners',
  'pricing' => 'pricing',
  'contact-n-support' => 'contact-n-support'
];
$filename = $file_array[$filename] ?? '404';
// Define file system path
$css_file_path = THEME_PATH . "css/" . $filename . ".css";

// Define URL path for browser
$css_file_url  = THEME_URL . "css/" . $filename . ".css";
?>

<!doctype html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta charset="utf-8" />
  <meta name="facebook-domain-verification" content="ou8lnxo56one59v5y0kj0201yavwmf" />
  <meta name="google-site-verification" content="H-xkt18_tm5n6gWOHMZM8-WbWDZeWlbq3kahu0xvir0" />
  <meta data-n-head="ssr" charset="utf-8" />
  <meta data-n-head="ssr" name="apple-mobile-web-app-capable" content="yes" />
  <meta data-n-head="ssr" name="viewport"
    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <meta data-n-head="ssr" data-hid="og:image" name="og:image" content="/img/share.png" />
  <meta data-n-head="ssr" data-hid="og:title" name="og:title"
    content="Voice, Video & Chat APIs for Real-Time Interaction | ZEGOCLOUD" />
  <meta data-n-head="ssr" data-hid="description" name="description"
    content="Integrate our scable APIs for enhanced app communication, covering video conferencing, live streaming, and customer engagement." />
  <meta data-n-head="ssr" data-hid="keywords" name="keywords"
    content="video api, chat api, video conferencing api, voice api, live streaming sdk" />
  <title>Voice, Video & Chat ____ for Real-Time Interaction | _________ </title>
  <link data-n-head="ssr" rel="icon" type="image/x-icon" href="https://taxcare.co.in/img/favicon.ico" />
  <link data-n-head="ssr" rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72-precomposed.png" />
  <link data-n-head="ssr" rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57-precomposed.png" />
  <link data-n-head="ssr" rel="apple-touch-icon-precomposed" sizes="144x144"
    href="apple-touch-icon-144-precomposed.png" />
  <link data-n-head="ssr" rel="apple-touch-icon-precomposed" sizes="114x114"
    href="apple-touch-icon-114-precomposed.png" />
  <link data-n-head="ssr" rel="canonical" href="index" />

  <!-- Swiper CSS/JS (v9 is fine; v8 also ok). Keep CSS in the page. -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
  <link rel="stylesheet" href="<?php echo THEME_URL ?>css/animate.css">
  <link rel="stylesheet" href="<?php echo THEME_URL ?>css/taxcare.css">
  <link rel="stylesheet" href="<?php echo THEME_URL ?>css/index.css">
  <?php if (file_exists($css_file_path)): ?>
    <link rel="stylesheet" href="<?php echo $css_file_url ?>">
  <?php endif; ?>
  <link rel="stylesheet" href="<?php echo THEME_URL ?>css/override.css?ver=<?= time() ?>">


</head>

<body id="zegocloud_body">

  <div data-server-rendered="true" id="__nuxt">
    <div id="__layout">
      <div>
        <div class="header" style="left:0" data-v-73491d32="">
          <div class="webinar-banner" style="display:none" data-v-13f320ba="" data-v-73491d32="">
            <div class="webinar-banner-container" data-v-13f320ba="">
              <div class="pc-ui" data-v-13f320ba="">
                <div class="left" data-v-13f320ba="">Conversational AI </div>
                <div class="middle" data-v-13f320ba="">Quickly build your multimodal ___________ AI agent application
                </div>
                <div class="right" data-v-13f320ba="">
                  <div data-v-13f320ba="">Learn more </div> <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAZBJREFUWEftl01KBDEQhb/njJ7BjYIgiIjiHcSNO13qPfQK3sSdIIi48wqCiCC68QRu3DijJWmSITSISTfRCJ1lyM/Hq6qXiqh8qHI+BsC+ERoUHBTsq4Dbb2ZNKkmy3POK52CAC2C5kEUBzWxO0qeZbXsFb8NcqpLFACO4NeDGA+1IejCzkaSPFMgigBHcFnAJLHmYJ+BA0l0q5G8CvgMLwAuwJ+k+BbIIoK/ckH/rwDWwDATIZCWLAXrIJtfMbBM4B1YjyCQliwJ6yLGkqZltAFe5ShYHbIU7VnIKjH/KyRmgN9SSwC7cEx/uC2AFmADzwDOw76u7yd2ZsUeWcAQcA6/AKMWjOqxx574Bi4ALuRvOD928y8ldSY+xmSuUupmdAKdAkL7D/Z23BCXPJB3Gp/wLwOBXdYY4yFltkXTOmoyNUSF2t5mM+7KWmlm9Rh05RH1PXRTW+pqFb/rBetqt6hvWVoNQX8sfeWu9n6bWAzCzpqq+nW3IXLjmq5rlun+weADsK/qg4KBgXwX67v8CZkVKOEerYy8AAAAASUVORK5CYII="
                    alt="" data-v-13f320ba="" />
                </div>
              </div>
              <div class="mobile-ui" data-v-13f320ba="">
                <div class="top-message" data-v-13f320ba="">Quickly build your AI _____ application </div>
                <div class="bottom-message" data-v-13f320ba="">
                  <div class="right" data-v-13f320ba="">
                    <div data-v-13f320ba="">Learn more </div> <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAZBJREFUWEftl01KBDEQhb/njJ7BjYIgiIjiHcSNO13qPfQK3sSdIIi48wqCiCC68QRu3DijJWmSITSISTfRCJ1lyM/Hq6qXiqh8qHI+BsC+ERoUHBTsq4Dbb2ZNKkmy3POK52CAC2C5kEUBzWxO0qeZbXsFb8NcqpLFACO4NeDGA+1IejCzkaSPFMgigBHcFnAJLHmYJ+BA0l0q5G8CvgMLwAuwJ+k+BbIIoK/ckH/rwDWwDATIZCWLAXrIJtfMbBM4B1YjyCQliwJ6yLGkqZltAFe5ShYHbIU7VnIKjH/KyRmgN9SSwC7cEx/uC2AFmADzwDOw76u7yd2ZsUeWcAQcA6/AKMWjOqxx574Bi4ALuRvOD928y8ldSY+xmSuUupmdAKdAkL7D/Z23BCXPJB3Gp/wLwOBXdYY4yFltkXTOmoyNUSF2t5mM+7KWmlm9Rh05RH1PXRTW+pqFb/rBetqt6hvWVoNQX8sfeWu9n6bWAzCzpqq+nW3IXLjmq5rlun+weADsK/qg4KBgXwX67v8CZkVKOEerYy8AAAAASUVORK5CYII="
                      alt="" data-v-13f320ba="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="close-btn" data-v-13f320ba=""></div>
          </div>
          <div class="container header-container" data-v-73491d32="">
            <div class="menu-warp" data-v-73491d32="">
              <a href="<?= THEME_URL ?>">
                <img src="<?= THEME_URL ?>/img/taxcare.png"
                  alt="taxcare" class="header-logo logo" data-v-73491d32="" />
              </a>
              <a href="<?= THEME_URL ?>">

                <img
                  src="<?= THEME_URL ?>/img/taxcare.png" alt="taxcare" class="header-logo logo header-logo-m"
                  data-v-73491d32="" />
              </a>
              <div class="nav-wrap" data-v-11d3814f="" data-v-73491d32="">
                <ul class="nav-wrap" data-v-11d3814f="">
                  <li class="nav-item-wrap" data-v-11d3814f="">
                    <div class="nav-title-wrap" data-v-11d3814f="">
                      <div class="nav-title" data-v-11d3814f="">Products </div> <i class="nav-arrow"
                        data-v-11d3814f=""></i>
                    </div>
                    <div class="menu-list-wrap-gap menu-list-position" style="width:656px;left:330px"
                      data-v-11d3814f="">
                      <div class="solutions-menu" data-v-6ccd7fd0="" data-v-11d3814f="">
                        <div class="menu-left" data-v-6ccd7fd0="">
                          <p class="solutions-title" data-v-6ccd7fd0="">BY INDUSTRY</p>
                          <div class="item-solutions" data-v-6ccd7fd0="">
                            <div class="solutions-item-title" data-v-6ccd7fd0="">
                              <a href="<?= THEME_URL ?>product/itr-filing" class="solutions-item-title" data-v-6ccd7fd0="">
                                Income Tax Return
                              </a>
                              <span class="newTag" data-v-6ccd7fd0=""></span>
                            </div>
                            <i class="icon-arrow" data-v-6ccd7fd0=""></i>
                          </div>
                          <div class="item-solutions" data-v-6ccd7fd0="">
                            <div class="solutions-item-title" data-v-6ccd7fd0="">
                              <a href="<?= THEME_URL ?>product/tds-filing" class="solutions-item-title" data-v-6ccd7fd0="">
                                TDS Return
                              </a>
                            </div>
                            <i class="icon-arrow" data-v-6ccd7fd0=""></i>
                          </div>
                          <div class="item-solutions" data-v-6ccd7fd0="">
                            <div class="solutions-item-title" data-v-6ccd7fd0="">
                              <a href="<?= THEME_URL ?>product/reply-itd-notice" class="solutions-item-title" data-v-6ccd7fd0="">
                                Income Tax Notice
                              </a>
                            </div>
                            <i class="icon-arrow" data-v-6ccd7fd0=""></i>
                          </div>
                          <div class="item-solutions" data-v-6ccd7fd0="">
                            <div class="solutions-item-title" data-v-6ccd7fd0="">
                              <a href="<?= THEME_URL ?>product/personal-expert" class="solutions-item-title" data-v-6ccd7fd0="">
                                Personal Tax Expert
                              </a>
                            </div>
                            <i class="icon-arrow" data-v-6ccd7fd0=""></i>
                          </div>
                        </div>
                        <div class="menu-right" data-v-6ccd7fd0="">
                          <div class="right-img" data-v-6ccd7fd0=""><img src="_nuxt/img/nav_pic_solution@2x.478f936.jpg"
                              alt="zegocloud" loading="lazy" data-v-6ccd7fd0="" /></div>
                          <p class="right-title" data-v-6ccd7fd0="">Case Studies </p>
                          <p class="right-details" data-v-6ccd7fd0="">
                            See how our _______ have solved complex technical ________ and succeeded with our _________.
                          </p>
                          <div class="btn" data-v-6ccd7fd0=""><span data-v-6ccd7fd0="">Learn more </span></div>
                        </div>
                      </div> <!----> <!----> <!----> <!---->
                    </div>
                  </li>
                  <li class="nav-item-wrap" data-v-11d3814f="">
                    <div class="nav-title-wrap" data-v-11d3814f="">
                      <div class="nav-title" data-v-11d3814f="">Features </div> <i class="nav-arrow"
                        data-v-11d3814f=""></i>
                    </div>
                    <div class="menu-list-wrap-gap menu-list-position" style="width:656px;left:205px"
                      data-v-11d3814f=""><!----> <!---->
                      <div id="developers-menu" class="developers-menu" data-v-cdbbeaee="" data-v-11d3814f="">
                        <div class="left" data-v-cdbbeaee="">
                          <div class="left-img" data-v-cdbbeaee=""><img src="_nuxt/img/nav_pic_developer@2x.585836b.jpg"
                              alt="zegocloud" loading="lazy" data-v-cdbbeaee="" /></div>
                          <div class="left-title" data-v-cdbbeaee=""><span data-v-cdbbeaee="">Developer Hub </span>
                          </div>
                          <p data-v-cdbbeaee="">Start building easily with _____ start tutorials, code samples, ___
                            resources and more. </p>
                          <div class="btn-left" data-v-cdbbeaee="">Learn more </div>
                        </div>
                        <div class="right" data-v-cdbbeaee="">
                          <div class="menu" data-v-cdbbeaee="">
                            <div class="menu-option" data-v-cdbbeaee="">
                              <p class="menu-title" data-v-cdbbeaee="">GET STARTED</p>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>product/itd-portal" class="solutions-item-title" data-v-6ccd7fd0="">
                                    Income Tax Portal
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>integrations" class="solutions-item-title" data-v-6ccd7fd0="">
                                    Integrations
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>/tools" class="solutions-item-title" data-v-6ccd7fd0="">
                                    Tools
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> <!----> <!---->
                    </div>
                  </li>
                  <li class="nav-item-wrap" data-v-11d3814f="">
                    <div class="nav-title-wrap" data-v-11d3814f="">
                      <div class="nav-title" data-v-11d3814f="">
                        <a href="<?= THEME_URL ?>pricing" class="solutions-item-title" data-v-6ccd7fd0="">
                          Pricing
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item-wrap" data-v-11d3814f="">
                    <div class="nav-title-wrap" data-v-11d3814f="">
                      <div class="nav-title" data-v-11d3814f="">Company </div> <i class="nav-arrow"
                        data-v-11d3814f=""></i>
                    </div>
                    <div class="menu-list-wrap-gap menu-list-position" style="width:656px;left:205px"
                      data-v-11d3814f=""><!----> <!---->
                      <div id="developers-menu" class="developers-menu" data-v-cdbbeaee="" data-v-11d3814f="">
                        <div class="left" data-v-cdbbeaee="">
                          <div class="left-img" data-v-cdbbeaee=""><img src="_nuxt/img/nav_pic_developer@2x.585836b.jpg"
                              alt="zegocloud" loading="lazy" data-v-cdbbeaee="" /></div>
                          <div class="left-title" data-v-cdbbeaee=""><span data-v-cdbbeaee="">Developer Hub </span>
                          </div>
                          <p data-v-cdbbeaee="">Start building easily with _____ start tutorials, code samples, ___
                            resources and more. </p>
                          <div class="btn-left" data-v-cdbbeaee="">Learn more </div>
                        </div>
                        <div class="right" data-v-cdbbeaee="">
                          <div class="menu" data-v-cdbbeaee="">
                            <div class="menu-option" data-v-cdbbeaee="">
                              <p class="menu-title" data-v-cdbbeaee="">GET STARTED</p>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>meta/about-us" class="solutions-item-title" data-v-6ccd7fd0="">
                                    About Us
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>partners" class="solutions-item-title" data-v-6ccd7fd0="">
                                    Affiliate Programme
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>help" class="solutions-item-title" data-v-6ccd7fd0="">
                                    Help
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                              <div class="menu-data" data-v-cdbbeaee="">
                                <div data-v-cdbbeaee="">
                                  <a href="<?= THEME_URL ?>meta/contact-n-support" class="solutions-item-title" data-v-6ccd7fd0="">
                                    Contact Us
                                  </a>
                                </div>
                                <i class="icon-arrow" data-v-cdbbeaee=""></i>
                              </div>
                              <!-- <div class="menu-data" data-v-cdbbeaee="">
                        <div data-v-cdbbeaee="">
                          <a
                            href="sitemap"
                            class="solutions-item-title"
                            data-v-6ccd7fd0=""
                          >
                            Tech Support
                          </a>
                        </div>
                        <i class="icon-arrow" data-v-cdbbeaee=""></i>
                      </div> -->
                            </div>
                          </div>
                        </div>
                      </div> <!----> <!---->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header-btns" data-v-55414225="">
              <a href="https://apps.apple.com/app/tax-care-income-tax-return/id1616527308?platform=iphone">
                <img src="https://taxcare.co.in/img/download-on-the-app-store-apple-logo-svgrepo-com.svg" alt="App Store" width="110" height="100%">
              </a>
              <div class="line" data-v-55414225=""></div>

              <a href="https://play.google.com/store/apps/details?id=com.taxcare.app&amp;pli=1">
                <img src="https://taxcare.co.in/img/google-play-badge-logo-svgrepo-com.svg" alt="Play Store" width="110" height="100%">
              </a>
            </div>
            <div class="mobile-app-buttons" data-v-73491d32="">
              <a href="https://apps.apple.com/app/tax-care-income-tax-return/id1616527308?platform=iphone">
                <img src="<?= THEME_URL?>/img/ios.svg" alt="App Store">
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.taxcare.app&amp;pli=1">
                <img src="<?= THEME_URL?>/img/google-play.svg" alt="Play Store">
              </a>
            </div> <img alt="menu"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgB7daxDYAgEIXhQxbQDRzBjZzDLd3A2ko2QEikOZFcc4fF+xIjBQmE4s8RAUAn3vvVOXelLyp/RzpuLee6rws9G2eyEWKMU14MjU0j2Qll4RubzvRKC+lfLL/Olv47AcCfKJZbVmpOudyiUnOagRSVmtMqN0oN0IfhDC0rtfEMzVVLbTlDc9VSW83Qr8ug1ACWbtHMdZojm+HUAAAAAElFTkSuQmCC"
              loading="lazy" class="header-btns-mobile rotate-180" data-v-73491d32="" /> <!----> <!---->
          </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay" id="mobileMenuOverlay">
          <div class="mobile-menu-container">
            <!-- Header Section -->
            <div class="mobile-menu-header">
              <a href="<?= THEME_URL ?>" class="mobile-menu-logo">
                <img src="<?= THEME_URL ?>/img/taxcare.png" alt="TaxCare" class="header-logo logo">
              </a>
              <button class="mobile-menu-close" id="mobileMenuClose">×</button>
            </div>

            <!-- Navigation Menu -->
            <div class="mobile-menu-nav">
              <ul class="mobile-nav-list">
                <li class="mobile-nav-item">
                  <div class="mobile-nav-title">
                    <span>Products</span>
                    <span class="mobile-nav-arrow">></span>
                  </div>
                  <div class="mobile-submenu">
                    <a href="<?= THEME_URL ?>product/itr-filing" class="mobile-submenu-item">Income Tax Return</a>
                    <a href="<?= THEME_URL ?>product/tds-filing" class="mobile-submenu-item">TDS Return</a>
                    <a href="<?= THEME_URL ?>product/reply-itd-notice" class="mobile-submenu-item">Income Tax Notice</a>
                    <a href="<?= THEME_URL ?>product/personal-expert" class="mobile-submenu-item">Personal Tax Expert</a>
                  </div>
                </li>
                <li class="mobile-nav-item">
                  <div class="mobile-nav-title">
                    <span>Features</span>
                    <span class="mobile-nav-arrow">></span>
                  </div>
                  <div class="mobile-submenu">
                    <a href="<?= THEME_URL ?>product/itd-portal" class="mobile-submenu-item">Income Tax Portal</a>
                    <a href="<?= THEME_URL ?>integrations" class="mobile-submenu-item">Integrations</a>
                    <a href="<?= THEME_URL ?>/tools" class="mobile-submenu-item">Tools</a>
                  </div>
                </li>
                <li class="mobile-nav-item">
                  <div class="mobile-nav-title" data-link="<?= THEME_URL ?>pricing">
                    <span>Pricing</span>
                  </div>
                </li>
                <li class="mobile-nav-item">
                  <div class="mobile-nav-title">
                    <span>Company</span>
                    <span class="mobile-nav-arrow">></span>
                  </div>
                  <div class="mobile-submenu">
                    <a href="<?= THEME_URL ?>meta/about-us" class="mobile-submenu-item">About Us</a>
                    <a href="<?= THEME_URL ?>partners" class="mobile-submenu-item">Affiliate Programme</a>
                    <a href="<?= THEME_URL ?>help" class="mobile-submenu-item">Help</a>
                    <a href="<?= THEME_URL ?>meta/contact-n-support" class="mobile-submenu-item">Contact Us</a>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Bottom Section -->
            <div class="mobile-menu-bottom">
              <div class="mobile-menu-divider"></div>
              <div class="mobile-app-download-buttons">
                <a href="https://apps.apple.com/app/tax-care-income-tax-return/id1616527308?platform=iphone" class="mobile-app-btn">
                  <img src="<?= THEME_URL?>/img/ios.svg" alt="Download on App Store">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.taxcare.app&pli=1" class="mobile-app-btn">
                  <img src="<?= THEME_URL?>/img/google-play.svg" alt="Get it on Google Play">
                </a>
              </div>
            </div>

            <!-- Floating Chat Button -->
            <div class="mobile-menu-chat-btn">
              <span class="chat-icon">💬</span>
            </div>
          </div>
        </div>