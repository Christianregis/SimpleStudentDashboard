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
        <!-- Card Etudiant 1 -->
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-primary">Jean Dupont</h5>

              <p class="mb-1"><strong>Prénom :</strong> Jean</p>
              <p class="mb-1"><strong>Nom :</strong> Dupont</p>
              <p class="mb-1"><strong>Age :</strong> 21 ans</p>
              <p class="mb-1"><strong>Sexe :</strong> Masculin</p>
              <p class="mb-2"><strong>Matricule :</strong> STU001</p>

              <span class="badge bg-success">Actif</span>
            </div>
          </div>
        </div>

        <!-- Card Etudiant 2 -->
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-primary">Marie Claire</h5>

              <p class="mb-1"><strong>Prénom :</strong> Marie</p>
              <p class="mb-1"><strong>Nom :</strong> Claire</p>
              <p class="mb-1"><strong>Age :</strong> 22 ans</p>
              <p class="mb-1"><strong>Sexe :</strong> Féminin</p>
              <p class="mb-2"><strong>Matricule :</strong> STU002</p>

              <span class="badge bg-warning text-dark">En cours</span>
            </div>
          </div>
        </div>

        <!-- Card Etudiant 3 -->
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-primary">Paul Martin</h5>

              <p class="mb-1"><strong>Prénom :</strong> Paul</p>
              <p class="mb-1"><strong>Nom :</strong> Martin</p>
              <p class="mb-1"><strong>Age :</strong> 20 ans</p>
              <p class="mb-1"><strong>Sexe :</strong> Masculin</p>
              <p class="mb-2"><strong>Matricule :</strong> STU003</p>

              <span class="badge bg-danger">Faible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Slidebar from "@/components/slidebar.vue";
</script>
