import { defineConfig } from "wxt";

// export default defineConfig({
//   manifest: {
//     action: {},
//     page_action: {},
//   },
// });

export default defineConfig({
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      // ...
      action: {},
      browser_action: {},
      page_action: {
        browser_style: true
      },
      
    };
  },
});

// export default defineWxtModule({
//   setup(wxt) {
//     wxt.hook('entrypoints:found', (_, entrypointInfos) => {
//       // Add your new entrypoint
//       entrypointInfos.push({
//         name: 'content-entry',
//         inputPath: '../entrypoints/content.tsx',
//         type: 'content-script',
//       });
//     });
//   },
