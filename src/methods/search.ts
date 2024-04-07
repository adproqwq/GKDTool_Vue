import { originSub } from './sub'
import { writeTable } from './table';

export const search = (target: string) => {
  if (target != '') {
    const result = { ...originSub };
    result.apps = [];
    for (const i of originSub.apps!) {
      if (i.name!.includes(target) || i.id.includes(target)) {
        result.apps.push(i);
      }
    }
    writeTable(result);
  }
  else writeTable(originSub);
}