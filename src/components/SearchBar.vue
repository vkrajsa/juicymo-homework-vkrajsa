<template>
  <section>
    <form v-on:submit.prevent>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="name"
        />
        <label for="floatingInput">Type name of GitHub user</label>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-end">
          <button class="btn btn-primary" @click="fetchUserRepos()">
            <span> search</span>
          </button>
        </div>
      </div>
    </form>

    <ErrorMessage v-if="error"> {{ errorMessage }}</ErrorMessage>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      loading: false,
      error: null,
      errorMessage: "",
    };
  },
  methods: {
    async fetchUserRepos() {
      this.error = false;
      this.warning = false;

      if (this.name == "") {
        // add validation message no username
        return;
      }

      this.loading = true;
      try {
        const repos = await this.$store.dispatch("fetchUserRepos", this.name);

        if (repos.data.length < 1) {
          this.error = true;
          this.errorMessage = "User exists but has no repositories";
        }
      } catch (error) {
        this.error = true;
        if (error.response.status == 404) {
          this.errorMessage = "User hasn't been found on GitHub";
        } else {
          this.errorMessage =
            "There has been server error, please check your connection or try again.";
        }
      }
      this.loading = false;
    },
  },
  components: {},
};
</script>

<style>
</style>