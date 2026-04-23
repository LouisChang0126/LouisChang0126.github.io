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
    </div>
    <div class="bleed">
      <div class="grid">
        <article v-for="m in ministries" :key="m.id" class="card">
          <div class="media">
            <ImagePlaceholder
              :src="m.image"
              :alt="t(m.name)"
              :label="t(m.name)"
              aspect-ratio="16 / 9"
            />
          </div>
          <div class="body">
            <div class="line1">
              <h3>
                <a v-if="m.url" :href="m.url" target="_blank" rel="noopener">{{ t(m.name) }}</a>
                <template v-else>{{ t(m.name) }}</template>
              </h3>
              <span v-if="m.date" class="date">{{ m.date }}</span>
            </div>
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
.bleed {
  width: min(100vw, 1440px);
  margin-inline: auto;
  padding-inline: 1.5rem;
  box-sizing: border-box;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid {
  /* allow drop-shadow from clipped cards to show */
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.08));
}
.card {
  display: flex;
  flex-direction: column;
  background: var(--card);
  overflow: hidden;
  border-radius: 30px;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-3px);
}
/* polygon fallback (Firefox & older browsers) — 8% slant, 4-card layout */
.card:nth-child(1) { clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%); }
.card:nth-child(2) { clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%); }
.card:nth-child(3) { clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%); }
.card:nth-child(4) { clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%); }

/* Slide all cards inward so every neighbour gap is uniform (~1% of grid).
   Geometry: a = 3b keeps all three gaps equal; b = 2% (own width) → 1% grid gap. */
.card:nth-child(1) { transform: translateX(6%); }
.card:nth-child(2) { transform: translateX(2%); }
.card:nth-child(3) { transform: translateX(-2%); }
.card:nth-child(4) { transform: translateX(-6%); }
.card:nth-child(1):hover { transform: translateX(6%) translateY(-3px); }
.card:nth-child(2):hover { transform: translateX(2%) translateY(-3px); }
.card:nth-child(3):hover { transform: translateX(-2%) translateY(-3px); }
.card:nth-child(4):hover { transform: translateX(-6%) translateY(-3px); }

/* shape() with rounded corners on ALL trapezoid vertices (Chromium/Safari) */
@supports (clip-path: shape(from 0 0, line to 100% 0)) {
  .card:nth-child(1) {
    clip-path: shape(
      from 16px 0,
      line to calc(92% - 16px) 0,
      curve to calc(92% + 1px) 16px with 92% 0,
      line to calc(100% - 1px) calc(100% - 16px),
      curve to calc(100% - 16px) 100% with 100% 100%,
      line to 16px 100%,
      curve to 0 calc(100% - 16px) with 0 100%,
      line to 0 16px,
      curve to 16px 0 with 0 0
    );
  }
  .card:nth-child(2) {
    clip-path: shape(
      from 16px 0,
      line to calc(100% - 16px) 0,
      curve to calc(100% - 1px) 16px with 100% 0,
      line to calc(92% + 1px) calc(100% - 16px),
      curve to calc(92% - 16px) 100% with 92% 100%,
      line to calc(8% + 16px) 100%,
      curve to calc(8% - 1px) calc(100% - 16px) with 8% 100%,
      line to 1px 16px,
      curve to 16px 0 with 0 0
    );
  }
  .card:nth-child(3) {
    clip-path: shape(
      from calc(8% + 16px) 0,
      line to calc(92% - 16px) 0,
      curve to calc(92% + 1px) 16px with 92% 0,
      line to calc(100% - 1px) calc(100% - 16px),
      curve to calc(100% - 16px) 100% with 100% 100%,
      line to 16px 100%,
      curve to 1px calc(100% - 16px) with 0 100%,
      line to calc(8% - 1px) 16px,
      curve to calc(8% + 16px) 0 with 8% 0
    );
  }
  .card:nth-child(4) {
    clip-path: shape(
      from 16px 0,
      line to calc(100% - 16px) 0,
      curve to 100% 16px with 100% 0,
      line to 100% calc(100% - 16px),
      curve to calc(100% - 16px) 100% with 100% 100%,
      line to calc(8% + 16px) 100%,
      curve to calc(8% - 1px) calc(100% - 16px) with 8% 100%,
      line to 1px 16px,
      curve to 16px 0 with 0 0
    );
  }
}
.media { width: 100%; }
/* Body padded extra at top to avoid clipped-corner overlap */
.body { padding: 1.2rem 1.5rem 1.3rem; }
.card:nth-child(2) .body,
.card:nth-child(3) .body { padding-inline: 2rem; }
.line1 {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}
h3 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.35;
}
.date {
  color: var(--muted);
  font-family: ui-monospace, monospace;
  font-size: 0.82rem;
  white-space: nowrap;
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

@media (max-width: 960px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .card:nth-child(n) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: none;
  }
  .card:nth-child(n):hover { transform: translateY(-3px); }
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
    border-radius: 16px;
  }
}
</style>
