<template>
  <Breadcrumbs title="Stok Tanımlama" main="İşletme Ayarları"  />
 <div>
   <!-- ADD MODAL   -->
  <div class="col-12">
      <div class="modal fade modal-bookmark" id="add_stock" tabindex="-1" role="dialog"
          aria-labelledby="add_stockLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="add_stockLabel">Yeni Stok</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Stok Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="stockObj.Title" required=""
                                      autocomplete="off">
                              </div>
                             
                          </div>
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Alış Fiyatı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="stockObj.PurchasePrice" required=""
                                      autocomplete="off">
                              </div>
                             
                          </div>
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Satış Fiyatı Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="stockObj.SalePrice" required=""
                                      autocomplete="off">
                              </div>
                             
                          </div>
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Adet Miktar</label>
                                  <input class="form-control" id="task-title" type="text" v-model="stockObj.StockTotal" required=""
                                      autocomplete="off">
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
      <div class="modal fade modal-bookmark" id="edit_stock" tabindex="-1" role="dialog"
          aria-labelledby="edit_stockLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="edit_stockLabel">Yeni Stok</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="" @submit.prevent="editButton">
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Stok Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="editStock.Title" required=""
                                      autocomplete="off">
                              </div>
                              <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Alış Fiyatı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="editStock.PurchasePrice" required=""
                                      autocomplete="off">
                              </div>
                             
                          </div>
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Satış Fiyatı Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="editStock.SalePrice" required=""
                                      autocomplete="off">
                              </div>
                             
                          </div>
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Adet Miktar</label>
                                  <input class="form-control" id="task-title" type="text" v-model="editStock.StockTotal" required=""
                                      autocomplete="off">
                              </div>
                             
                          </div> 
                              <div class="media">
                      <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                      <div class="media-body text-end icon-state switch-outline">
                        <label class="switch">
                          <input type="checkbox" checked v-model="editStock.isActive"><span class="switch-state bg-success"></span>
                        </label>
                      </div>
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
      <h3>Stok Bilgileri</h3> 
    </div>
    <div class="card-header col-md-2">
      <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
          data-bs-target="#add_stock" style="float: right;">
          Yeni Ekle
      </button> 
    </div>
    </div>
    <div class="table-responsive">
      
      <table class="table">
        <thead>
     
          <tr class="border-bottom-primary">
            <th scope="col">No</th>
            <th scope="col">Stok Adı</th>
            <th scope="col">Alış Fiyatı</th>
            <th scope="col">Satış Fiyatı</th>          
            <th scope="col">Satılan</th>
            <th scope="col">Kalan</th>
            <th scope="col">Toplam</th>
            <th scope="col">Aktif/Pasif</th> 
            <th>İşlem</th>
          </tr>
        </thead> 
   
        <tbody>
          <tr v-for="(item,index) in GetStocks" :key="item.id" class="border-bottom-primary">
   
            <td style="width:20px" >{{ index+1}}</td>
            <td style="width:350px">{{ item.Title }}</td>
            <td>{{ item.PurchasePrice }} ₺</td>
            <td>{{  item.SalePrice}} ₺</td>
            <td>{{ item.Sales }} </td>
            <td>{{ item.Total }}</td> 
            <td>{{ item.StockTotal }}</td> 
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
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_stock"
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
    editStock:{},
  stockObj:{
    Title:"",
    PurchasePrice:"",
    SalePrice:"",
    Total:"",
    Sales:0,
    StockTotal:"",
    userID:"",
    CreatedOn:currentDate,
    ModifiedOn:currentDate,    
    isActive:true
  },
  userID: JSON.parse(localStorage.getItem("storedData")).userUid,
  }
},
computed: {
  ...mapGetters(["GetStocks"]),
   
  ...mapState({
    bootstraplist: state => state.bootsrap.bootstrap,
    inverselist: state => state.bootsrap.inverse
  })
},


methods:{
  ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
  saveButton(){
 
   this.stockObj.userID=  this.userID
   this.stockObj.ModifiedUserName =this.userID 
   this.stockObj.Total=this.stockObj.StockTotal
  
    this.AddData({ db: "Stocks", dataSet: this.stockObj }).then(p => {
      $(".btn-close").click();
      this.myQuery({ tableName: "Stocks", updateOpt: "SetStocks" })
      
     this.stockObj={}
  })
},
editSendData(value){
  this.editStock=value;


},
  editButton(e){
  
    const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
    this.editStock.ModifiedOn=currentDate,
   
    this.editStock.ModifiedUserName=uid
    
    this.EditData({ db: "Stocks", data: this.editStock, id: this.editStock.id }).then(t => {
      $(".btn-close").click();
      this.stockObj={}
     
      this.myQuery({ tableName: "Stocks", updateOpt: "SetStocks" })
     
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
          this.DeleteData({ db: "Stocks", mt: "DeleteDataSet", data: delData }).then(p => {
      
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.myQuery({ tableName: "Stocks", updateOpt: "SetStocks" })
        
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
  editStock(value){
    this.stockObj=value
  }
}


}
</script>