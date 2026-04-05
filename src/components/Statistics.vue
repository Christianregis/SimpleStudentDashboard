<template>
  <div class="row mb-4">
    <div class="col-md-4">
      <div class="card p-3 text-center">
        <h5>Total Students</h5>
        <h2 class="text-primary">{{ studentsCount }}</h2>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card p-3 text-center">
        <h5>Average Class Score</h5>
        <h2 class="text-success">{{ generalAverage }} / 20</h2>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card p-3 text-center">
        <h5>Best Student</h5>
        <h6 class="text-dark">{{ bestStudent.name }}</h6>
        <span class="text-primary">{{ bestStudent.average }} / 20</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let studentsCount = ref(0);

const totalStudents = JSON.parse(localStorage.getItem("students")) || [];

for (let index = 0; index < totalStudents.length; index++) {
  studentsCount.value++;
}

defineProps({
  generalAverage: Number,
  bestStudent: Object,
});

</script>
