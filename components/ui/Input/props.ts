// import type { PropType } from 'vue'
export interface Props {
  // data
  id: string
  label?: string
  placeholder: string
  autofocus?: boolean
  type?: string
  modelValue?: string
  value?: [string, Number]
  labelInfo?: boolean
  autocomplete?: boolean
  hardAutocompleteOff?: boolean | false
  disabled?: boolean | undefined
  max?: [Number, string]
  min?: Number
  currency?: string
  showSetMax?: boolean
  showErrorText?: boolean
  error?: [string, boolean]
  withCopy?: boolean
  text?: string
  clearable?: boolean
  dataQa?: string | null
  // style
  icon?: string
  background?: string
}
