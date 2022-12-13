let counter = document.querySelector(".counter");
let allButtons = document.querySelectorAll(".btn");
let number = 0;

allButtons.forEach((eachElement) => {
	eachElement.addEventListener("click", () => {
		if (eachElement.classList.contains("increase")) {
			++number;
			counter.innerText = number;
		} else if (eachElement.classList.contains("decrease")) {
			--number;
			counter.innerText = number;
			if (number <= 0) {
				number = 0;
				counter.innerText = number;
			}
		} else if (eachElement.classList.contains("reset")) {
			number = 0;
			counter.innerText = number;
		}
	});
});
