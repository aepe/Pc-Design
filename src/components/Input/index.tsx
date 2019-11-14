import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZInput extends Vue {
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
    default: 0,
    type: Number
  }) public max!: number;

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

  // 设置class
  public setInputClass() {
    const { disabled, size } = this;
    return {
      'z-input-item': true,
      [`z-input-item-${size}`]: size === 'medium' || '' ? null : size,
      'z-input-disabled': disabled
    };
  }

  // render pre
  public renderPre() {
    return <span class={'z-input-pre'}>aaa</span>;
  }

  // render Label
  public renderLabel() {
    const { label, labelWidth } = this;
    const labelWidthStyle = {
      width: labelWidth
    };
    return label ? <span class={'z-input-label'} style={labelWidthStyle}>{label}:</span> : null;
  }

  // render input
  public renderInput() {
    const { setInputType, setPlaeholder, setDisabled, setInputClass, setLength } = this;
    const limitLength = setLength();
    return <input type={setInputType()}
      placeholder={setPlaeholder()}
      class={[setInputClass()]}
      disabled={setDisabled()}
      maxLength={limitLength.max}
      minLength={limitLength.min} />;
  }

  public render() {
    const { renderInput, renderLabel } = this;
    return (
      <div class="z-input">
        {renderLabel()}
        {renderInput()}
      </div>
    );
  }
}
