<script setup lang="ts">
import { invoke } from "@tauri-apps/api/core";

function test() {
  invoke("greet", { title: "我是标题", content: "我是一大堆的内容啊" }).then(
    (res) => {
      console.log(res);
    }
  );
}
</script>

<template>
  <div class="home">
    <ElButton @click="test">测试</ElButton>
  </div>
</template>

<style scoped lang="scss"></style>
