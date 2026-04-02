# PLN Mobile Icons

> Vue 3 SVG icon library — 155+ custom icons with TypeScript support, color customization, and URL loading.

## Documentation
> https://dhikanove.github.io/PLNMIconLib/
## Features

- **155+ SVG icons** — ready to use out of the box
- **TypeScript** — full type safety with `IconName` union type
- **Custom size** — number (px) or any CSS unit (`rem`, `em`, `%`)
- **Custom color** — single color or multi-color support
- **Load from URL** — fetch any external SVG at runtime
- **Slot support** — pass your own inline SVG
- **Tree-shakeable** — only what you use ends up in your bundle
- **Vue 3** — built with `<script setup>` and Composition API

## Installation

```bash
npm install @dhikanove/pln-mobile-icons
```

## Usage

### Register globally (recommended)

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@dhikanove/pln-mobile-icons'

const app = createApp(App)
app.component('Icon', Icon)
app.mount('#app')
```

### Import per component

```vue
<script setup lang="ts">
import { Icon } from '@dhikanove/pln-mobile-icons'
</script>

<template>
  <Icon name="home" />
</template>
```

## Props

| Prop      | Type               | Default          | Description                                    |
| --------- | ------------------ | ---------------- | ---------------------------------------------- |
| `name`    | `IconName | string` | —                | Name of a registered icon                      |
| `size`    | `number | string`  | `24`             | Width & height. Number = px; string = any unit |
| `color`   | `string`           | `'currentColor'` | Fill color applied to all paths                |
| `colors`  | `string[]`         | —                | Array of colors applied to paths in order      |
| `url`     | `string`           | —                | URL of an external SVG to load at runtime      |
| `viewBox` | `string`           | auto-detected    | Override the SVG viewBox attribute             |
| `class`   | `string`           | —                | Extra CSS class on the wrapper element         |

## Examples

```vue
<!-- Basic -->
<Icon name="home" />

<!-- Custom size -->
<Icon name="heart" :size="32" />
<Icon name="heart" size="2rem" />

<!-- Custom color -->
<Icon name="star" color="#FFD700" />

<!-- Multi-color -->
<Icon name="energy" :colors="['#00C853', '#FF6D00']" />

<!-- Load from URL -->
<Icon url="https://example.com/my-icon.svg" />

<!-- Slot: your own SVG -->
<Icon :size="32" color="red">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
  </svg>
</Icon>
```

## Advanced: Register custom icons

```ts
import { registerIcon } from '@dhikanove/pln-mobile-icons'

registerIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>')
```

Then use like any built-in icon:

```vue
<Icon name="my-icon" />
```

## Icon List
> See Full Icon List: https://dhikanove.github.io/PLNMIconLib/#icons
## License

[MIT](./LICENSE) © dhikanove
