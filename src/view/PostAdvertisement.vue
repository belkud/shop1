<template>
    {{ data  }}
    <PostTelephones></PostTelephones>
    <img src="../public/advertisement.webp" class=" w-2/3 m-auto mt-28 cursor-pointer hover:opacity-50 transition-opacity border rounded-xl" alt="" srcset="">
    <img src="../public/advertisement2.webp" class=" w-2/3 m-auto mt-20 cursor-pointer hover:opacity-50 transition-opacity border rounded-xl" alt="" srcset="">
</template>


<script setup lang="ts">
    import PostTelephones from '../components/PostTelephones.vue'
    import axios from 'axios';
import {ref} from 'vue'
let data = ref()
const getData  = async function () {
    try {
        const get = await axios.get('http://localhost:3001/api/telephones')
        data.value = get.data
        console.log(data.value);
         
    } catch (error) {
        
    }
} 
getData()
</script>

<style>
</style>