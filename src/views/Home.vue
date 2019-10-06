<template>
  <div id="home">
    <app-header>
      <h3 slot="header-title">Magic is something you create.</h3>
    </app-header>
    <app-sections></app-sections>
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
