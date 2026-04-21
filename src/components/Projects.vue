<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLocale } from '@/composables/useLocale';
import { projects } from '@/data/projects';
import { ui } from '@/data/messages';
import ProjectCard from './ProjectCard.vue';

const { t } = useLocale();
const showAll = ref(false);
const featured = computed(() => projects.filter((p) => p.featured));
const others = computed(() => projects.filter((p) => !p.featured));
const displayed = computed(() => (showAll.value ? projects : featured.value));
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navProjects) }}</h2>
        <span class="section-anchor">#projects</span>
      </div>
      <div class="grid">
        <ProjectCard v-for="p in displayed" :key="p.id" :proj="p" />
      </div>
      <button
        v-if="others.length"
        class="toggle"
        @click="showAll = !showAll"
      >
        {{ showAll ? t(ui.viewLess) : `${t(ui.viewMore)} (+${others.length})` }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
}
.toggle {
  margin-top: 1.2rem;
  padding: 0.55rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--fg);
  background: var(--bg-soft);
  font-size: 0.9rem;
  transition: all 0.15s ease;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.toggle:hover { border-color: var(--accent); color: var(--accent); }

@media (max-width: 760px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
