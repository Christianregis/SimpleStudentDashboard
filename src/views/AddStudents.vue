<template>
  <Slidebar />
  <div class="content">
  <Header/>
    <div class="container mt-4">
      <div class="card shadow-sm p-4">
        <h4 class="mb-4 text-primary">Add Student</h4>

        <form>
          <div class="row">
            <!-- Nom -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Nom</label>
              <input type="text" class="form-control" placeholder="Enter last name" />
            </div>

            <!-- Prénom -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Prénom</label>
              <input type="text" class="form-control" placeholder="Enter first name" />
            </div>

            <!-- Age -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Age</label>
              <input type="number" class="form-control" placeholder="Enter age" />
            </div>

            <!-- Sexe -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Sexe</label>
              <select class="form-select">
                <option selected disabled>Select gender</option>
                <option>Masculin</option>
                <option>Féminin</option>
              </select>
            </div>

            <!-- Matricule -->
            <div class="col-md-12 mb-3">
              <label class="form-label">Matricule</label>
              <input type="text" class="form-control" placeholder="Enter student ID" />
            </div>
          </div>

          <!-- Boutons -->
          <div class="d-flex justify-content-end mt-3">
            <button type="reset" class="btn btn-outline-secondary me-2">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Slidebar from "@/components/slidebar.vue";
</script>
