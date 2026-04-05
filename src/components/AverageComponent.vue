<template>
  <!-- Table Moyenne -->
  <div class="card p-4">
    <h5 class="mb-3">Students Averages</h5>

    <table class="table table-hover">
      <thead class="table-primary">
        <tr>
          <th>Name</th>
          <th>Average</th>
          <th>Appreciation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in studentsSubjects">
          <td>{{ student.name }}</td>
          <td>{{ student.subjects }}</td>
          <td><span class="badge bg-success badge-custom">Excellent</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";

const students = JSON.parse(localStorage.getItem("students")) || [];
const subjects = JSON.parse(localStorage.getItem("subjects")) || [];

// Cette liste va contenir le nom de l'eleves et l'ensemble de ces matieres* coefficient
let studentsSubjects = ref([]);

// On parcoure la liste d'eleves et pour on verifie si l'identifiant id_student su sujet correspond a id de l'eleve
for (let i = 0; i < students.length; i++) {
  const studentSubjects = {
    name: "",
    subjects: [],
  };
  studentSubjects.name = students[i].firstName;
  for (let index = 0; index < subjects.length; index++) {
    if (subjects[index].student_id == students[i].id) {
      studentSubjects.subjects.push(subjects[index].score * subjects[index].coefficient);
    }
  }

  studentsSubjects.value.push(studentSubjects)
}

console.log(studentsSubjects.value)
</script>
