import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Modal from "./modal";

export default defineContentScript({
  matches: ["*://*.google.com/*", "*://*.x.com/*"],
  // matches: ["<all_urls>"],
  // 2. Set cssInjectionMode
  cssInjectionMode: "ui",

  async main(ctx) {
    // const [isVisible, setIsVisible] = useState(false);

    const ui = await createShadowRootUi(ctx, {
      name: "example-ui",
      position: "inline",
      onMount: (container, shadow, shadowHost) => {
        document.documentElement.insertBefore(shadowHost, document.head);
        const root = ReactDOM.createRoot(container);
        root.render(<Modal />);
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root?.unmount();
      },
    });

    // browser.runtime.onMessage.addListener((message: any) => {
    //   if (message.action === "toggleModal") {
    //     setIsVisible((prev) => !prev);
    //   }
    // });

    // 4. Mount the UI
    ui.mount();
  },
});
