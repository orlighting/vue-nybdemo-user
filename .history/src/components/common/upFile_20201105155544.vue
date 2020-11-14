<template>
  <div>
    <fm-generate-form 
      :data="jsonData" 
      :remote="remoteFuncs" 
      :value="editData" 
      :remote-option="dynamicData"
      ref="generateForm"
    >
    </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">上传</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jsonData: {"list":[{"type":"fileupload","icon":"icon-wenjianshangchuan","options":{"defaultValue":[],"width":"","tokenFunc":"funcGetToken","token":"","domain":"http://tcdn.form.xiaoyaoji.cn/","disabled":false,"tip":"","action":"http://tools-server.making.link/api/transfer","customClass":"","limit":9,"multiple":false,"isQiniu":true,"labelWidth":100,"isLabelWidth":false,"hidden":false,"dataBind":true,"headers":[],"required":false,"remoteFunc":"func_1604561951854","remoteOption":"option_1604561951854"},"name":"文件","key":"1604561951854","model":"fileupload_1604561951854","rules":[]}],"config":{"labelWidth":100,"labelPosition":"right","size":"small","customClass":"","ui":"element","layout":"horizontal","labelCol":3,"width":"100%","hideLabel":false,"hideErrorMessage":false}},
      editData: {},
      remoteFuncs: {
        
      },
      dynamicData: {
        
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.generateForm.getData().then(data => {
        // Data verification succeeded
        alert(JSON.stringify(data))
      }).catch(e => {
        // Data verification failed
      })
    }
  }
}
</script>