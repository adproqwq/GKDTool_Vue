import json5 from 'json5'
import { fullScript, script } from './getSub';
import { writeTable } from './table';

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
    let fullSub = { ...fullScript }
    fullSub.apps = json5.parse(localStorage.getItem(String(fullScript.id))!)
    alert('一字不落地还原了！')
    writeTable(fullSub)
  }
}