<template>
  <div class="col-md-4 mb-4">
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title text-primary">{{ student.student.lastName }}</h5>

        <p class="mb-1"><strong>Prénom :</strong> {{ student.student.lastName }}</p>
        <p class="mb-1"><strong>Nom :</strong> {{ student.student.firstName }}</p>
        <p class="mb-1"><strong>Age :</strong> {{ student.student.year }} ans</p>
        <p class="mb-1"><strong>Sexe :</strong> {{ student.student.gender }}</p>
        <p class="mb-2"><strong>Matricule :</strong> {{ student.student.id }}</p>
        <p>Matieres : </p>
        <div class="container">
            <li v-for="subject in student.subjects" class="alert alert-success p-2 m-2">{{ subject.subject }}</li>
        </div>
        <button class="btn btn-danger px-2"><i class="fa fa-trash text-md"></i></button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
    student: Object
});
</script>
