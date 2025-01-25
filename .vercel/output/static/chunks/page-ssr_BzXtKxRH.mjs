import { storyblokInit, apiPlugin } from '@storyblok/js';
/* empty css                         */

const { storyblokApi } = storyblokInit({
            accessToken: "undefined",
            use: [apiPlugin],
            apiOptions: {"region":"us"},
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;
