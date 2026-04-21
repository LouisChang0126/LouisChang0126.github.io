<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { experience } from '@/data/experience';
import { ui } from '@/data/messages';

const { t } = useLocale();
</script>

<template>
  <section id="experience">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navExperience) }}</h2>
        <span class="section-anchor">#experience</span>
      </div>
      <ol class="timeline">
        <li v-for="e in experience" :key="e.id">
          <div class="marker" />
          <div class="content">
            <div class="head">
              <div>
                <h3>
                  <a v-if="e.organizationUrl" :href="e.organizationUrl" target="_blank" rel="noopener">{{ e.organization }}</a>
                  <span v-else>{{ e.organization }}</span>
                  <span class="role"> — {{ t(e.role) }}</span>
                </h3>
              </div>
              <span class="date">{{ e.date }}</span>
            </div>
            <ul>
              <li v-for="(b, i) in e.bullets" :key="i">{{ t(b) }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--border);
}
.timeline > li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.4rem;
}
.marker {
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 1px var(--border);
}
.head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
  flex-wrap: wrap;
}
h3 { font-size: 1rem; margin: 0 0 0.2rem; font-weight: 700; }
h3 a { color: var(--fg); }
h3 a:hover { color: var(--accent); text-decoration: none; }
.role { color: var(--muted); font-weight: 500; }
.date {
  font-family: ui-monospace, monospace;
  font-size: 0.8rem;
  color: var(--muted);
  white-space: nowrap;
}
ul { margin: 0.3rem 0 0; padding-left: 1.1rem; }
ul li { font-size: 0.92rem; color: var(--fg); }
</style>
