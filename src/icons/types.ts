import {iconRegistry} from "./registry";

export interface IconProps {
  name?: string | IconName
  size?: string | number
  color?: string
  colors?: string[]
  url?: string
  viewBox?: string
  class?: string
}

export type IconName = keyof typeof iconRegistry
export const ICONS = Object.keys(iconRegistry) as IconName[]
export interface IconRegistry {
  [key: string]: string
}
