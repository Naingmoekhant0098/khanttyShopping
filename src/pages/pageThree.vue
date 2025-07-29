<script lang="ts" setup>
import Cart from '@/components/Cart.vue';
import { useRoute } from 'vue-router';
import MaterLayout from '@/Layout/materLayout.vue';
import { useQuery } from '@tanstack/vue-query';
import { Skeleton } from '@brayamvalero/vue3-skeleton'
import { ref } from 'vue';
const route = useRoute();
const slug = route.params.slug as string;
const LoadingCount = ref(8);
const fetchCategory = async () => {
    const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
}

const {  isFetching, data } = useQuery({
    queryKey: ['category', slug],
    queryFn: fetchCategory,
})

 

</script>
<template>
    <MaterLayout>
        <div class="  mt-[160px]">
            <div class="flex gap-2 text-[15px] opacity-70 font-medium  items-center">
                <router-link to="/">
                    Home
                </router-link>
                <div>
                    /
                </div>
                <router-link :to="`/category/${slug}`">
                    {{ slug.split('-').join(' ') }}
                </router-link>
            </div>
            <h1 class="text-3xl text-center mt-3 font-bold capitalize">{{ slug.split('-').join(' ') }}</h1>

            <div class="text-center mt-6">
                <p class="text-gray-600 font-medium opacity-70 mt-4 w-[60%] mx-auto">
                    Browse through our collection of amazing products in the "{{ slug.split('-').join(' ') }}" category.
                    Click on a product to learn more about its features and details.
                </p>
            </div>



            <div v-if="isFetching" class="product-carts">
                <div v-for="i in LoadingCount" :key="i">
                    <div class=" w-68">
                        <Skeleton class="h-58 w-full mb-4" />
                        <Skeleton :rows="2" class="w-full h-3 mb-4 mt-2" />
                        <Skeleton :rows="2" class="w-full h-2 gap-2" />
                        <div class=" flex justify-between items-center mt-2">
                            <Skeleton class="w-20 h-2 mb-4 " />
                            <Skeleton class="w-20 h-6 mb-4" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-carts">
                <div v-if="data?.products" v-for="product in data.products" :key="product.id">
                    <Cart :product="product" />
                </div>
            </div>

        </div>

    </MaterLayout>


</template>
 