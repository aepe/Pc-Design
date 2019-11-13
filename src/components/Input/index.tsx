import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZInput extends Vue {
    public render() {
      return <input type="text" />
    }
}
