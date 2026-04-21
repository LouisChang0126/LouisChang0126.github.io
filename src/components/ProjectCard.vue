<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import type { Project } from '@/types';
import ImagePlaceholder from './ImagePlaceholder.vue';

defineProps<{ proj: Project }>();
const { t } = useLocale();

const iconFor = (icon?: string) => {
  switch (icon) {
    case 'github': return '';
    case 'demo': return '▶';
    default: return '🔗';
  }
};
</script>

<template>
  <article class="card">
    <div class="media">
      <ImagePlaceholder
        :src="proj.image"
        :alt="t(proj.title)"
        :label="t(proj.title)"
        aspect-ratio="16 / 9"
      />
    </div>
    <div class="body">
      <div class="date">{{ proj.date }}</div>
      <h3 class="title">{{ t(proj.title) }}</h3>
      <p class="summary">{{ t(proj.summary) }}</p>
      <ul class="bullets">
        <li v-for="(b, i) in proj.bullets" :key="i">{{ t(b) }}</li>
      </ul>
      <div class="tags">
        <span v-for="tag in proj.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div v-if="proj.links?.length" class="links">
        <a v-for="l in proj.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="link-pill">
          <img v-if="l.icon === 'github'" src="/github.svg" alt="" width="14" height="14" class="gh-icon" />
          <span v-else>{{ iconFor(l.icon) }}</span>
          {{ l.label }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow: var(--shadow-hover);
  border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
  transform: translateY(-2px);
}
.media { width: 100%; }
.body { padding: 1rem 1.1rem 1.1rem; }
.date {
  font-size: 0.78rem;
  color: var(--muted);
  font-family: ui-monospace, monospace;
  margin-bottom: 0.25rem;
}
.title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  line-height: 1.35;
}
.summary { font-size: 0.92rem; color: var(--fg); margin: 0 0 0.5rem; }
.bullets { font-size: 0.88rem; color: var(--fg); margin: 0 0 0.6rem; padding-left: 1.1rem; }
.bullets li { margin-bottom: 0.25rem; color: var(--fg); }
.tags { margin: 0.4rem 0 0.5rem; }
.links { margin-top: 0.3rem; display: flex; flex-wrap: wrap; }
[data-theme="dark"] .gh-icon { filter: invert(1); }
</style>
