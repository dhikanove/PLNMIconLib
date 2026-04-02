import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Icon, iconRegistry, registerIcon } from './icons';
registerIcon('customize-icons', '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\n' +
    '<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M819.9 747.6H204.1c-21.8 0-39.5-17.7-39.5-39.5V278.4c0-21.8 17.7-39.5 39.5-39.5h615.7c21.8 0 39.5 17.7 39.5 39.5v429.7c0.1 21.9-17.6 39.5-39.4 39.5z" fill="#FFD632" /><path d="M819.9 753.1H204.1c-24.8 0-45-20.2-45-45V278.4c0-24.8 20.2-45 45-45h615.7c24.8 0 45 20.2 45 45v429.7c0.1 24.9-20.1 45-44.9 45zM204.1 244.4c-18.7 0-34 15.3-34 34v429.7c0 18.7 15.3 34 34 34h615.7c18.7 0 34-15.3 34-34V278.4c0-18.7-15.3-34-34-34H204.1z" fill="#333336" /><path d="M296.5 766.6h58.3v39.9c0 10.1-8.2 18.4-18.4 18.4h-21.6c-10.1 0-18.4-8.2-18.4-18.4v-39.9z" fill="#FFC86B" /><path d="M336.4 830.4h-21.6c-13.2 0-23.9-10.7-23.9-23.9v-45.4h69.3v45.4c0.1 13.2-10.6 23.9-23.8 23.9zM302 772.1v34.4c0 7.1 5.8 12.9 12.9 12.9h21.6c7.1 0 12.9-5.8 12.9-12.9v-34.4H302z" fill="#333336" /><path d="M441 315.3v-62.1c0-29.4-23.9-53.3-53.3-53.3H263.6c-29.4 0-53.3 23.9-53.3 53.3v62.1c0 24.7 7.8 47.6 21 66.4 6.5 9.2 9.9 20.3 9.9 31.5v160.2c0 11.3-3.4 22.3-9.9 31.5-13.2 18.8-21 41.7-21 66.4v63.1c0 28.9 23.4 52.3 52.3 52.3h126.2c28.9 0 52.3-23.4 52.3-52.3v-63.1c0-24.7-7.7-47.5-20.9-66.2-6.5-9.3-10-20.4-10-31.8v-160c0-11.4 3.4-22.5 10-31.8 13-18.8 20.8-41.6 20.8-66.2z" fill="#68A240" /><path d="M388.7 792.1H262.6c-31.8 0-57.8-25.9-57.8-57.8v-63.1c0-25.1 7.6-49.1 22-69.5 5.8-8.2 8.9-18 8.9-28.4V413.2c0-10.3-3.1-20.1-8.9-28.4-14.4-20.4-22-44.5-22-69.5v-62.1c0-32.4 26.4-58.8 58.8-58.8h124.1c32.4 0 58.8 26.4 58.8 58.8v62.1c0 25-7.6 49-21.9 69.4-5.9 8.3-9 18.2-9 28.7v159.9c0 10.4 3.1 20.3 9 28.7 14.3 20.4 21.9 44.4 21.9 69.4v63.1c0 31.7-25.9 57.6-57.8 57.6zM263.6 205.4c-26.3 0-47.8 21.4-47.8 47.8v62.1c0 22.8 6.9 44.6 20 63.2 7.1 10.1 10.9 22.1 10.9 34.7v160.2c0 12.6-3.8 24.6-10.9 34.7-13.1 18.6-20 40.4-20 63.2v63.1c0 25.8 21 46.8 46.8 46.8h126.2c25.8 0 46.8-21 46.8-46.8v-63.1c0-22.7-6.9-44.5-19.9-63.1-7.2-10.2-11-22.3-11-35V413.3c0-12.7 3.8-24.8 11-35 13-18.5 19.9-40.3 19.9-63.1v-62.1c0-26.3-21.4-47.8-47.8-47.8H263.6z" fill="#333336" /><path d="M780.6 437.5H495.4c-8 0-14.5-6.5-14.5-14.5V317.6c0-8 6.5-14.5 14.5-14.5h285.2c8 0 14.5 6.5 14.5 14.5V423c0 8-6.5 14.5-14.5 14.5z" fill="#D8A128" /><path d="M780.6 443H495.4c-11 0-20-9-20-20V317.6c0-11 9-20 20-20h285.2c11 0 20 9 20 20V423c0 11-8.9 20-20 20zM495.4 308.6c-5 0-9 4-9 9V423c0 5 4 9 9 9h285.2c5 0 9-4 9-9V317.6c0-5-4-9-9-9H495.4zM476.9 889.6c-2.1 0-4-1.2-5-3.2-0.8-1.6-19.7-39-79-19.6-23.1 7.5-41.3 6.6-54.3-2.8-18.3-13.2-18.5-38-18.5-39.1 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5c0 0.3 0.3 20.4 14 30.2 10 7.2 24.9 7.6 44.4 1.2 19.6-6.4 48.1-11 71.8 3.8 14.5 9 20.3 21 20.5 21.5 1.3 2.7 0.1 6-2.6 7.3-0.8 0.5-1.6 0.7-2.3 0.7z m-145.7-64.7z" fill="#333336" /><path d="M550 570.9h-57.3c-4.7 0-8.6-3.8-8.6-8.6V505c0-4.7 3.8-8.6 8.6-8.6H550c4.7 0 8.6 3.8 8.6 8.6v57.3c-0.1 4.7-3.9 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M550 576.4h-57.3c-7.8 0-14.1-6.3-14.1-14.1V505c0-7.8 6.3-14.1 14.1-14.1H550c7.8 0 14.1 6.3 14.1 14.1v57.3c-0.1 7.8-6.4 14.1-14.1 14.1z m-57.3-74.5c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1H550c1.7 0 3.1-1.4 3.1-3.1V505c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /><path d="M667.3 570.9H610c-4.7 0-8.6-3.8-8.6-8.6V505c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6v57.3c0 4.7-3.8 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M667.3 576.4H610c-7.8 0-14.1-6.3-14.1-14.1V505c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1v57.3c0 7.8-6.3 14.1-14.1 14.1zM610 501.9c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1V505c0-1.7-1.4-3.1-3.1-3.1H610z" fill="#333336" /><path d="M784.7 570.9h-57.3c-4.7 0-8.6-3.8-8.6-8.6V505c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6v57.3c0 4.7-3.9 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M784.7 576.4h-57.3c-7.8 0-14.1-6.3-14.1-14.1V505c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1v57.3c0 7.8-6.3 14.1-14.1 14.1z m-57.3-74.5c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1V505c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /><path d="M550 691.6h-57.3c-4.7 0-8.6-3.8-8.6-8.6v-57.3c0-4.7 3.8-8.6 8.6-8.6H550c4.7 0 8.6 3.8 8.6 8.6V683c-0.1 4.8-3.9 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M550 697.1h-57.3c-7.8 0-14.1-6.3-14.1-14.1v-57.3c0-7.8 6.3-14.1 14.1-14.1H550c7.8 0 14.1 6.3 14.1 14.1V683c-0.1 7.8-6.4 14.1-14.1 14.1z m-57.3-74.4c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1H550c1.7 0 3.1-1.4 3.1-3.1v-57.3c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /><path d="M667.3 691.6H610c-4.7 0-8.6-3.8-8.6-8.6v-57.3c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6V683c0 4.8-3.8 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M667.3 697.1H610c-7.8 0-14.1-6.3-14.1-14.1v-57.3c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1V683c0 7.8-6.3 14.1-14.1 14.1zM610 622.7c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1v-57.3c0-1.7-1.4-3.1-3.1-3.1H610z" fill="#333336" /><path d="M784.7 691.6h-57.3c-4.7 0-8.6-3.8-8.6-8.6v-57.3c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6V683c0 4.8-3.9 8.6-8.6 8.6z" fill="#68A240" /><path d="M784.7 697.1h-57.3c-7.8 0-14.1-6.3-14.1-14.1v-57.3c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1V683c0 7.8-6.3 14.1-14.1 14.1z m-57.3-74.4c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1v-57.3c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /></svg>');
// --- AUTO ICON LIST (NO MANUAL) ---
const ICONS = Object.keys(iconRegistry);
// --- STATE ---
const searchQuery = ref('');
const selectedIcon = ref(null);
const activeTab = ref('global');
const activeSection = ref('instalasi');
// --- COMPUTED ---
const filteredIcons = computed(() => {
    const query = searchQuery.value.toLowerCase().trim();
    if (!query)
        return ICONS;
    return ICONS.filter(name => name.toLowerCase().includes(query));
});
// --- METHODS ---
const selectIcon = (name) => {
    selectedIcon.value = name;
    // Opsional: scroll ke panel detail jika di mobile
    document.getElementById('icon-detail')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};
const closeDetail = () => {
    selectedIcon.value = null;
};
const copyToClipboard = async (event, text) => {
    try {
        await navigator.clipboard.writeText(text);
        const btn = event.target;
        const origText = btn.textContent;
        btn.textContent = 'Disalin ✓';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = origText;
            btn.classList.remove('copied');
        }, 2000);
    }
    catch (err) {
        console.error('Gagal menyalin teks: ', err);
    }
};
// --- SCROLLSPY ---
const sections = ['instalasi', 'penggunaan', 'props', 'contoh', 'custom', 'icons'];
const handleScroll = () => {
    let current = 'instalasi';
    for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) {
            current = id;
        }
    }
    activeSection.value = current;
};
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['sidebar-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['lib-name']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tab-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['search-count']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card-name']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-detail']} */ ;
/** @type {__VLS_StyleScopedClasses['close-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['no-results']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['info-box']} */ ;
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['example-grid']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sidebar-logo" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lib-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "version" },
});
(__VLS_ctx.ICONS.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "sidebar-nav" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-section-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "nav-link" },
    ...{ class: ({ active: __VLS_ctx.activeSection === 'instalasi' }) },
    href: "#instalasi",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "dot" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "nav-link" },
    ...{ class: ({ active: __VLS_ctx.activeSection === 'penggunaan' }) },
    href: "#penggunaan",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "dot" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-section-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "nav-link" },
    ...{ class: ({ active: __VLS_ctx.activeSection === 'props' }) },
    href: "#props",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "dot" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "nav-link" },
    ...{ class: ({ active: __VLS_ctx.activeSection === 'contoh' }) },
    href: "#contoh",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "dot" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "nav-link" },
    ...{ class: ({ active: __VLS_ctx.activeSection === 'custom' }) },
    href: "#custom",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "dot" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-section-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "nav-link" },
    ...{ class: ({ active: __VLS_ctx.activeSection === 'icons' }) },
    href: "#icons",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "dot" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero" },
    id: "hero",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-badge" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "dot-green" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.ICONS.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-chips" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "chip" },
});
const __VLS_0 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "docs",
    size: (13),
}));
const __VLS_2 = __VLS_1({
    name: "docs",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "chip" },
});
const __VLS_4 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    name: "leaf",
    size: (13),
}));
const __VLS_6 = __VLS_5({
    name: "leaf",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "chip" },
});
const __VLS_8 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    name: "setting",
    size: (13),
}));
const __VLS_10 = __VLS_9({
    name: "setting",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "chip" },
});
const __VLS_12 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    name: "link",
    size: (13),
}));
const __VLS_14 = __VLS_13({
    name: "link",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    id: "instalasi",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "section-desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "install-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-label" },
});
const __VLS_16 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    name: "docs",
    size: (13),
}));
const __VLS_18 = __VLS_17({
    name: "docs",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copyToClipboard($event, 'npm install @dhikanove/pln-mobile-icons');
        } },
    ...{ class: "copy-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "cm" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    id: "penggunaan",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "section-desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "tabs" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.activeTab = 'global';
        } },
    ...{ class: "tab-btn" },
    ...{ class: ({ active: __VLS_ctx.activeTab === 'global' }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.activeTab = 'local';
        } },
    ...{ class: "tab-btn" },
    ...{ class: ({ active: __VLS_ctx.activeTab === 'local' }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.activeTab === 'global') }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "install-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-label" },
});
const __VLS_20 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    name: "document",
    size: (13),
}));
const __VLS_22 = __VLS_21({
    name: "document",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copyToClipboard($event, 'import { createApp } from \'vue\'\nimport App from \'./App.vue\'\nimport { Icon } from \'@dhikanove/pln-mobile-icons\'\n\nconst app = createApp(App)\napp.component(\'Icon\', Icon)\napp.mount(\'#app\')');
        } },
    ...{ class: "copy-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.activeTab === 'local') }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "install-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-label" },
});
const __VLS_24 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    name: "document",
    size: (13),
}));
const __VLS_26 = __VLS_25({
    name: "document",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copyToClipboard($event, '<script setup lang=\'ts\'>\nimport { Icon } from \'@dhikanove/pln-mobile-icons\'\n</script>\n\n<template>\n  <Icon name=\'home\' />\n</template>');
        } },
    ...{ class: "copy-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    id: "props",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "section-desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "table-wrap" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
    ...{ class: "props-table" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "prop-default" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    id: "contoh",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "section-desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-grid" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-preview" },
});
const __VLS_28 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    name: "home",
    color: "#e2e8f0",
}));
const __VLS_30 = __VLS_29({
    name: "home",
    color: "#e2e8f0",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-code" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-preview" },
});
const __VLS_32 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    name: "heart",
    size: (20),
    color: "#e2e8f0",
}));
const __VLS_34 = __VLS_33({
    name: "heart",
    size: (20),
    color: "#e2e8f0",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    name: "heart",
    size: (32),
    color: "#e2e8f0",
}));
const __VLS_38 = __VLS_37({
    name: "heart",
    size: (32),
    color: "#e2e8f0",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const __VLS_40 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    name: "heart",
    size: (48),
    color: "#e2e8f0",
}));
const __VLS_42 = __VLS_41({
    name: "heart",
    size: (48),
    color: "#e2e8f0",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-code" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-preview" },
});
const __VLS_44 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    name: "star",
    size: (32),
    color: "#FFD700",
}));
const __VLS_46 = __VLS_45({
    name: "star",
    size: (32),
    color: "#FFD700",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    name: "heart",
    size: (32),
    color: "#ef4444",
}));
const __VLS_50 = __VLS_49({
    name: "heart",
    size: (32),
    color: "#ef4444",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    name: "home",
    size: (32),
    color: "#3b82f6",
}));
const __VLS_54 = __VLS_53({
    name: "home",
    size: (32),
    color: "#3b82f6",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-code" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-preview" },
});
const __VLS_56 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    name: "energy",
    size: (36),
    colors: (['#00C853', '#FF6D00']),
}));
const __VLS_58 = __VLS_57({
    name: "energy",
    size: (36),
    colors: (['#00C853', '#FF6D00']),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-code" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-preview" },
    ...{ style: {} },
});
const __VLS_60 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/.no_logo.svg",
    size: (30),
}));
const __VLS_62 = __VLS_61({
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/.no_logo.svg",
    size: (30),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-code" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    id: "custom",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "section-desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "info-box" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "install-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-label" },
});
const __VLS_64 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    name: "document",
    size: (13),
}));
const __VLS_66 = __VLS_65({
    name: "document",
    size: (13),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copyToClipboard($event, '');
        } },
    ...{ class: "copy-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "kw" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "cm" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "str" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "cm" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "example-preview" },
});
const __VLS_68 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    name: "customize-icons",
    size: (40),
}));
const __VLS_70 = __VLS_69({
    name: "customize-icons",
    size: (40),
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "install-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copyToClipboard($event, '');
        } },
    ...{ class: "copy-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "attr" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "val" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    id: "icons",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "section-desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "search-bar-wrap" },
});
const __VLS_72 = {}.Icon;
/** @type {[typeof __VLS_components.Icon, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    name: "search",
    ...{ class: "search-icon" },
    size: (18),
    color: "currentColor",
}));
const __VLS_74 = __VLS_73({
    name: "search",
    ...{ class: "search-icon" },
    size: (18),
    color: "currentColor",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.closeDetail) },
    ...{ class: "search-bar" },
    type: "text",
    value: (__VLS_ctx.searchQuery),
    placeholder: "Cari nama ikon… (contoh: home, star, wallet)",
    autocomplete: "off",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "search-count" },
    id: "search-count",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.filteredIcons.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon-detail" },
    ...{ class: ({ open: __VLS_ctx.selectedIcon }) },
    id: "icon-detail",
});
if (__VLS_ctx.selectedIcon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-inner" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-preview" },
    });
    const __VLS_76 = {}.Icon;
    /** @type {[typeof __VLS_components.Icon, ]} */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        name: (__VLS_ctx.selectedIcon),
        size: (52),
        color: "currentColor",
    }));
    const __VLS_78 = __VLS_77({
        name: (__VLS_ctx.selectedIcon),
        size: (52),
        color: "currentColor",
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-name" },
    });
    (__VLS_ctx.selectedIcon);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-code-block" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.selectedIcon);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.selectedIcon))
                    return;
                __VLS_ctx.copyToClipboard($event, `<Icon name=\x22${__VLS_ctx.selectedIcon}\x22 />`);
            } },
        ...{ class: "copy-btn" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-code-block" },
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.selectedIcon);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.selectedIcon))
                    return;
                __VLS_ctx.copyToClipboard($event, `<Icon name=\x22${__VLS_ctx.selectedIcon}\x22 :size=\x2232\x22 />`);
            } },
        ...{ class: "copy-btn" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-code-block" },
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.selectedIcon);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.selectedIcon))
                    return;
                __VLS_ctx.copyToClipboard($event, `<Icon name=\x22${__VLS_ctx.selectedIcon}\x22 color=\x22#3b82f6\x22 />`);
            } },
        ...{ class: "copy-btn" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "detail-close" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.closeDetail) },
    ...{ class: "close-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon-grid" },
});
if (__VLS_ctx.filteredIcons.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "no-results" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
}
for (const [icon] of __VLS_getVForSourceType((__VLS_ctx.filteredIcons))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectIcon(icon);
            } },
        key: (icon),
        ...{ class: "icon-card" },
        ...{ class: ({ selected: __VLS_ctx.selectedIcon === icon }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "icon-card-svg" },
    });
    const __VLS_80 = {}.Icon;
    /** @type {[typeof __VLS_components.Icon, ]} */ ;
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        name: (icon),
        size: (28),
    }));
    const __VLS_82 = __VLS_81({
        name: (icon),
        size: (28),
    }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "icon-card-name" },
    });
    (icon);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "mono" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://vuejs.org",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://www.npmjs.com/package/@dhikanove/pln-mobile-icons",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['lib-name']} */ ;
/** @type {__VLS_StyleScopedClasses['version']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['dot-green']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-chips']} */ ;
/** @type {__VLS_StyleScopedClasses['chip']} */ ;
/** @type {__VLS_StyleScopedClasses['chip']} */ ;
/** @type {__VLS_StyleScopedClasses['chip']} */ ;
/** @type {__VLS_StyleScopedClasses['chip']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['section-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['install-card']} */ ;
/** @type {__VLS_StyleScopedClasses['code-header']} */ ;
/** @type {__VLS_StyleScopedClasses['code-label']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['cm']} */ ;
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['section-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['tab-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tab-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['install-card']} */ ;
/** @type {__VLS_StyleScopedClasses['code-header']} */ ;
/** @type {__VLS_StyleScopedClasses['code-label']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['install-card']} */ ;
/** @type {__VLS_StyleScopedClasses['code-header']} */ ;
/** @type {__VLS_StyleScopedClasses['code-label']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['section-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['table-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['props-table']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-name']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-type']} */ ;
/** @type {__VLS_StyleScopedClasses['prop-default']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['section-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['example-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['example-card']} */ ;
/** @type {__VLS_StyleScopedClasses['example-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['example-code']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['example-card']} */ ;
/** @type {__VLS_StyleScopedClasses['example-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['example-code']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['example-card']} */ ;
/** @type {__VLS_StyleScopedClasses['example-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['example-code']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['example-card']} */ ;
/** @type {__VLS_StyleScopedClasses['example-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['example-code']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['example-card']} */ ;
/** @type {__VLS_StyleScopedClasses['example-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['example-code']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['section-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['info-box']} */ ;
/** @type {__VLS_StyleScopedClasses['install-card']} */ ;
/** @type {__VLS_StyleScopedClasses['code-header']} */ ;
/** @type {__VLS_StyleScopedClasses['code-label']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['kw']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['cm']} */ ;
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['str']} */ ;
/** @type {__VLS_StyleScopedClasses['cm']} */ ;
/** @type {__VLS_StyleScopedClasses['example-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['install-card']} */ ;
/** @type {__VLS_StyleScopedClasses['code-header']} */ ;
/** @type {__VLS_StyleScopedClasses['code-label']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['attr']} */ ;
/** @type {__VLS_StyleScopedClasses['val']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['section-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['search-count']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-detail']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-info']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-name']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-code-block']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-code-block']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-code-block']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-close']} */ ;
/** @type {__VLS_StyleScopedClasses['close-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['no-results']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card-svg']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-card-name']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['mono']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Icon: Icon,
            ICONS: ICONS,
            searchQuery: searchQuery,
            selectedIcon: selectedIcon,
            activeTab: activeTab,
            activeSection: activeSection,
            filteredIcons: filteredIcons,
            selectIcon: selectIcon,
            closeDetail: closeDetail,
            copyToClipboard: copyToClipboard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
