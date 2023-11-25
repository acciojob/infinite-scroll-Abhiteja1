//your code here!
const parent = document.querySelector("#infi-list");
// adding 10 li items in ol
let count = 1;
while(count<=10){
	let element = document.createElement("li");
	element.innerText = `Item ${count}`;
	parent.append(element);
	count++;
	}
//capturing scrolling and scrolable heights
parent.addEventListener("scroll",()=>{
	let scrollledHeight = parent.scrollTop;
	let maxScrollHeight = parent.scrollHeight-parent.clientHeight;
	if(maxScrollHeight-scrollledHeight<=5){
		addTwoMoreItems();
	}
function addTwoMoreItems(){
	let element1 = document.createElement("li");
	element1.innerText = `Item ${count++}`;
	let element2 = document.createElement("li");
	element1.innerText = `Item ${count++}`;
	parent.append(element1,element2);
}

