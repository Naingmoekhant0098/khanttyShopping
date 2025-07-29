<script setup lang="ts">
// import MaterLayout from '@/Layout/materLayout.vue';
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import router from '@/router';

const store = useStore();
onMounted(() => {
    store.commit('clearCart');
}); 

</script>
<template>
    
    <div class=" flex  justify-center  flex-col items-center w-screen h-screen "> 
        
        <img src="../assets/animation.gif" class=" w-[300px]  absolute top-30" alt="">
        <img src="../assets/remove.png" class=" w-42 h-42 " alt="">
        <h1 class="text-3xl text-center mt-3 font-extrabold ">Thank U for Shopping </h1>

        <button @click="()=>router.push('/')"
                    class="rounded-md border border-slate-800 mt-2 py-2 px-4 text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                     Go To Home
                </button>


    
</div>
</template>