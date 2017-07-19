<template id="gankdata">
  <div id="focus">
    <ul >
      <li v-for="(item , index) in focusList">
        <div class="details">
          <a :href="item.url" target=_blank>
            <div class="ftitle"><strong> {{ item.desc }} </strong></div>
          </a>
          <p align="right">{{ item.who }} </p>
        </div>
        <div class="clearfix"></div>
      </li>
    </ul>
    <button class="btn prevpage" @click="getFocusList(--index)">上一页</button>
    <button class="btn nextpage" @click="getFocusList(++index)">下一页</button>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        focusList: [],
        index: 1
      }
    },
    mounted () {
      this.getFocusList(1)
    },
    methods: {
      getFocusList (index) {
        if (index <= 0) {
          index = 1
        }
        var vm = this
        this.$http.get('http://gank.io/api/data/iOS/10/' + index)
          .then(function (res) {
            vm.focusList = res.data.results
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>
<style scoped>
  #focus {
    text-align: left;
  }

  #focus ul {
    margin: 0 auto;
    width: 100%;
    border-bottom: none;
  }

  #focus p {
    margin: 0;
  }

  #focus li {
    width: 100%;
    display: block;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 2rem;
    cursor: default;
  }

  #focus img {
    height: 10rem;
    width: 10rem;
    margin-left: -1rem;
  }

  .details {
    float: none;
    width: 100%;
  }

  .clearfix {
    clear: both;
  }
  .nextpage {
    float:right;
    margin-top: 4rem;
    background: whitesmoke;
  }
  .prevpage {
    float:left;
    margin-top: 4rem;
    margin-left: 4rem;
    background: whitesmoke;
  }
</style>
