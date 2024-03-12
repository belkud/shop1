
<template >
    <footer>
        <div class="flex bg-slate-800 mt-8 px-24 py-3 gap-24">
            <!-- <div class=" cursor-pointer hover:text-red-600">Работа</div> -->
            {{ commonStore.text }}
            <div class=" cursor-pointer hover:text-red-600">Офис</div>
            <div class=" cursor-pointer hover:text-red-600">Вакансии</div>
            <div class=" cursor-pointer hover:text-red-600">IT</div>
            <div class=" cursor-pointer hover:text-red-600">Партнёры</div>
            <div class=" cursor-pointer hover:text-red-600">Финтех</div>
            <div class=" cursor-pointer hover:text-red-600">События</div>
            <div class=" cursor-pointer hover:text-red-600">Оплата</div>
            <div class=" cursor-pointer hover:text-red-600">Fresh</div>
            <div class=" cursor-pointer hover:text-red-600">Логистика</div>
            <div class=" cursor-pointer hover:text-red-600">Безопасность</div>
            <div class=" cursor-pointer hover:text-red-600">Другое</div>
        </div>

        
    </footer>
</template>

<script setup lang="ts">
import {useCommon} from './../stores/useCommon'
const commonStore = useCommon()
</script>

<style>
footer {
    width: 100%;
    position: absolute;
    bottom: 0px;
    /* Высота footer по умолчанию */
    height: 102px;
}

</style>
