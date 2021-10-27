<template>
  <section>
    <div
      class="card mb-3 m-auto"
      v-if="Object.entries(user).length != 0"
    >
      <div class="row g-0 px-4">
        <div class="col-4 col-md-2">
          <img :src="user.avatar_url" alt="avatar" class="avatar" />
        </div>
        <div class="col-8 col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ user.login }}</h5>
            <p class="card-text">
              <ul>
                <li> {{ $t("RepoDashboard.followers") }}:  {{ user.followers }}</li>
                <li> {{ $t("RepoDashboard.publicRepos") }}:  {{ user.public_repos }}</li>
              </ul>          
            </p>
            <p class="card-text">
              <small class="text-muted">{{ $t("RepoDashboard.userSince") }}  {{ user.created_at | formatDate }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["user"]),
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 540px;
}
.avatar {
  width: 100%;
  border-radius: 100px;
}
</style>