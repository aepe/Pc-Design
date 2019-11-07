import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ZTag extends Vue {
    public render(): any {
        return (
            <span>Tag</span>
        );
    }
}
