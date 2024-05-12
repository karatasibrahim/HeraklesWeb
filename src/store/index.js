import Vue from "vue"
import Vuex from "vuex"
import {createStore} from 'vuex'

import layout from './modules/layout';
import menu from './modules/menu';
import chat from './modules/chat';
import product from './modules/product';
import todo from './modules/todo';
import contact from './modules/contact';
import jobs from './modules/jobs';
import courses from './modules/courses';
import common from './modules/common';
import tags from './modules/tags';
import bootsrap from "./modules/bootsrap"
import language from "./modules/language"
import {db,fileStorage,firebaseFnk} from "../firebase/firebase";
import {getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {collection,getDocs,where,query,doc,deleteDoc,updateDoc,setDoc,addDoc,getDoc,onSnapshot,DocumentReference,orderBy} from "firebase/firestore";
import {  httpsCallable,getFunctions } from 'firebase/functions';
let documentID = ""
export default new Vuex.createStore({
  state:{
    langIcon: '',
    langLangauge: '',
    isActive:false, 
    users:[],
    dataSet:[], 
    guest:[],
    caller:[],
    newCaller:[],
    customerCaller:[],
    filteredData: [],

 
  },
  
  getters:{
    
    GetCaller(state){
      return state.caller
    },
    GetNewCaller(state){
      return state.newCaller
    },
    GetCustomerCaller(state){
      return state.customerCaller
    },
     
   
    GetUsers(state){
      return state.users
    },
    langIcon: (state)=>{ return state.langIcon},
    langLangauge:(state)=>{return state.langLangauge}
  },
  mutations: {
    DeleteDataSet(state, payload) {
      const findItem = state.dataSet.findIndex(el => {
    
        return el.id == payload.data.id
      });
      
      state.employee.splice(findItem, 1)
    },
    SetFilteredData(state, filteredData) {
      state.filteredData = filteredData;  
    },
    SetCaller(state,payload){
      state.caller=payload
    },
    SetNewCaller(state,payload){
      state.newCaller=payload
    },
    SetCustomerCaller(state,payload){
      state.customerCaller=payload
    },
    
    SetUsers(state,payload)
    {
      state.users=payload
    },
    
      changeLang (state, payload) {
        localStorage.setItem('currentLanguage', payload.id);
        localStorage.setItem('currentLanguageIcon', payload.icon);
        state.langIcon = payload.icon || 'flag-icon-tr'
        state.langLangauge = payload.id || 'TR'
      },
      change(state){
        state.isActive = !state.isActive
      }
    },
    actions: {

 

   async personInfo(context){
   const getEmail=JSON.parse(localStorage.getItem('storedData'));
   const resultMail=query(collection(db,"Users"),
   where("Email","==",getEmail.email));

   const userData=await getDocs(resultMail);
 

   userData.forEach((doc)=>{
   
    documentID=doc.id;
   
    context.commit("SetUsers",doc.data())
   });
   
   return userData

   },
      
      async myQuery(context, payload) {

        // let docRef = query(collection(db, payload.tablo));

        // if (payload.kosul) docRef = query(docRef, ...payload.kosul.map(t => where(t.query[0], t.query[1], t.query[2])))
        // if (payload.sirala) docRef = query(docRef, orderBy(payload.sirala, payload.siralaYon != null ? payload.siralaYon : "desc"))
        // if (payload.limit) docRef = query(docRef, limit(payload.limit))
        // if (payload.pagination && !payload.sirala) docRef = query(docRef, orderBy(payload["pagination"]["orderBy"], payload.siralaYon != null ? payload.siralaYon : "desc"), startAt(payload["pagination"]["startAt"]), endAt(payload["pagination"]["endAt"]))
  
  
  
  
        // const docSnap = await getDocs(docRef);
        // // console.log("SONUC", docSnap.docs)
  
        // console.log("PARAMETRELER", payload)
        // if (payload.guncelle) context.commit(payload.guncelle, docSnap.docs.map(p => Object.assign(p.data(), { id: p.id })))



        let docRef;
        if (payload.conditionOpt) {   
          if (payload.orderOpt) {  
            docRef = query(collection(db, payload.tableName), ...payload.conditionOpt.map(t => where(t.query[0], t.query[1], t.query[2])), orderBy(payload.orderOpt, "desc"))
           
          }
          else {  
            docRef = query(collection(db, payload.tableName), ...payload.conditionOpt.map(t => where(t.query[0], t.query[1], t.query[2])))
          }  
        }
         else {
          if (payload.orderOpt) {  
            docRef = query(collection(db, payload.tableName), orderBy(payload.orderOpt, "asc"));
          } 
          else {
            docRef = query(collection(db, payload.tableName));   
          }
        } 
        const docSnap = await getDocs(docRef);   
        if (payload.updateOpt) context.commit(payload.updateOpt, docSnap.docs.map(p => Object.assign(p.data(), { id: p.id })))  
       
      },
      async queryRef(context, payload) {

        return await doc(db, payload.tableName, payload.id);
      },
      async sorguDoc(context, payload) {
  
  
        const docSnap = await getDoc(payload);
  
        return Object.assign(docSnap.data(), { id: docSnap.id });
      },
      async sorguTable(context, payload) {
  
        let docRef;
        if (payload.conditionOpt) {
  
          if (payload.orderOpt) {
  
            docRef = query(collection(db, payload.tableName), ...payload.conditionOpt.map(t => where(t.query[0], t.query[1], t.query[2])), orderBy(payload.orderOpt, "desc"))
          }
          else {
  
            docRef = query(collection(db, payload.tableName), ...payload.conditionOpt.map(t => where(t.query[0], t.query[1], t.query[2])))
          }
  
  
  
  
        } else {
  
          docRef = query(collection(db, payload.tableName));
        } 
        const docSnap = await getDocs(docRef); 
  
        return docSnap.docs.map(p => Object.assign(p.data(), { id: p.id }))
  
      },
      async Operations(context, payload) {
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
        const saveDay=new Date();
        //context.dispatch("myQuery", ({ tableName: "Users", orderOpt: "FirstName", updateOpt: "SetUsers", conditionOpt: [{ query: ["UserID", "==", uid] }] }))
        context.dispatch("myQuery", ({ tableName: "Users", updateOpt: "SetUsers" }))
      
        context.dispatch("myQuery", ({ tableName: "CallRecord", updateOpt: "SetCaller",orderOpt:"CallDate"}))
        context.dispatch("myQuery", ({ tableName: "CallRecord", updateOpt: "SetNewCaller", conditionOpt:[{query:["IsCustomer","==",false]}],orderOpt:"CallDate" }))
        context.dispatch("myQuery", ({ tableName: "CallRecord", updateOpt: "SetCustomerCaller",conditionOpt:[{query:["IsCustomer","==",true]}],orderOpt:"CallDate"}))
      
      
      },
      async AddDataID(context,payload){
        try {
          const docRef = await addDoc(collection(db, payload.db), payload.dataSet);
         
          const docID = docRef.id;
        
 
          payload.dataSet.DocID = docID;
           const data = doc(db, payload.db, docID); 
         
            await setDoc(data, payload.dataSet); 
          return docID;
          
      } catch (error) {
          console.error("Doküman eklenirken hata oluştu:", error);
      }
       },
       async AddDataRes(context,payload){
        const docRef = doc(db, payload.db, payload.documentID);
        
        try {
            await setDoc(docRef, payload.dataSet);
        } catch (error) {
            console.error("Doküman eklenirken hata oluştu:", error);
        }
    },

      async AddData(context,payload){
        addDoc(collection(db,payload.db),payload.dataSet) 
       },
       async EditData(context, payload) {
    
        const data = doc(db, payload.db, payload.id); 
        await setDoc(data, payload.data); 
      }, 
      async DeleteData(content, payload) {
        
        await deleteDoc(doc(db, payload.db, payload.data.id))
        
      }, 
      async imageUploadData(context, payload) { 
        const storage = getStorage(); 
        const storageRef = ref(storage, '`Çinili Otel/Dosyalarım/' + payload.name); 
        const uploadTask = await uploadBytes(storageRef, payload); 
        return getDownloadURL(uploadTask.ref) 
  
      },
     
      setLang ({ commit }, payload) {
        commit('changeLang', payload);   
      },
      async fetchData(context, payload) { 
       
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;   
        const docRef = query(collection(db, payload.db), where("userID", "==", uid));        
        const docSnap = await getDocs(docRef);         
        docSnap.forEach((el) => {
          context.commit(payload.mt,Object.assign(el.data(), {
            id: el.id 
          
          }))  
        })      
      },
    },
    modules: {
      alert,
      layout,
      chat,
      menu,
      product,
      todo,
    tags,
      jobs,
      courses,language,
      common,contact,bootsrap
    },
    
});

