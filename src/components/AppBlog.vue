<template>
   <div id="blog">
      <app-post v-for="(post, index) in posts"
                  :key="index" 
                  :post=post>
      </app-post>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            posts: [
               {
                  title: '5 tips to being the best designer',
                  tag: 'Web Design',
                  url: 'about',
                  color: 'red',
                  author: 'John Smith',
                  description: 'A collection of the best tips to help you become the best designer you can be.',
                  date: ' September 8, 2019'
               },
               {
                  title: 'How to be a better freelancer this year',
                  tag: 'Startups',
                  url: 'about',
                  color: 'blue',
                  author: 'John Smith',
                  description: 'Learn the tips and tricks needed to be the best you can be.',
                  date: 'September 8, 2019'
               }
            ]
         }
      }   
   }
</script>

<style lang="scss" scoped>
#blog {
   width: 100%;
   @include wrapper(90, 718px);
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-row-gap: 1rem;
   padding: rem(40) rem(20);
   
}

@media screen and (min-width: em(768)) {
   #blog {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-column-gap: rem(10);
      padding: rem(40) 0;
   }   
}

@media screen and (min-width: em(992)) {
   #blog {
      @include wrapper(90, 930px);
   }
}
</style>