<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import { productType } from '@/types/Product';
const store = useStore();
const props = defineProps<{ product: productType }>();

function addToCart() {
    store.commit('addToCart', {
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        description: props.product.description,
        image: props.product.images,
        category: props.product.category,
        brand: props.product.brand,
        
        discountPercentage: props.product.discountPercentage
    });
}

</script>

<template>
    <div class="relative flex flex-col my-1 bg-white  border border-slate-200 rounded-lg w-68">
        <div class="relative h-58 m-2 overflow-hidden text-white rounded-md">
            <img :src="product.images[0]" alt="card-image" class=" w-full object-cover  object-center" />
            <span class="absolute top-3 bg-yellow-500 right-4 flex
             item-center gap-1 px-2  py-[3px] rounded-full ">
                <div class="flex justify-center items-center -mt-[0px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                <span class=" text-[14px] mt-[1px]">{{ product.rating.toFixed(1) }}</span>
            </span>
        </div>
        <div class="p-4 pt-1">
            <h6 class="mb-1 text-slate-800 text-[17px] font-semibold line-clamp-1">
                {{ product.title }}
            </h6>
            <p class="text-slate-600 leading-normal font-light text-[15px] line-clamp-2">
                {{ product.description }}
            </p>
        </div>
        <div class="px-4 pb-4 pt-0 mt-0">
            <div class="flex items-center justify-between mb-2">
               <div>
                <span  v-if="product.discountPercentage" class="text-slate-800  opacity-60 text-md font-semibold line-through">
                    ${{ Math.round(product.price) }}
                </span>
                <span v-if="product.discountPercentage" class="text-slate-800 text-lg font-semibold">
                    ${{ Math.round(product.price - (product.price * product.discountPercentage / 100)) }}
                </span>
                
                <span v-else class="text-slate-800 text-lg font-semibold">
                    ${{ product.price }}
                </span>
               </div>
               
                <button @click="addToCart"
                    class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Add To Cart
                </button>
            </div>

        </div>
    </div>
</template>