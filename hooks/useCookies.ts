import { onMounted, ref } from "vue";
import Cookies from "js-cookie";

function UseCookies() {
  const cookies = ref("");
  const setCookies = (value: string) => {
    cookies.value = value;
    Cookies.set("cookiesTeste", value, { domain: ".rafaelsene.com" });
  };

  return {
    cookies,
    setCookies,
  };
}

export const useCookies = UseCookies();
