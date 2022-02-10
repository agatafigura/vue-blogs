<template>
  <!-- form -->
  <div class="w-full">
    <div class="w-full flex">
      <form @submit.prevent="postData" method="post" class="lg:fixed md:fixed sm:static xs:static p-10 flex flex-col gap-y-2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full items-start">
        <h1 class="font-extrabold">Add your post</h1>
        <div class="flex flex-col gap-y-1 w-5/6">
          <label>Your name</label>
          <input required type="text" name="author" v-model="author" class="shadow border border-gray-700 rounded"/>
        </div>
        <div class="flex flex-col gap-y-1 w-5/6">
          <label>Title</label>
          <input required type="text" v-model="title" name="title" class="shadow border border-gray-700 rounded"/>
        </div>
        <div class="flex flex-col gap-y-1 w-5/6">
          <label>Description</label>
          <textarea required v-model="description" name="description" class="shadow border border-gray-700 rounded p-2"/>
        </div>
        <div class="w-5/6 flex justify-end">
          <button type="submit" class="bg-indigo-600 text-white rounded p-1 w-100 mt-2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'   
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ref } from "vue";
Vue.use(VueAxios, axios)

export default {
  name: "CreatePost",

  data() {
    return {
        author: '',
        title: '',
        description: '',
        publishedAt: '',
        documentID: '',
      }
  },

  methods: {
    postData()
    { 
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      this.axios.post('https://blogs-8f7f5-default-rtdb.firebaseio.com/posts.json',
      {author: this.author,
      title: this.title,
      description: this.description,
      publishedAt: date})
        .then((result) => {
          console.log(result.data);
          this.$emit('postcreated');
          this.clearForm();
        })
    },
    clearForm() {
      this.author = "";
      this.title = "";
      this.description = "";
    }
  },
}
</script>
