// esbuild.config.js
require('esbuild').build({
    entryPoints: [
        {
            in: './src/main.ts',
            out: './build',
        }
    ],
    bundle: true,
    external: [
        'resource:///*',
        'imports.gi/*',
        'gi:/*',
        '@girs/*'
    ],
    outdir: './dist',
    platform: 'node',
    format: 'esm',
    target: ['node14'],
})

.catch(() => console.log('Build failed'))
.then(() => console.log('Build succeeded'));