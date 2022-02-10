<template>
  <div class="p-10 pt-0 w-full">
    <h1 class="pt-10 bg-white lg:fixed md:fixed w-full font-extrabold sm:static xs:static">Posts</h1>
    <ul class="p-10 mt-10 flex flex-col-reverse gap-y-14">
      <li v-for="post in posts" :key="post.id" class="flex flex-col gap-y-2">
        <div class="flex justify-between">
          <p class="font-bold">{{post.title}}</p>
          <button @click="deletePost(id)" class="w-4 h-4 text-xs items-center flex bg-red-600 text-white rounded p-1 w-100 place-self-end mt-2">X</button>
        </div>
        <div class="flex justify-between">
          <p>{{post.description}}</p>
          <div class="flex justify-end gap-x-2">
          <p>{{post.author}},</p>
          <p>{{post.publishedAt}}</p>
        </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "PostList",
  created() {
    this.getPosts();
  },
  data() {
      return {
          posts: [],
      }
  },
  methods: {
      getPosts() {
          axios.get('https://blogs-8f7f5-default-rtdb.firebaseio.com/posts.json')
            .then((response) => {
                console.log(response.data)
                this.posts = response.data

            })
      },

      deletePost() {
        axios.delete('https://blogs-8f7f5-default-rtdb.firebaseio.com/posts.json/'+post.id)
           .then(() => {
                this.getPosts();
            })
      }
  }
};
</script>
