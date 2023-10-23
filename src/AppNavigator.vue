<script setup lang="ts">
import AppNavigationLink from "@/AppNavigationLink.vue";
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

const showPaths = computed(() => {
  return route.name !== 'create-recipe'
})

const navigateBackwards = () => {
  router.back()
}

</script>

<template>
  <header>
    <nav>
      <div v-if="showPaths">
        <app-navigation-link name="home">
          Take me Home
        </app-navigation-link>
        <app-navigation-link name="recipes">
          Show recipes
        </app-navigation-link>
      </div>
      <button v-else @click="navigateBackwards">
        Go back
      </button>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  border: 1px orange solid;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

nav {
  font-size: 12px;
  text-align: center;
  margin: 2rem 0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
