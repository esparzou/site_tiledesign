<template>
   <div id="about-text">
   <h2>I love what I do</h2>
    <article>
       <figure>
            <img src="@/assets/about2.jpg">
       </figure>
      <p>
        Bacon ipsum dolor amet ground round tongue andouille shoulder, venison sausage biltong short loin leberkas tenderloin picanha boudin cupim bacon. Short loin salami boudin andouille beef ribs shank ham hock ball tip beef pastrami. Turducken pig salami tenderloin. Doner bacon spare ribs picanha pastrami meatloaf ground round bresaola flank landjaeger.
      </p>
      <p>
        Tail kielbasa leberkas short ribs. Ribeye pork pig, rump capicola venison tongue prosciutto drumstick kevin biltong ground round. Shank doner turducken venison andouille, tongue sirloin biltong chicken boudin meatball turkey. Venison pork belly jowl capicola shankle flank.  
      </p>
      <blockquote>
         "I love doing this stuff! The more and more I work with Webflow, the more I fall in love with web design."
      </blockquote>
      <p>
        Pancetta ribeye salami shoulder, bresaola short ribs cow sausage pork loin tongue. Pork t-bone chicken shankle ball tip, tri-tip beef. Cow shank strip steak, spare ribs pork loin filet mignon sirloin cupim tenderloin rump ball tip kevin pig porchetta. Picanha chicken porchetta, ham hock flank ham ground round fatback pancetta shankle. Venison biltong pork belly turducken. 
      </p>
      <p>
        Spare ribs sausage ham hock ground round brisket t-bone bacon drumstick. Shankle flank salami, landjaeger meatloaf rump biltong chicken shank t-bone pork loin capicola drumstick venison pork. Ball tip sirloin beef ribs hamburger, turkey swine frankfurter cow pork belly ground round short ribs prosciutto. Beef ribs pancetta t-bone fatback, prosciutto porchetta kielbasa corned beef ham turducken bacon.  
      </p>
      <p>
       Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty! 
      </p>
    </article>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
#about-text {
   @include wrapper(90, 718px);
   padding: rem(40) rem(20);
}
h2 {
   font-size:rem(32);   
   margin-bottom: rem(10);
}
p {
   font-size: rem(18);
   line-height: rem(25);
   margin-bottom: rem(10);
}
blockquote {
   margin-bottom: rem(10);
   padding: rem(10) rem(20);
   border-left: 5px solid #e2e2e2;
   color: #666;
   font-size: rem(20);
   line-height: rem(22);
   font-style: italic;
   font-weight: 300;   
}
figure {
   float: right;
   width: 40%;
   & img {
      max-width: 100%; 
      display:block; 
      height: auto;   
   }
}
@media screen and (min-width: em(992)) {
   #about-text {
      @include wrapper(90, 930px);
   }
}
</style>