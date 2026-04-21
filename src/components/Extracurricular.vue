<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { clubs } from '@/data/extracurricular';
import { ui } from '@/data/messages';
import ImagePlaceholder from './ImagePlaceholder.vue';

const { t } = useLocale();

let drag: { el: HTMLElement; startX: number; startScroll: number; moved: boolean } | null = null;

function onPointerDown(e: PointerEvent) {
  const el = e.currentTarget as HTMLElement;
  if (el.scrollWidth <= el.clientWidth) return;
  drag = { el, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  el.setPointerCapture(e.pointerId);
  el.classList.add('dragging');
}
function onPointerMove(e: PointerEvent) {
  if (!drag) return;
  const dx = e.clientX - drag.startX;
  if (Math.abs(dx) > 3) drag.moved = true;
  drag.el.scrollLeft = drag.startScroll - dx;
}
function onPointerUp(e: PointerEvent) {
  if (!drag) return;
  drag.el.releasePointerCapture(e.pointerId);
  drag.el.classList.remove('dragging');
  drag = null;
}
function onClickCapture(e: MouseEvent) {
  // Prevent accidental clicks (e.g., ImagePlaceholder dots) after a drag.
  if (drag?.moved) { e.preventDefault(); e.stopPropagation(); }
}
</script>

<template>
  <section id="extracurricular">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navExtra) }}</h2>
        <span class="section-anchor">#clubs</span>
      </div>
      <ol class="clubs">
        <li v-for="c in clubs" :key="c.id">
          <div class="line1">
            <h3>
              {{ t(c.name) }}
              <span class="role">— {{ t(c.role) }}</span>
            </h3>
            <span class="date">{{ c.date }}</span>
          </div>
          <p>{{ t(c.description) }}</p>
          <div
            v-if="c.media"
            class="gallery"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @click.capture="onClickCapture"
          >
            <div
              v-for="(src, i) in Array.isArray(c.media) ? c.media : [c.media]"
              :key="src"
              class="media-item"
            >
              <ImagePlaceholder
                :src="src"
                :alt="`${t(c.name)} ${i + 1}`"
                :label="t(c.name)"
                aspect-ratio="4 / 3"
              />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.clubs { list-style: none; padding: 0; margin: 0; }
.clubs li { padding: 0.6rem 0; border-bottom: 1px dashed var(--border); }
.clubs li:last-child { border-bottom: none; }
.line1 { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
h3 { margin: 0; font-size: 1rem; font-weight: 600; }
.role { color: var(--muted); font-weight: 500; font-size: 0.92rem; }
.date {
  color: var(--muted);
  font-family: ui-monospace, monospace;
  font-size: 0.82rem;
  white-space: nowrap;
}
p { margin: 0.25rem 0 0; color: var(--fg); font-size: 0.92rem; }

.gallery {
  margin-top: 0.6rem;
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  -ms-overflow-style: none;
  touch-action: pan-x pan-y;
  user-select: none;
  cursor: grab;
}
.gallery::-webkit-scrollbar { display: none; }
.gallery.dragging { cursor: grabbing; scroll-behavior: auto; }
.media-item {
  flex: 0 0 auto;
  width: 280px;
  max-width: 90%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  scroll-snap-align: start;
}
</style>
