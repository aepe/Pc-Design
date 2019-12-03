import { Component, Vue } from "vue-property-decorator";

@Component
export default class Message extends Vue {
  render() {
    return <div class="z-Message">message</div>;
  }
}
