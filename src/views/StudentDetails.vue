<template>
  <Slidebar />
  <div class="content">
    <Header />
    <div class="container mt-4">
      <!-- Titre -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="text-primary">All Students</h4>
      </div>

      <div class="row">
        <Card v-for="student in studentsInfos" :student="student" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import Slidebar from "@/components/slidebar.vue";
import { ref } from "vue";

// Recuperation de la liste des eleves
const students = JSON.parse(localStorage.getItem("students")) || [];
// Recuperation de la lsite des matieres
const subjects = JSON.parse(localStorage.getItem("subjects")) || [];

// Variable qui va contenir les infomations sur l'eleves et sur l'ensembles des ces matieres
const studentsInfos = ref([]);

// Parcours de la liste d'eleves et pour chaque matieres dont id = id_student(matiere) alors on l'ajout a la grande liste studentsInfos
students.forEach((student) => {
  const listeSubjects = [];
  const studentInfo = {
    student: student,
    subjects: [],
  };
  subjects.forEach((subject) => {
    if (student.id == subject.student_id) {
      listeSubjects.push(subject);
    }
  });
  studentInfo.subjects = listeSubjects;

  studentsInfos.value.push(studentInfo);
});

// Affichage des infos (Debug)
console.log(studentsInfos.value)
</script>
