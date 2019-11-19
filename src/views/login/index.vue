<template>
  <div class="login-wrapper">
    <div class="login-content">
      <Form
        class="login-form"
        ref="loginForm"
        :form="loginForm"
        :form-items="loginFormItems"
        :rules="loginRules"
        label-position="top"
        @keyup.enter.native="submitForm"
      >
        <div class="login-title">
          登录
        </div>
        <template slot="checked">
          <el-checkbox v-model="checked" class="remember-userName">
            记住用户名
          </el-checkbox>
        </template>
        <template slot="submit">
          <el-button
            class="submit-button"
            :loading="loading"
            @click="submitForm"
          >
            登录
          </el-button>
        </template>
      </Form>
    </div>
  </div>
</template>

<script>
import formValidate from '@/utils/validate'
import Form from '@/components/Form'
export default {
  name: 'Login',
  components: { Form },
  data() {
    return {
      checked: !!localStorage.getItem('LG_NM'),
      authCodeSrc: '',
      loginForm: {
        userName: localStorage.getItem('LG_NM')
      },
      loginFormItems: [
        {
          type: 'input',
          value: 'userName',
          placeholder: '请输入用户名',
          prefixIcon: 'el-icon-user-solid',
          clearable: true
        },
        {
          type: 'password',
          value: 'password',
          placeholder: '请输入密码',
          prefixIcon: 'el-icon-lock',
          showPassword: true,
          clearable: true
        },
        {
          slot: 'checked'
        },
        {
          slot: 'submit'
        }
      ],
      loginRules: {
        userName: [
          {
            validator: formValidate('validateUserName'),
            defRequired: true,
            emptymsg: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: formValidate('validatePassword'),
            defRequired: true,
            emptymsg: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      time: '',
      loading: false
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('manager/handleLogin', this.loginForm)
            .then(() => {
              this.checked
                ? localStorage.setItem('LG_NM', this.loginForm.userName)
                : localStorage.setItem('LG_NM', '')
              this.$router.push('/index')
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  overflow: auto;
}
.login-content {
  position: relative;
  transform: translateY(50%);
}
.login-form {
  margin: 0 auto;
  width: 360px;
  padding: 40px 25px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .login-title {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
  }
  .authCode {
    width: 55%;
    vertical-align: middle;
  }
  .code {
    margin-left: 10px;
    vertical-align: middle;
  }
  .remember-userName {
    font-weight: 400;
  }
  .submit-button {
    width: 100%;
    color: #fff;
    font-size: 16px;
    background-color: #5778ed;
    box-shadow: 0px 9px 24px 0px rgba(194, 195, 203, 1);
    border-radius: 38px;
  }
}
</style>
