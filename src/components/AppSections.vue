<template>
   <div id="sections">
      <!-- Section about -->
      <app-section class="section about">
         <router-link to="/about">
            <img src="@/assets/about.jpg">
            <div class="title">
               <span>about</span>
               <span>myself</span>
            </div>
         </router-link>
      </app-section>
      <!-- Section portfolio -->
      <app-section class="section portfolio">
         <router-link to="/portfolio">
            <img src="@/assets/portfolio.jpg">
            <div class="title">
               <span>latest</span>
               <span>projects</span> 
            </div>             
         </router-link>
      </app-section>
      <!-- Section blog -->
      <app-section class="section blog">
         <router-link to="/blog">
            <img src="@/assets/blog.jpg">
            <div class="title">
               <span>latest</span>
               <span>posts.</span>
            </div>
         </router-link>
      </app-section>
      <!-- Section contact -->
      <app-section class="section contact">
         <router-link to="/contact">
            <img src="@/assets/contact.jpg">
            <div class="title">
               <span>hire</span>
               <span>me.</span>
            </div>
         </router-link>
      </app-section>
      <!-- Section social -->
      <app-section-social class="social"></app-section-social>
   </div>   
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>

#sections {
   width: 100%;
   padding: rem(10);
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-row-gap: rem(10);
   @include wrapper(90, 718px);  
}
.section {
   position: relative;
   a {
      display: block;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .2);
      z-index: 3;
   }
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .5s ease;
      opacity: .9;
      &:hover {
        transform: scale(1.2); 
      }
   }
}
.title {
   font-size: rem(35);
   font-weight: 900;
   text-transform: uppercase;
   color: white;
   display: flex;
   flex-direction: column;
   position: absolute;
   top: 11.5rem;
   left: 1.8rem;
}

@media screen and (min-width: em(480)) {
   #sections {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: rem(10);
      background-color: white;
      grid-template-areas: 
         "about about portfolio"
         "blog contact social"
      ;  
   }
   .about {
      grid-area: about;   
   }   
   .portfolio {
      grid-area: portfolio;   
   }   
   .blog {
      grid-area: blog;   
   }   
   .contact {
      grid-area: contact;   
   }   
   .social {
      grid-area: social;   
   }
   .title {
      font-size: rem(23);
      top: 14.5rem;
      left: 1rem;
   }  
}
@media screen and (min-width: em(768)) {
   
   #sections {
      position: relative;
      top: rem(-70);
   }   

}
@media screen and (min-width: em(992)) {

#sections {
   @include wrapper(90, 930px);  
}

}
</style>