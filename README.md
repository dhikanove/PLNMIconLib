# @dhikanove/plnm-icon-lib

> Vue 3 SVG icon library — 155+ custom icons with TypeScript support, color customization, and URL loading.

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
npm install @dhikanove/plnm-icon-lib
```

## Usage

### Register globally (recommended)

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@dhikanove/plnm-icon-lib'

const app = createApp(App)
app.component('Icon', Icon)
app.mount('#app')
```

### Import per component

```vue
<script setup lang="ts">
import { Icon } from '@dhikanove/plnm-icon-lib'
</script>

<template>
  <Icon name="home" />
</template>
```

## Props

| Prop      | Type                 | Default          | Description                                    |
| --------- | -------------------- | ---------------- | ---------------------------------------------- |
| `name`    | `IconName \| string` | —                | Name of a registered icon                      |
| `size`    | `number \| string`   | `24`             | Width & height. Number = px; string = any unit |
| `color`   | `string`             | `'currentColor'` | Fill color applied to all paths                |
| `colors`  | `string[]`           | —                | Array of colors applied to paths in order      |
| `url`     | `string`             | —                | URL of an external SVG to load at runtime      |
| `viewBox` | `string`             | auto-detected    | Override the SVG viewBox attribute             |
| `class`   | `string`             | —                | Extra CSS class on the wrapper element         |

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
import { registerIcon } from '@dhikanove/plnm-icon-lib'

registerIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>')
```

Then use like any built-in icon:

```vue
<Icon name="my-icon" />
```

## Icon List
`a5-connector` · `ac-connector` · `add-friends` · `arrange` · `arrange-line` · `arrow-down` · `arrow-left` · `arrow-right` · `arrow-up` · `battery` · `battery-charge` · `battery-low` · `battery-not-found` · `batu-bata` · `block` · `cc` · `calendar` · `calendar-fill` · `call-center` · `car` · `car-front` · `cart` · `charge` · `charge-plug` · `chart` · `chat` · `check` · `checkmark` · `checkmark-circle` · `checkmark-circle-outline` · `chevron-down` · `chevron-left` · `chevron-right` · `chevron-up` · `circuit-breaker` · `clock` · `clock-outline` · `close` · `close-circle` · `co2` · `coffeeshop` · `contact` · `copy` · `copy-outline` · `dcccs2` · `dcch-ade-mo` · `delete` · `delivery` · `discount` · `discount-outline` · `docs` · `document-add` · `download` · `ev-car` · `ev-charger` · `edit` · `edit-fill` · `email` · `energy` · `event-solid` · `filter` · `filter-outline` · `flag` · `focus` · `food` · `gbt` · `gift` · `green-energy` · `green-energy-lamp` · `group` · `group-outline` · `help` · `history` · `history-outline` · `home` · `home-1` · `home-2` · `home-charging` · `id` · `info-solid` · `information` · `information-circle` · `instagram` · `keranjang` · `leaf` · `lens` · `lighting` · `lighting-1` · `lighting-2` · `like` · `like-outline` · `link` · `listrik` · `loading` · `location` · `location-outline` · `login` · `maintenance` · `map` · `minus` · `money` · `more-horizontal` · `more-vertical` · `movie-clip` · `musholla` · `navigate` · `navigate-outline` · `no-wifi` · `notification` · `paket` · `palu` · `pemadaman` · `pesanan` · `pickup-point` · `pin` · `pin-attention` · `pin-charger-station` · `pin-charger-station-splu` · `pin-error` · `pin-location` · `pin-map` · `pin-titik-pengisian-baterai` · `pin-titik-pengisian-socket` · `plug` · `plug-1` · `plus` · `power-socket` · `power-socket-outline` · `profile` · `profile-outline` · `question` · `refresh` · `report` · `rewards` · `rewards-outline` · `rice-cooker` · `route` · `scan` · `search` · `selfie` · `send` · `settings` · `share` · `share-outline` · `sort` · `star` · `star-outline` · `stopwatch` · `studio` · `studio-1` · `swap` · `swap-1` · `tagihan` · `thumbs` · `toilet` · `transaksi` · `transaksi-outline` · `trash` · `ubah-daya` · `upload` · `user` · `verify` · `voucher` · `wallet` · `wallet-outline` · `warning` · `warning-outline` · `watt` · `wifi` · `wifi-router` · `wifi-upgrade` · `worker` · `heart` · `image`
## License

[MIT](./LICENSE) © dhikanove
