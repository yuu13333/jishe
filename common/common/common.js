const imgWithLabel=new Map();
const imgAwaitLabel=[];
let islog=false;
let userID='';
//指id
let currentProject='';

const login=()=>{
	islog = true;
}
const setUserID=(id)=>{
	userID=id;
}
const getUserID=()=>{
	return userID;
}
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
const getiwl=()=>{
	return imgWithLabel;
}
const deleteiwl=(a)=>{
	imgWithLabel.delete(a);
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
const setProject=(val)=>{
	currentProject = val;
	cleariwl();
	clearial();
}

const getProject=()=>{
	return currentProject;
}

const clearProject=()=>{
	currentProject='';
	cleariwl();
	clearial();
}
export default {
	login,
	setUserID,
	getUserID,
	addiwl,
	addial,
	getiwl,
	getial,
	cleariwl,
	clearial,
	setProject,
	getProject,
	clearProject,
	addiwlson,
	deleteiwl,
}

