<template>
   <div id="header-nav">
      <nav>
         <h1>
            <router-link to="/">
               <span>TILE</span>
               <strong>DESIGN</strong>
            </router-link>
         </h1>
         <a class="icon-menu" @click="showMenu()"></a>
         <ul :class="{show: showing}">
            <router-link to="/" tag="li" active-class="active" exact>home</router-link>
            <router-link to="/about" tag="li" active-class="active">About</router-link> 
            <router-link to="/portfolio" tag="li" active-class="active">Portfolio</router-link>
            <router-link to="/blog" tag="li" active-class="active">Blog</router-link>
            <li @click="open()">Contact</li>
         </ul>
      </nav>
   </div>
</template>

<script>
import EventBus from '../eventBus'
   export default {
      data() {
         return {
            showing: false,
            activeClass: 'active',
         }
      },
      methods: {
         showMenu() {
            this.showing = !this.showing;
         },
         open() {
            this.showing = false,
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
#header-nav {
   position: relative;
   width: 100%; //
}
h1 {
   color: white;
   font-size: rem(26);
   position: absolute;
   top: 50%;
   left: .6rem;
   transform: translateY(-50%);
   span {
      font-weight: 300;
   }
   strong {
      font-weight: 700;
   }
}
nav {
   position: relative;
   height: rem(80);
   text-transform: uppercase;
   & ul {
      background-color: $footer;
      width: 100%;
      height: 0;
      position: relative;
      top: rem(80);
      z-index: 5;
      overflow: hidden;
      transition: height .5s ease;

   }
   & li {
      cursor: pointer;
      color: white;
      opacity: .5;
      transition: opacity .5s ease;
      height: calc(292px / 5);
      line-height: calc(292px / 5);
      padding-left: 1rem;
      &:hover {
         opacity: 1;      
      }
   }
}
.icon-menu {
   display: block;
   height: 4rem;
   width: 4rem;
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-50%);
   cursor: pointer;
   &::before {
      content: "\f0c9";
      font-family: 'icomoon';
      color: white;
      font-size: rem(20);
      @include center;
   }
}
.show {
   height: rem(292); // height ul
}
.active {
   color: white;
   opacity: 1;
   font-weight: 700;
}
@media screen and (min-width: em(992)) {

nav {
   & ul {
      width: auto;
      position: absolute;
      right: 0;      
      top: 0rem;      
      height: rem(80);
      background-color: transparent;
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }
   & li {
      padding: 0 1rem;
      height: 3rem;
      line-height: 3rem;
      &:last-child {
         background-color: hsla(0, 0%, 100%, .3);
      }
   }
}
.icon-menu {
   display: none;
}

}
</style>