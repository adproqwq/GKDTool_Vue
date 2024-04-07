import json5 from 'json5'
import { writeTable } from './table'
import type { RawSubscription } from '@gkd-kit/api';

export const readFile = () => {
  const objFile = document.getElementById('upload');
  if ((objFile as HTMLInputElement)!.value === '') {
    alert('请选择文件');
    return
  }
  const subFile = (objFile as HTMLInputElement)!.files;
  const type = (objFile as HTMLInputElement)!.value.substring((objFile as HTMLInputElement)!.value.lastIndexOf('.') + 1);
  const reader = new FileReader();
  reader.readAsText(subFile![0], 'UTF-8');
  reader.onload = function (e) {
    let data: RawSubscription;
    if (type == 'json') data = JSON.parse(e.target!.result as string);
    else if (type == 'json5') data = json5.parse(e.target!.result as string);
    writeTable(data!)
  };
}