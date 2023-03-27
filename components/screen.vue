<script setup>
import { useStore } from "@/hooks/useStore";
import { useCookies } from "@/hooks/useCookies";

const { localStore, setLocalStorage } = useStore;
const { cookies, setCookies } = useCookies;
</script>

<template>
  <div>
    <span>Storage S1 = {{ localStore }}</span>
    <button @click="setLocalStorage(new Date().getTime())">New</button>
  </div>
  <div>
    <span>Cookies S1 = {{ cookies }}</span>
    <button @click="setCookies(new Date().getTime())">New</button>
  </div>
</template>
