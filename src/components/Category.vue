<script lang="ts" setup>
// import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';

const categories = ref([
    {
        slug : "womens-dresses" ,
        title : "Woman Dress" ,
        url :"https://dummyjson.com/products/category/womens-dresses",
        image: "https://img.freepik.com/free-photo/woman-with-shopping-bags_1303-9653.jpg?ga=GA1.1.316755173.1742744082&semt=ais_hybrid&w=740"
    },
    {
        slug : "mens-shirts" ,
        title : "Men Shirts" ,
        url : "https://dummyjson.com/products/category/mens-shirts",
        image : "https://img.freepik.com/free-photo/portrait-serious-successful-man-dressed-jacket_171337-16756.jpg?ga=GA1.1.316755173.1742744082&semt=ais_hybrid&w=740"
    },
    {
        slug : "womens-jewellery" ,
        title : "Womens Jewellery" ,
        url : "https://dummyjson.com/products/category/womens-jewellery",
        image : "https://img.freepik.com/free-photo/young-blonde-woman-pearl-necklace-white-v-neck-top-smiles-widely-with-closed-eyes-takes-selfie-outside_197531-23190.jpg?ga=GA1.1.316755173.1742744082&semt=ais_hybrid&w=740"
    }
])

</script>

<template>

<div class=" mb-10">
            <h1 class="text-3xl text-center mt-3 font-bold">Top Selected Categories</h1>
            
                <p class="text-center text-gray-600 font-medium opacity-70 mt-3 w-[60%] mx-auto">
                    Browse through our collection of amazing categories. Click on a category to explore products within it.
                </p>
        </div>

        <div class=" grid grid-cols-3 gap-4">
           <div v-for="category in categories" :key="category.slug">
           <router-link :to="`/category/${category.slug}`" class="block">
            <div class=" relative h-[350px] group overflow-hidden">
            <img class="h-full object-cover transform group-hover:scale-115 transition-transform duration-400" :src="category.image" alt="">
            <div class="absolute inset-0 flex items-center justify-center uppercase font-bold text-white">{{ category.title }}</div>
           </div>
           </router-link>
           </div>
          
        </div>


</template>