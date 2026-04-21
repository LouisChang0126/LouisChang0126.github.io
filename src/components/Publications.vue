<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { publications } from '@/data/publications';
import { ui } from '@/data/messages';
import PublicationCard from './PublicationCard.vue';

const { t } = useLocale();
</script>

<template>
  <section id="publications">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navPublications) }}</h2>
        <span class="section-anchor">#publications</span>
      </div>
      <div class="list">
        <PublicationCard v-for="p in publications" :key="p.id" :pub="p" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.list { display: flex; flex-direction: column; gap: 1.2rem; }
</style>
