<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLocale } from '@/composables/useLocale';
import { useTheme } from '@/composables/useTheme';
import { profile } from '@/data/profile';
import { about } from '@/data/about';
import { ui } from '@/data/messages';
import ImagePlaceholder from './ImagePlaceholder.vue';

const { theme } = useTheme();
const photoSrc = computed(() => theme.value === 'dark' ? '/profile_dark.jpg' : profile.photo);

const { t } = useLocale();

const idx = ref(0);
let timer: number | undefined;

onMounted(() => {
  timer = window.setInterval(() => {
    idx.value = (idx.value + 1) % profile.identities.length;
  }, 3000);
});
onUnmounted(() => {
  if (timer) window.clearInterval(timer);
});

const currentIdentity = computed(() => profile.identities[idx.value]);
</script>

<template>
  <header id="top" class="hero">
    <div class="container hero-inner">
      <div class="photo">
        <ImagePlaceholder
          :src="photoSrc"
          :alt="t(profile.name)"
          label="Profile photo"
          aspect-ratio="1 / 1.4"
        />
      </div>
      <div class="intro">
        <h1>{{ t(profile.name) }}</h1>
        <div class="identity-slot" aria-live="polite">
          <Transition name="identity" mode="out-in">
            <p class="identity" :key="idx">{{ t(currentIdentity) }}</p>
          </Transition>
        </div>

        <div class="contacts">
          <a :href="`mailto:${profile.email}`" class="link-pill">
            <span>✉</span> {{ profile.email }}
          </a>
          <a :href="profile.githubUrl" target="_blank" rel="noopener" class="link-pill">
            <img src="/github.svg" alt="" width="14" height="14" class="gh-icon" /> {{ profile.github }}
          </a>
          <span class="link-pill no-hover">
            <span>📱</span> {{ profile.mobile }}
          </span>
          <a :href="profile.resume" target="_blank" rel="noopener" class="link-pill cv">
            <span>📄</span> {{ t(ui.downloadCV) }}
          </a>
        </div>

        <div class="bio">
          <p v-for="(p, i) in about.paragraphs" :key="i">{{ t(p) }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  padding: 3rem 0 1.5rem;
  border-bottom: 1px solid var(--border);
}
.hero-inner {
  display: grid;
  grid-template-columns: 216px 1fr;
  gap: 2rem;
  align-items: center;
}
.photo { width: 216px; }

.intro h1 {
  font-size: 2.1rem;
  margin-bottom: 0.4rem;
}
.identity-slot {
  min-height: 1.7rem;
  margin: 0 0 1.2rem;
  position: relative;
}
.identity {
  color: var(--accent);
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0;
}
.identity-enter-active,
.identity-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.identity-enter-from { opacity: 0; transform: translateY(6px); }
.identity-leave-to   { opacity: 0; transform: translateY(-6px); }

.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
}
.link-pill .gh-icon {
  filter: var(--gh-filter, none);
}
[data-theme="dark"] .gh-icon { filter: invert(1); }
.link-pill.cv {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}
.link-pill.cv:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
.link-pill.no-hover { cursor: default; }
.link-pill.no-hover:hover { border-color: var(--border); color: var(--fg); }

.bio {
  margin-top: 1.2rem;
}
.bio p {
  color: var(--fg);
  line-height: 1.75;
  margin: 0 0 0.9rem;
  max-width: 72ch;
}
.bio p:last-child { margin-bottom: 0; }

@media (max-width: 640px) {
  .hero-inner { grid-template-columns: 1fr; gap: 1.2rem; }
  .photo { width: 168px; justify-self: center; }
  .intro { text-align: left; }
  .intro h1 { font-size: 1.75rem; }
}
</style>
