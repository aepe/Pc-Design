/*
 * @Descripttion:
 * @version:
 * @Author: langxue
 * @Date: 2019-12-03 11:05:08
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-10 10:33:53
 */
export default {
  modelValue: [String, Number],
  value: [String, Number],
  type: {
    default: 'text',
    type: String,
  },
  placeholder: String,
  disabled: {
    default: false,
    type: Boolean,
  },
  label: String,
  labelWidth: String,
  size: {
    default: 'default',
    type: String,
  },
  maxlength: Number,
  suffixIcon: String,
  prefixIcon: String,
  clearable: {
    default: false,
    type: Boolean,
  }
}