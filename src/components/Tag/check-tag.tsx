import { Component, Vue, Prop, Model } from 'vue-property-decorator';

@Component
export default class ZCheckTag extends Vue {
  @Model('change', {
    type: Boolean
  }) public checked!: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) public checked!: boolean;

  // checked 状态设置类名
  public setClassByChecked() {
    const { checked } = this;
    return checked ? 'z-checkable-tag-checked' : null;
  }

  // 单机tag
  public handleClick(e: any) {
    e.stopPropagation();
    const { checked } = this;
    this.$emit('input', !checked);
    this.$emit('change', !checked);
  }

  public render(): any {
    const { handleClick, $slots } = this;
    return (
      <span class={['z-checkable-tag', this.setClassByChecked()]}
      onClick={ handleClick }>
      {$slots.default}
      </span>
    );
  }
}
