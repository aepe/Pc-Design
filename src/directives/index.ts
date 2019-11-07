export default {
    install: (Vue: any) => {
        const requireComponent = require.context('./', true, /\.(ts)/);
        requireComponent.keys().map((filePath) => {
            const fileName = filePath.slice(filePath.lastIndexOf('/') + 1).replace(/\..*$/, '');
            if (fileName !== 'index') {
                requireComponent(filePath)(Vue);
            }
        });
    },
};
