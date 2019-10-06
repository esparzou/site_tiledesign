<template>
   <div id="section">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: 'appSection',
   }
</script>

<style lang="scss" scoped>
   #section {
      height: rem(299);
      width: 100%;
      overflow: hidden;
   }
</style>