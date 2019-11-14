import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZInput extends Vue {
  @Prop({
    default: 'text',
    type: String
  }) public type!: string;

  // 设置input框的类型
  public setInputType() {
    return this.type;
  }

  // 设置class
  public setInputClass() {
    return `z-input-${this.type}`;
  }

    public render() {
      const { setInputType, setInputClass } = this;
      return <input type={setInputType()} class={setInputClass()} />;
    }
}
