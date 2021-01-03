<!--  -->
<template>
  <div class="setPassword">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="当前密码" prop="oldPass">
        <el-input v-model="ruleForm.oldPass"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="密码长度为8-16位，必须包含字母、数字"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请确认新密码，长度为8-16位，必须包含字母、数字"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {setPassword} from '../network/setPassword';

 export default {
    data() {
      var checkOldPass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入当前的密码'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
            var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}');
            if (!pwdRegex.test(value)) 
            {
                callback(new Error("您的密码复杂度太低（密码中必须包含字母、数字），请及时修改密码！"));
            }
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          oldPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          oldPass: [
            { validator: checkOldPass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            console.log(valid)
          if (valid) {
            console.log('submit!');
            setPassword(this.$store.getters.token,this.ruleForm.oldPass,this.ruleForm.pass).then(successResponse => {
            if (successResponse.data.code === 0) {
                this.$router.push({ path: "/" });

                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.setPassword{
    height: 100vh;
    background-color: #ffffff;
    padding: 20px;
}
</style>