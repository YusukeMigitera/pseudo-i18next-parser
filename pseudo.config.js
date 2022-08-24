module.exports = {
    sort: true,
    locales: ['ja', 'en', 'ko', 'es', 'zh-CN'],
    output: './src/locales/$LOCALE/$NAMESPACE.json',
    keepRemoved: true,
    keySeparator: false,
    namespaceSeparator: false,
    useKeysAsDefaultValue: (locale) => locale === 'ja',
  };
  