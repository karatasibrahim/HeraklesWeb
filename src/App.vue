<template>
  <head>
    <title>Techotel Otel Yönetim Yazılımı</title>
  </head>
  <div class="loader-wrapper" v-if="loading">
    <div class="loader-index"><span></span></div>
    <svg>
      <defs></defs>
      <filter id="goo">
        <fegaussianblur in="SourceGraphic" stddeviation="11" result="blur"></fegaussianblur>
        <fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"> </fecolormatrix>
      </filter>
    </svg>
  </div>
  <router-view v-else></router-view>
</template>

<script>

import trMessages from "devextreme/localization/messages/tr.json";
import { locale, loadMessages } from "devextreme/localization";
import $ from 'jquery'
export default {

  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  watch: {
    '$route'() {
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
      this.loading = !this.loading
    }
  },
  created(){
loadMessages(trMessages);
locale("tr");
  },
  mounted() {
    this.$store.dispatch("Operations");
    this.$store.dispatch("personInfo");
    this.loading = false;

  }
}
</script>

