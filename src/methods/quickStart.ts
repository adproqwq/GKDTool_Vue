import CallApp from 'callapp-lib'

export const quickStart = () => {
  const options = {
    scheme: {
      protocol: 'gkd',
      host: 'import',
    },
    intent: {
      package: 'li.songe.gkd',
      scheme: 'gkd',
    },
    appstore: '',
    fallback: 'https://gkd.li/guide/#install',
  };
  const callLib = new CallApp(options);
  callLib.open({
    path: 'import',
  });
}