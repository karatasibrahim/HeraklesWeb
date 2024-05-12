<template>
    <div class="row">
        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Kişisel Bilgilerim</h4>
                    <div class="card-options"><a class="card-options-collapse" href="javascript:void(0)"
                            data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a
                            class="card-options-remove" href="javascript:void(0)" data-bs-toggle="card-remove"><i
                                class="fe fe-x"></i></a></div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="editButton" >
                        <div class="row mb-2">
                            <div class="profile-title">
                                <div class="media">
                                    <input name="picture" v-model="getPersonData.ImageUrl" type="hidden">
                                    <img class="img-70 rounded-circle" alt="" :src="getPersonData.ImageUrl">
                                    <div class="media-body"><a href="/cuba/users/profile" class="">
                                            <h5 class="mb-1">{{ getPersonData.FirstName }} {{ getPersonData.LastName }}</h5>
                                        </a>
                                        <p>{{getDepartment(getPersonData.DepartmentID) }}</p>
                                    </div>
                                </div>
                                <input width="50" type="file" class="form-control" @change="previewImage" accept="image/*">
                            </div>
                        </div>
                        <div class="mb-3">
                            <h6 class="form-label">Hakkımda</h6><textarea class="form-control" rows="1" data-gramm="false"
                                wt-ignore-input="true" data-quillbot-element="kQgBlPqlh22oSQ8pSbaCp"
                               >Açıklama Ekleyiniz</textarea>
                        </div>
                        <div class="mb-3"><label class="form-label">E-Posta Adresi</label><input class="form-control"
                                placeholder="E-Posta Adresi" type="email"></div>
                        <div class="mb-3"><label class="form-label">Şifre</label><input class="form-control"
                                type="password" value="password"></div>
                        <!-- <div class="mb-3"><label class="form-label">Website</label><input class="form-control"
                                placeholder="http://Uplor .com"></div> -->
                        <div class="form-footer"><button class="btn btn-primary btn-block"  >Kaydet</button></div>
                    </form>
                    
                </div>
            </div>
          
        </div>
        <div class="col-xl-8">
            <form class="card">
                <div class="card-header ">
                    <h4 class="card-title mb-0">Profil Düzenleme</h4>
                    <div class="card-options"><a class="card-options-collapse" href="javascript:void(0)"
                            data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a
                            class="card-options-remove" href="javascript:void(0)" data-bs-toggle="card-remove"><i
                                class="fe fe-x"></i></a></div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Ad</label>
                                <input class="form-control" type="text" placeholder="Ad" required>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Soyad</label>
                                <input class="form-control" type="text" placeholder="Soyad" required>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                              <label class="form-label">TC Kimlik Numarası</label>
                              <input class="form-control" type="number" placeholder="TC Kimlik Numarası" required>
                          </div>
                      </div>
                        <div class="col-md-8">
                        <div class="mb-3">
                            <label class="form-label">Adres</label>
                            <input class="form-control" type="text" placeholder="Adres" required>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Cep Telefonu</label>
                            <input class="form-control" type="Phone" placeholder="Cep Telefonu" required>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Şehir</label>
                            <input class="form-control" type="text" placeholder="Şehir" required>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Posta Kodu</label>
                            <input class="form-control" type="number" placeholder="Posta Kodu">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Ülke</label>
                            <select class="form-control btn-square">
                                <option value="0">--Seçiniz--</option>
                                <option value="1">Türkiye</option>
                                <option value="2">Canada</option>
                                <option value="3">Usa</option>
                                <option value="4">Aus</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div class="mb-3">
                          <label class="form-label">E-Posta Adresi</label>
                          <input class="form-control" type="email" placeholder="E-Posta Adresi">
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Çalıştığı Departman</label>
                        <select class="form-control btn-square">
                          <option value="0">--Seçiniz--</option>
                          <option value="1">Kat Görevlisi</option>
                          <option value="2">Temizlik Görevlisi</option>
                          <option value="3">Elektrik Teknisyeni</option>
                          <option value="4">Resepsiyonist</option>
                            
                        </select>
                    </div>
                </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Çalıştığı Şube</label>
                        <select class="form-control btn-square">
                            <option value="0">--Seçiniz--</option>
                            <option value="1">Çinili Otel-1</option>
                            <option value="2">Çinili Otel-2</option>
                            <option value="3">Çinili Plus</option>
                        </select>
                    </div>
                </div>
                    </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-primary" type="submit">Güncelle</button>
            </div>
        </form>
    </div>
</div></template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    data() {
        return{
            editProfile:{},
 
        }
        
    },
    computed:{
...mapGetters(["GetUsers"]),
getPersonData(){
    return this.GetUsers;
}
    },
    methods:{
        ...mapActions(["AddData","EditData","DeleteData","myQuery","imageUploadData"]), 
        editButton(){
  var userIdInfo= JSON.parse(localStorage.getItem("storedData")).userUid;
         this.editProfile=this.getPersonData.ImageUrl
  this.EditData({db:"Users",data: this.getPersonData, id:userIdInfo})
        },
       
        getDepartment(t) {
            try {
                var data=this.$store.getters.GetDepartments.find((a)=>a.id==t);
        
                return data.title;

       
      } catch (error) {
        return t;
      }
      
       
      
   },   
   
   async previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.getPersonData.ImageUrl = await this.imageUploadData(this.imageData)
    },
    
    
    }
}
</script>