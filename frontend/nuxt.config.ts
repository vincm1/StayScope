// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    assets: '/<rootDir>/assets',
  },
  modules: [
    '@vesp/nuxt-fontawesome',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
    '@nuxt/image',
    'nuxt-marquee',
    'nuxt-aos',
    'nuxt-calendly',
    '@nuxt/image',
  ],
  runtimeConfig: {
      MAILHOST: process.env.MAILHOST,
      MAILPORT: process.env.MAILPORT,
      MAILUSER: process.env.MAILUSER,
      MAILPASSWORD: process.env.MAILPASSWORD,
      CONTACTMAIL: process.env.CONTACTMAIL,
  },
  css: ['~/assets/scss/main.scss'],
  fontawesome: {
    icons: {
      solid: [
        'faHome', 
        'faUser', 
        'faCog', 
        'faArrowRight', 
        'faArrowUp',
        'faCircleExclamation',
        'faUser',
        'faEnvelope',
        'faMessage',
        'faSpa',
        'faHeart',
        'faUtensils',
        'faQuoteLeft',
        'faPaperPlane'
      ],
      regular: [
        'faLightbulb',
        'faUser',
        'faMessage',
        'faSquareCheck',
      ],

    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      theme: {
      },
    },
  },
  mail: {
    message: {
      to: process.env.NUXT_MAIL_TARGET,
    },
    smtp: {
      host: process.env.NUXT_MAIL_SMTP, // Replace with your SMTP host
      port: process.env.NUXT_MAIL_PORT, // Use the correct port: 587 for STARTTLS or 465 for SSL
      secure: true, // Set to true for SSL, false for STARTTLS
      auth: {
        user: process.env.NUXT_MAIL_USERNAME, // Your SMTP username (full email)
        pass: process.env.NUXT_MAIL_PASSWORD, // Use environment variable for security
      },
    },
    logger: true, // Enable logging to the console
    debug: true, // Enable debugging
  },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
   // optional config
  calendly: {
    /**
     * Setting to `false` disables the module.
     * @default true
     * @description Use this setting to disable the module.
     */
    isEnabled: true,

    /**
     * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
     */
    loadWidgetCSS: true,

    /**
     * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
     */
    loadWidgetCloseIconSvg: true
  },
});