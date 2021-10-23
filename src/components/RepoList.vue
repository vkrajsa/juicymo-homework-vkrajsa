<template>
  <div class="container">
    <!-- 
    
    
    1] GETs AN ARRAY OF REPOS...
    2] CREATES A CLICKABLE LIST OF ALL THE REPOS
    3] USE F-FOR, UNIQUER ID, UL AND LI STYLE 
    4] INSPIRE YOURSELF WITH GITHUB DESIGN
    
    -->

    <h2>Repo List</h2>

    <!-- 
        
      DVE MOZNOSTI (NEBO JICH JE VICE?) 
      1] ROUTER LINK S ID U KAZDEHO ELEMENTU
      2] CLICK LISTENER, KTERY UDELAT ROUTER.REPLACE/PUSH S ID.
      3] google: how to display detail of list of resources with vue router / vue...

      V COMPONENTU RepoDetail BUDE CREATED HOOK:
      1] UDELA ACTION CALL pomoci ID, ktere ma v params 
      (nebo toto vyřeším už v routeru??? musím se podívat na best practice)
      2] NENI NUTNE DATA DÁVAT DO STORU , NEBUDU TO POUŽÍVAT NAPŘÍČ APLIKACÍ.
      
      https://router.vuejs.org/guide/essentials/navigation.html
      know difference between router push/replace and mark in best practices
      if you want pass data from router to component - use props, dont bind to $route.params
      maybe use async routing somehow ??? ()
      
      -->
    <!-- <BaseBox> to je slot </BaseBox> -->
  </div>
</template>

<script>
// import BaseBox from "@/components/reusables/Box.vue";
export default {
  // components: {
  //   BaseBox,
  // },
};
</script>

<style >
</style>