module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    rules: {
        "no-console": "off", // Разрешает console.log
        "react/prop-types": "off", // Отключает проверку PropTypes
        "react/react-in-jsx-scope": "off", // Не нужен в Next.js
        "prettier/prettier": ["error"]
    },
    "plugins": ["prettier"],
};
