<template id="gankdata">
  <div id="focus" v-loading="loading">
    <ul>
      <el-row>
        <el-col :span="4" v-for="(item, index) in focusList">
            <el-card :body-style="{ padding: '0px' }">
              <img :alt="item.desc" title="点击查看原图" class="image" :src="item.url" v-on:click="showElDialog(item.url)"/>
              <el-dialog title="原图" :visible.sync="dialogTableVisible">
                <img :src="currentUrl" width="100%" height="100%">
              </el-dialog>
            </el-card>
        </el-col>
      </el-row>
    </ul>
    <el-button type="primary prevpage" icon="arrow-left" @click="getFocusList(--index)">上一页</el-button>
    <el-button type="primary nextpage" @click="getFocusList(++index)">下一页<i
      class="el-icon-arrow-right el-icon--right"></i></el-button>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        focusList: [],
        index: 1,
        dialogTableVisible: false,
        currentUrl: null,
        loading: false
      }
    },
    created () {
      this.getFocusList(1)
    },
    mounted () {

    },
    methods: {
      getFocusList (index) {
        this.loading = true
        if (index <= 0) {
          index = 1
          this.$message({
            showClose: true,
            message: '已经是第一页',
            type: 'warning'
          })
          this.loading = false
        }
        var vm = this
        this.$http.get('http://gank.io/api/data/福利/20/' + index)
          .then(function (res) {
            this.loading = false
            vm.focusList = res.data.results
          })
          .catch(function (err) {
            console.log(err)
            this.loading = false
            this.$message({
              showClose: true,
              message: '数据请求错误',
              type: 'error'
            })
          })
      },
      showElDialog (url) {
        this.currentUrl = url
        this.dialogTableVisible = true
      }
    }
  }
</script>
<style scoped>
  .nextpage {
    float: right;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .prevpage {
    float: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }
  .image {
    height: 25rem;
    width: 25rem;
    margin-left: -1rem;
  }
</style>
