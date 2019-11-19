const validateMap = {
  /* 用户名校验 长度5-18位，允许大小写英文、数字、下划线 */
  validateUserName: {
    reg: /^[a-zA-Z0-9_]{5,18}$/,
    msg: '长度5-18位，允许大小写英文、数字、下划线'
  },
  /* 密码校验 长度8-16，数字、特殊符号及大小写字母四选三 */
  validatePassword: {
    reg: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/,
    msg: '长度8-16，数字、特殊符号及大小写字母四选三'
  },
  validateMobile: {
    reg: /^[0-9]{11}$/,
    msg: '请输入11位数字的手机号'
  },
  validateEmail: {
    // eslint-disable-next-line no-useless-escape
    reg: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    msg: '请输入正确邮箱'
  },
  validateIdCard: {
    reg: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
    msg: '请正确输入15或18位的身份证号'
  },
  validateBankNumber: {
    reg: /^[1-9]\d{9,29}$/,
    msg: '请输入正确银行卡号'
  },
  validateAmount: {
    reg: /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
    msg: '请输入正确金额'
  }
}

/* 生成表单自定义校验函数 */
export default key => (rule, value, callback) => {
  if (value === '' || value === undefined || value === null) {
    rule.required || rule.defRequired
      ? callback(new Error(rule.emptymsg || '不能为空'))
      : callback()
  }
  validateMap[key].reg.test(value)
    ? callback()
    : callback(new Error(validateMap[key].msg))
}
