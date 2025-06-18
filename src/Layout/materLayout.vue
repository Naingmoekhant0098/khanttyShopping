<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from './navBar.vue';

</script>

<template>
     
    <div class="main  min-h-screen m-0">
        <NavBar />
        <slot></slot>
      
    </div>
    <Footer />
    

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.main {
    font-family: 'Poppins';
    color: #333;
    width: 80%;
    margin: 0 auto;
}
</style>
