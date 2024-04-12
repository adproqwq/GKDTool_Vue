import { LaunchApp } from "web-launch-app";

export const quickStart = () => {
  var config = {
    inApp: false,
    appVersion: '',
    pkgName: 'li.songe.gkd',
    deeplink: {
      scheme: {
        android: {
          protocol: 'gkd',
          index: {
            path: 'import',

          },
        },
      },
    },
    pkgs: {
      android: 'https://registry.npmmirror.com/@gkd-kit/app/2.0.17/files/dist/gkd-v1.7.3.apk',
    },
    launchType: {
      android: 'scheme',
    },
    timeout: 2000,
    landPage: 'https://gkd.li/guide/#install',
  };
  const launchApp = new LaunchApp(config);
  launchApp.open(config);
}