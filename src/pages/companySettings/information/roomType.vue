<template>
    <Breadcrumbs title="Oda Tipi Tanımlama" main="İşletme Ayarları"  />
    <div class="container-fluid">
      <div class="row">
      
     
   
         
      </div>
    </div>
 <!-- ADD MODAL  -->
    <div class="col-12">
        <div class="modal fade modal-bookmark" id="add_roomFeatures" tabindex="-1" role="dialog"
            aria-labelledby="add_roomFeaturesLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="add_roomFeaturesLabel">Yeni Oda Tipi</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                            <div class="row">
                           
         
         <div class="card-body">
           <ul class="nav nav-tabs nav-primary" id="pills-warningtab" role="tablist">
             <li class="nav-item"><a class="nav-link active" id="pills-warninghome-tab" data-bs-toggle="pill" href="#pills-warninghome" role="tab" aria-controls="pills-warninghome" aria-selected="false"><i class="icofont icofont-ui-home"></i>Genel Bilgiler</a></li>
             <li class="nav-item"><a class="nav-link" id="pills-warningprofile-tab" data-bs-toggle="pill" href="#pills-warningprofile" role="tab" aria-controls="pills-warningprofile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Oda Bilgileri</a></li>
             <li class="nav-item"><a class="nav-link" id="pills-warningcontact-tab" data-bs-toggle="pill" href="#pills-warningcontact" role="tab" aria-controls="pills-warningcontact" aria-selected="false"><i class="icofont icofont-contacts"></i>Oda Görsel</a></li>
           </ul>
           <div class="tab-content" id="pills-warningtabContent">
             <div class="tab-pane fade show active" id="pills-warninghome" role="tabpanel" aria-labelledby="pills-warninghome-tab">
              <p></p>
              <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Oda Tipi</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" v-model="roomTypeObj.Type">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Oda Tipi Kısa Adı</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" v-model="roomTypeObj.TypeShortName" >
                          </div>
                        </div>
                      </div> 
                      <div class="row">
                        <div class="col">
                          <div>
                            <label class="form-label" for="exampleFormControlTextarea4">Oda Detayı</label>
                            <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" v-model="roomTypeObj.RoomDetails"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </form>
             </div>
             <div class="tab-pane fade" id="pills-warningprofile" role="tabpanel" aria-labelledby="pills-warningprofile-tab">
              <p></p>
              <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Oda Özellikleri:</label>
                            <multiselect v-model="roomTypeObj.RoomFeatures" :options="multipleoptionsRoom" :multiple="true" :taggable="true" group-values="libs"
            group-label="language" :group-select="true" :close-on-select="false" track-by="name" label="name"
            placeholder="Pick a value" @tag="addTag"></multiselect>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Toplam Kişi Sayısı </label>
                            <input class="form-control" type="text" v-model="roomTypeObj.TotalPep" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Minumum Yetişkin Sayısı</label>
                            <input class="form-control" type="text" v-model="roomTypeObj.MinPep" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Maximum Yetişkin Sayısı</label>
                            <input class="form-control" type="text" v-model="roomTypeObj.MaxPep">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Maximum Çocuk Sayısı</label>
                            <input class="form-control" type="text"  v-model="roomTypeObj.MaxChild">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Fiyatlandırma</label>
                            <multiselect v-model="roomTypeObj.RoomPriceType" :options="optionsRoom" :searchable="false" :group-select="true"
            :close-on-select="false" track-by="name" label="name" placeholder="Pick a value"></multiselect>
                        </div>
                    </div>
                 
                    
                   
                </div>
            </div>
             <div class="tab-pane fade" id="pills-warningcontact" role="tabpanel" aria-labelledby="pills-warningcontact-tab">
              <p></p>
              <div class="card-body">
        <div class="owl-carousel owl-theme" id="owl-carousel-1">
            <swiper :slidesPerView="5" :space-between="20" :pagination="{
              clickable: true,
            }" :modules="modules" :breakpoints="swiperOptions.breakpoints">
                <swiper-slide v-for="(item,index) in menu" :key="index" class="item">
                    <img :src="getImgUrl(item.value)" alt="" class="img-fluid">
                </swiper-slide>
            </swiper>
        </div>
    </div>
              <div class="col">
            <div class="mb-3">
                <label>Upload project file</label>
                <DropZone class="text-center" :maxFileSize="Number(60000000)" url="http://localhost:8080" id="myVueDropzone"
        :options="dropzoneOptions"
        @vdropzone-success="handleDropzoneSuccess"
                    :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="2" />
            </div>
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
         <div class="modal fade modal-bookmark" id="edit_roomFeatures" tabindex="-1" role="dialog"
            aria-labelledby="edit_roomFeaturesLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="edit_roomFeaturesLabel">Yeni Oda Tipi</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                            <div class="row">
                           
         
         <div class="card-body">
           <ul class="nav nav-tabs nav-primary" id="pills-warningtab1" role="tablist">
             <li class="nav-item"><a class="nav-link active" id="pills-warninghome-tab1" data-bs-toggle="pill" href="#pills-warninghome1" role="tab" aria-controls="pills-warninghome" aria-selected="false"><i class="icofont icofont-ui-home"></i>Genel Bilgiler</a></li>
             <li class="nav-item"><a class="nav-link" id="pills-warningprofile-tab1" data-bs-toggle="pill" href="#pills-warningprofile1" role="tab" aria-controls="pills-warningprofile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Oda Bilgileri</a></li>
             <li class="nav-item"><a class="nav-link" id="pills-warningcontact-tab1" data-bs-toggle="pill" href="#pills-warningcontact1" role="tab" aria-controls="pills-warningcontact" aria-selected="false"><i class="icofont icofont-contacts"></i>Oda Görsel</a></li>
           </ul>
           <div class="tab-content" id="pills-warningtabContent">
             <div class="tab-pane fade show active" id="pills-warninghome1" role="tabpanel" aria-labelledby="pills-warninghome-tab">
              <p></p>
              <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Oda Tipi</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" v-model="editRoomType.Type">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Oda Tipi Kısa Adı</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" v-model="editRoomType.TypeShortName" >
                          </div>
                        </div>
                      </div> 
                      <div class="row">
                        <div class="col-md-8">
                          <div>
                            <label class="form-label" for="exampleFormControlTextarea4">Oda Detayı</label>
                            <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" v-model="editRoomType.RoomDetails"></textarea>
                          </div>
                        </div> 
                        <div class="col-md-4">
                          <div class="media">
                            <p></p>
                        <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                        <div class="media-body text-end icon-state switch-outline">
                          <label class="switch">
                            <input type="checkbox" checked v-model="editRoomType.isActive"><span class="switch-state bg-success"></span>
                          </label>
                        </div>
                      </div>
                        </div>
                      </div>
                    </div>
                    
                  </form>
             </div>
             <div class="tab-pane fade" id="pills-warningprofile1" role="tabpanel" aria-labelledby="pills-warningprofile-tab">
              <p></p>
              <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Oda Özellikleri:</label>
                            <multiselect v-model="editRoomType.RoomFeatures" :options="multipleoptionsRoom" :multiple="true" :taggable="true" group-values="libs"
            group-label="language" :group-select="true" :close-on-select="false" track-by="name" label="name"
            placeholder="Pick a value" @tag="addTag"></multiselect>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Toplam Kişi Sayısı </label>
                            <input class="form-control" type="text" v-model="editRoomType.TotalPep" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Minumum Yetişkin Sayısı</label>
                            <input class="form-control" type="text" v-model="editRoomType.MinPep" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Maximum Yetişkin Sayısı</label>
                            <input class="form-control" type="text" v-model="editRoomType.MaxPep">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Maximum Çocuk Sayısı</label>
                            <input class="form-control" type="text"  v-model="editRoomType.MaxChild">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Fiyatlandırma</label>
                            <multiselect v-model="editRoomType.RoomPriceType" :options="optionsRoom" :searchable="false" :group-select="true"
            :close-on-select="false" track-by="name" label="name" placeholder="Pick a value"></multiselect>
                        </div>
                    </div>
                 
                    
                   
                </div>
            </div>
             <div class="tab-pane fade" id="pills-warningcontact1" role="tabpanel" aria-labelledby="pills-warningcontact-tab">
              <p></p>
              <div class="card-body">
        <div class="owl-carousel owl-theme" id="owl-carousel-1">
            <swiper :slidesPerView="5" :space-between="20" :pagination="{
              clickable: true,
            }" :modules="modules" :breakpoints="swiperOptions.breakpoints">
                <swiper-slide v-for="(item,index) in menu" :key="index" class="item">
                    <img :src="getImgUrl(item.value)" alt="" class="img-fluid">
                </swiper-slide>
            </swiper>
        </div>
    </div>
              <div class="col">
            <div class="mb-3">
                <label>Upload project file</label>
                <DropZone class="text-center" :maxFileSize="Number(60000000)" url="http://localhost:8080"
                    :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="2" />
            </div>
        </div>
            </div>
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
        <div class="modal fade modal-bookmark" id="delete_roomFeatures" tabindex="-1" role="dialog"
            aria-labelledby="delete_roomFeaturesLabel" aria-hidden="true">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  txt-danger" id="delete_roomFeaturesLabel">Silmek istediğinizden emin misiniz?</h5>
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
        <h3>Oda Bilgileri</h3> 
      </div>
      <div class="card-header col-md-2">
        <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
            data-bs-target="#add_roomFeatures" style="float: right;">
            Yeni Ekle
        </button> 
      </div>
      </div>
      <div class="table-responsive">
        
        <table class="table">
          <thead>
       
            <tr class="border-bottom-primary">
              <th scope="col">No</th>
              <th scope="col">Oda Tipi</th>
              <th>Kısa Ad</th>
              <th>Toplam Kişi Sayısı</th>
              <th>Minimum Yetişkin</th>
              <th>Maksimum Yetişkin</th>
              <th>Maksimum Çocuk</th>
              <th>Fiyatlandırma</th>
              <th scope="col">Aktif/Pasif</th>
           
              <th>İşlem</th>
            </tr>
          </thead> 
     
          <tbody>
            <tr v-for="(item,index) in GetRoomTypes" :key="item.id" class="border-bottom-primary">
     
              <td style="width:20px" >{{ index+1}}</td>
              <td style="width:150px">{{ item.Type }}</td>
              <td>{{ item.TypeShortName }}</td>
              <td>{{ item.TotalPep }}</td>
              <td>{{ item.MinPep }}</td>
              <td>{{ item.MaxPep }}</td>
              <td>{{ item.MaxChild }}</td>
              <td>{{ item.RoomPriceType.name }}</td>
              <td>{{ (item.isActive)?'Aktif':'Pasif' }}</td>
          
              <td style="width:30px">
                <div class="dropdown dropdown-action">
            <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"> 
              <vue-feather type="settings"></vue-feather>
               <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
              </a>
            <div class="dropdown-menu dropdown-menu-right  ">
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_roomFeatures"
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


    
  
  </template>
<script>
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { owlData } from '../../../data/uikits/data'
import $ from 'jquery'
import { Pagination} from "swiper";
import { mapState } from 'vuex';
import { mapActions, mapGetters } from "vuex";
import getImage from "@/mixins/getImage";
import moment from 'moment'; 
import { collection } from 'firebase/firestore';
const currentDate=new Date();
export default {
  components: {
        Swiper,
        SwiperSlide,
    },
  data(){
    return {
      menu: owlData,
      value: null,
      multivalue: [{ code: 1, name: 'Kişi Başına Fiyat' }],
      optionsRoom: [{ code: 1, name: 'Kişi Başına Fiyat' },  { code: 2, name: "Oda Başına Fiyat" }],
      multipleoptionsRoom: [
                {
                    language: "Tümü",
                    libs: [
                        { code: 1, name: "Wi-Fi" },
                        { code: 2, name: "Klima" },
                        { code: 3, name: "Sıcak Su" },
                        { code: 4, name: "Tv" },
                        { code: 5, name: "Mini Bar" },
                        { code: 6, name: "Sauna" },
                    ],
                },
            ],
      swiperOptions: {
                breakpoints: { 1000: { slidesPerView: 5 }, 600: { slidesPerView: 3 }, 0: { slidesPerView: 1 } }
            },
            
      editRoomType:{},
    roomTypeObj:{
      Type:"",
      TypeShortName:"",
      RoomDetails:"",
      RoomFeatures:{},
      TotalPep:"",
      MinPep:"",
      MaxPep:"",
      MaxChild:"",
      RoomPriceType:"",
      Picture:"",
      userID:"",
      CreatedOn:currentDate,
      ModifiedOn:currentDate,    
      isActive:true
    },
    userID: JSON.parse(localStorage.getItem("storedData")).userUid,
    }
  },
  computed: {
    ...mapGetters(["GetRoomTypes"]),
     
    ...mapState({
      bootstraplist: state => state.bootsrap.bootstrap,
      inverselist: state => state.bootsrap.inverse
    })
  },
 
  
  methods:{
    ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
    getImgUrl(path) {
            return require('@/assets/images/' + path)
        },
    saveButton(){
  
     this.roomTypeObj.userID=  this.userID
     this.roomTypeObj.ModifiedUserName =this.userID
      this.AddData({ db: "RoomTypes", dataSet: this.roomTypeObj }).then(p => {
        $(".btn-close").click();
        this.myQuery({ tableName: "RoomTypes", updateOpt: "SetRoomTypes" })
        
       this.roomTypeObj={}
    })
  },
  editSendData(value){
    this.editRoomType=value;

 
  },
    editButton(e){
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.editRoomType.ModifiedOn=currentDate,
     
      this.editRoomType.ModifiedUserName=uid
      
      this.EditData({ db: "RoomTypes", data: this.editRoomType, id: this.editRoomType.id }).then(t => {
        $(".btn-close").click();
        this.roomTypeObj={}
       
        this.myQuery({ tableName: "RoomTypes", updateOpt: "SetRoomTypes" })
       
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
            this.DeleteData({ db: "RoomTypes", mt: "DeleteDataSet", data: delData }).then(p => {
        
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
        this.myQuery({ tableName: "RoomTypes", updateOpt: "SetRoomTypes" })
          
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
  setup() {
        return {
            modules: [Pagination],
        };
    },
  watch:{
    editRoomType(value){
      this.roomTypeObj=value
    }
  }


}
</script>