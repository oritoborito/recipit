<script setup lang="ts">
import Header from "@/components/SimpleHeader.vue";
import Main from "@/components/MainLandmark.vue";
import Footer from "@/components/SimpleFooter.vue";
</script>

<template>
  <Header/>
  <Main>
    <slot></slot>
  </Main>
  <Footer/>
</template>
