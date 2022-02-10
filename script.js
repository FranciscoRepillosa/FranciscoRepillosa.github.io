const centralIcon = document.getElementById("central");

const noise = (time, icon) => {
		
		return new Promise(function(resolve, reject) {
		// after 1 second signal that the job is finished with an error
		setTimeout(() => {
			icon.style.visibility="visible";
			resolve("done");
		}, time);
		});
		
}

centralIcon.addEventListener("click", async () =>{
	const optionIcons = document.querySelectorAll("body > div > div.optionIcon");
	
	const button1 = await noise(90, optionIcons[0]);
	const button2 = await noise(75, optionIcons[1], button1 );
	const button3 = await noise(65, optionIcons[2], button2);
	const button4 = await noise(55, optionIcons[3], button3);
	const button5 = await noise(50, optionIcons[4], button4);
	const button6 = await noise(55, optionIcons[5], button5);
	const button7 = await noise(60, optionIcons[6], button6);
	const button8 = await noise(65, optionIcons[7], button7);
	
});

document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[central]")
	if (!isDropdownButton && e.target.closest(".optionIcon") != null) return
	
	const optionIcons = document.querySelectorAll("body > div > div.optionIcon");
	
	if(optionIcons[0].style.visibility === "visible") {
		optionIcons.forEach((icon) => {
			icon.style.visibility="hidden";
		})
	}
	
	
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var optionIconConfig = document.querySelector("body > div > div.optionIcon.n5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var colorInput = document.getElementById("colorInput");

const sizeInput = document.getElementById("sizeInput");

const sampleIcon = document.getElementById("iconSample");

colorInput.addEventListener("input", () => {
	console.log(colorInput.value)
	sampleIcon.style.backgroundColor = colorInput.value;
})

sizeInput.addEventListener("input", () => {

	sampleIcon.style.width = sizeInput.value + "px";
	sampleIcon.style.height = sizeInput.value + "px";	
	
})


// When the user clicks on the button, open the modal
optionIconConfig.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  centralIcon.style.backgroundColor = colorInput.value;
  
  const currentSize =  centralIcon.style.width;
	
	console.log(currentSize)
	console.log(sizeInput.value)
	
	const porcentageOfsizeInc = sizeInput.value * 100 / currentSize;

    console.log(porcentageOfsizeInc+" % of increment");	
  
  centralIcon.style.width = sizeInput.value + "px";
  centralIcon.style.height = sizeInput.value + "px";
  const optionIcons = document.querySelectorAll("body > div > div.optionIcon");
  optionIcons.forEach((icon) => {
	  icon.style.backgroundColor = colorInput.value;
	  icon.style.width = sizeInput.value + "px";
	  icon.style.height = sizeInput.value + "px";
  })
	
	

  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	centralIcon.style.backgroundColor = colorInput.value;
	centralIcon.style.width = sizeInput.value + "px";
	centralIcon.style.height = sizeInput.value + "px";
	  const optionIcons = document.querySelectorAll("body > div > div.optionIcon");
	optionIcons.forEach((icon) => {
	  icon.style.backgroundColor = colorInput.value;
	  icon.style.width = sizeInput.value + "px";
	  icon.style.height = sizeInput.value + "px";
  })
  }
}

