import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";

export default [
    {
        files: ["chains.json"],
        languageOptions: {
            parser: jsoncParser,
        },
        plugins: {
            jsonc,
        },
        rules: {
            "jsonc/auto": "error",
            "jsonc/comma-dangle": "error"
        }
    },
];