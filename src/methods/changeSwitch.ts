import { apps } from './sub';

export const changeSwitch = (index: string, job: 'on' | 'off') => {
  if (index != 'all') {
    const location = index.split('.');
    const i = location[0], j = location[1];
    if (job == 'on') {
      if (document.getElementById(index)!.style.color == 'red') {
        delete apps[Number(i)].groups[Number(j)].enable;
        document.getElementById(index)!.style.color = 'green';
        alert('已开启');
      }
      else alert('该规则已经开启了');
    }
    else if (job == 'off') {
      if (document.getElementById(index)!.style.color == 'red') alert('该规则已经关闭了');
      else {
        apps[Number(i)].groups[Number(j)].enable = false
        document.getElementById(index)!.style.color = 'red'
        alert('已关闭');
      }
    }
  }
  else {
    for (const i in apps) {
      for (const j in apps[i].groups) {
        if (document.getElementById(String(i) + '.' + String(j))!.style.color == 'red') {
          if (job == 'on') {
            delete apps[i].groups[j].enable;
            document.getElementById(String(i) + '.' + String(j))!.style.color = 'green';
          }
        }
        else {
          if (job == 'off') {
            apps[i].groups[j].enable = false;
            document.getElementById(String(i) + '.' + String(j))!.style.color = 'red';
          }
        }
      }
    }
    if (job == 'on') alert('已全部开启！');
    else alert('已全部关闭！');
  }
}