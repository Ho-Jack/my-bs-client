<template>
  <div class="tc" scroll="no">
    <hearder title="大家来吐槽"></hearder>
    <svg :width='width' :height='height' @mousemove='listener($event)'>
      <a :href="tag.href" v-for='tag in tags'>
        <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}
        </text>
      </a>
    </svg>
    <div class="input-button">
      <mu-text-field class="input-word" placeholder="Please input......" v-model="tc"></mu-text-field>
      <mu-button color="blue" @click="send">发送</mu-button>
    </div>
  </div>
</template>
<script>
  import hearder from '../components/commom/hearder'
  export default {
    name: 'tucao',
    components: {
      hearder,

    },
    data () {
      return {
        width: 600,//svg宽度
        height: 500,//svg高度
        tagsNum: '',//标签数量
        RADIUS: 150,//球的半径
        speedX: Math.PI / 360,//球一帧绕x轴旋转的角度
        speedY: Math.PI / 360,//球-帧绕y轴旋转的角度
        tags: [],
        tc: '',
        color: 'red',
        tucao: ['你好啊', '哈哈', '我爱你祖国', '圣诞快乐', '我是你爹', '陈浩杰我爱你', '石头门天下第一', '没有最帅只有更帅', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊', '你很帅啊']

      }
    },
    computed: {

      CX () { //球心x坐标
        let {width} = this
        return width / 5
      },
      CY () { //球心y坐标
        let {height} = this
        return height / 2
      }
    },
    created () {//初始化标签位置
      let tags = []
      this.tagsNum = this.tucao.length
      for (let i = 0; i < this.tagsNum; i++) {
        let tag = {}
        let k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(this.tagsNum * Math.PI)//计算标签相对于球心的角度
        tag.text = this.tucao[i]
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b) //根据标签角度求出标签的x,y,z坐标
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
        tag.z = this.RADIUS * Math.cos(a)
        tag.href = '#'//给标签添加链接
        tag.color = 'red'

        tags.push(tag)  //让vue替我们完成视图更新
      }
      this.tags = tags
    },
    mounted () {//使球开始旋转
      setInterval(() => {
        this.rotateX(this.speedX)
        this.rotateY(this.speedY)
      }, 17)

    },
    methods: {
      send () {
        this.tags.splice(0, 1)
        let tag = {}
        let k = -1 + (2 * (19 + 1) - 1) / this.tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(this.tagsNum * Math.PI)//计算标签相对于球心的角度
        tag.text = this.tc
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b) //根据标签角度求出标签的x,y,z坐标
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
        tag.z = this.RADIUS * Math.cos(a)
        tag.href = '#'//给标签添加链接

        this.tags.push(tag)  //让vue替我们完成视图更新
        this.$toast.success('弹幕发送成功');
        this.tc=''
      },
      rotateX (angleX) {
        var cos = Math.cos(angleX)
        var sin = Math.sin(angleX)
        for (let tag of this.tags) {
          var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
          var z1 = tag.z * cos + (tag.y - this.CY) * sin
          tag.y = y1
          tag.z = z1
        }
      },
      rotateY (angleY) {
        var cos = Math.cos(angleY)
        var sin = Math.sin(angleY)
        for (let tag of this.tags) {
          var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
          var z1 = tag.z * cos + (tag.x - this.CX) * sin
          tag.x = x1
          tag.z = z1
        }
      },
      listener (event) {//响应鼠标移动
        var x = event.clientX - this.CX
        var y = event.clientY - this.CY
        this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001)
        this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001)
      }
    }
  }
</script>
<style scoped>

  svg {
    position: absolute;
  }

  .input-button {
    display: flex;
    position: absolute;
    bottom: 56px;
    width: 100%;
    height: 50px;
  }

  .input-word {
    flex-grow: 1;
  }

</style>
