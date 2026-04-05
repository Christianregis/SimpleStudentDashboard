<template>
  <Slidebar />
  <div class="content">
    <Header/>
    <div class="container mt-4">
      <!-- Titre -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="text-primary">All Students</h4>
      </div>

      <div class="row">
        <Card  v-for="student in students" :student="student"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import Slidebar from "@/components/slidebar.vue";

const students = JSON.parse(localStorage.getItem('students')) || [];

</script>
