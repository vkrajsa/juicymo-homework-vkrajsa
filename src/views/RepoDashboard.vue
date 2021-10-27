<template>
  <main class="pb-4">
    <SearchBar />
    <UserProfile></UserProfile>
    <RepoList />
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import RepoList from "@/components/RepoList.vue";
import UserProfile from "@/components/UserProfile.vue";

export default {
  data() {
    return {
      error: null,
    };
  },

  components: {
    SearchBar,
    RepoList,
    UserProfile,
  },
};
</script>

