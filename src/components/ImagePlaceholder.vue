<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const props = withDefaults(defineProps<{
  src: string | string[];
  alt: string;
  aspectRatio?: string;
  label?: string;
  rounded?: boolean;
  interval?: number;
  fit?: 'cover' | 'contain';
}>(), {
  aspectRatio: '16 / 9',
  rounded: false,
  interval: 4000,
  fit: 'cover',
});

const sources = computed(() => Array.isArray(props.src) ? props.src : [props.src]);
const idx = ref(0);
const failed = ref<Record<number, boolean>>({});
const wrapper = ref<HTMLElement | null>(null);
let timer: number | undefined;

const isVideo = (s: string) => /\.(mp4|webm|mov)$/i.test(s);
const currentIsVideo = computed(() => isVideo(sources.value[idx.value] ?? ''));

const clearTimer = () => {
  if (timer !== undefined) {
    window.clearInterval(timer);
    timer = undefined;
  }
};
const startTimer = () => {
  clearTimer();
  // Skip the auto-timer while a video plays — we advance on its `ended` event.
  if (sources.value.length > 1 && !currentIsVideo.value) {
    timer = window.setInterval(() => {
      idx.value = (idx.value + 1) % sources.value.length;
    }, props.interval);
  }
};

const syncVideos = () => {
  const wrap = wrapper.value;
  if (!wrap) return;
  wrap.querySelectorAll<HTMLVideoElement>('video[data-slide]').forEach((v) => {
    const slideIdx = Number(v.dataset.slide);
    if (slideIdx === idx.value) {
      v.currentTime = 0;
      v.play().catch(() => { /* autoplay may be blocked; ignore */ });
    } else {
      v.pause();
    }
  });
};

onMounted(() => {
  startTimer();
  nextTick(syncVideos);
});
onUnmounted(clearTimer);
watch(() => props.src, () => {
  idx.value = 0;
  failed.value = {};
  startTimer();
  nextTick(syncVideos);
});
watch(idx, () => {
  startTimer();
  nextTick(syncVideos);
});

const onError = (i: number) => { failed.value = { ...failed.value, [i]: true }; };

const onVideoEnded = (i: number) => {
  if (i !== idx.value || sources.value.length <= 1) return;
  idx.value = (idx.value + 1) % sources.value.length;
};

const go = (i: number) => {
  idx.value = i;
};
</script>

<template>
  <div
    ref="wrapper"
    class="img-wrap"
    :class="{ rounded }"
    :style="{ aspectRatio, '--fit': fit }"
  >
    <template v-for="(src, i) in sources" :key="src">
      <video
        v-if="isVideo(src) && !failed[i]"
        v-show="i === idx"
        :data-slide="i"
        :src="src"
        autoplay
        muted
        :loop="sources.length === 1"
        playsinline
        @error="onError(i)"
        @ended="onVideoEnded(i)"
      />
      <img
        v-else-if="!failed[i]"
        v-show="i === idx"
        :src="src"
        :alt="alt"
        @error="onError(i)"
      />
      <div
        v-else
        v-show="i === idx"
        class="placeholder"
        role="img"
        :aria-label="alt"
      >
        <div class="icon">🖼</div>
        <div class="label">{{ label ?? alt }}</div>
        <code class="path">replace: {{ src }}</code>
      </div>
    </template>

    <div v-if="sources.length > 1" class="dots" role="tablist">
      <button
        v-for="(_, i) in sources"
        :key="i"
        type="button"
        role="tab"
        :aria-label="`Show media ${i + 1}`"
        :aria-selected="i === idx"
        :class="{ active: i === idx }"
        @click.stop.prevent="go(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.img-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--bg-soft);
}
.img-wrap.rounded { border-radius: 50%; }
.img-wrap img,
.img-wrap video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: var(--fit, cover);
  display: block;
}
.placeholder {
  position: absolute;
  inset: 0;
  border: 2px dashed var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 1rem;
  text-align: center;
  background:
    repeating-linear-gradient(
      45deg,
      var(--bg-soft) 0 10px,
      transparent 10px 20px
    ),
    var(--bg-soft);
}
.img-wrap.rounded .placeholder { border-radius: 50%; }
.icon { font-size: 1.4rem; opacity: 0.55; }
.label {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 500;
  line-height: 1.3;
  max-width: 90%;
}
.path {
  font-size: 0.7rem;
  color: var(--muted);
  background: var(--tag-bg);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  word-break: break-all;
}

.dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6px;
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 2;
}
.dots button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease, transform 0.2s ease;
}
.dots button:hover { transform: scale(1.15); }
.dots button.active {
  background: var(--accent);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8);
}
</style>
