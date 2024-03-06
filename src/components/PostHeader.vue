

<!-- 1. удалить файл base.css -->
<!-- 2. Возможно помочь со splice в PostEntrance  -->

<template>
    <div class=" flex pl-8  gap-12 mt-5 w-full">
        <div class=" cursor-pointer hover:text-red-600" @click="conFunc">Каталог &#128366;</div>
            <input placeholder="&#128269; Поиск по сайту" class=" border border-cyan-600 rounded-sm w-2/5 px-3 bg-gray-800"  >
                <div class=" cursor-pointer hover:text-red-600">Заказы 	&#128504;</div>
                <div class=" cursor-pointer hover:text-red-600">Избранное &#9829;</div>
            <div class=" cursor-pointer hover:text-red-600">Корзина &#128722</div>
            <div class=" cursor-pointer hover:text-red-600">Баланс карты &#8381</div>
            <router-link to="/entrance">
            <div v-if="count%2==0" class=" cursor-pointer hover:text-red-600">Войти &#128274;</div>
            </router-link>
            <div v-if="count%2!=0" class=" cursor-pointer hover:text-red-600">В айти &#128275;</div>
            <div class=" cursor-pointer hover:text-red-600">Служба поддержки &#128222</div>
        <!-- text-3xl mt-3 p-5  text-3xl font-bold -->
    </div>

    
</template>

<script lang="ts">

export default {
    data(){
        return {
            count:0

        }
    }, methods: {
        conFunc(){
            this.count++
        }
    }
}
</script>

<style>
/* input {
    background-color: rgb(3, 35, 46); 
    color: aliceblue;
} */
</style>