<template>
  <Slidebar />
  <div class="content">
    <Header />
    <div class="container mt-4">
      <div class="card shadow-sm p-4">
        <h4 class="mb-4 text-primary">Add Subject to Student</h4>

        <form v-on:submit="submitForm">
          <div v-if="state == 'success'" class="alert alert-success p-3">
            Matiere ajoute !
          </div>
          <div v-else-if="state == 'error'" class="alert alert-danger p-3">Veuillez remplir tous les champs !</div>
          <div class="row">
            <!-- Sélection étudiant -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Student</label>
              <select class="form-select" v-model="student_id">
                <option selected disabled>Select student</option>
                <option v-for="student in students" :value="student.id">
                  {{ student.firstName }} {{ student.lastName }}
                </option>
              </select>
            </div>

            <!-- Matière -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Subject</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter subject name"
                v-model="subject"
              />
            </div>

            <!-- Note -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Score /20</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter score"
                v-model="score"
              />
            </div>

            <!-- Coefficient -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Coefficient</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter coefficient"
                v-model="coefficient"
              />
            </div>
          </div>

          <!-- Boutons -->
          <div class="d-flex justify-content-end mt-3">
            <button type="reset" class="btn btn-outline-secondary me-2">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Subject</button>
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

const student_id = ref("");
const subject = ref("");
const score = ref(0);
const coefficient = ref(0);

let state = ref("");
onMounted(() => {
  state.value = "initial";
});

const students = JSON.parse(localStorage.getItem("students")) || [];
const submitForm = (event) => {
  event.preventDefault();
  if (
    student_id.value != "" &&
    subject.value != "" &&
    score.value >= 0 &&
    coefficient.value >= 0
  ) {
    const subjects = JSON.parse(localStorage.getItem("subjects")) || [];

    subjects.push({
      student_id: student_id.value,
      subject: subject.value,
      score: score.value,
      coefficient: coefficient.value,
    });

    localStorage.setItem("subjects", JSON.stringify(subjects));
    console.log("Done")

    student_id.value = "";
    subject.value = "";
    score.value = 0;
    coefficient.value = 0;
    state.value = "success";
  } else {
    state.value = "error";
  }
};
</script>
