<template>
   <div class="overlay">
      <a class="close" @click="close">CLOSE X</a>
      <div id="contact">
         <h5>Get in Touch</h5>
         <hr>
         <p>Thank you for your interest! Please fill out the form below if you would like to work together.</p>
         <form>
            <input type="text" placeholder="Enter your name">
            <input type="email" placeholder="Enter your email address">
            <textarea placeholder="What are your project details..." cols="30" rows="10"/>
            <input type="submit" value="Send">
         </form>
      </div>
   </div>
</template>

<script>
import EventBus from '@/eventBus'
   export default {
      methods: {
         close() {
            EventBus.$emit('CLOSE', false)
         }
      }
   }
</script>

<style lang="scss" scoped>
.overlay {
   position: fixed;
   z-index: 2;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, .6);
}
.close {
   color: gray;
   transition: color .6s ease;
   position: absolute;
   left: 50%;
   top: 7%;
   transform: translateX(-50%);
   cursor: pointer;
   padding: .7rem;
   &:hover {
      color: white;   
   }
}
#contact {
   width: 100%;
   @include wrapper(90, 718px);
   position: relative;
   top: 12%;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-row-gap: 1rem;
   padding: 0 rem(20);
   text-align: center;  
}
h5 {
   font-size: rem(30);
   font-weight: 700;
   color: white;
}
hr {
   width: 20%;
   position: relative;
   left: 50%;
   transform: translateX(-50%);
   border: 1px solid gray;
}
p {
   margin-bottom: 20px;
   opacity: 0.7;
   color: #fff;
   font-size: rem(18);
   line-height: rem(22);
   font-weight: 300;   
}
form {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-row-gap: .5rem;
   & > * {
      font-size: rem(17);
      border: 1px solid rgba(0, 0, 0, .7);
      border-radius: rem(3);
      color: white;
   }
}
input {
   height: rem(50);
}
textarea,
input:not([type=submit]) {
   padding: 8px 12px;
   background-color: hsla(0, 0%, 100%, .15);
}
input[type="submit"] {
   background-color: $btnSend;
   cursor: pointer;
   transition: background-color .5s ease;
   &:hover {
      background-color: $btnSendHover;
   }
}

@media screen and (min-width: em(768)) {
   #contact {

   }   
}

@media screen and (min-width: em(992)) {
   #contact {
      @include wrapper(90, 930px);
   }
}

</style>