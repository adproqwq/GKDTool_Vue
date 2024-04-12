import { LaunchApp } from "web-launch-app";

export const quickStart = () => {
  const launchApp = new LaunchApp();
  launchApp.open({
    scheme: 'gkd://import',
    timeout: 2000,
    pkgs: {
      android: 'https://registry.npmmirror.com/@gkd-kit/app/2.0.17/files/dist/gkd-v1.7.3.apk',
    },
    landPage: 'https://gkd.li/guide/#install',
  });
}