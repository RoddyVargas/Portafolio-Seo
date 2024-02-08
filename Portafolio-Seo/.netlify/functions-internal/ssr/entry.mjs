import { renderers } from './renderers.mjs';
import { manifest } from './manifest_YB494H3q.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_2QOd4pq2.mjs');
const _page1 = () => import('./chunks/index_lYaaxLUT.mjs');
const _page2 = () => import('./chunks/components_W7EZbRyZ.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/components.astro", _page2]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "9d0c7dda-6b5c-4c78-bc90-8d0c83ae46ab"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
