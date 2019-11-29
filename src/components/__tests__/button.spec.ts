/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-22 15:08:45
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-26 10:58:41
 */
import { shallowMount } from "@vue/test-utils";
import Button from "../Button";

describe("Button.tsx", () => {
  test("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Button, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
