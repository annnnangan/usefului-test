import { UICategory } from './enum.type'

type UIComponentContent = {
  subTitle: string
  description?: string
  demoCode: string
}

export type UIComponentInfo = {
  mainDescription: string
  image?: string
  content: UIComponentContent[]
}

export type UiDescription = {
  [key in keyof typeof UICategory]?: UIComponentInfo
}

// TODO: Should remove ? when uiDescription is completed.
