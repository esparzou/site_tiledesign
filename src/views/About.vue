<template>
  <div class="about">
    <app-header>
      <h3 slot="header-title">ABOUT ME</h3>
    </app-header>
    <app-about-text></app-about-text>
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
