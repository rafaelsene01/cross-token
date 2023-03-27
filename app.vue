<script setup>
import { onMounted } from "vue";
import { useStore } from "@/hooks/useStore";
import { useCookies } from "@/hooks/useCookies";
import Cookies from "js-cookie";

const { setLocalStorage } = useStore;
const { setCookies } = useCookies;
onMounted(() => {
  const getLocalStorage = window.localStorage.getItem("localStorageTeste");
  if (getLocalStorage) setLocalStorage(getLocalStorage);
  const getCookies = Cookies.get("cookiesTeste", { domain: ".rafaelsene.com" });
  if (getCookies) setCookies(getCookies);
});
</script>

<template>
  <div>
    <screen />
    <screen-1 />
  </div>
</template>

<style>
div div {
  padding: 12px 0;
}
</style>
