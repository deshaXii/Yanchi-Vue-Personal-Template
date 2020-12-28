<template>
  <div id="app" :class="colorMode == 'light' ? 'light'  : 'dark'"  class="page-with-colors gradient-none">
    <div class="home">
        <app-header />
        <div class="content fixed-layout-content fp-tableCell">
          <div class="sections">
            <router-view />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/App-header' 

export default {
  name: 'App',
  components: {
    appHeader
  },
  data () {
    return {
      
    }
  },
  
  methods: {
    
  },
  computed: {
    colorMode() {
      return this.$store.state.colorMode
    }
  }
}
</script>

<style>
  /* @import 'assets/css/main.css';
  @import 'assets/css/bootstrap.min.css'; */
  html:lang(ar) * {
    text-align: right;
    direction: rtl;
  }
</style>
