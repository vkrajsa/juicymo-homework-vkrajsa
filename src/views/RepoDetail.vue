<template>
  <main>
    <h1>Repo Detail</h1>

    <!--  
      SEZNAM VŠECH VĚTVÍ REPOZITÁŘE
      SEZNAM 10 COMMITŮ POSLEDNÍCH 
      -->
    <ErrorMessage v-if="error"> User not found </ErrorMessage>
    <RepoBranches :branches="branches" />
    <RepoCommits :commits="commits" />
  </main>
</template>

<script>
// @ is an alias to /src
import RepoCommits from "@/components/RepoCommits.vue";
import RepoBranches from "@/components/RepoBranches.vue";
import ErrorMessage from "@/components/reusables/ErrorMessage.vue";

export default {
  data() {
    return {
      loading: false,
      branches: null,
      commits: null,
      error: null,
    };
  },
  async created() {
    const repoName = this.$route.params.repoName;
    try {
      const repoData = await this.$store.dispatch("fetchRepoData", repoName);
      console.log(repoData);
      this.branches = repoData.branches;
      this.commits = repoData.commits;
    } catch (error) {
      console.log(error);
      this.error = true;
    }
  },
  components: {
    RepoCommits,
    RepoBranches,
    ErrorMessage,
  },
};
</script>

<style>
</style>