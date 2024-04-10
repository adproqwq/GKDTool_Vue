import type { RawApp, RawCategory, RawSubscription } from '@gkd-kit/api'
import { app } from '../main'

const initAppTable = `
<table id="appListTable" class="listTable">
    <thead>
        <tr>
            <th>应用名</th>
            <th>包名</th>
            <th>规则组分类</th>
            <th>规则组名称</th>
            <th>规则描述</th>
            <th>
                <div>操作<div>
                <button onclick="changeSwitch('all','on');">全部开启</button>
                <button onclick="changeSwitch('all','off');">全部关闭</button>
            </th>
        </tr>
    </thead>
    <tbody></tbody>
</table>`;

const tableInfo = (appName: string, packageName: string, category: string, id: string, style: string, ruleName: string, desc: string) => {
  const result = `
    <tr>
        <td>${appName}</td>
        <td>${packageName}</td>
        <td>${category}</td>
        <td id="${id}" style="${style}">${ruleName}</td>
        <td>${desc}</td>
        <td>
            <button onclick="changeSwitch('${id}','on');">开启</button>
            <button onclick="changeSwitch('${id}','off');">关闭</button>
            <button onclick="edit('${id}');">编辑</button>
            <button onclick="output('${id}')">导出该规则</button>
        </td>
    </tr>`;
  return result;
}

export const writeTable = (data: RawSubscription): [RawSubscription, RawApp[], RawCategory[]] => {
  const fullScript = data
  const script = data.apps
  const categories = data.categories
  document.getElementById('subVer')!.innerHTML = '<span>订阅版本：' + fullScript.version + '</span>'
  document.getElementById('author')!.innerHTML = '<span>订阅作者：' + fullScript.author + '</span>'
  document.getElementById('codeVer')!.innerHTML = '<span>当前程序版本：' + JSON.parse(JSON.stringify(app.$data)).codeVer + '</span>'
  document.getElementById('appList')!.innerHTML = initAppTable
  let eachAppRule = '';
  let iCount = 0
  for (const i of script!) {
    let jCount = 0;
    let category: string, ruleName: string, desc: string, style: string;
    const packageName = i.id;
    const appName = i.name;
    for (const j of i.groups) {
      ruleName = j.name;
      if (categories) {
        for (const z of categories) {
          if (ruleName.split('-')[0] === z.name) {
            category = ruleName.split('-')[0];
            break;
          }
          else category = '';
        }
      }
      else category = '';
      if (Object.hasOwnProperty.call(j, 'enable')) {
        if (j.enable == false) style = 'color: red;';
        else style = 'color: green;';
      }
      else style = 'color: green;';
      if (Object.hasOwnProperty.call(j, 'desc')) desc = j.desc!;
      else desc = '该规则暂无描述';
      eachAppRule += tableInfo(appName!, packageName, category!, String(iCount) + '.' + String(jCount), style, ruleName, desc);
      jCount++;
    };
    iCount++;
  };
  document.querySelector('tbody')!.innerHTML = eachAppRule;

  return [fullScript, script!, categories!]
}