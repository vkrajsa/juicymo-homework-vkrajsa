<template>
  <section id="repositories">
    <ul class="mt-5">
      <transition-group name="fade" mode="out-in">
        <BaseBox v-for="repo in userRepos" :key="repo.id" class="card-hover">
          <li @click="displayRepo(repo.name)">
            <p class="repo-name">
              <a> {{ repo.name }}</a>
            </p>
            <p class="repo-info">
              {{ repo.language }}
              | updatedAt: {{ repo.updated_at | formatDate }}
            </p>
          </li>
        </BaseBox>
      </transition-group>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["userRepos"]),
  methods: {
    displayRepo(repoName) {
      this.$router.push("/repo/" + repoName);
    },
  },
};
</script>
