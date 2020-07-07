module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve("awesome-typescript-loader"),
                options: {
                    presets: [["react-app", { flow: false, typescript: true }]],
                    configFileName: "./.storybook/tsconfig.json",
                },
            },
            {
                loader: require.resolve("react-docgen-typescript-loader"),
                // Set shouldExtractLiteralValuesFromEnum = true to view enum values in storybook.
                options: { shouldExtractLiteralValuesFromEnum: true },
            },
        ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
