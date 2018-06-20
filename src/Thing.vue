<template>
  <div class="thing">
    <strong>{{ title }}</strong>
    <div>
      {{ message }}
    </div>
    <div>
      <button v-on:click="onClick">Ding {{ count }}</button> at {{ testComputed }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component
export default class Thing extends Vue {
  // Prop
  @Prop() private title!: string;

  // Data
  private message: string = process.env.DEFAULT_MESSAGE || 'Hello!';
  private count: number = 0;

  // Methods
  private onClick(): void {
    this.count ++;
  }

  // Lifecycle method
  private mounted() {
    console.log('Thing Mounted!');
  }

  // Computed
  get testComputed() {
    return Math.random();
  }

  // Watch
  @Watch('count')
  private onMessageChanged(value: string, oldValue: string) {
    console.log(value);
  }
}
</script>

<style lang="less">
.thing {
  background-color: orange;
}
</style>
