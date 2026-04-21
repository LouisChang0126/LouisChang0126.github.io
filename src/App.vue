<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Publications from './components/Publications.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Awards from './components/Awards.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import Extracurricular from './components/Extracurricular.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <main>
    <Hero />
    <Experience />
    <Awards />
    <Publications />
    <Projects />
    <Education />
    <Skills />
    <Extracurricular />
  </main>
  <Footer />
</template>
