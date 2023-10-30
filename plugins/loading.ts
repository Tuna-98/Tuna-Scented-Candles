import { nuxtLoadingKey } from "@/injectionKey";
import { defineNuxtPlugin } from "nuxt/app";
import {ref, readonly} from "vue";

class Loading {
  isLoading = ref(false);
  start() {
      this.isLoading.value = true;
  }
  finish() {
      this.isLoading.value = false;
  }
}

export default defineNuxtPlugin((nuxtApp) => {

  const loadingInstant = new Loading();

  nuxtApp.hook("page:start", () => {
    loadingInstant.start();
  });
  
  nuxtApp.hook("page:finish", () => {
    loadingInstant.finish();
  });

  nuxtApp.hook("app:error", () => {
    loadingInstant.finish();
  });

  nuxtApp.hook("vue:error", () => {
    loadingInstant.finish();
  });
  
  return {
    provide: {
      loading: loadingInstant,
    }
  }

});