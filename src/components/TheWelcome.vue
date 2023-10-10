<script setup lang="ts">
// import what I need to navigate to /app in vue 3
import { useRouter } from 'vue-router'

// create a router instance
const router = useRouter()

// create a function that navigates to /app
const navigateToApp = () => {
  // use the router to navigate to /app
  router.push('/app')
}

</script>

<template>
    <h1>
      Recipit
    </h1>
    <p>
      Create recipes that makes sense
    </p>
  <h2>
    Get started by pressing the button below
  </h2>
  <button @click="navigateToApp">
    GET STARTED
  </button>
</template>
