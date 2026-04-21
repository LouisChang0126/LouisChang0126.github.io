import { ref, watch } from 'vue';
import type { Locale, Localized } from '@/types';

const STORAGE_KEY = 'locale';

const stored = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Locale | null;
const locale = ref<Locale>(stored === 'zh' || stored === 'en' ? stored : 'en');

watch(locale, (v) => {
  localStorage.setItem(STORAGE_KEY, v);
  document.documentElement.setAttribute('lang', v === 'zh' ? 'zh-TW' : 'en');
}, { immediate: true });

export function useLocale() {
  return {
    locale,
    t: <T>(v: Localized<T>): T => v[locale.value],
    setLocale: (l: Locale) => {
      locale.value = l;
    },
    toggle: () => {
      locale.value = locale.value === 'en' ? 'zh' : 'en';
    },
  };
}
