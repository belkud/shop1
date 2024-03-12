<template>
<div class=" text-center w-[300px] mt-[21%] m-auto text-teal-600 ">
 
    <div class="">Баланс вашей карты неизвестен</div>
    <div v-if="count==0" @click="count++" class=" cursor-pointer  text-green-500">Хотите пополнить карту?</div>
    <a v-if="count>0" href="http://localhost:5173/entrance">Войти в личный кабинет?</a>
    
</div>
</template>

<script>

export default {
    data() {
        return {
            count: 0,
        }
    }
}
</script>


<style>

</style>