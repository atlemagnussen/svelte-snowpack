/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    // experiments: {
    //     optimize: {
    //         bundle: true,
    //         minify: true,
    //         target: "es2018"
    //     }
    // },
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
