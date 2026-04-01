<template>
  <span
    :class="['v-icon', props.class]"
    :style="iconStyle"
    v-html="processedSvg"
    v-if="!$slots.default && processedSvg"
  ></span>
  <span
    v-else-if="$slots.default"
    :class="['v-icon', props.class]"
    :style="iconStyle"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { getIcon } from './registry'
import { processSvgContent, extractViewBox, getSvgSize, loadSvgFromUrl } from './utils'
import type { IconProps } from './types'

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
})

const urlSvgContent = ref<string>('')

const iconStyle = computed(() => {
  const size = getSvgSize(props.size)
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    color: props.colors ? undefined : props.color,
  }
})

const baseSvgContent = computed(() => {
  if (props.url) {
    return urlSvgContent.value
  }
  if (props.name) {
    return getIcon(props.name) || ''
  }
  return ''
})

const processedSvg = computed(() => {
  if (!baseSvgContent.value) return ''

  const defaultViewBox = props.viewBox || extractViewBox(baseSvgContent.value) || '0 0 24 24'

  return processSvgContent(baseSvgContent.value, {
    color: props.color,
    colors: props.colors,
    viewBox: defaultViewBox,
  })
})

async function loadUrlIcon() {
  console.log('loadUrlIcon', props.url)
  if (props.url) {
    try {
      urlSvgContent.value = await loadSvgFromUrl(props.url)
    } catch (error) {
      console.error('Failed to load icon from URL:', error)
      urlSvgContent.value = ''
    }
  }
}

watch(() => props.url, () => {
  if (props.url) {
    loadUrlIcon()
  }
}, { immediate: true })

onMounted(() => {
  if (props.url) {
    loadUrlIcon()
  }
})
</script>

<style scoped>
.v-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.v-icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
