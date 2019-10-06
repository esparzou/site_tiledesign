<template>
   <div class="social">
      <a href="" class="twitter"></a>
      <a href="" class="facebook"></a>
      <a href="" class="pinterest"></a>
      <a href="" class="dribble"></a>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
.social {
   height: rem(299);
   width: 100%;
   background-color: crimson;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: auto;
}
.twitter,
.facebook,
.pinterest,
.dribble {
   position: relative;
   transition: background-color .3s ease;
   &::before {
      font-family: 'icomoon';
      color: white;
      @include center;
      font-size: 3.7rem;
   }
}
.twitter {
   background-color: $twitter;
   &:hover {
      background-color: $hoverTwi;   
   }
   &::before {
      content: "\f099";
   }
}
.facebook {
   background-color: $facebook;
   &:hover {
      background-color: $hoverFac;   
   }
   &::before {
      content: "\f09a";
   }
}
.pinterest {
   background-color: $pinterest;
   &:hover {
      background-color: $hoverPin;   
   }
   &::before {
      content: "\f231";
   }
}
.dribble {
   background-color: $dribble;
   &:hover {
      background-color: $hoverDri;   
   }
   &::before {
      content: "\f17d";
   }
}
</style>