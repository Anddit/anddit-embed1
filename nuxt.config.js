
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    style: [
      {
        innerHTML: `
        @font-face {
          font-family: "Avenir Next W01 Light";
          src: url("/Fonts/0ecef829-586e-426d-a633-4c8a8c926769.eot?#iefix");
          src: url("/Fonts/0ecef829-586e-426d-a633-4c8a8c926769.eot?#iefix")
              format("eot"),
            url("/Fonts/49c5f3e1-5867-4b1d-a843-2d07fa60d85d.woff2") format("woff2"),
            url("/Fonts/f401df6f-54eb-406c-b46a-90b9451c598d.woff") format("woff"),
            url("/Fonts/276fe25e-e430-4376-b33c-705dd77b3dba.ttf") format("truetype");
        }
       
        @font-face {
          font-family: "AvenirNextLTW01-Regular";
          src: url("/Fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix");
          src: url("/Fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix")
              format("eot"),
            url("/Fonts/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2") format("woff2"),
            url("/Fonts/1e9892c0-6927-4412-9874-1b82801ba47a.woff") format("woff"),
            url("/Fonts/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf") format("truetype");
        }
        
        @font-face {
          font-family: "AvenirNextLTW01-Medium";
          src: url("/Fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix");
          src: url("/Fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix")
              format("eot"),
            url("/Fonts/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2") format("woff2"),
            url("/Fonts/f26faddb-86cc-4477-a253-1e1287684336.woff") format("woff"),
            url("/Fonts/63a74598-733c-4d0c-bd91-b01bffcd6e69.ttf") format("truetype");
        }
        @font-face {
          font-family: "AvenirNextLTW01-MediumI_721278";
          src: url("/Fonts/77a9cdce-ea6a-4f94-95df-e6a54555545e.eot?#iefix");
          src: url("/Fonts/77a9cdce-ea6a-4f94-95df-e6a54555545e.eot?#iefix")
              format("eot"),
            url("/Fonts/3f380a53-50ea-4a62-95c5-d5d8dba03ab8.woff2") format("woff2"),
            url("/Fonts/8344e877-560d-44d4-82eb-9822766676f9.woff") format("woff"),
            url("/Fonts/b28b01d9-78c5-46c6-a30d-9a62c8f407c5.ttf") format("truetype");
        }
        @font-face {
          font-family: "Avenir Next LT W01 Demi";
          src: url("/Fonts/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?#iefix");
          src: url("/Fonts/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?#iefix")
              format("eot"),
            url("/Fonts/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2") format("woff2"),
            url("/Fonts/91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.woff") format("woff"),
            url("/Fonts/a0f4c2f9-8a42-4786-ad00-fce42b57b148.ttf") format("truetype");
        }
        @font-face {
          font-family: "AvenirNextLTW01-DemiIta";
          src: url("/Fonts/770d9a7e-8842-4376-9319-8f2c8b8e880d.eot?#iefix");
          src: url("/Fonts/770d9a7e-8842-4376-9319-8f2c8b8e880d.eot?#iefix")
              format("eot"),
            url("/Fonts/687932cb-145b-4690-a21d-ed1243db9e36.woff2") format("woff2"),
            url("/Fonts/bc350df4-3100-4ce1-84ce-4a5363dbccfa.woff") format("woff"),
            url("/Fonts/bc13ae80-cd05-42b4-b2a9-c123259cb166.ttf") format("truetype");
        }
        @font-face {
          font-family: "Avenir Next LT W01 Bold";
          src: url("/Fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix");
          src: url("/Fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix")
              format("eot"),
            url("/Fonts/14c73713-e4df-4dba-933b-057feeac8dd1.woff2") format("woff2"),
            url("/Fonts/b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff") format("woff"),
            url("/Fonts/890bd988-5306-43ff-bd4b-922bc5ebdeb4.ttf") format("truetype");
        }
        
        `
      }
    ],
    script: [
      {
        type: "text/javascript",
        innerHTML: `var MTIProjectId = "0ed09238-73d8-4c91-8581-0acc9496f236";
    (function() {
      var mtiTracking = document.createElement("script");
      mtiTracking.type = "text/javascript";
      mtiTracking.async = "true";
      mtiTracking.src = "mtiFontTrackingCode.js";
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(mtiTracking);
    })();
    `
      }
    ],
    __dangerouslyDisableSanitizers: ["script", "style"],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    "@nuxtjs/redirect-module",
  ],

  redirect: [
    { from: "/$", to: "/hope-portal" }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],

    extend (config, ctx) {
    }
  }
}
