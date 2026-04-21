<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { profile } from '@/data/profile';
import { ui } from '@/data/messages';

const { t } = useLocale();
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <div>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        ·
        <a :href="profile.githubUrl" target="_blank" rel="noopener">GitHub</a>
        ·
        <a :href="profile.resume" target="_blank" rel="noopener">CV</a>
      </div>
      <div class="built muted">{{ t(ui.footerBuilt) }}</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 3rem;
  padding: 1.6rem 0 2.4rem;
  border-top: 1px solid var(--border);
  font-size: 0.88rem;
}
.inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.muted { color: var(--muted); }
.built { font-size: 0.82rem; }
</style>
