import { Component } from 'vue-property-decorator';
import Tagprops from './tagProp';

@Component
export default class ZCheckTag extends Tagprops {
  constructor () {
    super();
  }

  // checked 状态设置类名
  public setClassByChecked() {
    const { $props } = this;
    const classNames = {
      ['z-check-tag']: true,
      ['z-check-tag__checked']: $props.checked,
      [`z-tag-${$props.size}`]: $props.size,
      [`z-tag-${$props.type}`]: $props.type,
    };
    return classNames;
  }

  // 单机tag
  public handleClick(e) {
    e.stopPropagation();
    const { checked } = this.$props;
    this.$emit('change', !checked);
    this.$emit('change.checked', !checked);
  }

  public render(): JSX.Element {
    const { handleClick, $slots, setClassByChecked } = this;
    return (
      <span class={setClassByChecked()}
      onClick={ handleClick }>
      {$slots.default}
      </span>
    );
  }
}
