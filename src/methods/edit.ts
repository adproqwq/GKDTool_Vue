import json5 from 'json5'
import { script } from './getSub';

export const edit = (location: string) => {
  let i = location.split('.')[0];
  let j = location.split('.')[1];
  (document.getElementById('content') as HTMLTextAreaElement)!.value = json5.stringify(script[Number(i)].groups[Number(j)], null, 2);
  (document.getElementById('edit') as HTMLDivElement)!.style.display = 'block';
  (document.querySelector('.close') as HTMLSpanElement)!.onclick = () => {
    (document.getElementById('edit') as HTMLDivElement)!.style.display = 'none';
  };
  (document.getElementById('save') as HTMLButtonElement)!.onclick = () => {
    script[Number(i)].groups[Number(j)] = json5.parse((document.getElementById('content') as HTMLTextAreaElement)!.value);
    alert('保存成功！请不要刷新网页，否则会导致修改丢失');
    (document.getElementById('edit') as HTMLDivElement)!.style.display = 'none';
  };
}