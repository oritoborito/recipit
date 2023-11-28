<script setup lang="ts">
import AppNavigationLink from "@/components/NavigationLink.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const showPaths = computed(() => {
  return route.name !== 'create-recipe'
})

</script>

<template>
  <header>
    <nav>
      <template v-if="showPaths">
        <app-navigation-link name="home">
          take me Home
        </app-navigation-link>
        <app-navigation-link name="recipes">
          show recipes
        </app-navigation-link>
      </template>
      <AppNavigationLink v-else name="recipes">
        back to recipes
      </AppNavigationLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
}

nav {
  display: flex;
  gap: 2em;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
