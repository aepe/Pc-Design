import library from "./library";
import $util from "../index";

export default class MsgCode {
  private getLib = (data: any) => {
    let msg: string = "";
    for (const key in library) {
      msg = `${data}--${library[data]}，`;
    }
    return msg;
  };

  /**
   * 用户自定义传入error code和 error mesage
   * data : {code: '', message: ''}
   */
  private insert = ({ code, message }): string => {
    library[code] = message;
    let msg: string = "";
    msg = this.getLib(code);
    return msg;
  };

  /**
   * @param
   *  code 通过code码查找对应的message
   */
  public getMsg = (data: any): string => {
    // 1. code 为 string类型，
    // 2. code 为 object 类型 { code: '', message: '', }
    let msg: string = "";
    const type = $util.dataType(data);
    switch (type) {
      case "string":
        msg += this.getLib(data);
        return msg;
      case "array":
        for (let i = 0; i < data.length; i++) {
          msg += this.getMsg(data[i]);
        }
        return msg;
      case "object":
        msg += this.insert(data);
        return msg;
      default:
        console.warn(`${data} 此类型无法使用`);
    }
  };
}
