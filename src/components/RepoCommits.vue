<template>
  <section>
    <ul class="mt-5">
      <BaseBox
        v-for="commit in displayFirstTenCommits(commits)"
        :key="commit.sha"
      >
        <li>
          {{ commit.commit.message }}
        </li>
      </BaseBox>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    commits: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    displayFirstTenCommits(commits) {
      console.log(commits);
      return commits.slice(0, 10);
    },
  },
};
</script>

<style>
</style>