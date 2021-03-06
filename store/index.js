import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		islog:false,
		token:'',
		userName: '', 
		currentProject:"",
		projectlist:[],
	},
	mutations:{
		login(state, provider) {   
		      state.islog = true;  
		      state.token = provider.token;  
		      state.userName = provider.userName;
			  
		    }, 
		offline(state,provider){
			state.islog = false;
			state.token = '';
			state.userName = ''; 
			state.currentProject='';
		},
		logout(state) {  
		      state.islog = false;  
		      state.token = '';  
		      state.userName = '';  
			  state.currentProject='';
		},  
		setProject(state,provider){
			state.currentProject=provider.val;
		},
		clearProject(state){
			state.currentProject='';
		},
		setlist(state,provider){
			state.projectlist=provider.id;
		}
		
	},
	actions:{
		
	},
	getters:{
		islog(state,getters){
			return state.islog;
		}
	}
	
})

export default store