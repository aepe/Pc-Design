import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZInput extends Vue {
  @Prop({
    default: 'text',
    type: String
  }) public type!: string;

  @Prop({
    default: '',
    type: String
  }) public label!: string;

  // 设置input框的类型
  public setInputType() {
    return this.type;
  }

  // 设置class
  public setInputClass() {
    return `z-input-${this.type}`;
  }

  // render pre
  public renderPre() {
    return <span class={'z-input-pre'}>aaa</span>;
  }

  // render Label
  public renderLabel() {
    const { label } = this;
    return label ? <span class={'z-input-label'}>{label}:</span> : null;
  }

  // render input
  public renderInput() {
    const { setInputType, setInputClass } = this;
    return <input type={setInputType()} class={[setInputClass()]} />;
  }

  public render() {
    const { renderInput, renderLabel, renderPre } = this;
    return (
      <div class="z-input">
        {renderLabel()}
        {renderPre()}
        {renderInput()}
      </div>
    );
  }
}
