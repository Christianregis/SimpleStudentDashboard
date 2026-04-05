<style>
body {
  background-color: #f4f7fc;
}

.sidebar {
  height: 100vh;
  background-color: #0d6efd;
  color: white;
  position: fixed;
  width: 250px;
}

.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 12px 20px;
  border-radius: 8px;
}

.sidebar a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.submenu {
  margin-left: 15px;
  font-size: 14px;
}

.content {
  margin-left: 260px;
  padding: 20px;
}

.card {
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.header {
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.badge-custom {
  padding: 8px 12px;
  border-radius: 20px;
}
</style>

<template>
  <div class="sidebar p-3">
    <h4 class="text-center mb-4">My Dashboard</h4>

    <router-link to="/">Dashboard</router-link>

    <router-link to="/">Students</router-link>
    <div class="submenu">
      <router-link to="/add-student"> Add Student</router-link>
      <router-link to="/students-details"> View All Students</router-link>
    </div>

    <router-link to="/">Subjects</router-link>
    <div class="submenu">
      <router-link to="/add-subject">Add Subject</router-link>
    </div>
  </div>
</template>
<script setup></script>
