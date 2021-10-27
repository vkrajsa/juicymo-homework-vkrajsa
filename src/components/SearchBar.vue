<template>
  <section class="mt-4">
    <form v-on:submit.prevent class="mb-4">
      <div class="row">
        <div class="col-10 col-lg-8">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Type name of GitHub user"
            v-model="name"
          />
        </div>

        <div class="col-10 col-lg-4">
          <div class="d-grid gap-2 mt-3 mt-lg-0">
            <button
              class="btn btn-primary"
              type="button"
              id="button-addon2"
              @click="fetchUserRepos()"
            >
              <span v-if="loading"
                ><div class="spinner-border spinner-border-sm">
                  <span class="visually-hidden">Loading...</span>
                </div></span
              >
              <span v-else>search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
    <div class="row placeholder-height">
      <ErrorMessage v-if="error"> {{ errorMessage }}</ErrorMessage>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      loading: false,
      error: null,
      errorMessage: "",
    };
  },
  computed: mapState(["user"]),
  methods: {
    async fetchUserRepos() {
      try {
        this.error = false;
        this.warning = false;

        if (this.name == "") {
          // add validation message no username
          return;
        }

        this.loading = true;

        // redirect after successful search from homepage to dashboard
        console.log(this.$router.app._route.path);

        const repos = await this.$store.dispatch("fetchUserRepos", this.name);

        if (repos.data.length < 1) {
          this.error = true;
          this.errorMessage = "User exists but has no repositories";
        }
        this.loading = false;
      } catch (error) {
        this.error = true;
        this.loading = false;
        if (error.response && error.response.status == 404) {
          this.errorMessage = "User hasn't been found on GitHub";
        } else {
          this.errorMessage =
            "There has been server error, please check your connection or try again.";
        }
      }
      // redirect after successful search from homepage to dashboard
      if (this.error == false && this.$router.app._route.path == "/") {
        this.$router.replace("/dashboard");
      }
    },
  },
};
</script>

<style scoped>
.placeholder-height {
  height: 1px;
}
</style>