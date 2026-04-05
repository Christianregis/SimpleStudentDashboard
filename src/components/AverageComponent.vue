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
        <tr v-for="student in studentsAverages" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.average }}</td>
          <td>
            <span v-if="student.average > 17" class="badge bg-success badge-custom"
              >Excellent</span
            >
            <span
              v-else-if="student.average > 15 && student.average <= 17"
              class="badge bg-success badge-custom"
              >Tres bien</span
            >
            <span
              v-else-if="student.average > 11.99 && student.average <= 14.99"
              class="badge bg-primary badge-custom"
              >Assez bien</span
            >
            <span
              v-else-if="student.average <= 11.99"
              class="badge bg-danger badge-custom"
              >Passable</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { computed } from "vue";

const students = JSON.parse(localStorage.getItem("students")) || [];
const subjects = JSON.parse(localStorage.getItem("subjects")) || [];

// Cette liste va contenir le nom de l'eleves et sa moyenne correspondante
const studentsAverages = computed(() => {
  return students.map(student => {
    let totalScore = 0;
    let lengthCoefficient = 0;

    subjects.forEach(subject => {
      if (subject.student_id == student.id) {
        totalScore += subject.score * subject.coefficient;
        lengthCoefficient += subject.coefficient;
      }
    });

    return {
      name: student.firstName,
      average: totalScore / lengthCoefficient || 0,
    };
  });
});


// Passage de la constante generalAverage au composant Statictics

const emit = defineEmits(['general-average','best-student'])

let totalAverage = 0;
studentsAverages.value.map(student=>{
    totalAverage = totalAverage + student.average;
});
const generalAverage = totalAverage/studentsAverages.value.length;
console.log("General Average ",generalAverage)


// Trie de la liste contenant les noms et des eleves ainsi que leurs moyennes ( On recupera plus tard la premiere valeure )
const bestStudents = studentsAverages.value.toSorted((a,b)=>{
    if(a.average > b.average){
        return -1;
    }else if(a.average < b.average){
        return 1;
    }else{
        return 0;
    }
});

// Recuperation de la premiere valeur de la liste de noms d'eleves et moyennes
const best_student = bestStudents[0];

emit('general-average', generalAverage);
emit('best-student', best_student);
</script>
