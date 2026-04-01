import fs from 'fs'
import { resolve } from 'path'

const ICON_DIR = resolve(process.cwd(), 'src/icons/svg')
const OUTPUT = resolve(process.cwd(), 'src/icons/icon.names.type.ts')

const files = fs
    .readdirSync(ICON_DIR)
    .filter(f => f.endsWith('.svg'))

const toKebabCase = (str: string) =>
    str
        .replace(/\.svg$/, '')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase()

const names = files.map(toKebabCase)

const content = `// AUTO-GENERATED FILE - DO NOT EDIT
export const LIST_ICON_NAMES = ${JSON.stringify(names, null, 2)} as const

export type listIconName = typeof LIST_ICON_NAMES[number]
`

fs.writeFileSync(OUTPUT, content)

console.log('✅ icon-names.ts generated!')