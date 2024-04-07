import type { RawApp, RawCategory, RawSubscription } from '@gkd-kit/api';
import json5 from 'json5'
import { writeTable } from './table';
import $ from 'jquery';

export const getDefaultSub = () => {
  $.get('https://fastly.jsdelivr.net/npm/@gkd-kit/subscription', (data: string) => {
    originSub = json5.parse(data);
    [fullScript, script, categories] = writeTable(originSub);
  });
}

export const getThirdPartySub = () => {
  const userSelect = document.getElementById('thirdParty');
  const index = (userSelect! as HTMLSelectElement).selectedIndex;
  if ((userSelect! as HTMLSelectElement).options[index].value == 'Adpro') {
    $.get('https://registry.npmmirror.com/@adpro/gkd_subscription/latest/files/dist/Adpro_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullScript, script, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'AIsouler') {
    $.get('https://cdn.jsdelivr.net/gh/AIsouler/GKD_subscription@main/dist/AIsouler_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullScript, script, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'aoguai') {
    $.get('https://registry.npmmirror.com/@aoguai/subscription/latest/files/dist/aoguai_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullScript, script, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'ganlinte') {
    $.get('https://registry.npmmirror.com/@ganlinte/gkd-subscription/latest/files', (data) => {
      originSub = json5.parse(data);
      [fullScript, script, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == '114514') {
    $.get('https://cdn.jsdelivr.net/gh/gkd-sub-repo/114514_subscription@main/dist/114514_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullScript, script, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'MengNianxiaoyao') {
    $.get('https://registry.npmmirror.com/gkd-subscription/latest/files', (data) => {
      originSub = json5.parse(data);
      [fullScript, script, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
}

export const switchStatus = (type: 'memorize' | 'read') => {
  if (type == 'memorize') {
    localStorage.setItem(String(fullScript.id), json5.stringify(script));
    alert('全部都记下来了！');
  }
  else if (type == 'read') {
    try {
      let result = localStorage.getItem(String(fullScript.id));
      throw result;
    } catch (error) {
      if (error == null) {
        alert('我的脑子里似乎没有这方面的记忆');
        return
      }
    }
    originSub = { ...fullScript }
    originSub.apps = json5.parse(localStorage.getItem(String(fullScript.id))!)
    alert('一字不落地还原了！');
    [fullScript, script, categories] = writeTable(originSub)
  }
}

export let originSub: RawSubscription

export let fullScript: RawSubscription

export let script: RawApp[]

export let categories: RawCategory[]