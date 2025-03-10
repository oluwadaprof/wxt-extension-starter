import { sendMessage } from "webext-bridge/background";

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  browser.action.onClicked.addListener((tab) => {
    console.log("Tab clicked", tab);
    sendMessage("show-content-ui", {}, "content-script@" + tab.id);
  });
});
