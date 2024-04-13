import { fullSub, apps } from './sub'
import json5 from 'json5'
import { downloadJson } from '@dlr-eoc/utils-browser'

export const output = (type: string) => {
  if (type == 'all') {
    downloadJson(fullSub, `${fullSub.id}.json`)
    navigator.clipboard.writeText(JSON.stringify(fullSub)).then(() => {
      alert('全部规则已复制到剪切板，如果下载失败，可以自己粘贴到json文件中')
    });
  }
  else {
    const location = type.split('.');
    const i = location[0], j = location[1];
    navigator.clipboard.writeText(json5.stringify(apps[Number(i)].groups[Number(j)])).then(() => {
      alert('已复制到剪切板');
    });
  }
}