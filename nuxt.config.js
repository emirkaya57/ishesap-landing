export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "landing",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "css/flaticon.css",
      },
      {
        rel: "stylesheet",
        href: "css/menu.css",
      },
      {
        id: "effect",
        href: "css/dropdown-effects/fade-down.css",
        media: "all",
        rel: "stylesheet",
      },
      {
        href: "css/owl.carousel.min.css",
        rel:"stylesheet",
      },
      {
        href: "css/flexslider.css",
        rel:"stylesheet",
      },
      {
        href: "css/owl.theme.default.min.css",
        rel:"stylesheet",
      },
      {
        href: "css/style.css",
        rel:"stylesheet",
      },
      {
        href: "css/animate.css",
        rel:"stylesheet",
      },
      {
        href: "css/responsive.css",
        rel:"stylesheet",
      },
      {
        href: "/css/slider.css",
        rel:"stylesheet",
      },
    ],
    script: [
      {
        src: "js/jquery-3.5.1.min.js",
      },
      {
        src:"js/bootstrap.min.js"
      },
      {
        src:"js/modernizr.custom.js"
      },
      {
        src:"js/jquery.easing.js"
      },
      {
        src:"js/jquery.appear.js"
      },
      {
        src:"js/jquery.scrollto.js"
      },
      {
        src:"js/menu.js"
      },
      {
        src:"js/jquery.flexslider.js"
      },
      {
        src:"js/owl.carousel.min.js"
      },
      {
        src:"js/jquery.magnific-popup.min.js"
      },
      {
        src:"js/jquery.validate.min.js"
      },
      {
        src:"js/jquery.ajaxchimp.min.js"
      },
      {
        src:"js/wow.js"
      },
      {
        src: "js/custom.js"
          
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
