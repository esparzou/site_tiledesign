<template>
   <div id="project">
      <router-link :to="`/${project.url}`">
         <img :src= "require(`@/assets/${project.url}.jpg`)">
         <div class="tag" :style="{ backgroundColor: project.color }">{{ project.tag }}</div>
         <h5>{{ project.title }}</h5>
      </router-link>
   </div>
</template>

<script>
   export default {
      props: { 
         project: Object,
      },  
   }
</script>

<style lang="scss" scoped>
#project {
   width: 100%;
   overflow: hidden;
   position: relative;
}
   
img {
   width: 100%;
   height: rem(260);
   display: block;
   object-fit: cover;
   transition: transform .8s ease;
   opacity: .92;
   &:hover {
        transform: scale(1.1); 
   }
}
.tag {
   position: absolute;
   top: 1rem;
   right: 1rem;
   padding: .5rem;
   background-color: red;
   text-transform: uppercase;
   font-size: rem(13);
   color: white;
   border-radius: .3rem;
}
h5 {
   position: absolute;
   bottom: 1rem;
   left: 1rem;
   font-size: rem(26);
   color: white;
}
</style>