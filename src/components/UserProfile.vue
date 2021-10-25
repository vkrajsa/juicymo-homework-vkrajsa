<template>
  <section>
    <div
      class="card mb-3"
      style="max-width: 540px"
      v-if="Object.entries(user).length != 0"
    >
      <div class="row g-0 px-4 justify-content-center align-items-center">
        <div class="col-4 col-md-2">
          <img :src="user.avatar_url" alt="avatar" style="width: 100%; border-radius: 100px" />
        </div>
        <div class="col-8 col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ user.login }}</h5>
            <p class="card-text">
              <ul>
                <li>Followers:  {{ user.followers }}</li>
                <li>Public repos::  {{ user.public_repos }}</li>
              </ul>          
            </p>
            <p class="card-text">
              <small class="text-muted">User since {{ user.created_at }}</small>
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
};
</script>

<style>
</style>