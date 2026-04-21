<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { awards } from '@/data/awards';
import { ui } from '@/data/messages';

const { t } = useLocale();
</script>

<template>
  <section id="awards">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navAwards) }}</h2>
        <span class="section-anchor">#awards</span>
      </div>
      <ul class="awards-list">
        <li v-for="a in awards" :key="a.id">
          <span class="trophy">🏆</span>
          <div class="body">
            <a v-if="a.url" :href="a.url" target="_blank" rel="noopener">{{ t(a.title) }}</a>
            <span v-else>{{ t(a.title) }}</span>
          </div>
          <span class="date">{{ a.date }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.awards-list { list-style: none; padding: 0; margin: 0; }
.awards-list li {
  display: grid;
  grid-template-columns: 24px 1fr auto;
  gap: 0.7rem;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px dashed var(--border);
}
.awards-list li:last-child { border-bottom: none; }
.trophy { opacity: 0.85; }
.body a { color: var(--fg); }
.body a:hover { color: var(--accent); text-decoration: none; }
.date {
  color: var(--muted);
  font-family: ui-monospace, monospace;
  font-size: 0.82rem;
  white-space: nowrap;
}
</style>
