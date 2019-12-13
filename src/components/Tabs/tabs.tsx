import { Vue, Component } from "vue-property-decorator";

@Component
export default class Tabs extends Vue {
  private get className(): string {
    const baseClass = "z-tabs ";
    let classname = baseClass;
    return classname;
  }
  render(): JSX.Element {
    const { className } = this;
    return <div class={className}></div>;
  }
}
