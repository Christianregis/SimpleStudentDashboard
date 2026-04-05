<template>
  <Slidebar />
  <div class="content">
    <Header />
    <div class="container mt-4">
      <div class="card shadow-sm p-4">
        <h4 class="mb-4 text-primary">Add Student</h4>

        <form v-on:submit="submitForm">
          <div v-if="state == 'success'" class="alert alert-success p-3 w-100">
            Etudiant ajoute !
          </div>

          <div v-else-if="state == 'error'" class="alert alert-danger p-3 w-100">
            Veuillez remplir tous les champs !
          </div>
          <div class="row">
            <!-- Nom -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Nom</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter last name"
                v-model="firstName"
              />
            </div>

            <!-- Prénom -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Prénom</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter first name"
                v-model="lastName"
              />
            </div>

            <!-- Age -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Age</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter age"
                v-model="year"
              />
            </div>

            <!-- Sexe -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Sexe</label>
              <select class="form-select" v-model="gender">
                <option selected disabled>Select gender</option>
                <option :value="`Masculin`">Masculin</option>
                <option :value="`Feminin`">Féminin</option>
              </select>
            </div>

            <!-- Matricule -->
            <div class="col-md-12 mb-3">
              <label class="form-label">Matricule</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter student ID"
                v-model="id"
              />
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
import { onMounted, ref } from "vue";

// Etat de soumittion du formulaire (initial, success, error)
let state = ref("");


// Le state au lancement de la page est initial
onMounted(() => {
  state.value = "initial";
});

const firstName = ref("");
const lastName = ref("");
const year = ref(0);
const gender = ref("");
const id = ref("");

const submitForm = (event) => {
  event.preventDefault();
  // Verification des informations du formulaire
  if (
    firstName.value.trim() != "" &&
    lastName.value.trim() != "" &&
    year.value > 0 &&
    gender.value.trim() != "" &&
    id.value.trim() != ""
  ) {

    //Mise a jour du state (Operation reussi !)
    state.value = "success";

    //Utilisation du localStorage pour la sauvgarde des eleves
    const students = JSON.parse(localStorage.getItem('students')) || [];

    students.push({
      firstName: firstName.value,
      lastName: lastName.value,
      year: year.value,
      gender: gender.value,
      id: id.value,
    });

    localStorage.setItem('students', JSON.stringify(students))

    firstName.value = "";
    lastName.value = "";
    year.value = 0;
    gender.value = "";
    id.value = "";
    console.log("Done");

  } else {
    // Les champs ne sont pas tous remplis (Error)
    state.value = "error";
  }
};
</script>
