<template>
   <div id="post">
      <router-link :to="`/${post.url}`">
         <div class="img-container">
            <img :src= "require(`@/assets/${post.url}.jpg`)">
         </div>
         <div class="text-container">
            <h5>{{ post.title }}</h5>
            <p>{{ post.description }}</p>
            <span>Written by {{ post.author }}</span>
         </div>
         <div class="tag" 
              :style="{ backgroundColor: post.color }">
              {{post.tag}}
         </div>
         <span class="date">{{ post.date }}</span>
      </router-link>
   </div>
</template>

<script>
   export default {
      props: { 
         post: Object,
      },  
   }
</script>

<style lang="scss" scoped>
#post {
   width: 100%;
   position: relative;
}
.img-container {
   overflow: hidden;
   margin-bottom: rem(10);
}  
img {
   width: 100%;
   height: rem(170);
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
   top: .5rem;
   right: .5rem;
   padding: .4rem;
   background-color: red;
   text-transform: uppercase;
   font-size: rem(12);
   color: white;
   border-radius: .3rem;
}
.text-container {
   h5 {
      margin-bottom: rem(5);
      padding-right: rem(5);
      font-size: rem(20);
      line-height: rem(25);
      font-weight: 700;   
   }
   p {
      margin-bottom: rem(10);
      color: #666;
      font-size: rem(15);
      line-height: rem(20);
   }
   span {
      color: #888;
      font-style: italic;
      font-size: rem(15);
      line-height: rem(20);
   }
}

.date {
   position: absolute;
   top: .5rem;
   left: .5rem;
   color: white;
   margin: none;   
}
@media screen and (min-width: em(768)) {

}

@media screen and (min-width: em(992)) {
   img {
      height: rem(185);
   }
}
</style>