<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
const { locale, toggle } = useLocale();
</script>

<template>
  <button
    class="lang-toggle"
    @click="toggle"
    :aria-label="locale === 'en' ? 'Switch to Chinese' : 'Switch to English'"
    :title="locale === 'en' ? 'Switch to Chinese' : 'Switch to English'"
  >
    {{ locale === 'en' ? '中' : 'EN' }}
  </button>
</template>

<style scoped>
.lang-toggle {
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--fg);
  background: var(--bg);
  transition: all 0.15s ease;
}
.lang-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
