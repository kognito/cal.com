module.exports = {
  ...require("./packages/config/eslint-preset"),
  rules: {
    ...require("./packages/config/eslint-preset").rules,
    "prettier/prettier": "warn",
  },
};
