export default {
    install: (Vue: any) => {
        const requireComponent = require.context('./', true, /[^index]\.ts/);
        requireComponent.keys().map((filePath) => {
            requireComponent(filePath)(Vue);
        });
    },
};
