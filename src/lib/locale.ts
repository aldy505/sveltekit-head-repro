import {
  init,
  getLocaleFromNavigator,
  addMessages,
  getLocaleFromQueryString
} from "svelte-i18n";

import en from "../languages/en.json";

addMessages("en", en);
addMessages("en-US", en);
addMessages("en-GB", en);

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromQueryString("lang") || getLocaleFromNavigator()
});
