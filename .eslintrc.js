module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier", 'next'],
    rules: {
        "no-console": "off", // Разрешает console.log
        "react/prop-types": "off", // Отключает проверку PropTypes
        "react/react-in-jsx-scope": "off", // Не нужен в Next.js
        "prettier/prettier": ["error"],
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
    },
    "plugins": ["prettier"],
};
