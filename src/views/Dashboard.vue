<template>
  <Slidebar />
  <div class="content">
    <Header />
    <Statistics :general-average="averageCount"/>
    <AverageComponent  @general-average="getGeneralAverage"/>
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
  averageCount = generalAverage;
}
</script>
