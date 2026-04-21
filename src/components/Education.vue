<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { education, coursework } from '@/data/education';
import { ui } from '@/data/messages';

const { t } = useLocale();
</script>

<template>
  <section id="education">
    <div class="container">
      <div class="section-header">
        <h2>{{ t(ui.navEducation) }}</h2>
        <span class="section-anchor">#education</span>
      </div>

      <ol class="schools">
        <li v-for="e in education" :key="e.id">
          <div class="line1">
            <h3>{{ t(e.school) }}</h3>
            <span class="date">{{ e.date }}</span>
          </div>
          <p class="degree">
            {{ t(e.degree) }}
            <span v-if="e.gpa" class="gpa"> · GPA: {{ e.gpa }}</span>
          </p>
        </li>
      </ol>

      <div class="coursework">
        <h4>{{ t(ui.selectedCoursework) }}</h4>
        <div class="groups">
          <div v-for="g in coursework" :key="g.category.en" class="group">
            <div class="cat">{{ t(g.category) }}</div>
            <div class="courses">
              <span v-for="c in g.courses" :key="c.en" class="tag">{{ t(c) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.schools { list-style: none; padding: 0; margin: 0 0 1.2rem; }
.schools li { padding: 0.6rem 0; border-bottom: 1px dashed var(--border); }
.schools li:last-child { border-bottom: none; }
.line1 { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
h3 { margin: 0; font-size: 1rem; font-weight: 700; }
.date {
  color: var(--muted);
  font-family: ui-monospace, monospace;
  font-size: 0.82rem;
  white-space: nowrap;
}
.degree { margin: 0.2rem 0 0; color: var(--fg); font-size: 0.92rem; }
.gpa { color: var(--accent); font-weight: 600; }

.coursework { margin-top: 1.2rem; }
.coursework h4 { margin: 0 0 0.6rem; font-size: 0.92rem; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.groups { display: flex; flex-direction: column; gap: 0.6rem; }
.group { display: grid; grid-template-columns: 180px 1fr; gap: 0.8rem; align-items: baseline; }
.cat { font-weight: 600; color: var(--accent); font-size: 0.88rem; }

@media (max-width: 640px) {
  .group { grid-template-columns: 1fr; gap: 0.2rem; }
}
</style>
