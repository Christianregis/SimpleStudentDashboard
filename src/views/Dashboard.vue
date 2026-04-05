<template>
  <Slidebar />
  <div class="content">
    <Header />
    <Statistics />
    <AverageComponent />
  </div>
</template>
<script setup>
import AverageComponent from "@/components/AverageComponent.vue";
import Header from "@/components/Header.vue";
import Slidebar from "@/components/slidebar.vue";
import Statistics from "@/components/Statistics.vue";

</script>
