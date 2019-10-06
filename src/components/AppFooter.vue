<template>
   <div id="footer">
      <div class="wrapper">
      <div class="logo-container">
         <span>TILE</span>
         <strong>DESIGN</strong>
      </div>
      <nav class="nav-footer">
         <router-link to="/" active-class="active" exact>Home</router-link>
         <router-link to="/about" active-class="active">About</router-link>
         <router-link to="/portfolio" active-class="active">Portfolio</router-link>
         <router-link to="/blog" active-class="active">Blog</router-link>
         <a @click="open()">Contact</a>
      </nav>
      </div>
   </div>
</template>

<script>
import EventBus from '@/eventBus'
   export default {
      data() {
         return {
            activeClass: 'active',
         }
      },
      methods: {
         open() {
            EventBus.$emit('OPEN', true)           
         }
      },
      computed: {
         currentPage() {
            return this.$route.path;
         }
      }
   }
</script>

<style lang="scss" scoped>
#footer {
   width: 100%;
   padding: rem(23) 0;
   background-color: $footer;
}
.logo-container {
   text-align: center;
   color: white;
   font-size: rem(26);
   margin-bottom: rem(19);
   span {
      font-weight: 300;
   }
   strong {
      font-weight: 700;
   }
}
.nav-footer {
   display: flex;
   flex-direction: column;
   text-align: center;
   text-transform: uppercase;
   color: white;
}
a {
   padding: rem(9);
   opacity: .5;
   transition: opacity .5s ease;
   cursor: pointer;
   &:hover {
      opacity: 1;      
   }
}
.active {
   color: white;
   opacity: 1;
   font-weight: 700;
}

@media screen and (min-width: em(480)) {
   .logo-container {
      font-size: rem(30);
   }
   .nav-footer {
      flex-direction: row;
      justify-content: center;
      font-size: rem(14);
   }
   a {
      padding: rem(9) rem(20);
   }
}

@media screen and (min-width: em(768)) {
   .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      position: relative;
      max-width: rem(718);
      padding: 0 rem(10);
   }
   .logo-container {
      margin-bottom: 0;
   }
}

@media screen and (min-width: em(992)) {
   .wrapper {
      max-width: rem(930);
   }
   a:last-child {
      background-color: hsla(0, 0%, 100%, .3);
   }
}
</style>