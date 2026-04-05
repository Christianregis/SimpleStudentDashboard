<template>
  <Slidebar />
  <div class="content">
    <Header />
    <Statistics :general-average="averageCount" :best-student="studentBest"/>
    <AverageComponent  @general-average="getGeneralAverage" @best-student="getBestStudent"/>
  </div>
</template>
<script setup>
import AverageComponent from "@/components/AverageComponent.vue";
import Header from "@/components/Header.vue";
import Slidebar from "@/components/slidebar.vue";
import Statistics from "@/components/Statistics.vue";
import { ref } from "vue";

// Variable representant la moyenne generale de la classe (Elle est par defaut 0)
let averageCount = ref(0);

// Recuperationde la moyenne generale de la classe grace au emits passee du composant AverageComponent
let getGeneralAverage = (generalAverage)=>{
  averageCount.value = generalAverage;
}

// Valeur par defaut au cas ou nous ne recevons pas les donnees du meilleur eleve
let studentBest = ref({
  name: "NAN",
  average: 0
})

// recuperation du meilleur eleves grace au emits passee dans le composants AverageComponent.vue
const getBestStudent = (best_student)=>{
  studentBest.value = best_student;
}

</script>
