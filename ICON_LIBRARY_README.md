# Vue Icon Library

Library icon berbasis SVG untuk Vue 3 dengan TypeScript, mirip Font Awesome tapi lebih fleksibel.

## Fitur

- **Icon dari Registry**: Icon SVG yang sudah tersedia siap pakai
- **Custom Size**: Ukuran icon dapat disesuaikan (px, rem, em, dll)
- **Custom Color**: Ubah warna icon dengan mudah
- **Multi-Color Support**: Mendukung icon dengan multiple warna
- **Load dari URL**: Load icon dari URL eksternal
- **Custom via Slot**: Gunakan custom SVG melalui slot
- **TypeScript Support**: Fully typed untuk development yang lebih baik

## Instalasi

Library ini sudah terintegrasi dalam project. Icon tersedia di folder `src/icons/`.

## Penggunaan Dasar

### Import Component

```vue
<script setup lang="ts">
import { Icon } from './icons'
</script>
```

### Icon dari Registry

```vue
<Icon name="home" />
<Icon name="user" />
<Icon name="heart" />
```

### Custom Size

Ukuran dapat berupa number (px) atau string dengan unit:

```vue
<Icon name="heart" :size="16" />
<Icon name="heart" :size="24" />
<Icon name="heart" size="2rem" />
```

### Custom Color

```vue
<Icon name="star" color="#FFD700" />
<Icon name="heart" color="#FF6B6B" />
<Icon name="check" color="rgb(78, 205, 196)" />
```

### Multi-Color Support

Untuk icon dengan multiple path/circle, gunakan prop `colors`:

```vue
<Icon
  name="palette"
  :colors="['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF']"
  :size="48"
/>
```

### Custom Icon via Slot

Jika icon yang dibutuhkan tidak ada di registry:

```vue
<Icon :size="32" color="#3498DB">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="...your svg path..." />
  </svg>
</Icon>
```

### Load dari URL

```vue
<Icon
  url="https://api.iconify.design/mdi:github.svg"
  :size="32"
  color="#333"
/>
```

## Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `name` | `string` | - | Nama icon dari registry |
| `size` | `string \| number` | `24` | Ukuran icon |
| `color` | `string` | `'currentColor'` | Warna icon (single color) |
| `colors` | `string[]` | - | Array warna untuk multi-color icon |
| `url` | `string` | - | URL untuk load icon eksternal |
| `viewBox` | `string` | `'0 0 24 24'` | SVG viewBox |
| `class` | `string` | - | CSS class tambahan |

## Icon yang Tersedia

Icon default yang sudah tersedia:

- `home` - Icon rumah
- `user` - Icon user/profil
- `heart` - Icon love/favorit
- `star` - Icon bintang/rating
- `search` - Icon pencarian
- `settings` - Icon pengaturan
- `trash` - Icon hapus
- `edit` - Icon edit/pensil
- `check` - Icon centang/success
- `close` - Icon close/tutup
- `palette` - Icon palette (multi-color)

## Menambah Icon Baru

### 1. Tambahkan file SVG

Buat file SVG di folder `src/icons/svg/`:

```bash
src/icons/svg/nama-icon.svg
```

### 2. Register di registry

Edit file `src/icons/registry.ts`:

```typescript
import namaIcon from './svg/nama-icon.svg?raw'

export const iconRegistry: IconRegistry = {
  // ... icon lainnya
  'nama-icon': namaIcon,
}
```

### 3. Gunakan icon

```vue
<Icon name="nama-icon" />
```

## Register Icon Secara Dinamis

Anda juga bisa register icon secara programmatic:

```typescript
import { registerIcon } from './icons'

const customSvg = `<svg>...</svg>`
registerIcon('custom-icon', customSvg)
```

## Contoh Penggunaan dalam Component

### Button dengan Icon

```vue
<button class="btn">
  <Icon name="check" :size="20" />
  Save
</button>
```

### Icon dengan Hover Effect

```vue
<template>
  <div @mouseenter="hovered = true" @mouseleave="hovered = false">
    <Icon
      name="heart"
      :color="hovered ? '#FF6B6B' : '#ccc'"
      :size="32"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const hovered = ref(false)
</script>
```

## Tips

1. **currentColor**: Gunakan `color="currentColor"` agar icon mengikuti warna text parent
2. **Multi-color**: Hanya berfungsi pada icon yang memiliki multiple path/shape dengan fill berbeda
3. **Performance**: Icon dari registry lebih cepat karena sudah di-bundle saat build
4. **URL Loading**: Loading dari URL memerlukan network request, gunakan untuk icon dinamis saja

## Struktur File

```
src/icons/
├── svg/              # Folder untuk file SVG
│   ├── home.svg
│   ├── user.svg
│   └── ...
├── Icon.vue          # Component utama
├── registry.ts       # Registry icon
├── types.ts          # Type definitions
├── utils.ts          # Helper functions
└── index.ts          # Export utama
```
