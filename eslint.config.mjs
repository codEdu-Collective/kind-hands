// @ts-check
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,

  {
    plugins: {
      prettier: eslintPluginPrettier,
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-expressions": "error",
      "no-fallthrough": "error",

      "react/jsx-no-useless-fragment": "warn",
      "react/no-unescaped-entities": "warn",
      "@next/next/no-img-element": "error",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-sync-scripts": "warn",

      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-role": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/tabindex-no-positive": "warn",
      "jsx-a11y/label-has-associated-control": "warn",

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          printWidth: 100,
          singleQuote: false,
          semi: true,
          trailingComma: "all",
          tabWidth: 2,
        },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],

            ["^react", "^next", "^@?\\w"],

            ["^@/"],

            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**"]),
]);
