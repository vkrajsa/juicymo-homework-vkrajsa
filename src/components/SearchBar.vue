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
            search
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async fetchUserRepos() {
      if (this.name !== "") {
        try {
          const data = await this.$store.dispatch("fetchUserRepos", this.name);
          this.$emit("error", false);
          console.log("...data" + data);
        } catch (error) {
          console.log(error);
          this.$emit("error", true);
        }
      }
    },
  },
  components: {},
};
</script>

<style>
</style>