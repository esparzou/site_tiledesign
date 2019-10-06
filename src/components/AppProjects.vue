<template>
   <div id="projects">
      <app-project v-for="(project, index) in projects"
                  :key="index" 
                  :project=project>
      </app-project>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            projects: [
               {
                  title: 'Awesome Company Logo Design',
                  tag: 'Web Design',
                  url: 'about',
                  color: 'red'
               },
               {
                  title: 'Sketch Designs',
                  tag: 'Branding',
                  url: 'about',
                  color: 'purple'
               }
            ]
         }
      }   
   }
</script>

<style lang="scss" scoped>
#projects {
   width: 100%;
   @include wrapper(90, 718px);
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   grid-row-gap: 1rem;
   padding: rem(40) rem(20);
   
}

@media screen and (min-width: em(768)) {
   #projects {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-column-gap: rem(10);
   }   
}

@media screen and (min-width: em(992)) {
   #projects {
      @include wrapper(90, 930px);
   }
}
</style>