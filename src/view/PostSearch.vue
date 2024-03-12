<template>
    <div class=" text-neutral-500 mt-6 ml-24">
        <div class=" text-orange-500">Сайт находится в разработке <span class=" text-2xl">&#128295</span></div>
        <div @click="onSubm()">Поиск по сайту отключён</div>
      
    </div>
</template>

<script lang="ts">
import PostHeader from '../components/PostHeader.vue';

 
    export default {

        data() {
            return{
                infos:'',
                
            }
        },
        methods: {
            onSubm(){
                this.$emit('test')
                console.log(213);
                
            }
        }
    }
    
</script>

<style>

</style>