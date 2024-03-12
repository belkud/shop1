<template>
  <div class="app">
    <post-header/>  
    <RouterView />
    <PostSearch :people="people"/>
    <post-footer/>  
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { RouterView } from 'vue-router'
import PostHeader from "./components/PostHeader.vue"
import PostFooter from "./components/PostFooter.vue"
import axios from 'axios'

// import PostBalance from "./view/PostBalance.vue"
// import PostAdvertisement from "./components/PostAdvertisement.vue"
// import PostEntrance  from "./components/PostEntrance.vue"
// import PostTelephones from "./components/PostTelephones.vue"
// import PostSearch from "./view/PostSearch.vue"

// import PostForm from "./components/PostForm.vue";
// import PostList from "@/components/PostList.vue";

const people = ref([
  {number: 1, model: 'Samsung', price: 15000},
  {number: 2, model: 'Huawei', price: 17000},
  {number: 3, model: 'Realme', price: 13000},
])




let data = ref()
const getData  = async function () {
    try {
        const get = await axios.get('http://localhost:3001/api/telephones')
        data.value = get.data
        console.log(data.value);
         
    } catch (error) {
      console.log(error);
    }
} 
getData()

</script>

<style>

 button {
    color: aliceblue !important;
    padding: 5px;
    margin-top: 10px;
    background-color: crimson;
    width: 150px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
  }
  .components {
    color: red;
    text-shadow: 2px 0px 8px white;
    font-size: 1.2em;
    margin-top: 25px;
}

</style>
 


  
