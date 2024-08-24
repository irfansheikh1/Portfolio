function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
let url = 'https://script.google.com/macros/s/AKfycbxmso7ki06qOMjDxLlj-l-l4v8rv1bhhr3UC3NNVoK8xSUrioX4F5bM5KJ9BKT-0w-e/exec';
let form = document.getElementById("contactForm");
form.addEventListener("submit",(e)=>{
	e.target.querySelector('button[type="submit"]').innerText = "Submitted";
	alert("submitted")
	let d = new FormData(form)
	fetch(url,{
		method:"POST",
		body:d
	}).then((res)=>res.text())
	.then((finalRes)=>{
		e.target.submit= "submit"
		form.reset();

		
		console.log(finalRes)}
	)
	e.preventDefault();
	
})



