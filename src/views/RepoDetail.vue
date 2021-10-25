<template>
  <main>
    <h1>Repo Detail</h1>

    <!--  
      SEZNAM VŠECH VĚTVÍ REPOZITÁŘE
      SEZNAM 10 COMMITŮ POSLEDNÍCH 
      -->
    <RepoBranches :branches="branches" />
    <RepoCommits :commits="commits" />
    <ErrorMessage v-if="error"> {{ errorMessage }} </ErrorMessage>
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
      errorMessage: "",
    };
  },
  async created() {
    const repoName = this.$route.params.repoName;
    try {
      const repoData = await this.$store.dispatch("fetchRepoData", repoName);
      this.branches = repoData.branches;
      this.commits = repoData.commits;
    } catch (error) {
      console.log("component error" + error);
      if (error.response && error.response.status == 409) {
        this.errorMessage = "Repository is empty.";
      } else {
        this.errorMessage =
          "There has been server error, please check your connection or try again.";
      }

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