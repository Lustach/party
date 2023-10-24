import type { Meta, StoryObj } from "@storybook/vue3"
// for fix error use vs code ext ts volar
import Input from "@/components/ui/Input/Input.vue"
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    id: String,
    label: String,
    placeholder: String,
    disabled: { control: "boolean" }
    // modelValue: string
    // autofocus?: boolean
    // type?: string
    // value?: [string, Number]
    // labelInfo?: boolean
    // autocomplete?: boolean
    // hardAutocompleteOff?: boolean | false
    // disabled?: boolean | undefined
    // max?: [Number, string]
    // min?: Number
    // currency?: string
    // showSetMax?: boolean
    // showErrorText?: boolean
    // error?: [string, boolean]
    // icon?: string
    // withCopy?: boolean
    // text?: string
    // background?: string
    // clearable?: boolean
  }
  //   args: { primary: false } // default value
}

export default meta
type Story = StoryObj<typeof Input>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    label: "Label",
    id: "Input 0",
    placeholder: "placeholder"
  }
}
export const Disabled: Story = {
  args: {
    label: "Label",
    id: "Input 0",
    placeholder: "placeholder",
    disabled: true
  }
}
export const WithCopy: Story = {
  args: {
    label: "Label",
    id: "Input 0",
    placeholder: "placeholder",
    withCopy: true,
    modelValue: "some value to copy"
  }
}
