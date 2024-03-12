<template>
 {{ data }}
</template>

<script setup lang="ts">
import axios from 'axios';
import {ref} from 'vue'
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

</style>


