/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        // directory name: 'build directory'
        public: '/',
        src: '/dist'
    },
    plugins: [
        ["@snowpack/plugin-svelte",
            {
                "hmrOptions": {
                    preserveLocalState: true
                }
            }]
    ],
    install: [],
    installOptions: {},
    devOptions: {},
    buildOptions: {},
    proxy: {},
    alias: {},
};
