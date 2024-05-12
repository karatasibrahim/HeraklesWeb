<template>
  <Breadcrumbs title="Personel Tanımlama" main="İşletme Ayarları"  />
 <div>
   <!-- ADD MODAL   -->
  <div class="col-12">
      <div class="modal fade modal-bookmark" id="add_department" tabindex="-1" role="dialog"
          aria-labelledby="add_departmentLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="add_departmentLabel">Yeni Personel</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                    <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
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
                <div class="d-flex justify-content-end">
                  <button class="btn btn-success"    type="submit" id="saveButton" @click.prevent="saveButton()">Kaydet</button>   
                  <button class="btn btn-danger ms-2 close"  type="button" data-bs-dismiss="modal">İptal </button>
                </div>
                      </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>
       <!-- EDİT MODAL  -->
      <div class="modal fade modal-bookmark" id="edit_department" tabindex="-1" role="dialog"
          aria-labelledby="edit_departmentLabel" aria-hidden="true">
          <div class="modal-dialog modal-md" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="edit_departmentLabel">Yeni Departman</h5>
                      <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                  </div>
                  <div class="modal-body">
                      <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="" @submit.prevent="editButton">
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="task-title">Departman Adı</label>
                                  <input class="form-control" id="task-title" type="text"   required=""
                                      autocomplete="off">
                              </div>
                              <div class="media">
                      <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                      <div class="media-body text-end icon-state switch-outline">
                        <label class="switch">
                          <input type="checkbox" checked ><span class="switch-state bg-success"></span>
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
      <h3>Personel Bilgileri</h3> 
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
            <th scope="col">Sıra No</th>
                              <th scope="col">Ad Soyad</th>
                              <th scope="col">Ülke</th>
                              <th scope="col">Telefon</th>
                              <th scope="col">Cinsiyet</th>
                              <th scope="col">T.C./Pas. No</th> 
                              <th>Durum</th>
            <!-- <th scope="col">Oluşturma Tarihi</th>
            <th scope="col">Oluşturan Kullanıcı</th>
            <th scope="col">Güncelleme Tarihi</th>
            <th scope="col">Güncelleyen Kullanıcı</th> -->
            <th>İşlem</th>
          </tr>
        </thead> 
   
        <tbody>
          <tr v-for="(item,index) in GetGuest" :key="item.id" class="border-bottom-primary">
   
            <td style="width:20px">{{ index + 1 }}</td>
                              <td style="width:150px">{{ item.Name }}</td>
                              <td>{{ item.Country }}</td>
                              <td>{{ item.Phone }}</td>
                              <td>{{ item.Sex }}</td>
                              <td>{{ item.IdentityNumber }}</td> 
                              <td>{{ (item.isActive)?'Aktif':'Pasif' }}</td>
            <td style="width:30px">
              <div class="dropdown dropdown-action">
          <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"> 
            <vue-feather type="settings"></vue-feather>
             <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
            </a>
          <div class="dropdown-menu dropdown-menu-right  ">
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_customer"
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
 


</script>