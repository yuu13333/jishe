const imgWithLabel=new Map();
const imgAwaitLabel=[];

const addiwl=(img,imglabel)=>{
	let label=[];
	label.push(imglabel)
	imgWithLabel.set(img,label);
}

const addiwlson=(img,imglabel)=>{
	imgWithLabel.get(img).push(imglabel);
}

const addial=(a)=>{
	imgAwaitLabel.push(a);
}
const deleteiwl=(a)=>{
	imgWithLabel.delete(a);
}
const getiwl=()=>{
	return imgWithLabel;
}
const getial=()=>{
	return imgAwaitLabel;
}
const cleariwl=()=>{
	imgWithLabel.clear();
}
const clearial=()=>{
	imgAwaitLabel.length=0;
}
export default {
	addiwl,
	addial,
	getiwl,
	getial,
	cleariwl,
	clearial,
	addiwlson,
	deleteiwl,
}

