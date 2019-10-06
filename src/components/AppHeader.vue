<template>
   <div id="header">
      <div class="wrapper">
         <app-header-nav></app-header-nav>
         <slot name="header-title">
            <!-- <h3>Magic is something you create.</h3> -->
         </slot>
      </div>
   </div> 
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
#header {
   position: relative;
   width: 100%;
   height: rem(350);
   background-image: url('../assets/header.jpg');
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover; 
}
h3 {
   color: white;
   font-size: rem(45);
   font-weight: 300;
   text-align: center;
   position: relative;
   top: 3.5rem;
}
.wrapper {
   @include wrapper(90, 718px);
}
@media screen and (min-width: em(480)) {
   h3 {
      font-size: rem(55);
   }
}
@media screen and (min-width: em(768)) {
   #header {
      height: rem(405);
   }
}   
@media screen and (min-width: em(992)) {
   .wrapper {
      @include wrapper(90, 930px);
   }
}
 

</style>