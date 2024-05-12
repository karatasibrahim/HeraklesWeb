<template>
  <Breadcrumbs title="Giderler" main="Kasa İşlemleri"  />
 <div>
   <!-- ADD MODAL   -->
  <div class="col-12">
      <div class="modal fade modal-bookmark" id="add_department" tabindex="-1" role="dialog"
          aria-labelledby="add_departmentLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="add_departmentLabel">Yeni Gider</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Gider Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="expensesObj.Title" required=""
                                      autocomplete="off">
                              </div>
                              
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Ödeme Tipi</label>
                                  <multiselect  
            label="name" track-by="code" 
            v-model="expensesObj.PaymentType" placeholder="Ödeme Tipi Seçiniz"
             :options="$store.getters.GetPaymentType.map(t => { return { 'name': t.title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                  
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Miktar</label>
                                  <input class="form-control" id="task-title" type="number" v-model="expensesObj.Quantity" required=""
                                      autocomplete="off">
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Tutar</label>
                                  <input class="form-control" id="task-title"  type="number" v-model="expensesObj.Total" required=""
                                      autocomplete="off">
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Toplam</label>
                                  <input class="form-control" id="task-title"   type="number" v-model="expensesObj.SumTotal" required=""
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
      <div class="modal fade modal-bookmark" id="edit_department" tabindex="-1" role="dialog"
          aria-labelledby="edit_departmentLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="edit_departmentLabel">Yeni Departman</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="" @submit.prevent="editButton">
                          <div class="row"> 
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Gider Adı</label>
                                  <input class="form-control" id="task-title" type="text" v-model="editExpenses.Title" required=""
                                      autocomplete="off">
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Ödeme Tipi</label>
                                  <multiselect  
            label="name" track-by="code" 
            v-model="editExpenses.PaymentType" placeholder="Ödeme Tipi Seçiniz"
             :options="$store.getters.GetPaymentType.map(t => { return { 'name': t.title, 'id': t.id } })" 
             :searchable="true" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                   
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Miktar</label>
                                  <input class="form-control" id="task-title" type="number" v-model="editExpenses.Quantity" required=""
                                      autocomplete="off">
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Tutar</label>
                                  <input class="form-control" id="task-title"  type="number" v-model="editExpenses.Total" required=""
                                      autocomplete="off">
                              </div>
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Toplam</label>
                                  <input class="form-control" id="task-title"   type="number" v-model="editExpenses.SumTotal" required=""
                                      autocomplete="off">
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
      <h3>Gider Bilgileri</h3> 
    </div>
    <div class="card-header col-md-2">
      <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
          data-bs-target="#add_department" style="float: right;">
          Yeni Ekle
      </button> 
    </div>
    </div> 
    <div class="table-responsive">
      
      <table class="table">
        <thead>
     
          <tr class="border-bottom-primary">
            <th scope="col">No</th>
            <th scope="col">Gider Adı</th>
            <th scope="col">Ödeme Tipi</th>
            <th scope="col">Miktar</th>
            <th scope="col">Tutar</th>
            <th scope="col">Toplam</th>
            <th scope="col">Personel</th>
           <th scope="col">Oluşturma Tarihi</th> 
               <!--<th scope="col">Güncelleme Tarihi</th> -->
               <!--<th scope="col">Güncelleyen Kullanıcı</th> -->
            <th>İşlem</th>
          </tr>
        </thead> 
   
        <tbody>
          <tr v-for="(item,index) in GetExpenses" :key="item.id" class="border-bottom-primary">
   
            <td style="width:20px" >{{ index+1}}</td>
            <td style="width:350px">{{ item.Title }}</td>
            <td>{{ item.PaymentType[0].name  }}</td>
            <td>{{ item.Quantity }}</td>
            <td>{{ item.Total }} ₺</td>
            <td>{{ item.SumTotal }} ₺</td> 
            <td>{{ getEmployee(item.userID) }}</td>
              <td>{{dateFormat(item.CreatedOn.toDate() ) }}</td>
         
          
            <td style="width:30px">
              <div class="dropdown dropdown-action">
          <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"> 
            <vue-feather type="settings"></vue-feather>
             <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
            </a>
          <div class="dropdown-menu dropdown-menu-right  ">
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"
              @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i class="fa fa-pencil m-r-5"></i>Düzenle</a>
              <a class="dropdown-item"   type="button"
              @click="deleteButton(item)" style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>
               
              
           
          </div>
        </div>
              
              
             
             </td>
          </tr>
          <tr>
                <td colspan="4">
                    
                </td>
                <td class="total-amount">
                    <h6 class="m-0 text-end"><span class="f-w-600" >Toplam Tutar : </span></h6>
                </td>
                <td  >
                  <span> 23442 ₺ </span>
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
import { getFunctions, httpsCallable } from 'firebase/functions' 
const currentDate=new Date();
export default {
data(){
  return {
    toplam: 0,
    editExpenses:{},
  expensesObj:{
    Title:"",
    userID:"",
    PaymentType:"",
    Quantity:"",
    Total:"",
    SumTotal:"",
    Employee:"",
    CreatedOn:currentDate,
    ModifiedOn:currentDate,    
    
  },
  userID: JSON.parse(localStorage.getItem("storedData")).userUid,
  }
},
computed: {
  ...mapGetters(["GetExpenses"]),
   
  ...mapState({
    bootstraplist: state => state.bootsrap.bootstrap,
    inverselist: state => state.bootsrap.inverse
  })
},


methods:{
  ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
  saveButton(){

   this.expensesObj.userID=  this.userID
   this.expensesObj.Employee =this.userID 
   this.expensesObj.Total=(this.expensesObj.Quantity*this.expensesObj.Total).toFixed(2);
   this.expensesObj.SumTotal=(this.expensesObj.Quantity*this.expensesObj.Total).toFixed(2);
    this.expensesObj.CreatedOn=new Date();
    this.AddData({ db: "Expenses", dataSet: this.expensesObj }).then(p => {
      $(".btn-close").click();
      this.myQuery({ tableName: "Expenses", updateOpt: "SetExpenses" })
      
     this.expensesObj={}
  })
  var logUserAction=httpsCallable(getFunctions(), 'logUserAction');
 
 var Action=this.expensesObj.Title +" "+' Gider Eklendi';
 var ActionKey="Create"
 logUserAction({Action:Action,ActionKey:ActionKey}).then(function(result){
   console.log("Log kaydı eklendi. Sonuç", result);
 }).catch(function(error){
   console.log("Log kaydı eklenirken hata oluştu",error)
 })
},
editSendData(value){
  this.editExpenses=value;


},
 
 

  editButton(e){
    const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
    this.editExpenses.Total=(this.editExpenses.Quantity*this.editExpenses.Total).toFixed(2);
   this.editExpenses.SumTotal=(this.editExpenses.Quantity*this.editExpenses.Total).toFixed(2);
    this.editExpenses.ModifiedOn=currentDate,
   
    this.editExpenses.ModifiedUserName=uid
    
    this.EditData({ db: "Expenses", data: this.editExpenses, id: this.editExpenses.id }).then(t => {
      $(".btn-close").click();
      this.expensesObj={}
     
      this.myQuery({ tableName: "Expenses", updateOpt: "SetExpenses" })
     
    })
    var logUserAction=httpsCallable(getFunctions(), 'logUserAction');
 
 var Action=this.editExpenses.Title +" "+' Gider Güncellendi';
 var ActionKey="Update"
 logUserAction({Action:Action,ActionKey:ActionKey}).then(function(result){
   console.log("Log kaydı eklendi. Sonuç", result);
 }).catch(function(error){
   console.log("Log kaydı eklenirken hata oluştu",error)
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
          this.DeleteData({ db: "Expenses", mt: "DeleteDataSet", data: delData }).then(p => {
      
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.myQuery({ tableName: "Expenses", updateOpt: "SetExpenses" })
        
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

      var logUserAction=httpsCallable(getFunctions(), 'logUserAction');
        var Action=delData.Title +" "+' Gider Silindi';
 var ActionKey="Delete"
 logUserAction({Action:Action,ActionKey:ActionKey}).then(function(result){
   console.log("Log kaydı eklendi. Sonuç", result);
 }).catch(function(error){
   console.log("Log kaydı eklenirken hata oluştu",error)
 })
    },



},

mounted(){ 
   
 
},
watch:{
  editExpenses(value){
    this.expensesObj=value
  }
}


}
</script>