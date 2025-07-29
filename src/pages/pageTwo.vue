<script setup lang="ts">
import MaterLayout from '@/Layout/materLayout.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
import router from '@/router';
const store = useStore();
const cartItems = computed(() => store.state.cart);
const totalItems = computed(() => store.state.totalItems);
const totalPrice=computed(() => store.state.totalPrice);
function increaseQuantity(id,price) {
    store.commit('increaseQuantity', {
        id: id, 
        price: price,
    });
}
function decreaseQuantity(id,price) {
    store.commit('decreaseQuantity', {
        id: id, 
        price: price,
    });
}
function removeFromCart(id) {
    store.commit('removeFromCart', {
        id: id, 
    });
}



</script>

<template>
    <MaterLayout>
        
        <h1 class="text-3xl text-center mt-3 font-extrabold  mt-[130px]">Shopping Cart</h1>

        <div class="flex gap-5 flex-wrap mt-10">
            <div class="md:w-[65%] sm:w-[100%] ">

                <div>
                    <div v-for="(item, index) in cartItems">
                       <div v-if="item.quantity !==0">
                        <div class=" flex  justify-between">
                            <div class="p-5">
                                <h1 class="md:text-[23px] sm:[20px] font-bold">{{ item.title }}</h1>
                                <div class=" font-bold md:text-lg sm:text-md">${{ item.price }}</div>
                                <div class=" mt-2 text-[14px] font-medium text-gray-600 ">{{ item.category }}</div>

                                <div class=" flex items-center gap-5 w-full">
                                    <div class=" flex items-center gap-3 mt-3">
                                        <span
                                            class=" text-[20px] border border-gray-200 p-1 px-3 cursor-pointer" @click="decreaseQuantity(item.id,item.price)">-</span>
                                        <span>{{ item.quantity }}</span>
                                        <span
                                            class=" text-[20px] border border-gray-200 p-1 px-3 cursor-pointer" @click="increaseQuantity(item.id,item.price)">+</span>
                                    </div>
                                    <div class=" text-red-600 cursor-pointer mt-3"  @click="removeFromCart(item.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div class="w-[150px] h-[200px] mr-3 ">
                                <img class=" h-full w-full object-cover" :src="item.image" alt="">
                            </div>
                        </div>

                       </div>
                        <div v-if="cartItems.length - 1 !== index && item.quantity!==0">
                            <div class="w-full h-[1px] bg-gray-200 my-3"></div>
                        </div>
                    </div>
                </div>
                <div v-if="cartItems.length === 0" class="text-center text-gray-500 mt-10">
                    Your cart is empty.
                </div>

            </div>

            <div class=" md:w-[30%] sm:w-[100%] ">
                <div class="bg-white p-5  border border-black">
                    <h1 class="text-[20px] text-center font-bold">
                        Order Summary
                    </h1>
                    <div class="w-full h-[1px] bg-black my-3"></div>
                    <div class="flex justify-between items-center mt-3">
                        <span class="text-[16px] font-bold">Total Items</span>
                        <span class="text-[16px] font-bold">{{ totalItems }}</span>
                    </div>
                    <div class="flex justify-between items-center mt-3">
                        <span class="text-[16px] font-bold">Shipping</span>
                        <span class="text-[14px] font-medium text-green-500">Free</span>
                    </div>
                    <div class="w-full h-[1px] bg-black my-3"></div>
                    <div class="flex justify-between items-center mt-3">
                        <span class="text-[16px] font-bold">Total Price</span>
                        <span class="text-[16px] font-bold">${{ Math.ceil(totalPrice) }}</span>
                    </div>
                    <div class="w-full h-[1px] bg-black my-3"></div>
                    <button @click="()=>router.push('/success')" class="w-full bg-black text-[15px] text-white p-3 rounded-md mt-2">Checkout</button>
                </div>
            </div>
        </div>
    </MaterLayout>
</template>