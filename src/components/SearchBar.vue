<template>
  <section class="mt-4">
    <form v-on:submit.prevent class="mb-4">
      <div class="row">
        <div class="col-10 col-lg-8">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            :placeholder="$t('SearchBar.placeholder')"
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
              <span v-else>{{ $t("SearchBar.button") }}</span>
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
        this.loading = true;
        const repos = await this.$store.dispatch("fetchUserRepos", this.name);

        if (repos.data.length < 1) {
          this.error = true;
          this.errorMessage = this.$t("ErrorMessage.noRepositories");
        }
        this.loading = false;
      } catch (error) {
        this.error = true;
        this.loading = false;
        if (error.response && error.response.status == 404) {
          this.errorMessage = this.$t("ErrorMessage.notFound");
        } else {
          this.errorMessage = this.$t("ErrorMessage.serverError");
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