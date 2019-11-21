<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-13 14:16:06
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-13 14:40:09
 -->

# 马良数据结构

> project
>
> > page
> >
> > > layout
> > >
> > > > compontent

## project

```javascript
export interface project {
    public name: string;
    public c_name: string;
    readonly id: number;
    public page: Page[];
}
```

## page

```javascript
export interface Page {
    public name: string;
    public c_name: string;
    public layout: Layout[];
    public path: string; // 默认通过有道词典进行翻译拿取第一个数组进行整合
    public backgroundColor: string;
}
```

## layout

```javascript
import {Properties} from 'csstype'; // css类型
export interface Layout {
    public name: string;
    public c_name: string;
    readonly isBlock: true;
    public position: [t: number, l: number, r: number, b: number];
    public styles: Properties; // 常规js style格式
    public compontent: Compontent[]
}
```

## compontent

```javascript
import {Properties} from 'csstype'; // css类型
export interface Compontent {
    public name: string;
    public c_name: string;
    public position: [t: number, l: number, r: number, b: number];
    public styles: Properties; // 常规js style格式
    public data: data;// 根据组件prop信息对接相应arguments
}
```

## data

```javascript
@Prop({
    type: String,
    require: true,
    default() {
        return 'c_name';
    }
})
public name?: String;

@Prop({
    type: Boolean,
    require: true,
    default() {
        return false;
    }
})
public asd?: Boolean;
```

> 此时`compontent`对外暴露 两个参数分别是 `name` and `asd` 通过 layout 循环收集每个组件暴露的参数进行整合
