<template>
   <div id="portfolio">
      <app-header>
         <h3 slot="header-title">MY PORTFOLIO</h3>
      </app-header>
      <app-projects></app-projects>
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