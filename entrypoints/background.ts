export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  
  // browser.browserAction.onClicked.addListener((tab) => {
  //   if (tab.id) {
  //     browser.tabs.sendMessage(tab.id, { action: "toggleModal" });
  //   }
  // });
});
