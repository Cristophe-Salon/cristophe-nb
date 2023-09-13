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
