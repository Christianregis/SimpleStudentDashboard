<template>
  <Slidebar />
  <div class="content">
  <Header/>
    <div class="container mt-4">
      <div class="card shadow-sm p-4">
        <h4 class="mb-4 text-primary">Add Subject to Student</h4>

        <form>
          <div class="row">
            <!-- Sélection étudiant -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Student</label>
              <select class="form-select">
                <option selected disabled>Select student</option>
                <option>Jean Dupont</option>
                <option>Marie Claire</option>
              </select>
            </div>

            <!-- Matière -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Subject</label>
              <input type="text" class="form-control" placeholder="Enter subject name" />
            </div>

            <!-- Note -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Score /20</label>
              <input type="number" class="form-control" placeholder="Enter score" />
            </div>

            <!-- Coefficient -->
            <div class="col-md-6 mb-3">
              <label class="form-label">Coefficient</label>
              <input type="number" class="form-control" placeholder="Enter coefficient" />
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
</script>
