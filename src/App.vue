<template>
<div id="app" class="flex w-full lg:flex-row md:flex-row sm:flex-col xs:flex-col bg-white">
  <CreatePost @postcreated="createPost"/>
  <PostList v-if="showPosts"/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'
export default {
  data() {
    return {
      showPosts: true
    }
  },
  
  components: {
    CreatePost,
    PostList,
  },

  methods: {
    createPost() {
      this.showPosts = false;
      setTimeout(() => {
        this.showPosts = true
      }, 50)
    }
  }
}
</script>