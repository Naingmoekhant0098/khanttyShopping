<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
// import { CButton, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody } from '@coreui/vue';
import { onMounted, onBeforeUnmount } from 'vue';

const store = useStore();
const totalItems = computed(() => store.state.totalItems);
const showNav = ref('topNav');
const scrollY = ref(0);
// const status = ref('topNav');
const constrolScroll = () => {

    if (window.scrollY > 200) {
        if (window.scrollY > scrollY.value) {
            showNav.value = 'hideNav'

        } else {
            showNav.value = 'showNav'

        }
        scrollY.value = window.scrollY;
    } else {
        showNav.value = 'topNav'

    }

    scrollY.value = window.scrollY;


}

watch(showNav, (newValue) => {
    console.log(newValue);
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.classList.remove('topNav', 'hideNav', 'showNav');
        navElement.classList.add(newValue);
    }
});



onMounted(() => {
    window.addEventListener('scroll', constrolScroll);
});
console.log('showNav', showNav.value);
//  });

onBeforeUnmount(() => {
    window.removeEventListener('scroll', constrolScroll);
});
</script>
<template>
    <nav
        class="topNav fixed top-0 left-0 right-0 bg-white shadow-md z-10 transition-transform duration-300 ease-in-out">
        <div class="container  border-gray-100 py-5 mx-auto flex justify-between items-center">
            <router-link to="/">
                <div class=" text-lg font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>

                </div>
            </router-link>


            <router-link to="/cart">
                <div class="relative inline-flex">
                    <a href="#" class="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                    <span
                        class="absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-black   text-xs text-white">
                        {{ totalItems }}
                    </span>
                </div>
            </router-link>




        </div>
    </nav>
</template>



<style scoped></style>