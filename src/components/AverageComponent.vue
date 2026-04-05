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
        <tr>
          <td>Jean Dupont</td>
          <td>17.8</td>
          <td><span class="badge bg-success badge-custom">Excellent</span></td>
        </tr>
        <tr>
          <td>Marie Claire</td>
          <td>13.2</td>
          <td>
            <span class="badge bg-warning text-dark badge-custom"
              >En cours d'acquisition</span
            >
          </td>
        </tr>
        <tr>
          <td>Paul Martin</td>
          <td>8.5</td>
          <td><span class="badge bg-danger badge-custom">Faible</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup></script>
