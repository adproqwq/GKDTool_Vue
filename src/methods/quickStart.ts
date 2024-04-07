import CallApp from 'callapp-lib'

export const quickStart = (app: string) => {
  if (app == 'GKD') {
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
  else if (app == 'GKDTool') {
    const options = {
      scheme: {
        protocol: 'gkdtool',
      },
      intent: {
        package: 'xyz.adproqwq.GKDTool',
        scheme: 'gkdtool',
      },
      appstore: '',
      fallback: 'https://www.magicalapk.com/appview?id=1711811784193',
    };
    const callLib = new CallApp(options);
    callLib.open({
      path: '',
    });
  }
}