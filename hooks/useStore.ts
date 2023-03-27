import { onMounted, ref } from "vue";

// export function useStore() {
//   const token = ref("");
//   const setToken = (value: string) => {
//     token.value = value;
//     window.localStorage.setItem("localStorageTeste", value);
//     console.log("Store: ", value);
//   };

//   onMounted(() => {
//     console.log("AQQQQQ");
//     const getToken = window.localStorage.getItem("localStorageTeste");
//     if (getToken) token.value = getToken;
//   });

//   return {
//     token,
//     setToken,
//   };
// }

function UseStore() {
  const localStore = ref("");
  const setLocalStorage = (value: string) => {
    localStore.value = value;
    window.localStorage.setItem("localStorageTeste", value);
    console.log("Store: ", value);
  };

  return {
    localStore,
    setLocalStorage,
  };
}

export const useStore = UseStore();
