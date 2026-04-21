import { ref, watch } from 'vue';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

function initialTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  }
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

const theme = ref<Theme>(initialTheme());

watch(theme, (v) => {
  localStorage.setItem(STORAGE_KEY, v);
  document.documentElement.setAttribute('data-theme', v);
}, { immediate: true });

export function useTheme() {
  return {
    theme,
    toggle: () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    },
  };
}
