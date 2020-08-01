<template>
  <div class="page-register">
    <div class="header">
      <div class="header-container clearfix">
        <router-link to="/" class="logo"></router-link>
        <div class="login">
          已有美团账号？
          <router-link to="/login">登入</router-link>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="age">
            <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
  </div>
</template>

<script type="text/javascript">
import api from "@/api/index.js";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        userName: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // console.log(111);
      let self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userName = this.ruleForm.age,
            password = this.ruleForm.pass,
            rePassword = this.ruleForm.checkPass;
          api
            .register({
              params: {
                userName,
                password,
                rePassword,
              },
            })
            .then((resp) => {
              if (resp.data.status === "success") {
                this.$router.push("/login");
              } else {
                alert(resp.data.msg);
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less">
.page-register {
  .header {
    border-bottom: 2px solid #ccc;
    .header-container {
      padding: 10px 0;
      width: 980px;
      margin: 0 auto;
      .logo {
        float: left;
        width: 128px;
        height: 36px;
        background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png)
          no-repeat;
        background-size: contain;
      }
      .login {
        float: right;
        line-height: 36px;
        font-size: 14px;
        color: #666;
        a {
          font-size: 12px;
          margin-left: 10px;
          color: #222;
          background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
          border-width: 0;
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
          background-size: 100%;
          padding: 3px 10px;
        }
      }
    }
  }
  .content {
    width: 980px;
    margin: 0 auto;
    padding: 30px 0;
    border-bottom: 1px solid #ccc;
    .el-input {
      max-width: 300px;
    }
    input {
      width: 248px;
      height: 24px;
      padding: 5px;
      box-sizing: content-box;
      border: 1px solid #aaa;
      line-height: 24px;
    }
    .password {
      position: relative;
      // height: 58px;
      // .strength {
      //   position: absolute;
      //   background: #eee;
      //   margin: 10px 0px;
      //   left: 0;
      //   top: 40px;
      //   .letter span {
      //     float: left;
      //     height: 20px;
      //     line-height: 20px;
      //     width: 85px;
      //     text-align: center;
      //     color: #fff;
      //     border-right: 2px solid #fff;
      //     &:last-child {
      //       border-right: 0;
      //     }
      //     &.active {
      //       background-color: orange;
      //     }
      //   }
      // }
    }
    .submit {
      color: #222;
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      border-width: 0;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      background-size: 100%;
      font-weight: bold;
    }
  }
  .footer {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>