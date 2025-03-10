import React from "react";
import ReactDOM from "react-dom/client";
import { onMessage } from "webext-bridge/content-script";
import Modal from "./Modal";

let injectedElementInstance: HTMLDivElement | null = null;
export default defineContentScript({
	matches: ["*://*.google.com/*"],
	main() {
		// Create UI initially but hide it
		injectedElementInstance = injectUI();
		injectedElementInstance.style.display = "none";

		onMessage("show-content-ui", () => {
			if (injectedElementInstance) {
				// Toggle visibility of existing UI
				injectedElementInstance.style.display =
					injectedElementInstance.style.display === "none" ? "flex" : "none";
				return;
			}
		});
	},
});

function injectUI() {
	const injectedElement = document.createElement("div");
	injectedElement.setAttribute("data-extension-ui", "true");
	document.body.appendChild(injectedElement);

	// Use createRoot instead of render
	const root = ReactDOM.createRoot(injectedElement);
	root.render(<Modal />);

	return injectedElement;
}


