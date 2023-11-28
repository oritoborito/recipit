import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from "@/views/RecipesView.vue";
import CreateRecipeView from "@/views/CreateRecipeView.vue";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: RecipesView
    },
    {
        path: '/create-recipe',
        name: 'create-recipe',
        component: CreateRecipeView
    }
] as const


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})
export default router
