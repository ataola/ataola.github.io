<template>
  <div class="header">
    <div class="logo"></div>
    <div class="nav">
      <ul class="nav-container">
        <li v-for="item in items" :key="item.value">
          <router-link v-if="item.router" :to="{ name: item.router }" active-class="link-active">
            {{ item.text }}
          </router-link>
          <a v-else :href="item.link" target="_blank">{{ item.text }}</a>
          <ul v-if="item.children.length > 0" class="nav-dropdown">
            <li v-for="child in item.children" :key="child.value">
              <router-link v-if="child.router" :to="{ name: child.router }" active-class="link-active">
                {{ child.text }}
              </router-link>
              <a v-else :href="child.link" class="link-active" target="_blank">{{ child.text }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="search">
      <div class="search-box">
        <font-awesome-icon class="icon-search" :icon="['fas', 'search']" @click="toggleSearch" />
        <input v-show="isSearch" type="text" placeholder="搜索..." class="ipt-search" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRef, toRefs } from 'vue'
import { TNavBarItems } from '@/types/layout/navbar'

export default defineComponent({
  name: 'NavBar',
  props: {
    items: {
      type: Array as PropType<TNavBarItems>,
      default: () => [],
      required: true,
    },
  },
  setup(props, { emit, slots, attrs }) {
    const items = toRef(props, 'items')
    const stateList = reactive({
      isSearch: false,
    })

    const toggleSearch = () => {
      stateList.isSearch = !stateList.isSearch
    }

    return {
      items,
      ...toRefs(stateList),
      toggleSearch,
    }
  },
})
</script>

<style lang="scss" scoped>
a {
  color: #333;
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid #776f6f;
}

.link-active {
  border-bottom: 2px solid #776f6f;
}

.header {
  display: flex;
  flex-basis: 100%;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
  padding: 0.1rem;
  background-color: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  box-shadow: 0 0.0825rem 0.325rem -0.325rem #333;

  .logo {
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.16rem;
    margin: 0 0.1rem;
    background: url('../static/brands/zheng.png') center no-repeat;
    background-size: cover;
  }

  .nav {
    display: flex;
    flex-basis: 60%;
    flex-shrink: 0;
    height: 0.8rem;
    font-size: 0.2rem;

    .nav-container {
      display: flex;
      flex-basis: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        position: relative;
        display: block;
        padding: 0.05rem;

        ul.nav-dropdown {
          position: absolute;
          top: 0.33rem;
          display: none;
          width: 1.5rem;
          padding: 0;
          background-color: #333;
          opacity: 0.9;
          font-size: 0.16rem;
          list-style: none;
          z-index: 13;

          li {
            padding: 0.15rem 0.1rem 0;
            text-align: left;

            &:last-child {
              padding: 0.15rem 0.1rem;
            }

            a {
              color: #fff;
            }

            a:hover {
              border-bottom: 1px solid #fff;
            }
          }
        }

        &:hover ul {
          display: block;
        }
      }
    }
  }

  .search {
    display: flex;
    flex-basis: 20%;
    justify-content: flex-end;
    align-items: center;
    height: 0.8rem;
    font-size: 0.2rem;

    .search-box {
      display: flex;
      background-color: #f0f0f0;
      border-radius: 0.2rem;

      .icon-search {
        display: inline-block;
        background-color: #f0f0f0;
        color: #333;
        padding: 0.1rem;
        border-radius: 50%;
        cursor: pointer;
      }

      .icon-search:hover {
        background-color: #333;
        color: #f0f0f0;
      }

      .ipt-search {
        display: inline-block;
        background-color: #f0f0f0;
        color: #333;
        border-radius: 0.2rem;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        -webkit-transition: 0.3s ease all;
        -moz-transition: 0.3s ease all;
        -ms-transition: 0.3s ease all;
        -o-transition: 0.3s ease all;
        transition: 0.3s ease all;
        text-align: left;
        outline: none;
        border: none;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .nav {
    flex-basis: 80% !important;
  }
  .search {
    display: none !important;
  }
}
</style>
