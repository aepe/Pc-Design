/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-05 16:22:07
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-12-19 14:20:31
 */
import Vue, { VNode, VueConstructor, Component } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface constructor extends VueConstructor {}
  }
  interface zCompontent {
    install: VueConstructor;
    name: string;
    version: string;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $Zutil: any;
    $ZBus: Vue;
  }
}
