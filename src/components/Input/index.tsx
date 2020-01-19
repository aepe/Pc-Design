import { Component, Vue } from "vue-property-decorator";
import inputProps from "./inputProps";
import Icon from "../Icon/icon";
import { VNode } from "vue";
const baseInput = Vue.extend({
  props: { ...inputProps },
  model: {
    prop: "value",
    event: "input.value",
  },
  data() {
    const { value, modelValue } = this.$props;
    return {
      stateValue: modelValue ? modelValue : value,
      isFocus: false,
    };
  },
});

@Component({
  components: {
    Icon,
  },
})
export default class ZInput extends baseInput {
  constructor() {
    super();
  }

  // set input classnames
  private setInputClass() {
    const { $slots, $props } = this;
    return {
      ["z-input"]: true,
      [`z-input-${$props.size}`]: $props.size == "default" ? "" : $props.size,
      "z-input-disabled": $props.disabled,
      "z-input-suffix": $props.suffixIcon || $slots.suffix || $props.clearable,
      "z-input-prefix": $props.prefixIcon || $slots.prefix,
    };
  }

  // handleInput
  private handleInput(e: MouseEvent) {
    const value = (e.target as HTMLInputElement).value;
    this.$emit("input", value);
    this.$emit("input.value", (e.target as HTMLInputElement).value);
    this.stateValue = value;
  }

  // handleChange
  private handleChange(e: MouseEvent) {
    this.$emit("change", (e.target as HTMLInputElement).value);
  }

  // handleClear
  private handleClear(e: MouseEvent) {
    this.stateValue = "";
    this.$emit("clear", e);
  }

  // handleMouseEnter
  private handleMouseEnter() {
    this.isFocus = true;
  }

  // handleMouseLeave
  private handleMouseLeave() {
    this.isFocus = false;
  }

  // render prefixIcon or slot prefixIcon
  private renderPrefixIcon(): JSX.Element {
    const { $props, $slots } = this;
    const prefixIcon = $props.prefixIcon || $slots.prefix;
    if (prefixIcon) {
      return (
        <span class={["z-input-prefix-icon"]}>
          <Icon type={$props.prefixIcon} />
          {$slots.prefix}
        </span>
      );
    }
    return null;
  }

  // render clear icon
  private renderClearIcon(): JSX.Element {
    const { clearable, disabled, suffixIcon, suffix } = this.$props;
    const { stateValue, handleClear, isFocus } = this;
    // 存在suffixIcon 或 suffix 不显示清空图标
    const hasSuffix = suffixIcon || suffix;
    // 不清空，禁用，值为空
    if (!clearable || disabled || stateValue === "" || stateValue === null || stateValue === undefined || hasSuffix) {
      return null;
    }
    if (!isFocus) {
      return null;
    }
    return <Icon type="error" onClick={handleClear} />;
  }

  // suffix
  private renderSuffixIcon(): JSX.Element | VNode[] {
    const { $props, $slots } = this;
    // $slots 直接渲染 $slots.suffix 否则 $props.suffixIcon
    return $slots.suffix ? $slots.suffix : <Icon type={$props.suffixIcon} />;
  }

  // render suffixIcon
  private renderSuffix(): JSX.Element {
    const { $props, renderClearIcon, renderSuffixIcon } = this;
    const suffixClass = {
      "z-input-suffix-icon": true,
      "z-input-clear-icon": $props.clearable,
    };
    return (
      <span class={suffixClass}>
        {renderClearIcon()}
        {renderSuffixIcon()}
      </span>
    );
  }

  // render input
  private renderInput(): JSX.Element {
    const { stateValue, $props, handleInput, handleChange, $listeners } = this;
    const inputProps = {
      attrs: {
        ...$props,
      },
      ref: "input",
      class: "z-input-inner",
      domProps: {
        value: stateValue,
      },
      on: {
        ...$listeners,
        input: handleInput,
        change: handleChange,
      },
    };
    return <input {...inputProps} />;
  }

  //blur
  public blur() {
    (this.$refs.input as HTMLInputElement).blur();
  }

  // focus
  public focus() {
    (this.$refs.input as HTMLInputElement).focus();
  }

  public render(): JSX.Element {
    const { renderInput, renderPrefixIcon, renderSuffix, setInputClass, handleMouseEnter, handleMouseLeave, $listeners } = this;
    const divInputProps = {
      class: setInputClass(),
      on: {
        ...$listeners,
        mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave,
      },
    };
    return (
      <div {...divInputProps}>
        {renderPrefixIcon()}
        {renderInput()}
        {renderSuffix()}
      </div>
    );
  }
}
