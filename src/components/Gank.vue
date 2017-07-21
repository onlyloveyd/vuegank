<template id="gankdata" xmlns="http://www.w3.org/1999/html">
  <div id="focus" v-loading="loading">
    <ul>
      <el-row :gutter="20" v-for="(item, index) in focusList">
        <el-card class="box-card">
          <div class="details">
            <el-col :span="4">
              <img v-if="item.images != null" :alt="item.desc" title="点击查看原图" class="image" :src="item.images[0]"
                   @click="showElDialog(item.images[0])"/>
              <el-dialog title="原图" :visible.sync="dialogTableVisible">
                <img :src="currentUrl" width="100%" height="100%">
              </el-dialog>
            </el-col>
            <el-col :span="item.images != null ? 20 : 24">
              <a :href="item.url" target=_blank>
                <div class="ftitle"><strong> {{ item.desc }} </strong></div>
              </a>
              <p align="right">{{ item.who }} </p>
              <br>
              <p align="right">
                <el-tag align="right" type="danger">{{$route.params.id}}</el-tag>
              </p>
            </el-col>
          </div>
          <div class="clearfix"></div>
        </el-card>

      </el-row>
    </ul>
    <el-button type="primary prevpage" icon="arrow-left" @click="getFocusList(--index)">上一页</el-button>
    <el-button type="primary nextpage" @click="getFocusList(++index)">下一页<i
      class="el-icon-arrow-right el-icon--right"></i></el-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        focusList: [],
        index: 1,
        dialogTableVisible: false,
        currentUrl: null,
        category: null,
        loading: false
      }
    },
    created () {
      this.category = this.$route.params.id
      console.log(this.category)
      this.getFocusList(1)
    },
    mounted () {

    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to, from)
        var temp = to.fullPath.split('/')
        console.log(temp)
        this.category = temp[2]
        this.getFocusList(1)
      }
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
        this.$http.get('http://gank.io/api/data/' + this.category + '/10/' + index)
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
    width: 100%;
    height: 100%;
  }
</style>
