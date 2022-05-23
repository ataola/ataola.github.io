<template>
  <div class="container">
    <div class="left">
      <code>
        C:\Users\ataola>node<br />
        Welcome to Node.js v16.14.2. Type ".help" for more information. <br />
        > Math.pow(1 + 0.01, 365) <br />
        37.78343433288728 <br />
        > Math.pow(1 + 0, 365)<br />
        1<br />
        > Math.pow(1 - 0.01, 365) <br />
        0.025517964452291125 <br />
        > (1 + 0.01) ** 365 <br />
        37.78343433288728 <br />
        > (1 + 0) ** 365 <br />
        1 <br />
        > (1 - 0.01) ** 365 <br />
        0.025517964452291125<br />
        > .exit<br />
        C:\Users\ataola>
      </code>
    </div>
    <div class="right">
      <div class="head">参<img :src="ICON_CHAN" alt="禅" />禅</div>
      <div class="sentence">
        <span>选择</span>
        是非黑白，非黑即白，你选白的时候意味着已经放弃了黑，很多时候都是这样的。
      </div>
      <div class="sentence">
        <span>努力</span>
        选择大于努力，努力也是没有错的，努力不一定能改命，但可以改善生活哇
      </div>
      <div class="sentence">
        <span>努力并坚持</span>
        努力不是喊口号，要落实到365，哪怕是你每天就搞一点点，那也是好的
      </div>
      <div class="sentence">
        <span>拥抱变化</span>
        时代在变，能坐地铁去打工，要什么自行车呀。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ICON_CHAN from '@/static/icons/chan.svg'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  .left {
    display: flex;
    flex: 1;
    background-color: #000;
    color: #fff;
    code {
      text-align: left;
      font-size: 0.18rem;
      padding: 0.15rem;
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    background-color: #fff;
    .head {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.32rem;
      font-family: '幼圆';
      font-weight: 700;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
    .sentence {
      display: grid;
      width: 100%;
      padding: 0.1rem 0.15rem;
      text-align: left;
      font-size: 0.18rem;
      span {
        font-weight: 700;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .container {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .left,
  .right {
    flex-basis: 100%;
  }
}
</style>
