<script setup lang="ts">
import { computed } from 'vue';
import { useLocale } from '@/composables/useLocale';
import type { Publication } from '@/types';
import ImagePlaceholder from './ImagePlaceholder.vue';

const props = defineProps<{ pub: Publication }>();
const { t } = useLocale();

const authorsHtml = computed(() => {
  if (!props.pub.authorsHighlighted) return props.pub.authors;
  return props.pub.authors.replace(
    props.pub.authorsHighlighted,
    `<strong>${props.pub.authorsHighlighted}</strong>`,
  );
});

const iconFor = (icon?: string) => {
  switch (icon) {
    case 'paper': return '📄';
    case 'github': return '';
    case 'hf': return '🤗';
    case 'page': return '🏠';
    default: return '🔗';
  }
};
</script>

<template>
  <article class="pub">
    <div class="figure">
      <ImagePlaceholder
        :src="pub.image"
        :alt="t(pub.title)"
        label="Publication teaser figure"
        aspect-ratio="4 / 3"
      />
    </div>
    <div class="body">
      <h3 class="title">{{ t(pub.title) }}</h3>
      <p class="authors" v-html="authorsHtml" />
      <p class="venue">{{ t(pub.venue) }}</p>
      <div class="links">
        <a v-for="l in pub.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="link-pill">
          <img v-if="l.icon === 'github'" src="/github.svg" alt="" width="14" height="14" class="gh-icon" />
          <span v-else>{{ iconFor(l.icon) }}</span>
          {{ l.label }}
        </a>
      </div>
      <p class="tldr">{{ t(pub.tldr) }}</p>
    </div>
  </article>
</template>

<style scoped>
.pub {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}
.pub:hover {
  box-shadow: var(--shadow-hover);
  border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
}
.figure { width: 100%; }
.title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
  line-height: 1.35;
}
.authors { font-size: 0.9rem; color: var(--fg); margin: 0 0 0.25rem; }
.venue { font-size: 0.85rem; color: var(--muted); font-style: italic; margin: 0 0 0.7rem; }
.links { margin: 0 0 0.7rem; display: flex; flex-wrap: wrap; }
.tldr { font-size: 0.92rem; color: var(--fg); line-height: 1.6; margin: 0; }
[data-theme="dark"] .gh-icon { filter: invert(1); }

@media (max-width: 720px) {
  .pub { grid-template-columns: 1fr; }
}
</style>
