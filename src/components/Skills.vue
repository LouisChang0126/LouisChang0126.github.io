<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { skills } from '@/data/skills';
import { ui } from '@/data/messages';

const { t } = useLocale();
</script>

<template>
  <section id="skills">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navSkills) }}</h2>
        <span class="section-anchor">#skills</span>
      </div>
      <div class="groups">
        <div v-for="g in skills" :key="g.category.en" class="group">
          <div class="cat">{{ t(g.category) }}</div>
          <div class="items">
            <span v-for="s in g.items" :key="s" class="tag">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.groups { display: flex; flex-direction: column; gap: 0.6rem; }
.group {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 0.8rem;
  align-items: baseline;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--border);
}
.group:last-child { border-bottom: none; }
.cat { font-weight: 600; color: var(--accent); font-size: 0.9rem; }

@media (max-width: 640px) {
  .group { grid-template-columns: 1fr; gap: 0.2rem; }
}
</style>
