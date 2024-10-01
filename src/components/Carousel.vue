<template>
    <div style="padding: 10px">
        <q-card>
            <q-carousel swipeable animated v-model="slide" thumbnails infinite class="carousel" autoplay="2000">
                <q-carousel-slide v-for="(movie, index) in carouselMovie" :key="index" :name="index"
                    :img-src="movie.imgSrc">
                    <div class="q-pa-md">
                        <h3>{{ movie.movieName }}</h3>
                        <p>{{ movie.desc }}</p>
                        <p>Rating: {{ movie.rating }}</p>
                        <q-btn flat label="Watch Trailer" :to="movie.link" target="_blank" />
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </q-card>
    </div>
</template>

<script setup>
import { ref } from "vue";
// Import images
import avengersImg from "@/assets/img/avengers.jpg";
import inception from "@/assets/img/inception.jpg";
import interstellar from "@/assets/img/interstellar.jpg";
import spiderManImg from "@/assets/img/spider-man.jpg";

const slide = ref(1);
const carouselMovie = [
    {
        movieName: "Spider Man",
        imgSrc: spiderManImg,
        desc:
            "A teenage boy gains spider-like abilities and must protect his city from villains.",
        rating: "8.5/10",
        link: "https://www.example.com/spider-man",
    },
    {
        movieName: "The Avengers",
        imgSrc: avengersImg,
        desc:
            "Earth's mightiest heroes must come together to fight off a world-ending threat.",
        rating: "9/10",
        link: "https://www.example.com/avengers",
    },
    {
        movieName: "Inception",
        imgSrc: inception,
        desc:
            "A skilled thief uses dream-sharing technology to pull off the heist of a lifetime.",
        rating: "9.2/10",
        link: "https://www.example.com/inception",
    },
    {
        movieName: "Interstellar",
        imgSrc: interstellar,
        desc:
            "A group of astronauts travel through a wormhole in search of a new home for humanity.",
        rating: "8.6/10",
        link: "https://www.example.com/interstellar",
    },
];
</script>

<style scoped>
@media (min-width: 750px) {
    .carousel {
        height: 90vh;
    }
}
</style>
