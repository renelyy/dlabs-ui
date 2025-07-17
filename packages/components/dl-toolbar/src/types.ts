export interface DlToolbarProps {
  buttons?: string[]
  disabled?: boolean
}

export interface DlToolbarEmits {
  (e: 'click', type: string): void
}