<template>
    <Breadcrumbs title="Şube Tanımlama" main="İşletme Ayarları"  />
    <div class="container-fluid">
<!-- ADD MODAL -->
<div class="modal fade modal-bookmark" id="add_branch" tabindex="-1" role="dialog"
            aria-labelledby="add_branchLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="add_branchLabel">Yeni Şube</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">Şube Adı</label>
                            <input class="form-control" type="text" placeholder="Şube Adı" v-model="branchObj.BranchName">
                        </div>
                    </div>
                    
                    <div class="col-sm-6 col-md-3">
                        <div class="mb-3">
                            <label class="form-label"><span style="color:black;font-weight:bold;">Şube Sorumlusu:</span></label>
                            <input class="form-control" type="text" placeholder="Ad" v-model="branchObj.FirstName">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label"></label>
                            <input class="form-control" type="text" placeholder="Soyad" v-model="branchObj.LastName">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label class="form-label">Adres</label>
                            <input class="form-control" type="text" placeholder="Otel Adresi" v-model="branchObj.Address">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Telefon</label>
                            <input class="form-control" type="text" placeholder="Telefon No" v-model="branchObj.Phone">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Enlem</label>
                            <input class="form-control" type="text" placeholder="Enlem Koordinatı" v-model="branchObj.Latitude">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Boylam</label>
                            <input class="form-control" type="text" placeholder="Boylam Koordinatı" v-model="branchObj.Longitude">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Şehir</label>
                            <div class="mb-2"> 
          <multiselect v-model="branchObj.City"  
            label="name" track-by="code" 
            
             :options="$store.getters.GetCitys.map(t => { return { 'name': t.Title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

        
        </div>
                         
                             
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Posta Kodu</label>
                            <input class="form-control" type="number" placeholder="Posta Kodu" v-model="branchObj.PostalCode">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">Ülke</label>
                            <multiselect v-model="branchObj.Country"  
            label="name" track-by="code" 
             :options="$store.getters.GetCountries.map(t => { return { 'name': t.Title, 'id': t.docID } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

                            
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
        <!-- EDIT MODAL -->
        <div class="modal fade modal-bookmark" id="edit_branchInfo" tabindex="-1" role="dialog"
            aria-labelledby="edit_branchInfoLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                     
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="" @submit.prevent="editButton">
                          <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="add_branchLabel">Şube Düzenleme</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">Şube Adı</label>
                            <input class="form-control" type="text" placeholder="Şube Adı" v-model="editBranch.BranchName">
                        </div>
                    </div>
                    
                    <div class="col-sm-6 col-md-3">
                        <div class="mb-3">
                            <label class="form-label"><span style="color:black;font-weight:bold;">Şube Sorumlusu:</span></label>
                            <input class="form-control" type="text" placeholder="Ad" v-model="editBranch.FirstName">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label"></label>
                            <input class="form-control" type="text" placeholder="Soyad" v-model="editBranch.LastName">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label class="form-label">Adres</label>
                            <input class="form-control" type="text" placeholder="Otel Adresi" v-model="editBranch.Address">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Telefon</label>
                            <input class="form-control" type="text" placeholder="Telefon No" v-model="editBranch.Phone">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Enlem</label>
                            <input class="form-control" type="text" placeholder="Enlem Koordinatı" v-model="editBranch.Latitude">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Boylam</label>
                            <input class="form-control" type="text" placeholder="Boylam Koordinatı" v-model="editBranch.Longitude">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Şehir</label>
                            <div class="mb-2"> 
          <multiselect v-model="editBranch.City"  
            label="name" track-by="code" 
            
             :options="$store.getters.GetCitys.map(t => { return { 'name': t.Title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

        
        </div>
                         
                             
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Posta Kodu</label>
                            <input class="form-control" type="number" placeholder="Posta Kodu" v-model="editBranch.PostalCode">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">Ülke</label>
                            <multiselect v-model="editBranch.Country"  
            label="name" track-by="code" 
             :options="$store.getters.GetCountries.map(t => { return { 'name': t.Title, 'id': t.docID } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

                            
                        </div>
                    </div>
                    <div class="media">
                        <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                        <div class="media-body text-end icon-state switch-outline">
                          <label class="switch">
                            <input type="checkbox" checked v-model="editBranch.isActive"><span class="switch-state bg-success"></span>
                          </label>
                        </div>
                      </div>
                </div>
                         
                           
                        </form>
                    </div>
                </div>
                            <div style="float: right;">
                            <button class="btn btn-success"    type="submit" id="editButton" >Kaydet</button>   
                            <button class="btn btn-danger ms-2 close"  type="button" data-bs-dismiss="modal">İptal </button>
                      </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- DELETE MODAL -->
        <div class="modal fade modal-bookmark" id="delete_branchInfo" tabindex="-1" role="dialog"
            aria-labelledby="delete_branchInfoLabel" aria-hidden="true">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  txt-danger" id="delete_branchIndoLabel">Silmek istediğinizden emin misiniz?</h5>
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
      <div class="row">
         
          <div class="card">,
            <div class="row">
      <div class="card-header col-md-10 ">
        <h3>Şube Bilgileri</h3> 
      </div>
      <div class="card-header col-md-2">
        <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
            data-bs-target="#add_branch" style="float: right;">
            Yeni Ekle
        </button> 
      </div>
      <div class="table-responsive">
   
        <table class="table">
          <thead>
       
            <tr class="border-bottom-primary">
              <th scope="col">No</th>
              <th scope="col">Şube Adı</th>
              <th scope="col">Sorumlu Personel</th>
              <th scope="col">Telefon</th>
              <th scope="col">Şehir</th>
              <th scope="col">Durum</th> 
              <th>İşlem</th>
            </tr>
          </thead> 
     
          <tbody>
            <tr v-for="(item,index) in GetBranchInfo" :key="item.id" class="border-bottom-primary">
     
              <td >{{ index+1}}</td>
              <td>{{ item.BranchName }}</td>
              <td>{{ item.FirstName +" "+ item.LastName }}</td>
              <td>{{ item.Phone }}</td>
              <td>{{  item.City[0].name  }}</td>
              
              <td>{{ (item.isActive)?'Aktif':'Pasif' }}</td>
          
              <td style="width:30px">
                <div class="dropdown dropdown-action">
            <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"> 
              <vue-feather type="settings"></vue-feather>
               <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
              </a>
            <div class="dropdown-menu dropdown-menu-right  ">
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_branchInfo"
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
  import { mapActions, mapGetters } from "vuex";
  const currentDate=new Date()
  export default {
    data(){
    return {
      editBranch:{},
      options:{},
    branchObj:{
      BranchName:"",
      FirstName:"",
      LastName:"",
      Address:"",
      Phone:"",
      Latitude:"",
      Longitude:"",
      City:'',
      Country:'',
      PostalCode:"",
      userID:"",
      CreatedOn:currentDate,
      ModifiedOn:currentDate,    
      isActive:true
    },
    userID: JSON.parse(localStorage.getItem("storedData")).userUid,
    }
  },
 computed:{
    ...mapGetters(["GetCitys","GetBranchInfo"])
 
  },

 methods:{
  ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
  
    saveButton(){
     
     this.branchObj.userID=  this.userID
     this.branchObj.ModifiedUserName =this.userID
  
      this.AddData({ db: "BranchInfo", dataSet: this.branchObj }).then(p => {
        $(".btn-close").click();
        this.branchObj={}
        this.myQuery({ tableName: "BranchInfo", updateOpt: "SetBranchInfo" })
      
    })
  },
  editSendData(value){
    this.editBranch=value;
    console.log(value)

 
  },
  editButton(e){
    console.log(e)
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.editBranch.ModifiedOn=currentDate,
     
      this.editBranch.ModifiedUserName=uid
      
      this.EditData({ db: "BranchInfo", data: this.editBranch, id: this.editBranch.id }).then(t => {
        $(".btn-close").click();
        this.editBranch={}
       
        this.myQuery({ tableName: "BranchInfo", updateOpt: "SetBranchInfo" })
       
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
            this.DeleteData({ db: "BranchInfo", mt: "DeleteDataSet", data: delData }).then(p => {
        
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
        this.myQuery({ tableName: "BranchInfo", updateOpt: "SetBranchInfo" })
          
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
    editBranch(value){
      this.branchObj=value
    }
  }

 }
    
 
  </script>