<script>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
      Noty() {
        this.open = true
        // now 'this' is referencing the Vue object and not the 'setTimeout' scope
        setTimeout(() => this.open = false, 1000);
    }
  }
}
</script>

<template>
<el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  <button @click="Noty">Open Modal</button>
<button @click="open = false">
  <div v-if="open" class="modal">
    <p>Text został skopiowany</p>
  </div>
  </button>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  align-items: center;
  width: 300px;
  background:  red;
  border-radius: 15em;
}

:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-error: #f56c6c;
  --el-color-info: #909399;
}
</style>
