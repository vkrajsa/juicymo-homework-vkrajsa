<template>
  <section id="commits">
    <h2>10 commits from repository {{}}</h2>
    <ul>
      <li v-for="commit in displayFirstTenCommits(commits)" :key="commit.sha">
        <p class="commit-date">Commit on {{ commit.commit.author.date }}</p>
        <BaseBox>
          <p class="commit-text">
            <a :href="commit.html_url" target="blank">
              {{ commit.commit.message }}</a
            >
          </p>
          <p class="commit-info">
            <img
              :src="commit.author.avatar_url"
              alt="avatar"
              class="commit-avatar"
            />
            {{ commit.commit.author.name }}

            | comments: {{ commit.commit.comment_count }}
          </p>
        </BaseBox>
      </li>
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
      console.log("commits component: " + commits[0]);
      console.log(this.$router);
      if (commits) {
        return commits.slice(0, 10);
      }
    },
  },
};
</script>

<style scoped>
</style>