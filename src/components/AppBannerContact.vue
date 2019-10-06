<template>
   <div id="banner">
      <p>Lets Work Together</p>
      <button @click="open()">contact me</button>
   </div>
</template>

<script>
   import EventBus from '@/eventBus'
   export default {
      methods: {
         open() {
            EventBus.$emit('OPEN', true)           
         }
      },  
   }
</script>

<style lang="scss" scoped>
   #banner {
      width: 100%;
      height: rem(222);
      background-color: $banner;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
   }
   p {
      font-size: rem(34);
      font-weight: 700;
      margin-bottom: 1rem;
   }
   button {
      border: none;
      background-color: $bannerBtn;
      text-transform: uppercase;
      padding: 1rem 1.5rem;
      cursor: pointer;
      transition: background-color 400ms ease;
      &:hover {
         background-color: $bannerBtnHover;  
      }
   }
</style>