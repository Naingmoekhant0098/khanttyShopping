<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const carouselConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: true
}
const slides = [
    { id: 1, title: 'Slide 1', type  : "Image", description: 'This is the first slide', image: 'https://media.sisburma.com/wp-content/uploads/2024/06/14160449/25-2.jpg' },
    { id: 2, title: 'Slide 2',  type  : "Image" , description: 'This is the second slide', image: 'https://media.sisburma.com/wp-content/uploads/2024/07/25184433/Web-Banner-.jpg' },
    { id: 3, title: 'Slide 3',  type  : "Image" , description: 'This is the third slide', image: 'https://static.nike.com/a/images/w_1920,c_limit/8cbde077-feda-41a5-a3c7-5e0441842d9f/image.jpg' },
    { id: 5, title: 'Slide 4',  type  : "Video" , description: 'This is the fifth slide', image: 'https://api.nike.com/content/asset_video_manifest/v1/6373076366112' }
]
</script>

<template>
   <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in slides" :key="slide.id">
      <div v-if="slide.type==='Video'" class="carousel__item  h-[80vh] w-full relative group ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" w-full h-full object-cover"
      >
        <source :src="slide.image" type="video/mp4" />
      </video>
      </div>
      <div v-else class="carousel__item  h-[80vh] w-full relative group ">
        <img   :src="slide.image" class=" object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-400" alt="">
      </div>
    </Slide>

    <template #addons>
    <Navigation class="mx-10"/>
      <Pagination  />
    </template>
  </Carousel>
</template>