<template>
  <div
    class="input"
    :class="{
      empty: type === 'empty',
      noIcon: !icon,
      error,
      'input--type--currency': isTypeCurrency
    }"
  >
    <label :for="id">
      {{ label }}
      <IconInfo v-if="labelInfo" title="Информация" class="input__label-info" />
    </label>
    <input
      :id="id"
      ref="inputRef"
      v-model="valueRef"
      :type="inputType"
      :placeholder="dynamicPlaceholder"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :disabled="disabled"
      spellcheck="false"
      :style="{ background }"
      :readonly="hardAutocompleteOff"
      onfocus="this.removeAttribute('readonly')"
      :data-qa="dataQa"
      @input="inputHandler"
      @focus="onFocusHandler"
      @blur="onBlurHandler"
    >
    <span v-if="type === 'number' && text" class="input__text">{{ text }}</span>
    <div v-if="error && showErrorText" class="input__error">
      <IconError svg="alert-circle" title="Ошибка" />
      <span class="input__error-text">{{ error }}</span>
    </div>
    <keep-alive v-if="icon">
      <component
        :is="currentIcon"
        class="input__icon"
        :class="{ 'input__icon--disabled': disabled }"
        :data-icon="dataQa && `${dataQa}__icon`"
        @click="$emit('iconClick')"
      />
    </keep-alive>
    <div
      v-if="type === 'password'"
      :data-qa="dataQa && `${dataQa}__visible-button`"
      @click="hide = !hide"
    >
      <transition name="fade">
        <IconShow v-if="hide" svg="eye-outline" title="Показать" class="input__visibility-icon" />
        <IconHide v-else svg="eye-off-outline" title="Скрыть" class="input__visibility-icon" />
      </transition>
    </div>

    <transition name="fade">
      <div v-if="clearable && valueRef" class="input__clear-icon" @click="clearInput">
        <IconClose />
      </div>
    </transition>

    <div v-if="withCopy && valueRef" class="input__copy">
      <IconCopy title="Копировать" :data-qa="dataQa && `${dataQa}__copy-button`" @click="copyValue" />
      <transition name="fade1">
        <span v-if="isCopied" class="input__tooltip">
          {{ "Скопировано в буфер обмена" }}
        </span>
      </transition>
    </div>

    <div
      v-if="showSetMax"
      class="input__max"
      :data-qa="dataQa && `${dataQa}__max-button`"
      @click="setMax"
    >
      {{ "Max" }}
    </div>

    <span v-if="currency" class="input__currency" :style="{ left: `${currencyOffset}px` }">
      {{ currency }}
    </span>

    <!-- for get value width in px -->
    <span ref="currencyTextRef" class="input__hidden-value">{{
      valueRef || dynamicPlaceholder
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, shallowRef, ref, watch, nextTick, onMounted } from "vue"
import { useClipboard } from "@vueuse/core"
import type { Props } from "./props"
import IconInfo from "~/assets/svg/information-outline.svg"
import IconCopy from "~/assets/svg/input/content-copy.svg"
import IconHide from "~/assets/svg/input/eye-off-outline.svg"
import IconShow from "~/assets/svg/eye-outline.svg"
import IconError from "~/assets/svg/input/alert-error.svg"
import IconClose from "~/assets/svg/close-circle-outline.svg"
// import copyToClipboard from '@/helpers/copyToClipboard'
const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue", "focus", "blur", "input", "clear", "iconClick"])

const { copy } = useClipboard()

const valueRef = ref("")
const currentIcon = shallowRef()
const focusFlag = ref(false)
const hide = ref(false)
const isCopied = ref(false)
const isTypeCurrency = computed(() => props.type === "currency")
const currencyOffset = ref(0)

// DOM
const currencyTextRef = ref()
const inputRef = ref()
const textWidth = ref(0)
const inputPaddingLeft = ref(0)
const inputWidth = ref(0)

if (props.icon) {
  import(`../../../assets/svg/input/${props.icon}.svg`).then((val) => {
    currentIcon.value = markRaw(val.default)
  })
}

const inputType = computed(() => {
  if (props.type === "password") {
    return hide.value ? "text" : "password"
  } else if (props.type === "currency") {
    return "text"
  }

  return props.type
})

// when focus, placeholder = ''
const dynamicPlaceholder = computed(() => (focusFlag.value ? "" : props.placeholder))

const placeholderShown = computed(() => {
  return !focusFlag.value && !!dynamicPlaceholder.value && !valueRef.value
})

const prepareRealValue = (value: any) => {
  if (isTypeCurrency.value) {
    return (
      value
        .toString()
        // remove spaces
        .replace(/\s+/g, "")
        .replace(/[БбЮю]/, ".")
        .replace(",", ".")
        // only number
        .replace(/[^.\d]+/g, "")
        // remove extra 0 before decimal
        .replace(/^0+/, "0")
        // remove extra dots
        // eslint-disable-next-line no-useless-escape
        .replace(/^([^\.]*\.)|\./g, "$1")
    )
  }

  return value
}

const prepareModelValue = (value: string) => {
  if (isTypeCurrency.value) {
    return value.replace(/\.$/gm, "")
  }

  return value
}

const setCurrencyOffset = () => {
  nextTick(() => {
    if (currencyTextRef.value) {
      textWidth.value = currencyTextRef.value.clientWidth
      currencyOffset.value =
        inputPaddingLeft.value +
        (textWidth.value >= inputWidth.value ? inputWidth.value : textWidth.value)
    }
  })
}

onMounted(() => {
  valueRef.value = prepareRealValue(props.value || props.modelValue)
  if (inputRef.value) {
    const inputComputedStyles = window.getComputedStyle(inputRef.value)

    inputPaddingLeft.value = parseInt(inputComputedStyles.paddingLeft)
    inputWidth.value =
      inputRef.value.clientWidth -
      inputPaddingLeft.value -
      parseInt(inputComputedStyles.paddingRight)

    setCurrencyOffset()

    if (props.autofocus) {
      inputRef.value.focus()
    }
  }
})

const inputHandler = () => {
  emit("input", prepareModelValue(valueRef.value))
}

const onFocusHandler = (e: Event) => {
  focusFlag.value = true
  emit("focus", e)
}

const onBlurHandler = (e: Event) => {
  focusFlag.value = false
  emit("blur", e)
}

const copyValue = () => {
  if (props.modelValue) { copy(props.modelValue) }
  isCopied.value = true

  setTimeout(() => {
    isCopied.value = false
  }, 1500)
}

const clearInput = () => {
  valueRef.value = ""
  emit("input", prepareModelValue(valueRef.value))
  emit("clear", prepareModelValue(valueRef.value))
}

const setMax = () => {
  if (props.max) {
    valueRef.value = props.max.toString()
    emit("input", prepareModelValue(valueRef.value))

    nextTick(() => {
      inputRef.value.focus()
    })
  }
}
watch(valueRef, (val) => {
  valueRef.value = prepareRealValue(val)

  emit("update:modelValue", prepareModelValue(valueRef.value))
  setCurrencyOffset()
})

// update value from modelValue changed outside
watch(
  () => props.modelValue,
  (val) => {
    valueRef.value = prepareRealValue(val)
  }
)

// update value from :value prop
watch(
  () => props.value,
  (val) => {
    valueRef.value = prepareRealValue(val)
  }
)

watch(placeholderShown, () => {
  setCurrencyOffset()
})
// }
</script>

<style scoped lang="scss">
@import 'styles.scss';
</style>
