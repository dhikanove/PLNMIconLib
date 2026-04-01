import { computed, ref, watch } from 'vue';
import { getIcon } from './registry';
import { processSvgContent, extractViewBox, getSvgSize, loadSvgFromUrl } from './utils';
const props = withDefaults(defineProps(), {
    size: 24,
    color: 'currentColor',
});
const urlSvgContent = ref('');
const iconStyle = computed(() => {
    const size = getSvgSize(props.size);
    return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        // Perbaikan typo opsional: pastikan di IconProps adalah 'colors' (jamak)
        color: props.colors ? undefined : props.color,
    };
});
const baseSvgContent = computed(() => {
    if (props.url) {
        return urlSvgContent.value;
    }
    if (props.name) {
        return getIcon(props.name) || '';
    }
    return '';
});
const processedSvg = computed(() => {
    if (!baseSvgContent.value)
        return '';
    const defaultViewBox = props.viewBox || extractViewBox(baseSvgContent.value) || '0 0 24 24';
    return processSvgContent(baseSvgContent.value, {
        color: props.color,
        colors: props.colors,
        viewBox: defaultViewBox,
    });
});
async function loadUrlIcon() {
    if (!props.url)
        return; // Guard clause simpel
    try {
        urlSvgContent.value = await loadSvgFromUrl(props.url);
    }
    catch (error) {
        console.error('Failed to load icon from URL:', error);
        urlSvgContent.value = '';
    }
}
// Watcher dengan immediate: true sudah mencakup lifecycle mounted!
// Anda bisa menghapus hook onMounted di bawah agar tidak fetch 2x saat inisialisasi.
watch(() => props.url, () => {
    loadUrlIcon();
}, { immediate: true });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    size: 24,
    color: 'currentColor',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['v-icon']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (!__VLS_ctx.$slots.default && __VLS_ctx.processedSvg) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: (['v-icon', __VLS_ctx.$props.class]) },
        ...{ style: (__VLS_ctx.iconStyle) },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.processedSvg) }, null, null);
}
else if (__VLS_ctx.$slots.default) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: (['v-icon', __VLS_ctx.$props.class]) },
        ...{ style: (__VLS_ctx.iconStyle) },
    });
    var __VLS_0 = {};
}
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            iconStyle: iconStyle,
            processedSvg: processedSvg,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
