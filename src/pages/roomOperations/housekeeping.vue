<template>
  <Breadcrumbs title="Housekeeping" main="İşletme Ayarları"  />
 <div>
   <!-- ADD MODAL   -->
  <div class="col-12">
      <div class="modal fade modal-bookmark" id="add_roomInfo" tabindex="-1" role="dialog"
          aria-labelledby="add_roomInfoLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="add_roomInfoLabel">Yeni Oda Tanımı</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Kat/Grup Adı</label>
                                  <multiselect v-model="roomInfoObj.RoomGroup"  :options="$store.getters.GetRoomGroups.map(t => { return { 'name': t.Title, 'id': t.id } })"  :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Oda Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="roomInfoObj.Title" required=""
                                      autocomplete="off">
                              </div>
                              
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Durum</label>
                                  <multiselect v-model="roomInfoObj.RoomStatus" :options="$store.getters.GetRoomCheck.map(t=>{return {'name':t.Title,'id':t.id}})" :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Şube Adı</label>
                                  <multiselect v-model="roomInfoObj.Branch" :options="$store.getters.GetBranchInfo.map(t=>{return{'name':t.BranchName,'id':t.id}})" :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Oda Tipi</label>
                                  <multiselect v-model="roomInfoObj.RoomType" :options="$store.getters.GetRoomTypes.map(t=>{return{'name':t.Type,'id':t.id}})"  :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                              <div class="mb-3 col-md-12">
                              <div class="media">
                      <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                      <div class="media-body text-end icon-state switch-outline">
                        <label class="switch">
                          <input type="checkbox" checked v-model="roomInfoObj.isActive"><span class="switch-state bg-success"></span>
                        </label>
                      </div>
                    </div>
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
      <div class="modal fade modal-bookmark" id="edit_roomInfo" tabindex="-1" role="dialog"
          aria-labelledby="edit_roomInfoLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="add_roomInfoLabel">Yeni Oda Tanımı</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Kat/Grup Adı</label>
                                  <multiselect v-model="editRoomInfo.RoomGroup"  :options="$store.getters.GetRoomGroups.map(t => { return { 'name': t.Title, 'id': t.id } })"  :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Oda Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="editRoomInfo.Title" required=""
                                      autocomplete="off">
                              </div>
                              
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Durum</label>
                                  <multiselect v-model="editRoomInfo.RoomStatus" :options="$store.getters.GetRoomCheck.map(t=>{return {'name':t.Title,'id':t.id}})" :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Şube Adı</label>
                                  <multiselect v-model="editRoomInfo.Branch" :options="$store.getters.GetBranchInfo.map(t=>{return{'name':t.BranchName,'id':t.id}})" :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Oda Tipi</label>
                                  <multiselect v-model="editRoomInfo.RoomType" :options="$store.getters.GetRoomTypes.map(t=>{return{'name':t.Type,'id':t.id}})"  :searchable="false" :group-select="true" :close-on-select="false"
            track-by="name"   label="name" placeholder="Pick a value"></multiselect>
                              </div>
                              <div class="mb-3 col-md-12">
                              <div class="media">
                      <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                      <div class="media-body text-end icon-state switch-outline">
                        <label class="switch">
                          <input type="checkbox" checked v-model="editRoomInfo.isActive"><span class="switch-state bg-success"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                            </div>
                              
         
                             
                          </div>
                          <div style="float: right;">
                          <button class="btn btn-success"    type="submit" id="editButton" @click.prevent="editButton()">Kaydet</button>   
                          <button class="btn btn-danger ms-2 close"  type="button" data-bs-dismiss="modal">İptal </button>
                    </div>
                         
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <!-- DELETE MODAL -->
      <div class="modal fade modal-bookmark" id="delete_department" tabindex="-1" role="dialog"
          aria-labelledby="delete_departmentLabel" aria-hidden="true">
          <div class="modal-dialog modal-md" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title  txt-danger" id="delete_departmentLabel">Silmek istediğinizden emin misiniz?</h5>
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
      <h3>Oda Temizlik Bilgileri</h3> 
    </div>
    <div class="card-header col-md-2">
      <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
          data-bs-target="#add_roomInfo" style="float: right;">
          Yeni Ekle
      </button> 
    
    </div>
    <div style="text-align: right;">
                <div class="btn-group" >
                     
                    <button class="btn btn-sm btn-success"><i class="fa fa-file-excel-o"></i> EXCEL</button>
                    <button class="btn btn-sm btn-secondary"><i class="fa fa-file-pdf-o"></i> PDF</button>
                    <button class="btn btn-sm btn-info"><i class="fa fa-print"></i> YAZDIR</button>
                </div>
            </div>
    </div>   
    <div class="table-responsive">
      
      <table class="table">
        <thead>
     
          <tr class="border-bottom-primary">
            <th scope="col">No</th>
            <th scope="col">Şube Adı</th>
            <th scope="col">Oda Adı</th>
            <th scope="col">Kat/Grup Adı</th>
            <th scope="col">Durum</th>
            <th scope="col">Oda Tipi</th>
            <th scope="col">Aktif/Pasif</th>
            <!-- <th scope="col">Oluşturma Tarihi</th>
            <th scope="col">Oluşturan Kullanıcı</th>
            <th scope="col">Güncelleme Tarihi</th>
            <th scope="col">Güncelleyen Kullanıcı</th> -->
            <th>İşlem</th>
          </tr>
        </thead> 
   
        <tbody>
          <tr v-for="(item,index) in GetRoomInfo" :key="item.id" class="border-bottom-primary">
   
            <td style="width:20px" >{{ index+1}}</td>
            <td style="width:250px">{{ item.Branch.name }}</td>
            <td style="width:150px">{{ item.Title }}</td>
            <td style="width:200px">{{ item.RoomGroup.name }}</td>
            <td style="width:200px">{{ item.RoomStatus.name }}</td>
            <td style="width:350px">{{ item.RoomType.name }}</td>
            <td>{{ (item.isActive)?'Aktif':'Pasif' }}</td>
            <!-- <td>{{dateFormat(item.CreatedOn.toDate() ) }}</td>
            <td>{{ getEmployee(item.userID) }}</td>
            <td>{{ dateFormat(item.ModifiedOn.toDate()) }}</td>
            <td>  {{ getEmployee(item.ModifiedUserName) }}</td> -->
            <td style="width:30px">
              <div class="dropdown dropdown-action">
          <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"> 
            <vue-feather type="settings"></vue-feather>
             <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
            </a>
          <div class="dropdown-menu dropdown-menu-right  ">
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_roomInfo"
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
   
    editRoomInfo:{},
  roomInfoObj:{
    Title:"", 
    RoomGroup:"",
    RoomStatus:"",
    RoomType:"",
    Branch:"",
    CreatedOn:currentDate,
    ModifiedOn:currentDate,    
    isActive:true,
    userID:"",
  },
  userID: JSON.parse(localStorage.getItem("storedData")).userUid,
  }
},
computed: {
  ...mapGetters(["GetRoomInfo"]),
   
  ...mapState({
    bootstraplist: state => state.bootsrap.bootstrap,
    inverselist: state => state.bootsrap.inverse
  })
},


methods:{
  ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
  saveButton(){

   this.roomInfoObj.userID=  this.userID
   this.roomInfoObj.ModifiedUserName =this.userID
    this.AddData({ db: "RoomInfo", dataSet: this.roomInfoObj }).then(p => {
      $(".btn-close").click();
      this.myQuery({ tableName: "RoomInfo", updateOpt: "SetRoomInfo" })
      
     this.roomInfoObj={}
  })
},
editSendData(value){
  this.editRoomInfo=value;


},
  editButton(e){
    const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
    this.editRoomInfo.ModifiedOn=currentDate,
   
    this.editRoomInfo.ModifiedUserName=uid
    
    this.EditData({ db: "RoomInfo", data: this.editRoomInfo, id: this.editRoomInfo.id }).then(t => {
      $(".btn-close").click();
      this.roomInfoObj={}
     
      this.myQuery({ tableName: "RoomInfo", updateOpt: "SetRoomInfo" })
     
    })
   
  },
  
getEmployee(t) {
   
    try {
      var data = this.$store.getters.GetUsers.find((a) => a.UserID == t);
console.log(data)
      return data.FirstName + " " + data.LastName;
    } catch (error) {
      return t;
    }
  },
dateFormat(value) {
    if (value) {
      return moment(String(value)).format('DD-MM-YYYY')
    }
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
          this.DeleteData({ db: "RoomInfo", mt: "DeleteDataSet", data: delData }).then(p => {
      
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.myQuery({ tableName: "RoomInfo", updateOpt: "SetRoomInfo"})
        
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
  editRoomInfo(value){
    this.roomInfoObj=value
  }
}


}
</script>