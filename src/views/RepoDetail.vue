<template>
  <main>
    <ErrorMessage v-if="error"> {{ errorMessage }} </ErrorMessage>
    <RepoBranches :branches="branches" v-if="!error && error != null" />
    <RepoCommits :commits="commits" v-if="!error && error != null" />
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
      console.log(this.branches);
      this.error = false;
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