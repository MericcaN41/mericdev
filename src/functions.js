const { animate } = require("framer-motion")

export const popup = selector => {
	let el = document.querySelector(selector)
	if (!el) return
	if (el.style.opacity != 0) return

	animate(selector, { y: 10, opacity: 1, x:["-50%", "-50%"] }, {
		type: "spring",
		onComplete: () => {
			setTimeout(() => {
				animate(selector, { y: 0, opacity: 0 })
			}, 1000)
		}
	})
}