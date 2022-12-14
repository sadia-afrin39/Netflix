const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e){
	//add border to current tab
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	//grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);  //tab-1/2/3-content
	tabContentItem.classList.add('show');
}


//remove border from every tab
function removeBorder(){
	tabItems.forEach(item =>item.classList.remove('tab-border'));
}
//remove showclass from every tab
function removeShow(){
	tabContentItems.forEach(item =>item.classList.remove('show'));
}


//listen for tab click
tabItems.forEach(item =>item.addEventListener('click',selectItem));