# MsgCode 根据传入的 code 进行提示

## 创建实例：new utils.msgCode();

## demo

```js
创建实例;

const Msg = new utils.msgCode();
```

```js
传入字符串code;

const msg = Msg.getMsg("WIN002");
```

```js
传入数组code;

const msg = Msg.getMsg(["WIN002", "WIN001"]);
```

```js
传入code和提示message;

const msg = Msg.getMsg({
  code: "M0004",
  message: "网络不稳定",
});
```
