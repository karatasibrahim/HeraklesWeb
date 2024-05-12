<template>
    <Breadcrumbs title="Acente Tanımlama" main="İşletme Ayarları"  />
   <div>
     <!-- ADD MODAL   -->
    <div class="col-12">
        <div class="modal fade modal-bookmark" id="add_agents" tabindex="-1" role="dialog"
            aria-labelledby="add_agentsLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="add_agentsLabel">Yeni Acente</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Acente Adı</label>
                            <input class="form-control" type="text" placeholder="Acenta Adı" v-model="agentObj.AgentTitle" >
                        </div>
                    </div>
                    
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label"><span style="color:black;font-weight:bold;">Acente Sorumlusu:</span></label>
                            <input class="form-control" type="text" placeholder="Ad"  v-model="agentObj.FirstName">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Ülke</label>
                            <multiselect  
            label="name" track-by="code"  v-model="agentObj.Country" placeholder="Ülke Seçiniz"
             :options="$store.getters.GetCountries.map(t => { return { 'name': t.Title, 'id': t.docID } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

                            
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Vergi Dairesi</label>
                            <input class="form-control" type="text" placeholder="Vergi Dairesi"  v-model="agentObj.TaxOffice">
                        </div>
                    </div>
                
                 
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Soyad</label>
                            <input class="form-control" type="text" placeholder="Soyad" v-model="agentObj.LastName">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Şehir</label>
                            <div class="mb-2"> 
          <multiselect  
            label="name" track-by="code" 
            v-model="agentObj.City" placeholder="Şehir Seçiniz"
             :options="$store.getters.GetCitys.map(t => { return { 'name': t.Title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

        
        </div>
                         
                             
                        </div>
                    </div>
                  
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Vergi No</label>
                            <input class="form-control" type="text" placeholder="Vergi No" v-model="agentObj.TaxNumber" >
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Telefon</label>
                            <input class="form-control" type="text" placeholder="Telefon No" v-model="agentObj.Phone">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">İlçe</label>
                            <div class="mb-2"> 
          <multiselect  
            label="name" track-by="code" 
            v-model="agentObj.Town" placeholder="İlçe Seçiniz"
             :options="$store.getters.GetCitys.map(t => { return { 'name': t.Title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

        
        </div>
                         
                             
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">İskonto %</label>
                            <input class="form-control" type="text" placeholder="İskonto Oranı %" v-model="agentObj.Discount" >
                        </div>
                    </div>
                
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">E-posta</label>
                            <input class="form-control" type="text" placeholder="E-posta" v-model="agentObj.Email" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Posta Kodu</label>
                            <input class="form-control" type="number" placeholder="Posta Kodu" v-model="agentObj.PostalCode">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label class="form-label">Adres</label>
                            <input class="form-control" type="text" placeholder="Adres Bilgileri" v-model="agentObj.Address" >
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Acenta Kodu</label>
                    <div class="new-task-wrapper input-group">
                      
                       
                    <input class="form-control" id="new-code"  disabled style="font-weight: bold;" v-model="agentObj.AgentCode"
                        v-on:keyup.enter="addnewcode"><span
                        class="btn btn-warning d-flex input-group-text add-new-task-btn" id="add-task"
                        @click="generateCode()">Kod Oluştur</span>
                </div>
                </div>
                </div>
                            <div style="float: right;">
                            <button class="btn btn-success"    type="submit" id="saveButton" @click.prevent="saveButton()">Kaydet</button>   
                            <button class="btn btn-danger ms-2 close"  type="button" data-bs-dismiss="modal">İptal </button>
                      </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
         <!-- EDİT MODAL  -->
         <div class="modal fade modal-bookmark" id="edit_agents" tabindex="-1" role="dialog"
            aria-labelledby="add_agentsLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="add_agentsLabel">Yeni Acente</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Acente Adı</label>
                            <input class="form-control" type="text" placeholder="Acenta Adı" v-model="editAgents.AgentTitle" >
                        </div>
                    </div>
                    
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label"><span style="color:black;font-weight:bold;">Acente Sorumlusu:</span></label>
                            <input class="form-control" type="text" placeholder="Ad"  v-model="editAgents.FirstName">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Ülke</label>
                            <multiselect  
            label="name" track-by="code"  v-model="editAgents.Country" placeholder="Ülke Seçiniz"
             :options="$store.getters.GetCountries.map(t => { return { 'name': t.Title, 'id': t.docID } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

                            
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Vergi Dairesi</label>
                            <input class="form-control" type="text" placeholder="Vergi Dairesi"  v-model="editAgents.TaxOffice">
                        </div>
                    </div>
                
                 
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Soyad</label>
                            <input class="form-control" type="text" placeholder="Soyad" v-model="editAgents.LastName">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Şehir</label>
                            <div class="mb-2"> 
          <multiselect  
            label="name" track-by="code" 
            v-model="editAgents.City" placeholder="Şehir Seçiniz"
             :options="$store.getters.GetCitys.map(t => { return { 'name': t.Title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

        
        </div>
                         
                             
                        </div>
                    </div>
                  
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Vergi No</label>
                            <input class="form-control" type="text" placeholder="Vergi No" v-model="editAgents.TaxNumber" >
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Telefon</label>
                            <input class="form-control" type="text" placeholder="Telefon No" v-model="editAgents.Phone">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">İlçe</label>
                            <div class="mb-2"> 
          <multiselect  
            label="name" track-by="code" 
            v-model="editAgents.Town" placeholder="İlçe Seçiniz"
             :options="$store.getters.GetCitys.map(t => { return { 'name': t.Title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

        
        </div>
                         
                             
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">İskonto %</label>
                            <input class="form-control" type="text" placeholder="İskonto Oranı %" v-model="editAgents.Discount" >
                        </div>
                    </div>
                
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">E-posta</label>
                            <input class="form-control" type="text" placeholder="E-posta" v-model="editAgents.Email" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Posta Kodu</label>
                            <input class="form-control" type="number" placeholder="Posta Kodu" v-model="editAgents.PostalCode">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label class="form-label">Adres</label>
                            <input class="form-control" type="text" placeholder="Adres Bilgileri" v-model="editAgents.Address" >
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Acenta Kodu</label>
                    <div class="new-task-wrapper input-group">
                      
                       
                    <input class="form-control" id="new-code"  disabled style="font-weight: bold;" v-model="editAgents.AgentCode"
                        v-on:keyup.enter="addnewcode"><span
                        class="btn btn-warning d-flex input-group-text add-new-task-btn" id="add-task"
                        @click="generateCode()">Kod Oluştur</span>
                </div>
                </div>
                <div class="media">
                        <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                        <div class="media-body text-end icon-state switch-outline">
                          <label class="switch">
                            <input type="checkbox" checked v-model="editAgents.isActive"><span class="switch-state bg-success"></span>
                          </label>
                        </div>
                      </div>
                </div>
                            <div style="float: right;">
                            <button class="btn btn-success"    type="submit" id="saveButton" @click.prevent="editButton()">Kaydet</button>   
                            <button class="btn btn-danger ms-2 close"  type="button" data-bs-dismiss="modal">İptal </button>
                      </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- DELETE MODAL -->
        <div class="modal fade modal-bookmark" id="delete_agents" tabindex="-1" role="dialog"
            aria-labelledby="delete_agentsLabel" aria-hidden="true">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  txt-danger" id="delete_agentsLabel">Silmek istediğinizden emin misiniz?</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                            <h5>Seçmiş olduğunuz veri kalıcı olarak silinecek. İşlemi onaylıyor musunuz?</h5>
                            <p></p>
                            <div style="float: right;">
                            <button class="btn btn-success"    type="submit" id="saveButton" @click.prevent="deleteButton()">Sil</button>   
                            <button class="btn btn-danger ms-2 close"  type="button" data-bs-dismiss="modal">İptal </button>
                      </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
           </div>
    <div class="container-fluid">
      <div class="row">
        
    <div class="card">
      <div class="row">
      <div class="card-header col-md-10 ">
        <h3>Acente Bilgileri</h3> 
      </div>
      <div class="card-header col-md-2">
        <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
            data-bs-target="#add_agents" style="float: right;">
            Yeni Ekle
        </button> 
      </div>
      </div>
      <div class="table-responsive">
        
        <table class="table">
          <thead>
       
            <tr class="border-bottom-primary">
              <th scope="col">No</th>
              <th scope="col">Acenta Adı</th>
              <th scope="col">Vergi Dairesi</th>
              <th scope="col">Vergi No</th>
              <th scope="col">İskonto</th>
              <th scope="col">Ad Soyad</th>
              <th scope="col">Telefon</th>
              <th scope="col">E-posta No</th>
              <th scope="col">Şehir</th>
              <th scope="col">Acenta Kodu</th>
              <th scope="col">Aktif/Pasif</th>
           
              <th>İşlem</th>
            </tr>
          </thead> 
     
          <tbody>
            <tr v-for="(item,index) in GetAgents" :key="item.id" class="border-bottom-primary">
     
              <td style="width:20px" >{{ index+1}}</td>
              <td style="width:200px">{{ item.AgentTitle }}</td>
              <td>{{ item.TaxOffice }}</td>
              <td>{{ item.TaxNumber }}</td>
              <td>% {{ item.Discount }}</td>
              <td>{{ item.FirstName +" "+ item.LastName }}</td>
              <td>{{ item.Phone }}</td>
              <td>{{ item.Email }}</td>
              <td>{{ item.City[0].name  }}</td> 
              <td>{{ item.AgentCode }}</td>
              <td>{{ (item.isActive)?'Aktif':'Pasif' }}</td>
           
              <td style="width:30px">
                <div class="dropdown dropdown-action">
            <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"> 
              <vue-feather type="settings"></vue-feather>
               <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
              </a>
            <div class="dropdown-menu dropdown-menu-right  ">
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_agents"
                @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i class="fa fa-pencil m-r-5"></i>Düzenle</a>
                <a class="dropdown-item"   type="button"
                @click="deleteButton(item)" style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>
                 
                
             
            </div>
          </div>
                
                
               
               </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
 
         
    
      </div>
    </div>


    
  </div>
  </template>
<script>
import $ from 'jquery'
import { mapState } from 'vuex';
import { mapActions, mapGetters } from "vuex";
import getImage from "@/mixins/getImage";
import moment from 'moment'; 
import { collection } from 'firebase/firestore';
const currentDate=new Date();
export default {
  data(){
    return {
      editAgents:{},
      
    agentObj:{
      AgentTitle:'',
      FirstName:"",
      LastName:"",
      TaxNumber:"",
      TaxOffice:"",
      Phone:"",
      Discount:"",
      Email:"",
      Address:"",
      Country:"",
      City:"",
      Town:"",
      PostalCode:"",
      AgentCode:"",
      userID:"",
      CreatedOn:currentDate,
      ModifiedOn:currentDate,    
      isActive:true
    },
    userID: JSON.parse(localStorage.getItem("storedData")).userUid,
    }
  },
  computed: {
    ...mapGetters(["GetAgents"]),
     
    ...mapState({
      bootstraplist: state => state.bootsrap.bootstrap,
      inverselist: state => state.bootsrap.inverse
    })
  },
 
  
  methods:{
    ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
    generateCode(){
        let length=12;
        let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
     this.agentObj.AgentCode=result.toUpperCase(); 

    },
    saveButton(){
  
     this.agentObj.userID=  this.userID
     this.agentObj.ModifiedUserName =this.userID
      this.AddData({ db: "Agents", dataSet: this.agentObj }).then(p => {
        $(".btn-close").click();
        this.myQuery({ tableName: "Agents", updateOpt: "SetAgents" })
        
       this.agentObj={}
    })
  },
  editSendData(value){
    this.editAgents=value;

 
  },
    editButton(e){
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.editAgents.ModifiedOn=currentDate,
     
      this.editAgents.ModifiedUserName=uid
      console.log(uid)
      this.EditData({ db: "Agents", data: this.editAgents, id: this.editAgents.id }).then(t => {
        $(".btn-close").click();
        this.agentObj={}
       
        this.myQuery({ tableName: "Agents", updateOpt: "SetAgents" })
       
      })
     
    },
    
 
     
    deleteButton(delData){
      this.$swal({
            icon: 'warning',
            title:"Silmek istediğinize emin misiniz?",
          text:'Silmek istediğiniz bilgiler kalıcı olarak silinecektir..!',
          showCancelButton: true,
           confirmButtonText: 'Sil',
          confirmButtonColor: '#e64942',
          cancelButtonText: 'İptal',
          cancelButtonColor: '#427eff',
        }).then((result)=>{
          if(result.value){
            this.DeleteData({ db: "Agents", mt: "DeleteDataSet", data: delData }).then(p => {
        
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
        this.myQuery({ tableName: "Agents", updateOpt: "SetAgents" })
          
      }) 
        
            this.$swal({
             icon: 'success',
              text:'Silme işlemi başarılı!',
              type:'success',
              confirmButtonText: 'Tamam',
            });
          }else{
            this.$swal({
              text:'Silme işlemi iptal edildi!',
              confirmButtonText: 'Tamam',
            });
          }
        });
      },
  


},

  mounted(){ 
   
  },
  watch:{
    editAgents(value){
      this.agentObj=value
    }
  }


}
</script>