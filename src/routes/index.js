import AddStudents from "@/views/AddStudents.vue";
import Dashboard from "@/views/Dashboard.vue";
import StudentDetails from "@/views/StudentDetails.vue";
import AddSubjectPage from "@/views/addSubjectPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/', component: Dashboard,
        },
        {
            path: '/add-subject', component: AddSubjectPage,
        },
        {
            path: '/add-student', component: AddStudents,
        },
        {
            path: '/students-details', component: StudentDetails,
        },
        {
            path:'/**', redirect: '/',
        }
    ]
});
export default router;