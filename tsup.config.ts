import { defineConfig } from 'tsup'

export default defineConfig({
    target: 'es2020',
    format: ['cjs', 'esm', 'iife'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true
})