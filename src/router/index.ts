import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: () => import('../views/RecipesView.vue')
    },
    {
        path: '/create-recipe',
        name: 'create-recipe',
        component: () => import('../views/CreateRecipeView.vue')
    }
] as const


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})
export default router
