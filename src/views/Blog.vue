<template>
   <div id="blog">
      <app-header>
         <h3 slot="header-title">MY BLOG</h3>
      </app-header>
      <app-blog></app-blog>
      <app-banner-contact></app-banner-contact>
      <app-footer></app-footer>
      <app-contact v-show="isOpen"></app-contact>
   </div>
</template>

<script>
import { openContact } from '@/mixins/openContact.js'
   export default {
      mixins: [ openContact ],   
   }
</script>

<style lang="scss" scoped>

</style>