import { VNode } from "vue";
import msgCode from "./msgCode";
/*
 * @abstract:""
 * @version:""
 * @Author: bhabgs
 * @Date: 2019-11-08 10:07:49
 * @LastEditors  : langxue
 * @LastEditTime : 2019-12-27 15:55:27
 */
export function isEmptyElement(c) {
  return !(c.tag || (c.text && c.text.trim() !== ""));
}

export function filterEmpty(children = []) {
  return children.filter((c) => !isEmptyElement(c));
}
export default {
  getId(id: string) {
    return document.getElementById(id);
  },

  dataType(obj: any) {
    const toString = Object.prototype.toString;
    const typeMap: any = {
      "[object Boolean]": "boolean",
      "[object String]": "string",
      "[object Number]": "number",
      "[object Array]": "array",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Function]": "function",
      "[object Object]": "object",
      "[object RegExp]": "regExp",
      "[object Date]": "date",
    };
    return typeMap[toString.call(obj)];
  },
  // 深拷贝
  deepClone(data: any) {
    const type = this.dataType(data);
    let o: any;
    if (type === "array") {
      o = [];
      data.forEach((item: any) => {
        o.push(this.deepClone(item));
      });
    } else if (type === "object") {
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
  },
  //根据状态组合class
  assembleClass(className: string, type: any) {
    if (type) {
      return className + type + " ";
    }
    return "";
  },
  // 创建需要处理的组件
  instantiation(name: string, install: JSX.constructor, version?: string) {
    return {
      version: version || "0.0.1",
      name,
      install,
    };
  },
  // 清除class 结尾多余空格
  clearBlank(className: string) {
    return className.replace(/(\s*$)/g, "");
  },
  // 多个同名具名插槽过滤 只取第一个
  singleSlot(VNodes: Array<VNode> | undefined): Array<VNode> | undefined {
    if (VNodes && VNodes.length) {
      return [VNodes[0]];
    } else {
      return VNodes;
    }
  },
  // 获取元素距离文档的距离
  offset(dom: HTMLElement) {
    const fn = (type: string): number => {
      var tmp: number = dom[type === "top" ? "offsetTop" : "offsetLeft"];
      var val: Element | null = dom.offsetParent;
      while (val != null) {
        tmp += (val as HTMLElement)[type === "top" ? "offsetTop" : "offsetLeft"];
        val = (val as HTMLElement).offsetParent;
      }
      return tmp;
    };
    return {
      top(): number {
        return fn("top");
      },
      left(): number {
        return fn("left");
      },
    };
  },
  isEmptyElement,
  filterEmpty,
  msgCode,
};
