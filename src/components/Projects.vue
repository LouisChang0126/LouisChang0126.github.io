<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLocale } from '@/composables/useLocale';
import { projects } from '@/data/projects';
import { ui } from '@/data/messages';
import ProjectCard from './ProjectCard.vue';

const { t } = useLocale();
const showAll = ref(false);
const featured = computed(() => projects.filter((p) => p.featured));
const others = computed(() => projects.filter((p) => !p.featured));

const isMobile = ref(false);
let mql: MediaQueryList | null = null;
const onMqlChange = (e: MediaQueryListEvent) => { isMobile.value = e.matches; };
onMounted(() => {
  mql = window.matchMedia('(max-width: 640px)');
  isMobile.value = mql.matches;
  mql.addEventListener('change', onMqlChange);
});
onUnmounted(() => {
  mql?.removeEventListener('change', onMqlChange);
});

const displayed = computed(() => {
  if (isMobile.value) return projects;
  return showAll.value ? projects : featured.value;
});
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navProjects) }}</h2>
        <span class="section-anchor">#projects</span>
      </div>
    </div>
    <div class="bleed">
      <div class="grid">
        <ProjectCard v-for="p in displayed" :key="p.id" :proj="p" />
      </div>
    </div>
    <div v-if="!isMobile" class="container">
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
.bleed {
  width: min(100vw, 1440px);
  margin-inline: auto;
  padding-inline: 1.5rem;
  box-sizing: border-box;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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

@media (max-width: 960px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .bleed { padding-inline: 0; }
  .grid {
    display: flex;
    grid-template-columns: none;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
    -ms-overflow-style: none;
    gap: 0.8rem;
    padding: 0.25rem 1rem 0.6rem;
    scroll-padding: 1rem;
  }
  .grid::-webkit-scrollbar { display: none; }
  .grid > * {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }
}
</style>
