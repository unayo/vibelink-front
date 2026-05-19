import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import { globalIgnores } from 'eslint/config';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  // 1. 引入 Vue 3 的官方推薦規則與 Flat Config 設定
  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // 2. 針對 Vue 檔案加入自訂優化，忽略不必要的標籤開頭風格檢查
  {
    name: 'app/vue-custom-rules',
    files: ['**/*.vue'],
    rules: {
      'vue/script-setup-uses-vars': 'error',
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  skipFormatting,
);
