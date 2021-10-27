<template>
  <section id="commits">
    <h2>10 commits from repository {{}}</h2>
    <ul>
      <li v-for="commit in displayFirstTenCommits(commits)" :key="commit.sha">
        <p class="commit-date">
          Committed on {{ commit.commit.author.date | formatDate }}
        </p>
        <BaseBox>
          <p class="commit-text">
            <a :href="commit.html_url" target="blank">
              {{ commit.commit.message }}</a
            >
          </p>
          <p class="commit-info">
            <img
              :src="setAvatar(commit)"
              alt="avatar"
              class="commit-avatar"
              v-if="commit.author"
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
    setAvatar(commit) {
      if (!commit.author) {
        return;
      }
      return commit.author.avatar_url;
    },
  },
};
</script>

<style scoped>
</style>