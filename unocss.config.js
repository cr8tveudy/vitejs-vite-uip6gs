import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Open Sans'],
        serif: ['Roboto Slab'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
