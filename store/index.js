import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		islog:false,
		token:'',
		userName: '', 
		currentProject:"",
	},
	mutations:{
		login(state, provider) {   
		      state.islog = true;  
		      state.token = provider.token;  
		      state.userName = provider.userName;   
		    }, 
		offline(state,provider){
			state.islog = false;
		},
		logout(state) {  
		      state.islog = false;  
		      state.token = '';  
		      state.userName = '';    
		    },  
		setProject(state,provider){
			state.currentProject=provider.val;
		},
		clearProject(state){
			state.currentProject='';
		},
		
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