<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { ui } from '@/data/messages';
import LangToggle from './LangToggle.vue';
import ThemeToggle from './ThemeToggle.vue';

const { t } = useLocale();

const links = [
  { href: '#experience', key: 'navExperience' },
  { href: '#publications', key: 'navPublications' },
  { href: '#projects', key: 'navProjects' },
  { href: '#education', key: 'navEducation' },
  { href: '#skills', key: 'navSkills' },
  { href: '#extracurricular', key: 'navExtra' },
] as const;
</script>

<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <a href="#top" class="brand">Louis Chang</a>
      <div class="links">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ t(ui[l.key]) }}</a>
      </div>
      <div class="actions">
        <LangToggle />
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: saturate(160%) blur(10px);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  gap: 1rem;
}
.brand {
  font-weight: 700;
  font-size: 1rem;
  color: var(--fg);
  letter-spacing: -0.01em;
}
.brand:hover { text-decoration: none; color: var(--accent); }
.links {
  display: flex;
  gap: 1.1rem;
  flex: 1;
  justify-content: center;
  overflow-x: auto;
}
.links a {
  color: var(--muted);
  font-size: 0.9rem;
  white-space: nowrap;
  transition: color 0.15s ease;
}
.links a:hover { color: var(--fg); text-decoration: none; }
.actions { display: flex; gap: 0.4rem; }

@media (max-width: 760px) {
  .links { display: none; }
}
</style>
