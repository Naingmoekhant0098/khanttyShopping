<script setup lang="ts">
import Cart from '@/components/Cart.vue';
import Category from '@/components/Category.vue';
import Banner from '@/components/Banner.vue';
import MaterLayout from '@/Layout/materLayout.vue';
import { useQuery } from '@tanstack/vue-query'
import { Skeleton } from '@brayamvalero/vue3-skeleton'
import '@brayamvalero/vue3-skeleton/dist/style.css'
import { ref } from 'vue';
const productsCount = ref(150);
const currentPage = ref(1);
const productLimit = ref(20);
const isLoadding = ref(true);
const LoadingCount = ref(8);
import { onMounted } from 'vue';

const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products?skip=${(currentPage.value - 1) * productLimit.value}&limit=${productLimit.value}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    productsCount.value = data.total;
    return data;
}

const { isPending, isFetching, isError, data, error } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: fetchProduct,
})






if (isPending) {
    console.log('Loading...');
} else if (isFetching) {
    console.log('Fetching data...');
} else if (isError) {
    console.error('Error fetching data:', error);
} else {
    console.log('Data fetched successfully:', data);
}

</script>

<template>

   <div>
    <Banner class=" mb-12" />
    <MaterLayout>
       
       <div>
           <Category />
       </div>
       
      <div>
       <div class="  my-12">
           <h1 class="text-3xl text-center mt-3 font-bold">Best Seller Items</h1>
           
               <p class="text-center text-gray-600 font-medium opacity-70 mt-3 w-[60%] mx-auto">
                   Browse through our collection of amazing products. Click on a product to learn more about its features and details.
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
       <div v-if="!isFetching" class="flex justify-center items-center my-6">
           <div class=" flex sm:gap-2 md:gap-5 mt-3 self-center mx-auto">
               <button v-for="i in Math.ceil(productsCount / 20)" :key="i" @click="currentPage = i"
                   :class="{ 'bg-[#0c1620] text-white': currentPage === i }"
                   class="p-3 px-5 rounded-lg cursor-pointer  border border-gray-100">
                   {{ i }}
               </button>
           </div>
       </div>
      </div>
   </MaterLayout>
   </div>
</template>

 