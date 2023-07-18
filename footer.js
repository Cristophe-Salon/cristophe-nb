function myFunction() {
	var x = document.getElementsByClassName(
		"fe-block-yui_3_17_2_1_1689695997826_3663"
	)
	console.log(x)
	for (var i = 0; i < x.length; i++) {
		console.log(x[i])
		x[i].classList.toggle("show")
	}
}

window.addEventListener("load", (event) => {
	const sItems = document.querySelectorAll(".summary-item .summary-content")
	const list = ["fadeIn", "preFade"]
	sItems.forEach(function (item) {
		sItems.forEach(function (element) {
			element.classList.remove(...list)
			element.setAttribute("data-override-initial-global-animation", "")
		})
	})
	console.log("page is fully loaded " + sItems)
})
