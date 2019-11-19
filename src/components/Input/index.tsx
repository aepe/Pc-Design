import { Component, Vue, Prop, Model } from 'vue-property-decorator';

@Component
export default class ZInput extends Vue {
  @Model('input', {
    type: [Number, String]
  }) public inputValue!: number | string;

  // value
  @Prop({
    type: [Number, String]
  }) public value!: number | string;

  // 类型
  @Prop({
    default: 'text',
    type: String
  }) public type!: string;

  // 占位符
  @Prop({
    default: '请输入内容',
    type: String
  }) public placeholder!: string;

  // 禁用
  @Prop({
    default: false,
    type: Boolean
  }) public disabled!: boolean;

  // label
  @Prop({
    default: '',
    type: String
  }) public label!: string;

  // label-width
  @Prop({
    default: 'auto',
    type: String
  }) public labelWidth!: string;
  
  // size
  @Prop({
    default: '',
    type: String
  }) public size!: string;

  // 输入最小限制
  @Prop({
    default: 0,
    type: Number
  }) public min!: number;

  // 输入最大限制
  @Prop({
    type: Number
  }) public max!: number;

  // 是否显示输入字符
  @Prop({
    type: Boolean
  }) public showWordLimit!: boolean;

  // 后置icon
  @Prop({
    type: String
  }) public suffixIcon!: string;

  // 前置icon
  @Prop({
    type: String
  }) public prefixIcon!: string;

  // 设置input框的类型
  public setInputType() {
    return this.type;
  }

  // 设置placeholder
  public setPlaeholder() {
    return this.placeholder;
  }

  // 设置禁用状态
  public setDisabled() {
    return this.disabled;
  }

  // 设置最小限制和最大限制
  public setLength() {
    const { min, max } = this;
    return {
      min,
      max
    };
  }

  // 设置是否显示输入字符
  public setShowWordLimit() {
    const { max } = this;
    const wordLimitClass = {
      'z-input-show-limit': this.showWordLimit
    };
    const wordLimit = <span class={ wordLimitClass }>2/{ max }</span>;
    return wordLimit;
  }

  // 设置class
  public setInputClass() {
    const { disabled, size, suffixIcon, prefixIcon, $slots } = this;
    return {
      [`z-input-${size}`]: size === 'medium' || '' ? null : size,
      'z-input-disabled': disabled,
      'z-input-suffix': suffixIcon || $slots.suffix,
      'z-input-prefix': prefixIcon || $slots.prefix
    };
  }

  // handleBlur
  public handleBlur(e: any) {
    this.$emit('blur', e.target.value);
  }

  // handleInput
  public handleInput(e: any) {
    this.$emit('input', e.target.value);
  }

  // handleChange
  public handleChange(e: any) {
    this.$emit('change', e.target.value);
  }

  // render Label
  public renderLabel() {
    const { label, labelWidth } = this;
    const labelWidthStyle = {
      width: labelWidth
    };
    return label ? <span class={'z-input-label'} style={labelWidthStyle}>{label}:</span> : null;
  }

  // render prefixIcon or slot prefixIcon
  public renderPrefixIcon() {
    const { prefixIcon, $slots } = this;
    const prefixRender = prefixIcon || $slots.prefix ? <span class="z-input-prefix-icon">
      <span class="z-input-prefix-icon-inner">
        <i class={['iconfont', prefixIcon]} if="prefixIcon"></i>
        {$slots.prefix}
      </span>
    </span> : null;
    return prefixRender;
  }

  // render suffixIcon
  public renderSuffixIcon() {
    const { suffixIcon, $slots } = this;
    const suffix = suffixIcon || $slots.suffix ? <span class="z-input-suffix-icon">
      <span class="z-input-suffix-icon-inner">
        <i class={['iconfont', suffixIcon]} if="suffixIcon"></i>
        {$slots.suffix}
      </span>
    </span> : null;
    return suffix;
  }

  // render input
  public renderInput() {
    const { setInputType, setPlaeholder, setDisabled, setLength, handleBlur, handleInput, handleChange } = this;
    const limitLength = setLength();
    return <input type={setInputType()}
      placeholder={setPlaeholder()}
      class='z-input-inner'
      disabled={setDisabled()}
      maxLength={limitLength.max}
      minLength={limitLength.min}
      on-blur={handleBlur}
      on-input={handleInput}
      on-change={handleChange} />;
  }

  public render() {
    const { renderInput, renderLabel, setInputClass, renderSuffixIcon, renderPrefixIcon } = this;
    return (
      <div class={['z-input', setInputClass()]}>
        {renderPrefixIcon()}
        {renderLabel()}
        {renderInput()}
        {renderSuffixIcon()}
        {/* {setShowWordLimit()} */}
      </div>
    );
  }
}
