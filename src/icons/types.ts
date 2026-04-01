import {listIconName} from "./icon.names.type";

export interface IconProps {
  name?: string | IconName
  size?: string | number
  color?: string
  colors?: string[]
  url?: string
  viewBox?: string
  class?: string
}

export type IconName = listIconName
export interface IconRegistry {
  [key: string]: string
}
