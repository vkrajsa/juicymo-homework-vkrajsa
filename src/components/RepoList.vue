<template>
  <section>
    <ul class="mt-5">
      <BaseBox v-for="repo in userRepos" :key="repo.id">
        <li @click="displayRepo(repo.name)">
          {{ repo.name }}
          <span class="d-block">
            {{ repo.language }}
            {{ repo.updated_at }}
          </span>
        </li>
      </BaseBox>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BaseBox from "@/components/reusables/Box.vue";

export default {
  computed: mapState(["userRepos"]),
  components: {
    BaseBox,
  },
};
</script>
<style lang="scss" scoped>
</style>