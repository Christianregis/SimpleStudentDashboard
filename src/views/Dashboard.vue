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

let averageCount = ref(0);
let getGeneralAverage = (generalAverage)=>{
  averageCount.value = generalAverage;
}

let studentBest = ref({
  name: "NAN",
  average: 0
})
const getBestStudent = (best_student)=>{
  studentBest.value = best_student;
}

</script>
