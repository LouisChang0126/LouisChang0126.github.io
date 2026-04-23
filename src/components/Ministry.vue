<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { ministries } from '@/data/ministry';
import { ui } from '@/data/messages';
import ImagePlaceholder from './ImagePlaceholder.vue';

const { t } = useLocale();
</script>

<template>
  <section id="ministry">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navMinistry) }}</h2>
        <span class="section-anchor">#ministry</span>
      </div>
      <div class="grid">
        <article v-for="m in ministries" :key="m.id" class="card">
          <div class="media">
            <ImagePlaceholder
              :src="m.image"
              :alt="t(m.name)"
              :label="t(m.name)"
              aspect-ratio="4 / 3"
            />
          </div>
          <div class="body">
            <h3>
              <a v-if="m.url" :href="m.url" target="_blank" rel="noopener">{{ t(m.name) }}</a>
              <template v-else>{{ t(m.name) }}</template>
            </h3>
            <ul v-if="m.bullets.length" class="bullets">
              <li v-for="(b, i) in m.bullets" :key="i">{{ t(b) }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}
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
h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.35;
}
h3 a { color: var(--fg); }
h3 a:hover { color: var(--accent); text-decoration: none; }
.bullets {
  font-size: 0.9rem;
  color: var(--fg);
  margin: 0;
  padding-left: 1.1rem;
}
.bullets li { margin-bottom: 0.3rem; }
.bullets li:last-child { margin-bottom: 0; }

@media (max-width: 760px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
