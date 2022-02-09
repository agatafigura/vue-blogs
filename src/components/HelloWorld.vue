<template>
  <!-- form -->
  <div>
    <div class="w-full flex justify-center">
      <form @submit.prevent="submit" class="p-10 flex flex-col w-full items-start">
        <h1 class="font-extrabold">Add your post</h1>
        <div class="flex flex-col gap-y-1 w-1/5">
          <label>Your name</label>
          <input type="text" ref="post_author" class="shadow border border-gray-700 rounded"/>
        </div>
        <div class="flex flex-col gap-y-1 w-1/5">
          <label>Title</label>
          <input type="text" ref="post_title" class="shadow border border-gray-700 rounded"/>
        </div>
        <div class="flex flex-col gap-y-1 w-1/2">
          <label>Description</label>
          <textarea ref="post_desc" class="shadow border border-gray-700 rounded p-2"/>
        </div>
          <button v-on:click="postData" class="bg-gray-700 text-white rounded p-1 w-100 place-self-start mt-2">Submit</button>
      </form>
    </div>


    <!-- posts -->
    <!-- <ul class="p-10 flex flex-col gap-y-7">
      <li
        v-for="post in posts"
        :key="post.id"
        class="flex flex-col gap-y-2"
      >
        <h2 class="font-extrabold">{{ data.title }}</h2>
        <p>{{ data.description }}</p>
        <div class="flex justify-end gap-x-2">
          <h3>{{ data.author }},</h3>
          <p>{{ data.publishedAt }}</p>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      postResult: null
    }
  },
  methods: {
    
    async postData() {
      const postData = {
        id: 1,
        title: this.$refs.post_title.value,
        description: this.$refs.post_desc.value,
        author: this.$refs.post_author.value,
        publishedAt: "02-08-2022",
      };
      {
        const res = await fetch('https://testdatabase-6dea.restdb.io/rest/blogs', {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-apikey": "9c6c5e34053fb83ca11826ba664d75b1a71e1"
          },
          body: JSON.stringify(postData)
        });
      
        const data = await res.json();
      } 
      getData();
    },
    async getData() {
      const response = await fetch('https://testdatabase-6dea.restdb.io/rest/blogs', {
        method: "get",
          headers: {
            "Content-Type": "application/json",
            "x-apikey": "9c6c5e34053fb83ca11826ba664d75b1a71e1"
          },
      });
      const data = await response.json();
      this.totalVuePackages = data.total;
      console.log(data.total);
    }
  }
}
</script>
