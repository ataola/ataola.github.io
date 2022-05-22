<template>
  <div class="radio-box">
    <div class="radio-item">
      <input type="radio" :id="uuid" @click="updateSelected(value)" :name="uuid" :checked="value" />
      <label :for="uuid" class="radio-label">&nbsp;</label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, PropType } from 'vue'
import { getUUID } from '@/utils/str'

export default defineComponent({
  name: 'SingleRadioBox',
  props: {
    value: { type: Boolean, default: () => false },
  },
  emits: ['input'],
  setup(props, { emit, slots, attrs }) {
    const uuid = getUUID()

    const updateSelected = (value: boolean) => {
      emit('input', !value)
    }

    watch(
      () => props.value,
      (newValue: boolean, oldValue: boolean) => {
        updateSelected(newValue)
      }
    )

    return {
      uuid,
      updateSelected,
    }
  },
})
</script>
<style lang="scss">
.radio-box {
  display: flex;
  padding: 0.15rem;

  input[type='radio']:checked,
  input[type='radio']:not(:checked) {
    position: absolute;
    left: -99.99rem;
  }

  input[type='radio']:checked + label,
  input[type='radio']:not(:checked) + label {
    position: relative;
    padding-left: 0.28rem;
    cursor: pointer;
    line-height: 0.2rem;
    display: inline-block;
  }

  input[type='radio']:checked + label:before,
  input[type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0.18rem;
    height: 0.18rem;
    border: 0.01rem solid #ddd;
    border-radius: 100%;
    background: #fff;
  }

  input[type='radio']:checked + label:after,
  input[type='radio']:not(:checked) + label:after {
    content: '';
    width: 0.12rem;
    height: 0.12rem;
    background: rgba(82, 135, 255, 1);
    position: absolute;
    top: 0.04rem;
    left: 0.04rem;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input[type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  input[type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .radio-item {
    padding-right: 0.1rem;
    display: flex;
  }

  .radio-label {
    font-size: 0.18rem;
    padding: 0 0.05rem;
    color: #50df90;
  }
}
</style>
