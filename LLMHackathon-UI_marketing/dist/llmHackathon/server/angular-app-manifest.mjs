
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 437, hash: 'dd0bf788019bd1fc3a0f0309fc9ab673e4db5cfddb40748645ef09f6b5abef39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '3be445419eaf9d0f44f395983c1bd00918915f5a763d505dbe94964462067d34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20781, hash: '8fd7f5eb1e006c084fc5c3dcbd6d2064450b9b90ca7ed0bd4709c9f55390ec5f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
