import { mtTest } from './test';

export default {
    install: (Vue: any) => {
        // Vue.use(ref, { name: 'ant-ref' });
        mtTest(Vue);
    },
};
