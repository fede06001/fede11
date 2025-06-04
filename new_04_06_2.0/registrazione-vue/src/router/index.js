import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../components/RegisterForm.vue';
import LoginForm from '../components/LoginForm.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
