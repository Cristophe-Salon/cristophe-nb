window.addEventListener("load", (event) => {
	const sItems = document.querySelectorAll(".summary-item .summary-content");
	const list = ["fadeIn", "preFade"];
	sItems.forEach(function (item) {
		sItems.forEach(function (element) {
			element.classList.remove(...list);
			element.setAttribute("data-override-initial-global-animation", "");
		});
	});
	console.log("page is fully loaded " + sItems);
});
/* 
INFO: Clickable folders in nav
LINK: https://www.youtube.com/watch?v=IgpONQwPJYM
*/
(function () {
	let folders;

	function rebuildAnchor(folder) {
		let parent = folder.closest(".header-nav-item--folder"),
			href = folder.href.includes(".com")
				? folder.href.split(".com")[1].replace("-folder/", "")
				: folder.href.replace("-folder/", ""),
			anchorClone = folder.cloneNode(true);

		anchorClone.classList.add("clickable-folder");
		anchorClone.setAttribute("href", href);
		anchorClone.style.cssText = `
          opacity: 1;
          transform: unset;
    `;
		parent.insertAdjacentElement("afterbegin", anchorClone);
		if (href == window.location.pathname) {
			console.log();
			anchorClone
				.closest(".header-nav-item--folder")
				.classList.add("header-nav-item--active");
		}
	}

	function addToMobile(folder) {
		let href = folder.getAttribute("href"),
			hrefAdjusted = href.includes(".com")
				? href.split(".com")[1].replace("-folder/", "")
				: href.replace("-folder/", ""),
			text = folder.innerText,
			newText = `All ${text}`,
			mobileFolder = document.querySelector(`[data-folder="${href}"]`),
			backButton = mobileFolder.querySelector(
				".header-menu-nav-folder-content > *:first-of-type"
			),
			allButton = `<div class="container header-menu-nav-item header-menu-nav-item--external">
  				<a href="${hrefAdjusted}">${newText}</a>
			<div>`;

		backButton.insertAdjacentHTML("afterend", allButton);
	}

	/* Select All Folder Links &  */
	function setFolderLinks() {
		folders = document.querySelectorAll(
			'.header-display-desktop .header-nav-folder-title[href*="-folder/"]'
		);

		for (let folder of folders) {
			window.addEventListener("load", function () {
				addToMobile(folder);
				rebuildAnchor(folder);
				folder.remove();
			});
		}
	}

	setFolderLinks();
})();

// ADA Compliance

// Function to set attributes for elements
function setAriaAttributes(selector, attributeName, attributeValue) {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		element.setAttribute(attributeName, attributeValue);
	});
}

function setAriaLabelExtLink(selector, attributeName, attributeValue) {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		// Get the text content of the element
		const textContent = element.textContent.trim();

		// Combine the text content with the attributeValue
		const ariaLabelValue = textContent + " " + attributeValue;

		// Set the aria-label attribute
		element.setAttribute(attributeName, ariaLabelValue);
	});
}

window.addEventListener("load", function () {
	// ADA: _blank links add aria-label="(opens in a new window)"
	setAriaLabelExtLink(
		'a[target="_blank"]',
		"aria-label",
		"(opens in a new window)"
	);

	// ADA: href="tel:9492190920" aria-label
	setAriaLabelExtLink(
		'a[href="tel:9492190920"] .sqsrte-text-color--lightAccent',
		"aria-label",
		"(opens in a new window)"
	);

	// ADA: plyr__controls__item video time role="button"
	setAriaAttributes(".plyr__controls__item", "role", "button");

	// ADA: plyr__controls__item video time tabindex="0"
	setAriaAttributes(".plyr__controls__item", "tabindex", 0);

	// ADA: plyr__video video time role="button"
	setAriaAttributes(
		".native-video-player .plyr__video-wrapper",
		"role",
		"button"
	);

	// ADA: plyr__video video time tabindex="0"
	setAriaAttributes(
		".native-video-player .plyr__video-wrapper",
		"tabindex",
		0
	);

	// ADA: plyr__video video time tabindex="0"
	setAriaAttributes(
		".native-video-player .plyr__video-wrapper",
		"aria-label",
		""
	);

	// ADA: plyr__video video time role="button"
	setAriaAttributes(".video-player__controls-blocker", "role", "button");

	// ADA: plyr__video video time tabindex="0"
	setAriaAttributes(".video-player__controls-blocker", "tabindex", 0);

	// ADA: chevron roles
	setAriaAttributes(".chevron--right", "role", "presentation");

	// ADA: chevron left chevron--left
	setAriaAttributes(".chevron--left", "role", "presentation");

	// ADA: hidden svg roles
	setAriaAttributes(
		'svg[data-image-mask-id="aa8c1a27f9060ca25a23"]',
		"role",
		"presentation"
	);

	// ADA: newsletter-form-spinner
	setAriaAttributes(".newsletter-form-spinner", "role", "presentation");

	// ADA: newsletter-form-button-icon
	setAriaAttributes(".newsletter-form-button-icon", "role", "presentation");

	// ADA: data-usage="social-icons-svg"
	setAriaAttributes(
		'svg[data-usage="social-icons-svg"]',
		"aria-hidden",
		"true"
	);

	// ADA: ob-widget-btn__icon
	setAriaAttributes(".ob-widget-btn__icon", "role", "presentation");

	// ADA: form required aria - email-yui_3_17_2_1_1561059871607_37975-field
	setAriaAttributes(
		"#email-yui_3_17_2_1_1561059871607_37975-field",
		"aria-required",
		"true"
	);

	// ADA: href="https://cristophe-newport-beach.myshopify.com" aria-label
	setAriaAttributes(
		'a[href="https://cristophe-newport-beach.myshopify.com"]',
		"aria-label",
		"Cristophe Shop"
	);

	// ADA: src="https://phorest.com/book/salons//cristophesalon" iframe aria-label
	setAriaAttributes(
		'iframe[src="https://phorest.com/book/salons//cristophesalon"]',
		"aria-label",
		"Cristophe Booking"
	);

	// ADA: src="https://phorest.com/salon/cristophesalon?wmode=opaque"
	setAriaAttributes(
		'iframe[src="https://phorest.com/salon/cristophesalon?wmode=opaque"]',
		"aria-label",
		"Cristophe Booking"
	);

	// ADA: icon--cart role
	setAriaAttributes(".icon--cart", "role", "presentation");

	// ADA: accordion items (.accordion-item__dropdown p) role="heading"
	setAriaAttributes(".accordion-item__dropdown p", "role", "heading");

	// ADA: talent pages figure role to none
	setAriaAttributes("figure", "role", "none");

	// ADA: talent pages change blog category switch to h3
	const originalElement = document.querySelector(
		"span.blog-item-category-wrapper"
	);

	if (originalElement) {
		// Create a new h3 element
		const newElement = document.createElement("h3");

		// Copy content and attributes from the original element to the new one
		newElement.innerHTML = originalElement.innerHTML;
		for (let i = 0; i < originalElement.attributes.length; i++) {
			const attr = originalElement.attributes[i];
			newElement.setAttribute(attr.name, attr.value);
		}
		// Remove margin from the new element
		newElement.style.margin = "0";
		// Replace the original element with the new one
		originalElement.parentNode.replaceChild(newElement, originalElement);
	}
});
