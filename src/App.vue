<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {Icon, iconRegistry, registerIcon} from './icons'
registerIcon(
    'customize-icons',
    '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\n' +
    '<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M819.9 747.6H204.1c-21.8 0-39.5-17.7-39.5-39.5V278.4c0-21.8 17.7-39.5 39.5-39.5h615.7c21.8 0 39.5 17.7 39.5 39.5v429.7c0.1 21.9-17.6 39.5-39.4 39.5z" fill="#FFD632" /><path d="M819.9 753.1H204.1c-24.8 0-45-20.2-45-45V278.4c0-24.8 20.2-45 45-45h615.7c24.8 0 45 20.2 45 45v429.7c0.1 24.9-20.1 45-44.9 45zM204.1 244.4c-18.7 0-34 15.3-34 34v429.7c0 18.7 15.3 34 34 34h615.7c18.7 0 34-15.3 34-34V278.4c0-18.7-15.3-34-34-34H204.1z" fill="#333336" /><path d="M296.5 766.6h58.3v39.9c0 10.1-8.2 18.4-18.4 18.4h-21.6c-10.1 0-18.4-8.2-18.4-18.4v-39.9z" fill="#FFC86B" /><path d="M336.4 830.4h-21.6c-13.2 0-23.9-10.7-23.9-23.9v-45.4h69.3v45.4c0.1 13.2-10.6 23.9-23.8 23.9zM302 772.1v34.4c0 7.1 5.8 12.9 12.9 12.9h21.6c7.1 0 12.9-5.8 12.9-12.9v-34.4H302z" fill="#333336" /><path d="M441 315.3v-62.1c0-29.4-23.9-53.3-53.3-53.3H263.6c-29.4 0-53.3 23.9-53.3 53.3v62.1c0 24.7 7.8 47.6 21 66.4 6.5 9.2 9.9 20.3 9.9 31.5v160.2c0 11.3-3.4 22.3-9.9 31.5-13.2 18.8-21 41.7-21 66.4v63.1c0 28.9 23.4 52.3 52.3 52.3h126.2c28.9 0 52.3-23.4 52.3-52.3v-63.1c0-24.7-7.7-47.5-20.9-66.2-6.5-9.3-10-20.4-10-31.8v-160c0-11.4 3.4-22.5 10-31.8 13-18.8 20.8-41.6 20.8-66.2z" fill="#68A240" /><path d="M388.7 792.1H262.6c-31.8 0-57.8-25.9-57.8-57.8v-63.1c0-25.1 7.6-49.1 22-69.5 5.8-8.2 8.9-18 8.9-28.4V413.2c0-10.3-3.1-20.1-8.9-28.4-14.4-20.4-22-44.5-22-69.5v-62.1c0-32.4 26.4-58.8 58.8-58.8h124.1c32.4 0 58.8 26.4 58.8 58.8v62.1c0 25-7.6 49-21.9 69.4-5.9 8.3-9 18.2-9 28.7v159.9c0 10.4 3.1 20.3 9 28.7 14.3 20.4 21.9 44.4 21.9 69.4v63.1c0 31.7-25.9 57.6-57.8 57.6zM263.6 205.4c-26.3 0-47.8 21.4-47.8 47.8v62.1c0 22.8 6.9 44.6 20 63.2 7.1 10.1 10.9 22.1 10.9 34.7v160.2c0 12.6-3.8 24.6-10.9 34.7-13.1 18.6-20 40.4-20 63.2v63.1c0 25.8 21 46.8 46.8 46.8h126.2c25.8 0 46.8-21 46.8-46.8v-63.1c0-22.7-6.9-44.5-19.9-63.1-7.2-10.2-11-22.3-11-35V413.3c0-12.7 3.8-24.8 11-35 13-18.5 19.9-40.3 19.9-63.1v-62.1c0-26.3-21.4-47.8-47.8-47.8H263.6z" fill="#333336" /><path d="M780.6 437.5H495.4c-8 0-14.5-6.5-14.5-14.5V317.6c0-8 6.5-14.5 14.5-14.5h285.2c8 0 14.5 6.5 14.5 14.5V423c0 8-6.5 14.5-14.5 14.5z" fill="#D8A128" /><path d="M780.6 443H495.4c-11 0-20-9-20-20V317.6c0-11 9-20 20-20h285.2c11 0 20 9 20 20V423c0 11-8.9 20-20 20zM495.4 308.6c-5 0-9 4-9 9V423c0 5 4 9 9 9h285.2c5 0 9-4 9-9V317.6c0-5-4-9-9-9H495.4zM476.9 889.6c-2.1 0-4-1.2-5-3.2-0.8-1.6-19.7-39-79-19.6-23.1 7.5-41.3 6.6-54.3-2.8-18.3-13.2-18.5-38-18.5-39.1 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5c0 0.3 0.3 20.4 14 30.2 10 7.2 24.9 7.6 44.4 1.2 19.6-6.4 48.1-11 71.8 3.8 14.5 9 20.3 21 20.5 21.5 1.3 2.7 0.1 6-2.6 7.3-0.8 0.5-1.6 0.7-2.3 0.7z m-145.7-64.7z" fill="#333336" /><path d="M550 570.9h-57.3c-4.7 0-8.6-3.8-8.6-8.6V505c0-4.7 3.8-8.6 8.6-8.6H550c4.7 0 8.6 3.8 8.6 8.6v57.3c-0.1 4.7-3.9 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M550 576.4h-57.3c-7.8 0-14.1-6.3-14.1-14.1V505c0-7.8 6.3-14.1 14.1-14.1H550c7.8 0 14.1 6.3 14.1 14.1v57.3c-0.1 7.8-6.4 14.1-14.1 14.1z m-57.3-74.5c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1H550c1.7 0 3.1-1.4 3.1-3.1V505c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /><path d="M667.3 570.9H610c-4.7 0-8.6-3.8-8.6-8.6V505c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6v57.3c0 4.7-3.8 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M667.3 576.4H610c-7.8 0-14.1-6.3-14.1-14.1V505c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1v57.3c0 7.8-6.3 14.1-14.1 14.1zM610 501.9c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1V505c0-1.7-1.4-3.1-3.1-3.1H610z" fill="#333336" /><path d="M784.7 570.9h-57.3c-4.7 0-8.6-3.8-8.6-8.6V505c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6v57.3c0 4.7-3.9 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M784.7 576.4h-57.3c-7.8 0-14.1-6.3-14.1-14.1V505c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1v57.3c0 7.8-6.3 14.1-14.1 14.1z m-57.3-74.5c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1V505c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /><path d="M550 691.6h-57.3c-4.7 0-8.6-3.8-8.6-8.6v-57.3c0-4.7 3.8-8.6 8.6-8.6H550c4.7 0 8.6 3.8 8.6 8.6V683c-0.1 4.8-3.9 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M550 697.1h-57.3c-7.8 0-14.1-6.3-14.1-14.1v-57.3c0-7.8 6.3-14.1 14.1-14.1H550c7.8 0 14.1 6.3 14.1 14.1V683c-0.1 7.8-6.4 14.1-14.1 14.1z m-57.3-74.4c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1H550c1.7 0 3.1-1.4 3.1-3.1v-57.3c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /><path d="M667.3 691.6H610c-4.7 0-8.6-3.8-8.6-8.6v-57.3c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6V683c0 4.8-3.8 8.6-8.6 8.6z" fill="#D5D9CF" /><path d="M667.3 697.1H610c-7.8 0-14.1-6.3-14.1-14.1v-57.3c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1V683c0 7.8-6.3 14.1-14.1 14.1zM610 622.7c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1v-57.3c0-1.7-1.4-3.1-3.1-3.1H610z" fill="#333336" /><path d="M784.7 691.6h-57.3c-4.7 0-8.6-3.8-8.6-8.6v-57.3c0-4.7 3.8-8.6 8.6-8.6h57.3c4.7 0 8.6 3.8 8.6 8.6V683c0 4.8-3.9 8.6-8.6 8.6z" fill="#68A240" /><path d="M784.7 697.1h-57.3c-7.8 0-14.1-6.3-14.1-14.1v-57.3c0-7.8 6.3-14.1 14.1-14.1h57.3c7.8 0 14.1 6.3 14.1 14.1V683c0 7.8-6.3 14.1-14.1 14.1z m-57.3-74.4c-1.7 0-3.1 1.4-3.1 3.1v57.3c0 1.7 1.4 3.1 3.1 3.1h57.3c1.7 0 3.1-1.4 3.1-3.1v-57.3c0-1.7-1.4-3.1-3.1-3.1h-57.3z" fill="#333336" /></svg>'
)
// --- AUTO ICON LIST (NO MANUAL) ---
const ICONS = Object.keys(iconRegistry)

// --- STATE ---
const searchQuery = ref('')
const selectedIcon = ref<string | null>(null)
const activeTab = ref<'global' | 'local'>('global')
const activeSection = ref('instalasi')

// --- COMPUTED ---
const filteredIcons = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()

  if (!query) return ICONS

  return ICONS.filter(name =>
      name.toLowerCase().includes(query)
  )
})

// --- METHODS ---
const selectIcon = (name: string) => {
  selectedIcon.value = name
  // Opsional: scroll ke panel detail jika di mobile
  document.getElementById('icon-detail')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

const closeDetail = () => {
  selectedIcon.value = null
}

const copyToClipboard = async (event: Event, text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    const btn = event.target as HTMLButtonElement
    const origText = btn.textContent
    btn.textContent = 'Disalin ✓'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = origText
      btn.classList.remove('copied')
    }, 2000)
  } catch (err) {
    console.error('Gagal menyalin teks: ', err)
  }
}

// --- SCROLLSPY ---
const sections = ['instalasi', 'penggunaan', 'props', 'contoh', 'custom', 'icons']
const handleScroll = () => {
  let current = 'instalasi'
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top < 120) {
      current = id
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="layout">
    <aside>
      <div class="sidebar-logo">
        <div class="lib-name">@dhikanove<span>/plnm-icon-lib</span></div>
        <div class="version">v1.0 · {{ICONS.length}} icons</div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-title">Mulai</div>
        <a class="nav-link" :class="{ active: activeSection === 'instalasi' }" href="#instalasi"><span class="dot"></span>Instalasi</a>
        <a class="nav-link" :class="{ active: activeSection === 'penggunaan' }" href="#penggunaan"><span class="dot"></span>Penggunaan</a>

        <div class="nav-section-title">Referensi</div>
        <a class="nav-link" :class="{ active: activeSection === 'props' }" href="#props"><span class="dot"></span>Props</a>
        <a class="nav-link" :class="{ active: activeSection === 'contoh' }" href="#contoh"><span class="dot"></span>Contoh Kode</a>
        <a class="nav-link" :class="{ active: activeSection === 'custom' }" href="#custom"><span class="dot"></span>Custom Icons</a>

        <div class="nav-section-title">Library</div>
        <a class="nav-link" :class="{ active: activeSection === 'icons' }" href="#icons"><span class="dot"></span>Semua Ikon</a>
      </nav>
    </aside>

    <main>
      <div class="hero" id="hero">
        <div class="hero-badge">
          <div class="dot-green"></div>
          @dhikanove/plnm-icon-lib
        </div>
        <h1>PLN Mobile Icon Library<br><span>for Vue 3</span></h1>
        <p>{{ICONS.length}} SVG ikon siap pakai dengan TypeScript support, custom color, dan bisa load dari URL — ringan, tree-shakeable, dan mudah dipakai.</p>
        <div class="hero-chips">
          <div class="chip">
            <Icon name="docs" :size="13" /> TypeScript
          </div>
          <div class="chip">
            <Icon name="leaf" :size="13" /> Tree-shakeable
          </div>
          <div class="chip">
            <Icon name="setting" :size="13" /> Vue 3 Composition API
          </div>
          <div class="chip">
            <Icon name="link" :size="13" /> Load dari URL
          </div>
        </div>
      </div>

      <section id="instalasi">
        <div class="section-label">01 — Mulai</div>
        <h2>Instalasi</h2>
        <p class="section-desc">Install library via npm. Vue 3 wajib tersedia sebagai peer dependency.</p>

        <div class="install-card">
          <div class="code-header">
            <div class="code-label">
              <Icon name="docs" :size="13" /> terminal
            </div>
            <button class="copy-btn" @click="copyToClipboard($event, 'npm install @dhikanove/plnm-icon-lib\nnpm install vue')">Salin</button>
          </div>
          <pre>
<span class="cm"># Install library</span>
<span class="fn">npm</span> install @dhikanove/plnm-icon-lib
          </pre>
        </div>
      </section>

      <section id="penggunaan">
        <div class="section-label">02 — Setup</div>
        <h2>Penggunaan</h2>
        <p class="section-desc">Dua cara register komponen: global (disarankan) atau per-komponen.</p>

        <div class="tabs">
          <button class="tab-btn" :class="{ active: activeTab === 'global' }" @click="activeTab = 'global'">Global (main.ts)</button>
          <button class="tab-btn" :class="{ active: activeTab === 'local' }" @click="activeTab = 'local'">Per Komponen</button>
        </div>

        <div v-show="activeTab === 'global'">
          <div class="install-card">
            <div class="code-header">
              <div class="code-label">
                <Icon name="document" :size="13" /> main.ts
              </div>
              <button class="copy-btn" @click="copyToClipboard($event, 'import { createApp } from \'vue\'\nimport App from \'./App.vue\'\nimport { Icon } from \'@dhikanove/plnm-icon-lib\'\n\nconst app = createApp(App)\napp.component(\'Icon\', Icon)\napp.mount(\'#app\')')">Salin</button>
            </div>
            <pre><span class="kw">import</span> { createApp } <span class="kw">from</span> <span class="str">'vue'</span>
<span class="kw">import</span> App <span class="kw">from</span> <span class="str">'./App.vue'</span>
<span class="kw">import</span> { Icon } <span class="kw">from</span> <span class="str">'@dhikanove/plnm-icon-lib'</span>

<span class="kw">const</span> app = <span class="fn">createApp</span>(App)
app.<span class="fn">component</span>(<span class="str">'Icon'</span>, Icon)
app.<span class="fn">mount</span>(<span class="str">'#app'</span>)</pre>
          </div>
        </div>

        <div v-show="activeTab === 'local'">
          <div class="install-card">
            <div class="code-header">
              <div class="code-label">
                <Icon name="document" :size="13" /> MyComponent.vue
              </div>
              <button class="copy-btn" @click="copyToClipboard($event, '<script setup lang=\'ts\'>\nimport { Icon } from \'@dhikanove/plnm-icon-lib\'\n</script>\n\n<template>\n  <Icon name=\'home\' />\n</template>')">Salin</button>
            </div>
            <pre><span class="tag">&lt;script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="val">"ts"</span><span class="tag">&gt;</span>
<span class="kw">import</span> { Icon } <span class="kw">from</span> <span class="str">'@dhikanove/plnm-icon-lib'</span>
<span class="tag">&lt;/script&gt;</span>

<span class="tag">&lt;template&gt;</span>
  <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"home"</span> <span class="tag">/&gt;</span>
<span class="tag">&lt;/template&gt;</span></pre>
          </div>
        </div>
      </section>

      <section id="props">
        <div class="section-label">03 — Referensi</div>
        <h2>Props</h2>
        <p class="section-desc">Semua props yang tersedia pada komponen <code style="font-family:var(--font-mono);font-size:13px;color:var(--accent-2);background:rgba(34,211,238,0.08);padding:1px 6px;border-radius:4px;">&lt;Icon /&gt;</code>.</p>

        <div class="table-wrap">
          <table class="props-table">
            <thead>
            <tr>
              <th>Prop</th>
              <th>Tipe</th>
              <th>Default</th>
              <th>Deskripsi</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span class="prop-name">name</span></td>
              <td><span class="prop-type">IconName | string</span></td>
              <td><span class="prop-default">—</span></td>
              <td style="color:var(--text-dim)">Nama ikon yang sudah terdaftar</td>
            </tr>
            <tr>
              <td><span class="prop-name">size</span></td>
              <td><span class="prop-type">number | string</span></td>
              <td><span class="prop-default">24</span></td>
              <td style="color:var(--text-dim)">Ukuran lebar & tinggi. Number = px; string = satuan CSS apapun</td>
            </tr>
            <tr>
              <td><span class="prop-name">color</span></td>
              <td><span class="prop-type">string</span></td>
              <td><span class="prop-default">'currentColor'</span></td>
              <td style="color:var(--text-dim)">Warna fill yang diterapkan ke semua path</td>
            </tr>
            <tr>
              <td><span class="prop-name">colors</span></td>
              <td><span class="prop-type">string[]</span></td>
              <td><span class="prop-default">—</span></td>
              <td style="color:var(--text-dim)">Array warna yang diterapkan ke path secara berurutan (multi-color)</td>
            </tr>
            <tr>
              <td><span class="prop-name">url</span></td>
              <td><span class="prop-type">string</span></td>
              <td><span class="prop-default">—</span></td>
              <td style="color:var(--text-dim)">URL SVG eksternal yang di-fetch saat runtime</td>
            </tr>
            <tr>
              <td><span class="prop-name">viewBox</span></td>
              <td><span class="prop-type">string</span></td>
              <td><span class="prop-default">auto-detect</span></td>
              <td style="color:var(--text-dim)">Override atribut viewBox pada SVG</td>
            </tr>
            <tr>
              <td><span class="prop-name">class</span></td>
              <td><span class="prop-type">string</span></td>
              <td><span class="prop-default">—</span></td>
              <td style="color:var(--text-dim)">CSS class tambahan pada elemen wrapper</td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contoh">
        <div class="section-label">04 — Contoh</div>
        <h2>Contoh Kode</h2>
        <p class="section-desc">Berbagai cara penggunaan komponen <code style="font-family:var(--font-mono);font-size:13px;color:var(--accent-2);background:rgba(34,211,238,0.08);padding:1px 6px;border-radius:4px;">&lt;Icon /&gt;</code>.</p>

        <div class="example-grid">
          <div class="example-card">
            <div class="example-preview">
              <Icon name="home" color="#e2e8f0" />
            </div>
            <div class="example-code">
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"home"</span> <span class="tag">/&gt;</span>
            </div>
          </div>

          <div class="example-card">
            <div class="example-preview">
              <Icon name="heart" :size="20" color="#e2e8f0" />
              <Icon name="heart" :size="32" color="#e2e8f0" />
              <Icon name="heart" :size="48" color="#e2e8f0" />
            </div>
            <div class="example-code">
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"heart"</span> <span class="attr">:size</span>=<span class="val">"20"</span> <span class="tag">/&gt;</span><br>
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"heart"</span> <span class="attr">:size</span>=<span class="val">"32"</span> <span class="tag">/&gt;</span><br>
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"heart"</span> <span class="attr">size</span>=<span class="val">"2rem"</span> <span class="tag">/&gt;</span>
            </div>
          </div>

          <div class="example-card">
            <div class="example-preview">
              <Icon name="star" :size="32" color="#FFD700" />
              <Icon name="heart" :size="32" color="#ef4444" />
              <Icon name="home" :size="32" color="#3b82f6" />
            </div>
            <div class="example-code">
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"star"</span> <span class="attr">color</span>=<span class="val">"#FFD700"</span> <span class="tag">/&gt;</span><br>
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"heart"</span> <span class="attr">color</span>=<span class="val">"#ef4444"</span> <span class="tag">/&gt;</span><br>
              <span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"home"</span> <span class="attr">color</span>=<span class="val">"#3b82f6"</span> <span class="tag">/&gt;</span>
            </div>
          </div>

          <div class="example-card">
            <div class="example-preview">
              <Icon name="energy" :size="36" :colors="['#00C853', '#FF6D00']" />
            </div>
            <div class="example-code">
              <span class="tag">&lt;Icon</span><br>
              &nbsp;&nbsp;<span class="attr">name</span>=<span class="val">"energy"</span><br>
              &nbsp;&nbsp;<span class="attr">:colors</span>=<span class="val">"['#00C853', '#FF6D00']"</span><br>
              <span class="tag">/&gt;</span>
            </div>
          </div>

          <div class="example-card">
            <div class="example-preview" style="flex-direction:column;gap:8px;">
              <Icon url="https://upload.wikimedia.org/wikipedia/commons/2/2c/.no_logo.svg" :size="30" />
              <span style="font-size:11px;color:var(--text-muted);font-family:var(--font-mono)">Load dari URL</span>
            </div>
            <div class="example-code">
              <span class="tag">&lt;Icon</span><br>
              &nbsp;&nbsp;<span class="attr">url</span>=<span class="val">"https://example.com/icon.svg"</span><br>
              <span class="tag">/&gt;</span>
            </div>
          </div>
        </div>
      </section>

      <section id="custom">
        <div class="section-label">05 — Lanjutan</div>
        <h2>Register Custom Icon</h2>
        <p class="section-desc">Tambahkan ikon buatan sendiri ke library dan gunakan layaknya ikon bawaan.</p>

        <div class="info-box">
          Gunakan <code>registerIcon(name, svgString)</code> sebelum komponen dirender — umumnya di <code>main.ts</code> atau plugin setup.
        </div>

        <div class="install-card">
          <div class="code-header">
            <div class="code-label">
              <Icon name="document" :size="13" /> main.ts
            </div>
            <button class="copy-btn" @click="copyToClipboard($event,'')">Salin</button>
          </div>
          <pre><span class="kw">import</span> { registerIcon } <span class="kw">from</span> <span class="str">'@dhikanove/plnm-icon-lib'</span>

<span class="cm">// Daftarkan ikon custom</span>
<span class="fn">registerIcon</span>(
  <span class="str">'my-logo'</span>,
  <span class="str">'&lt;svg viewBox="0 0 24 24"&gt;...&lt;/svg&gt;'</span>
)

<span class="cm">// Sekarang bisa dipakai seperti ikon bawaan</span></pre>
          <div class="example-preview">
            <Icon name="customize-icons" :size="40"></Icon>
          </div>
        </div>

        <div style="margin-top:12px">
          <div class="install-card">
            <div class="code-header">
              <div class="code-label">template</div>
              <button class="copy-btn" @click="copyToClipboard($event, '')">Salin</button>
            </div>
            <pre><span class="tag">&lt;Icon</span> <span class="attr">name</span>=<span class="val">"my-logo"</span> <span class="tag">/&gt;</span></pre>
          </div>
        </div>
      </section>

      <section id="icons">
        <div class="section-label">06 — Library</div>
        <h2>Semua Ikon</h2>
        <p class="section-desc">Klik ikon untuk melihat contoh kode pemakaian.</p>

        <div class="search-bar-wrap">
          <Icon name="search" class="search-icon" :size="18" color="currentColor" />
          <input
              class="search-bar"
              type="text"
              v-model="searchQuery"
              placeholder="Cari nama ikon… (contoh: home, star, wallet)"
              autocomplete="off"
              @input="closeDetail"
          />
        </div>
        <div class="search-count" id="search-count"><span>{{ filteredIcons.length }}</span> ikon tersedia</div>

        <div class="icon-detail" :class="{ open: selectedIcon }" id="icon-detail">
          <div class="detail-inner" v-if="selectedIcon">
            <div class="detail-preview">
              <Icon :name="selectedIcon" :size="52" color="currentColor" />
            </div>
            <div class="detail-info">
              <div class="detail-name">{{ selectedIcon }}</div>

              <div class="detail-code-block">
                <span>&lt;Icon name="{{ selectedIcon }}" /&gt;</span>
                <button class="copy-btn" @click="copyToClipboard($event, `<Icon name=\x22${selectedIcon}\x22 />`)">Salin</button>
              </div>

              <div class="detail-code-block" style="margin-top:0">
                <span>&lt;Icon name="{{ selectedIcon }}" :size="32" /&gt;</span>
                <button class="copy-btn" @click="copyToClipboard($event, `<Icon name=\x22${selectedIcon}\x22 :size=\x2232\x22 />`)">Salin</button>
              </div>

              <div class="detail-code-block" style="margin-top:0">
                <span>&lt;Icon name="{{ selectedIcon }}" color="#3b82f6" /&gt;</span>
                <button class="copy-btn" @click="copyToClipboard($event, `<Icon name=\x22${selectedIcon}\x22 color=\x22#3b82f6\x22 />`)">Salin</button>
              </div>
            </div>
          </div>
          <div class="detail-close">
            <button class="close-btn" @click="closeDetail">✕</button>
          </div>
        </div>

        <div class="icon-grid">
          <div v-if="filteredIcons.length === 0" class="no-results">
            <strong>Tidak ada hasil</strong>Coba kata kunci lain, misal: "home", "wallet"
          </div>

          <div
              v-for="icon in filteredIcons"
              :key="icon"
              class="icon-card"
              :class="{ selected: selectedIcon === icon }"
              @click="selectIcon(icon)"
          >
            <div class="icon-card-svg">
              <Icon :name="icon" :size="28" />
            </div>
            <div class="icon-card-name">{{ icon }}</div>
          </div>
        </div>
      </section>

      <div class="footer">
        <div>
          <span class="mono">@dhikanove/plnm-icon-lib</span> · MIT License · © dhikanove
        </div>
        <div>
          Dibuat dengan <a href="https://vuejs.org" target="_blank">Vue 3</a> ·
          <a href="https://www.npmjs.com/package/@dhikanove/plnm-icon-lib" target="_blank">npm</a>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* CSS dibiarkan serupa agar tampilan identik, disesuaikan untuk component scoped styling */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:global(:root) {
  --bg: #0b0f1a;
  --surface: #111827;
  --surface-2: #1a2235;
  --border: #1f2d45;
  --accent: #3b82f6;
  --accent-glow: rgba(59,130,246,0.18);
  --accent-2: #22d3ee;
  --text: #e2e8f0;
  --text-muted: #64748b;
  --text-dim: #94a3b8;
  --green: #10b981;
  --yellow: #f59e0b;
  --red: #ef4444;
  --radius: 12px;
  --radius-sm: 8px;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Base Styles inherit dari setup asli */
.layout {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
}

aside {
  width: 260px;
  flex-shrink: 0;
  background: var(--surface);
  border-right: 1px solid var(--border);
  position: fixed;
  top: 0; left: 0; bottom: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 100;
  padding-bottom: 32px;
}

.sidebar-logo {
  padding: 28px 24px 20px;
  border-bottom: 1px solid var(--border);
}
.sidebar-logo .lib-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  color: var(--text);
  letter-spacing: -0.5px;
}
.sidebar-logo .lib-name span { color: var(--accent); }
.sidebar-logo .version {
  display: inline-block;
  margin-top: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--accent-glow);
  color: var(--accent);
  border: 1px solid rgba(59,130,246,0.3);
  padding: 2px 8px;
  border-radius: 999px;
}

.sidebar-nav { padding: 16px 12px; flex: 1; }
.nav-section-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 8px 12px 4px;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  color: var(--text-dim);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.15s;
  cursor: pointer;
}
.nav-link:hover, .nav-link.active {
  background: var(--accent-glow);
  color: var(--accent);
}
.nav-link .dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--border);
  flex-shrink: 0;
}
.nav-link.active .dot { background: var(--accent); }

main {
  margin-left: 260px;
  flex: 1;
  padding: 0 48px 80px;
  max-width: 1100px;
}

.hero {
  padding: 72px 0 56px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 64px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px 14px 4px 8px;
  font-size: 12px;
  color: var(--text-dim);
  margin-bottom: 20px;
  font-family: var(--font-mono);
}
.hero-badge .dot-green {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 6px var(--green);
}
.hero h1 {
  font-family: var(--font-display);
  font-size: 52px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 16px;
}
.hero h1 span { color: var(--accent); }
.hero p {
  font-size: 17px;
  color: var(--text-dim);
  max-width: 520px;
  margin-bottom: 32px;
  font-weight: 300;
}
.hero-chips { display: flex; flex-wrap: wrap; gap: 10px; }
.chip {
  display: flex; align-items: center; gap: 6px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 5px 14px;
  font-size: 12.5px;
  color: var(--text-dim);
  font-weight: 500;
}

section { margin-bottom: 72px; }
.section-label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  font-family: var(--font-mono);
  margin-bottom: 8px;
}
h2 {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 6px;
}
.section-desc {
  color: var(--text-dim);
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 32px;
}

.install-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.code-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 16px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
}
.code-label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--text-muted);
  display: flex; align-items: center; gap: 6px;
}
.copy-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.copy-btn.copied { border-color: var(--green); color: var(--green); }

pre {
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 13.5px;
  overflow-x: auto;
  line-height: 1.7;
}
.kw { color: #f472b6; }
.str { color: #a3e635; }
.cm { color: #475569; font-style: italic; }
.fn { color: #60a5fa; }
.tag { color: #f472b6; }
.attr { color: #34d399; }
.val { color: #fbbf24; }

.tabs { display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--border); }
.tab-btn {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 8px 18px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-muted);
  cursor: pointer;
  margin-bottom: -1px;
  transition: all 0.15s;
}
.tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }

.props-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
.props-table th {
  text-align: left;
  padding: 10px 16px;
  background: var(--surface-2);
  color: var(--text-dim);
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border);
}
.props-table th:first-child { border-radius: var(--radius-sm) 0 0 0; }
.props-table th:last-child { border-radius: 0 var(--radius-sm) 0 0; }
.props-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
  line-height: 1.5;
}
.props-table tr:last-child td { border-bottom: none; }
.props-table tr:hover td { background: rgba(255,255,255,0.015); }
.prop-name {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--accent-2);
  background: rgba(34,211,238,0.08);
  border: 1px solid rgba(34,211,238,0.18);
  padding: 2px 8px;
  border-radius: 5px;
  white-space: nowrap;
}
.prop-type { font-family: var(--font-mono); font-size: 12px; color: #c084fc; }
.prop-default { font-family: var(--font-mono); font-size: 12px; color: var(--yellow); }
.table-wrap {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.example-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.example-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.example-preview {
  padding: 32px 24px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--surface-2) 0%, var(--bg) 100%);
  min-height: 110px;
  border-bottom: 1px solid var(--border);
  gap: 16px;
  flex-wrap: wrap;
}
.example-code {
  padding: 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.6;
  overflow-x: auto;
  color: var(--text-dim);
}

.search-bar-wrap { position: relative; margin-bottom: 24px; }
.search-bar {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 13px 18px 13px 48px;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.search-bar:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
.search-bar::placeholder { color: var(--text-muted); }
.search-icon {
  position: absolute;
  left: 16px; top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}
.search-count {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.search-count span { color: var(--accent); font-weight: 500; }

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  gap: 8px;
}

.icon-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 18px 8px 14px;
  display: flex; flex-direction: column;
  align-items: center; gap: 10px;
  cursor: pointer;
  transition: all 0.15s;
  position: relative;
  overflow: hidden;
}
.icon-card:hover {
  border-color: var(--accent);
  background: var(--accent-glow);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(59,130,246,0.12);
}
.icon-card.selected {
  border-color: var(--accent);
  background: rgba(59,130,246,0.15);
}
.icon-card-svg {
  display: flex; align-items: center; justify-content: center;
  color: var(--text);
}
.icon-card-name {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  text-align: center;
  word-break: break-all;
  line-height: 1.3;
}
.icon-card:hover .icon-card-name { color: var(--accent); }

.icon-detail {
  background: var(--surface);
  border: 1px solid var(--accent);
  border-radius: var(--radius);
  padding: 24px;
  margin-bottom: 24px;
  display: none;
  position: relative;
  animation: slideDown 0.18s ease;
}
.icon-detail.open { display: block; }
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
.detail-inner { display: flex; gap: 24px; align-items: flex-start; }
.detail-preview {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  width: 100px; height: 100px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.detail-info { flex: 1; min-width: 0; }
.detail-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.detail-code-block {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-dim);
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  margin-bottom: 8px;
}
.detail-close {
  position: absolute;
  right: 16px; top: 16px;
}
.close-btn {
  background: none; border: 1px solid var(--border);
  color: var(--text-muted); border-radius: 6px;
  width: 28px; height: 28px;
  cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.close-btn:hover { border-color: var(--red); color: var(--red); }
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 24px;
  color: var(--text-muted);
  font-size: 14px;
}
.no-results strong { display: block; font-size: 18px; margin-bottom: 6px; color: var(--text-dim); }

.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0 0;
  margin-top: 80px;
  color: var(--text-muted);
  font-size: 13px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 8px;
}
.footer a { color: var(--accent); text-decoration: none; }
.footer .mono { font-family: var(--font-mono); }

.info-box {
  background: var(--surface-2);
  border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 14px 18px;
  font-size: 14px;
  color: var(--text-dim);
  margin-bottom: 24px;
}
.info-box code {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--accent-2);
  background: rgba(34,211,238,0.08);
  padding: 1px 6px;
  border-radius: 4px;
}

@media (max-width: 900px) {
  .layout {width: fit-content}
  aside { display: none; }
  main { margin-left: 0; padding: 0 20px 60px; }
  .hero h1 { font-size: 36px; }
  .example-grid { grid-template-columns: 1fr; }
}
</style>