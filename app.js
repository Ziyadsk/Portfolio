function displaySection(link,section){
	
	let l = document.querySelector(`${link}`); 
	let s = document.querySelector(`${section}`);
	document.querySelectorAll("nav a").forEach(function(e){  
		e.classList.remove("active");
	});
	l.classList.add("active"); 
	
	document.querySelectorAll("main > div").forEach(function(e){
		e.style.display = "none";
	});
	if(s === document.querySelector("#social-networks")){
		animateLinks() ; 
	}
	if(s === document.querySelector("#skills")){
		console.log("eheh 4e skill ba3d");
		animateSkillSections() ; 
	}
	document.querySelector("nav").style.animation = "nav-element-pressed 1s forwards" ; 
	s.style.display = "flex";
	s.style.flexDirection = "column";     
	s.style.animation = "section-to-up 0.5s forwards"; 
}

function displayDescriptionOnLinks(element){
	let el = document.querySelector(`.${element}`);
	document.querySelectorAll('#social-networks a').forEach((e) => {
		e.classList.remove('link-hovered');
	}); 
	el.parentElement.classList.add("link-hovered");
	el.onmouseleave = function(e) {
		el.parentElement.classList.remove("link-hovered");
	}
}

// to animate links in #social-networks; 
function animateLinks(){
	let interval = 100; 
	document.querySelectorAll("#social-networks a").forEach((e,index) => {
		setTimeout(function () {
			e.style.animation = "display-link-animation 1s forwards";
		},index*interval);
		
	});

}

// to animate skills sections ;

function animateSkillSections(){
	let interval = 100; 
	document.querySelectorAll("#skills section").forEach((e,index) => {
		setTimeout(function () {
			e.style.animation = "display-skills-section-animation 0.5s forwards";
		},index*interval);
		
	});

}

// skills 
(function () {
	document.querySelectorAll("#skills li").forEach((e) => {
		e.onmouseover = function(x){
			skillDescription = document.querySelector("#skill-description"); 
			skillDescription.innerHTML = e.getAttribute("skill-description");
			e.onmouseleave = function(x){
				skillDescription.innerHTML = "";
			}
		}
	});
})() ; 