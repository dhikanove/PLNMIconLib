import type { IconRegistry } from './types'

// 🔥 AUTO IMPORT SEMUA SVG
const modules = import.meta.glob('./svg/*.svg', {
  as: 'raw',
  eager: true,
}) as Record<string, string>

// 🔥 HELPER: convert file name → kebab-case
function toKebabCase(str: string): string {
  return str
      .replace(/\.svg$/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase → kebab
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // PascalCase fix
      .replace(/_/g, '-')
      .toLowerCase()
}

// 🔥 BUILD REGISTRY OTOMATIS
export const iconRegistry: IconRegistry = Object.fromEntries(
    Object.entries(modules).map(([path, svgContent]) => {
      const fileName = path.split('/').pop() || ''

      const name = toKebabCase(fileName)

      return [name, svgContent]
    })
)

// 🔥 TYPE SAFE (AUTO GENERATED FROM FILES)
export type IconName = keyof typeof iconRegistry

// 🔥 API
export function getIcon(name: IconName): string | undefined {
  return iconRegistry[name]
}

export function registerIcon(name: string, svgContent: string): void {
  iconRegistry[name] = svgContent
}

export function hasIcon(name: string): boolean {
  return name in iconRegistry
}