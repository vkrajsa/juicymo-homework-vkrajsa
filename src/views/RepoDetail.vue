<template>
  <div>
    <h1>Repo Detail</h1>

    <!--  
      SEZNAM VŠECH VĚTVÍ REPOZITÁŘE
      SEZNAM 10 COMMITŮ POSLEDNÍCH 
      -->

    <RepoCommits :commits="commits" />
    <RepoBranches :branches="branches" />
  </div>
</template>

<script>
// @ is an alias to /src
import RepoCommits from "@/components/RepoCommits.vue";
import RepoBranches from "@/components/RepoBranches.vue";

export default {
  components: {
    RepoCommits,
    RepoBranches,
  },
};
</script>

<style>
</style>