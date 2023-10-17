<script setup lang="ts">
import {useNavigation} from "@/composables/navigation";

const { navigateToPath } = useNavigation()


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
  <button @click="navigateToPath('/recipes')">
    GET STARTED
  </button>
</template>
