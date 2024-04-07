import { fullScript, script } from './sub'
import json5 from 'json5'

export const output = (type: string) => {
  if (type == 'all') {
    const userSelect = document.getElementById('outputMode');
    const index = (userSelect! as HTMLSelectElement).selectedIndex;
    let blob;
    if ((userSelect! as HTMLSelectElement).options[index].value == 'json') {
      blob = new Blob([JSON.stringify(fullScript)], {
        type: 'application/json'
      });
    }
    else if ((userSelect! as HTMLSelectElement).options[index].value == 'json5') {
      blob = new Blob([json5.stringify(fullScript)], {
        type: 'application/json'
      });
    }
    const downloadURL = URL.createObjectURL(blob!);
    const aTag = document.createElement('a');
    aTag.href = downloadURL;
    if ((userSelect! as HTMLSelectElement).options[index].value == 'json') aTag.download = `${fullScript.id}.json`;
    else if ((userSelect! as HTMLSelectElement).options[index].value == 'json5') aTag.download = `${fullScript.id}.json5`;
    aTag.click();
    URL.revokeObjectURL(downloadURL);
  }
  else {
    const location = type.split('.');
    const i = location[0], j = location[1];
    navigator.clipboard.writeText(json5.stringify(script[Number(i)].groups[Number(j)])).then(() => {
      alert('已复制到剪切板');
    });
  }
}