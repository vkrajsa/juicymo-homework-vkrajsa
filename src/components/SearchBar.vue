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
              search
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
        if (error.response && error.response.status == 404) {
          this.errorMessage = "User hasn't been found on GitHub";
        } else {
          this.errorMessage =
            "There has been server error, please check your connection or try again.";
        }
      }
      this.loading = false;
    },
  },
  directives: {
    visible: {
      // directive definition
      inserted: (el, binding) => {
        el.style.visibility = binding.value ? "visible" : "hidden";
      },
    },
  },
};
</script>

<style scoped>
.placeholder-height {
  height: 1px;
}
</style>