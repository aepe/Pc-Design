import { Component, Vue } from 'vue-property-decorator';
import inputProps from './inputProps';
import Icon from "../Icon/icon";
const baseInput = Vue.extend({
  props: {...inputProps},
  model: {
    prop: 'value',
    event: 'input.value',
  },
  data() {
    const { value, modelValue } = this.$props;
    return {
      stateValue: modelValue ? modelValue : value,
    }
  },
})

@Component({
  components: {
    Icon,
  },
})
export default class ZInput extends baseInput {
  constructor () {
    super();
  }

  // set input classnames
  public setInputClass() {
    const { $slots, $props } = this;
    return {
      [`z-input-${$props.size}`]: $props.size == 'default' ? '' : $props.size,
      'z-input-disabled': $props.disabled,
      'z-input-suffix': $props.suffixIcon || $slots.suffix || $props.clearable,
      'z-input-prefix': $props.prefixIcon || $slots.prefix
    };
  }

  // set icon classnames
  public setIconClass() {
    const { $props, $slots } = this;
    const prefix = $props.prefixIcon || $slots.prefix;
    return {
      [`z-input-icon-${$props.size}`]: prefix ? $props.size : '',
    }
  }

  // handleInput
  public handleInput(e) {
    const value = e.target.value;
    this.$emit('input', value);
    this.$emit('input.value', e.target.value);
    this.stateValue = value;
  }

  // handleChange
  public handleChange(e) {
    this.$emit('change', e.target.value);
  }

  // handleClear
  public handleClear(e) {
    this.stateValue = '';
    this.$emit('clear', e);
  }

  //blur
  public blur() {
    (this.$refs.input as HTMLInputElement).blur();
  }

  // focus
  public focus() {
    (this.$refs.input as HTMLInputElement).focus();
  }

  // render prefixIcon or slot prefixIcon
  public renderPrefixIcon(): JSX.Element {
    const { $props, $slots } = this;
    const prefixIcon = $props.prefixIcon || $slots.prefix;
    if (prefixIcon) {
      return <span class={["z-input-prefix-icon"]}>
        <Icon type={$props.prefixIcon} />
        {$slots.prefix}
      </span>
    }
    return null;
  }

  // render clear icon
  public renderClearIcon(): JSX.Element {
    const { clearable, disabled, suffixIcon, suffix } = this.$props;
    const { stateValue, handleClear } = this;
    // 存在suffixIcon 或 suffix 不显示清空图标
    const hasSuffix = suffixIcon || suffix;
    // 不清空，禁用，值为空
    if (!clearable || disabled || stateValue === '' || stateValue === null || stateValue === undefined || hasSuffix) {
      return null;
    }
    return <Icon type="error" onClick={handleClear}/>;
  }

  // suffix
  public renderSuffixIcon() {
    const { $props, $slots } = this;
    // $slots 直接渲染 $slots.suffix 否则 $props.suffixIcon
    return $slots.suffix ? $slots.suffix : <Icon type={$props.suffixIcon} />
  }

  // render suffixIcon
  public renderSuffix() {
    const { $props, $slots, renderClearIcon, renderSuffixIcon } = this;
    const suffixClass = {
      "z-input-suffix-icon": true,
      "z-input-clear-icon": $props.clearable,
    }
    return <span class={suffixClass}>
        {renderClearIcon()}
        {renderSuffixIcon()}
      </span>
  }

  // render input
  public renderInput(): JSX.Element {
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
      }
    }
    return <input {...inputProps} />;
  }

  public render() {
    const { renderInput, renderPrefixIcon, renderSuffix, setInputClass } = this;
    return (
      <div class={["z-input", setInputClass()]}>
        {renderPrefixIcon()}
        {renderInput()}
        {renderSuffix()}
      </div>
    )
  }
}
