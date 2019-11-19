/*
 * @abstract:""
 * @version:""
 * @Author: bhabgs
 * @Date: 2019-11-08 10:07:49
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-18 10:50:41
 */
export default {
  getId(id: string) {
    return document.getElementById(id);
  },
  // 深拷贝
  dataType(obj: any) {
    const toString = Object.prototype.toString;
    const typeMap: any = {
      '[object Boolean]': 'boolean',
      '[object String]': 'string',
      '[object Number]': 'number',
      '[object Array]': 'array',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Function]': 'function',
      '[object Object]': 'object',
      '[object RegExp]': 'regExp',
      '[object Date]': 'date'
    };
    return typeMap[toString.call(obj)];
  },
  deepClone(data: any) {
    const type = this.dataType(data);
    let o: any;
    if (type === 'array') {
      o = [];
      data.forEach((item: any) => {
        o.push(this.deepClone(item));
      });
    } else if (type === 'object') {
      o = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          o[key] = this.deepClone(data[key]);
        }
      }
    } else {
      o = data;
    }

    return o;
  }
};
