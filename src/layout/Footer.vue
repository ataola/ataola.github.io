<template>
  <div class="footer">
    <div class="copyright">©2022 - present 江涛網 design by ataola with Vue3 | All Rights Reserved</div>
    <div class="contact">
      <div class="contact-item">
        <a href="https://cloud.tencent.com/developer/user/2705701" target="_blank">
          <font-awesome-icon :icon="['fab', 'weixin']" />
          <img class="contact-item-popup" src="../static/brands/qrcode.jpeg" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1rem;
  background-color: #eaeaea;
  color: #898989;

  .copyright {
    display: flex;
    font-size: 0.18rem;
  }

  .contact {
    display: flex;
    font-size: 0.3rem;

    .contact-item {
      display: flex;
      margin: 0 0.1rem;
      position: relative;

      .contact-item-popup {
        display: none;
      }

      &:hover .contact-item-popup {
        display: block;
        position: absolute;
        width: 1.4rem;
        height: 1.4rem;
        bottom: 0.4rem;
        left: -0.5rem;
      }
    }
  }
}
</style>
