<template>
  <div class="container">
    <div class="left">
      <code>
        C:\Users\ataola>node<br />
        Welcome to Node.js v16.14.2. <br />
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
      <pre>
                    _ooOoo_
                    o8888888o
                    88" . "88
                    (| -_- |)
                    O\  =  /O
                    ____/`---'\____
                  .'  \\|     |//  `.
                  /  \\|||  :  |||//  \
                /  _||||| -:- |||||-  \
                |   | \\\  -  /// |   |
                | \_|  ''\-/''  |   |
                \  .-\__  `-`  ___/-. /
                    ___`. .'  /-.-\  `. . __
                  ."" '&lt;  `.___\_&lt;|>_/___.'  >'"".
                | | :  `- \`.;`\ _ /`;.`/ - ` : | |
                \  \ `-.   \_ __\ /__ _/   .-` /  /
            ======`-.____`-.___\_____/___.-`____.-'======
                              `=-='
      </pre>
    </div>
    <div class="right">
      <div class="head">參<img :src="ICON_CHAN" alt="禅" />禪</div>
      <div class="word">
        <span>佛曰：我執，痛苦的根源。</span>
        <span>贪、嗔、痴、慢、疑皆煩惱。</span>
        <span>斷、捨、離、定、慧皆解脫。</span>
        <span>凡所有相，皆是虛妄。</span>
        <span>一花一世界，一葉一菩提。</span>
        <span>因果若有虛，乾坤必有私。</span>
        <span>賺到了，多給人。學到了，多教人。修到了，多傳人。</span>
        <span>金剛手段，菩薩心腸，無不為之，唯有禪定，無不積之。</span>
        <span>若欲無境，當忘其心，心忘即境空，境空即心滅‌‌。</span>
        <span>我不入地獄誰入地獄，地獄不空誓不成佛，眾生度盡方證菩提。</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ICON_CHAN from '@static/icons/chan.svg'
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
    position: relative;
    code {
      text-align: left;
      font-size: 0.18rem;
      padding: 0.15rem;
    }
    pre {
      display: table;
      font-size: 0.18rem;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    background-color: #fff;
    align-content: center;
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

    .word {
      display: flex;
      font-size: 0.24rem;
      font-weight: 700;
      color: #000;
      background-color: #fff;
      border-radius: 0.2rem;
      width: 100%;
      flex-wrap: wrap;
      margin-top: 0.1rem;
      span {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.1rem;
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
