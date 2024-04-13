import type { RawApp, RawCategory, RawSubscription } from '@gkd-kit/api';
import json5 from 'json5'
import { writeTable } from './table';
import $ from 'jquery';
import { app } from '@/main';

export const getDefaultSub = () => {
  $.get('https://fastly.jsdelivr.net/npm/@gkd-kit/subscription', (data: string) => {
    originSub = json5.parse(data);
    [fullSub, apps, categories] = writeTable(originSub);
  });
}

export const getThirdPartySub = () => {
  const userSelect = document.getElementById('thirdParty');
  const index = (userSelect! as HTMLSelectElement).selectedIndex;
  if ((userSelect! as HTMLSelectElement).options[index].value == 'Adpro') {
    $.get('https://registry.npmmirror.com/@adpro/gkd_subscription/latest/files/dist/Adpro_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullSub, apps, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'AIsouler') {
    $.get('https://registry.npmmirror.com/@aisouler/gkd_subscription/latest/files/dist/AIsouler_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullSub, apps, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'aoguai') {
    $.get('https://registry.npmmirror.com/@aoguai/subscription/latest/files/dist/aoguai_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullSub, apps, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'ganlinte') {
    $.get('https://registry.npmmirror.com/@ganlinte/gkd-subscription/latest/files', (data) => {
      originSub = json5.parse(data);
      [fullSub, apps, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == '114514') {
    $.get('https://cdn.jsdelivr.net/gh/gkd-sub-repo/114514_subscription@main/dist/114514_gkd.json5', (data) => {
      originSub = json5.parse(data);
      [fullSub, apps, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
  else if ((userSelect! as HTMLSelectElement).options[index].value == 'MengNianxiaoyao') {
    $.get('https://registry.npmmirror.com/gkd-subscription/latest/files', (data) => {
      originSub = json5.parse(data);
      [fullSub, apps, categories] = writeTable(originSub);
      alert('导入成功！');
    });
  }
}

export let originSub: RawSubscription

export let fullSub: RawSubscription

export let apps: RawApp[]

export let categories: RawCategory[]