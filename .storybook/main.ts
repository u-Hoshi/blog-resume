import type { StorybookConfig } from "@storybook/nextjs";
import KumaUIWebpackPlugin from "@kuma-ui/webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    /**
     * @see https://github.com/kuma-ui/kuma-ui/blob/e276aea4dbd933800de5237d0411df9097451dfe/example/webpack/webpack.config.js
     */
    config.plugins = [...(config.plugins ?? []), new KumaUIWebpackPlugin()];

    return config;
  },
};
export default config;
