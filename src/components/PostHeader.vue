


<template>
    <div class=" flex pl-8  gap-16 mt-5 w-full">
        
        <router-link to="/">
            <div class=" cursor-pointer hover:text-red-600" @click="conFunc">Каталог &#128366;</div>
        </router-link>

        <router-link to="/search">
            <input v-model="infos"  placeholder="&#128269; Поиск по сайту" class=" border border-cyan-600 rounded-sm w-[450px] px-3 bg-gray-800 "  >
            <div>{{ infos }}</div>
        </router-link>
            
        <div class=" cursor-pointer hover:text-red-600">Заказы 	&#128504;</div>
        <div class=" cursor-pointer hover:text-red-600">Избранное &#9829;</div>
        
        <router-link to="/basket">
            <div class=" cursor-pointer hover:text-red-600">Корзина &#128722</div>
        </router-link>

        <router-link to="/balance">
            <div class=" cursor-pointer hover:text-red-600">Баланс карты &#8381</div>
        </router-link>

        <router-link to="/entrance">
            <div class="min-w-24">
                <div v-if="count%2==0" class=" cursor-pointer hover:text-red-600">Войти &#128274;</div>
                <div v-if="count%2!=0" class=" cursor-pointer hover:text-red-600">В айти &#128275;</div>
            </div>
        </router-link>
 
         

        <div class=" cursor-pointer hover:text-red-600">Служба поддержки &#128222</div>
    </div>

    
</template>

<script lang="ts">

export default {
    data(){
        return {
            count:0,
            infos:''

        }
    }, methods: {
        conFunc(){
            this.count++
        }
    }
}
</script>

<style>



</style>