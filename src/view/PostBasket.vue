<template>
    <div class="  text-center w-[300px] mt-[21%] m-auto text-teal-600">
        <!-- <PostSearch/>  -->
        <PostSearch @test="handleTest"/> 
       <div>
            Ваша корзина пуста  
        </div>
        <div>
            <a href="http://localhost:5173/entrance">Войти в личный кабинет?</a>
        </div>
    </div>
</template>

<script lang="ts">
import PostSearch from './PostSearch.vue';

    export default {
        components:{PostSearch},
        data() {
            return {
            }
        },
        methods:{

        }
    }

    
</script>

<style>

</style>