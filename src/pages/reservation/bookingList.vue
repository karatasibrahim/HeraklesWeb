<template>
  <Breadcrumbs title="Tüm Rezervasyonlar" main="Resepsiyon" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <ul class="nav nav-tabs nav-primary" id="pills-warningtab" role="tablist">
              <li class="nav-item"><a class="nav-link active" id="pills-reservation-tab" data-bs-toggle="pill"
                  href="#pills-reservation" role="tab" aria-controls="pills-reservation" aria-selected="true"><i
                    class="icofont icofont-ui-calendar"></i>Rezervasyonlar</a></li>
              <li class="nav-item"><a class="nav-link" id="pills-in-tab" data-bs-toggle="pill" href="#pills-in" role="tab"
                  aria-controls="pills-in" aria-selected="false"><i class="icofont icofont-sign-in"></i>Girişler</a></li>
              <li class="nav-item"><a class="nav-link" id="pills-out-tab" data-bs-toggle="pill" href="#pills-out"
                  role="tab" aria-controls="pills-out" aria-selected="false"><i
                    class="icofont icofont-sign-out"></i>Çıkışlar</a></li>
              <li class="nav-item"><a class="nav-link" id="pills-checkin-tab" data-bs-toggle="pill" href="#pills-checkin"
                  role="tab" aria-controls="pills-checkin" aria-selected="false"><i
                    class="icofont icofont-login"></i>Check In</a></li>
              <li class="nav-item"><a class="nav-link" id="pills-checkout-tab" data-bs-toggle="pill"
                  href="#pills-checkout" role="tab" aria-controls="pills-checkout" aria-selected="false"><i
                    class="icofont icofont-logout"></i>Check Out</a></li>
              <li class="nav-item"><a class="nav-link" id="pills-customer-tab" data-bs-toggle="pill"
                  href="#pills-customer" role="tab" aria-controls="pills-customer" aria-selected="false"><i
                    class="icofont icofont-users-social"></i>Konaklayanlar</a></li>
            </ul>
            <div class="tab-content" id="pills-warningtabContent">
              <div class="tab-pane fade show active" id="pills-reservation" role="tabpanel"
                aria-labelledby="pills-reservation-tab">
                <div class="container-fluid">
                  <div class="row">

                    <div class="card">
                      <div class="row">
                        <div class="card-header col-md-10 ">

                        </div>
                        <div class="card-header col-md-2">
                          <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#add_roomInfo" style="float: right;">
                            Yeni Ekle
                          </button>

                        </div>
                        <div style="text-align: right;">
                          <div class="btn-group">

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
                              <th scope="col">Rezervasyon No</th>
                              <th scope="col">Check In</th>
                              <th scope="col">Misafirler</th>
                              <th scope="col">Oda</th>
                              <th scope="col">Giriş T.</th>
                              <th scope="col">Giriş S.</th>
                              <th scope="col">Çıkış T.</th>
                              <th scope="col">Çıkış S.</th>
                              <th scope="col">Gece</th>
                              <th scope="col">Acente</th>
                           
                              <th>İşlem</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in GetReservations" :key="item.id" class="border-bottom-primary">

<td style="width:20px">{{ index + 1 }}</td>
<td >{{ item.Branch.name }}</td>

<td v-if="item.CheckIn" style="background-color: limegreen;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td v-else style="background-color:crimson;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td ><div v-for="item in item.Guest" :key="item.id">{{ item.Name }}</div>  </td>
<td>{{ item.RoomInfo.name }}</td>
<td>{{ item.EntireDate }}</td>
<td>{{ item.EntireTime }}</td>
<td>{{ item.ExitDate }}</td>
<td>{{ item.ExitTime }}</td>
<td>{{ item.NightDay}}</td>
<td>{{ (item.Agent.name)?item.Agent.name:'Acenta Yok' }}</td>
<td style="width:30px">
  <div class="dropdown dropdown-action">
    <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
      <vue-feather type="settings"></vue-feather>
      <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
    </a>
    <div class="dropdown-menu dropdown-menu-right  ">
      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_reservation"
        @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i
          class="fa fa-pencil m-r-5"></i>Düzenle</a>
      <a class="dropdown-item" type="button" @click="deleteButton(item)"
        style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>



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
              <div class="tab-pane fade" id="pills-in" role="tabpanel" aria-labelledby="pills-in-tab">
                <div class="container-fluid">
                  <div class="row">

                    <div class="card">
                      <div class="row">
                        <div class="card-header col-md-10 ">

                        </div>
                        <div class="card-header col-md-2">
                          <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#add_roomInfo" style="float: right;">
                            Yeni Ekle
                          </button>

                        </div>
                        <div style="text-align: right;">
                          <div class="btn-group">

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
                              <th scope="col">Rezervasyon No</th>
                              <th scope="col">Check In</th>
                              <th scope="col">Misafirler</th>
                              <th scope="col">Oda</th>
                              <th scope="col">Giriş T.</th>
                              <th scope="col">Giriş S.</th>
                              <th scope="col">Çıkış T.</th>
                              <th scope="col">Çıkış S.</th>
                              <th scope="col">Gece</th>
                              <th scope="col">Acente</th> 
                              <th>İşlem</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in GetReservations" :key="item.id" class="border-bottom-primary">

<td style="width:20px">{{ index + 1 }}</td>
<td >{{ item.Branch.name }}</td>

<td v-if="item.CheckIn" style="background-color: limegreen;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td v-else style="background-color:crimson;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td ><div v-for="item in item.Guest" :key="item.id">{{ item.Name }}</div>  </td>
<td>{{ item.RoomInfo.name }}</td>
<td>{{ item.EntireDate }}</td>
<td>{{ item.EntireTime }}</td>
<td>{{ item.ExitDate }}</td>
<td>{{ item.ExitTime }}</td>
<td>{{ item.NightDay}}</td>
<td>{{ (item.Agent.name)?item.Agent.name:'Acenta Yok' }}</td>
<td style="width:30px">
  <div class="dropdown dropdown-action">
    <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
      <vue-feather type="settings"></vue-feather>
      <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
    </a>
    <div class="dropdown-menu dropdown-menu-right  ">
      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_reservation"
        @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i
          class="fa fa-pencil m-r-5"></i>Düzenle</a>
      <a class="dropdown-item" type="button" @click="deleteButton(item)"
        style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>



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
              <div class="tab-pane fade" id="pills-out" role="tabpanel" aria-labelledby="pills-out-tab">
                <div class="container-fluid">
                  <div class="row">

                    <div class="card">
                      <div class="row">
                        <div class="card-header col-md-10 ">

                        </div>
                        <div class="card-header col-md-2">
                          <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#add_roomInfo" style="float: right;">
                            Yeni Ekle
                          </button>

                        </div>
                        <div style="text-align: right;">
                          <div class="btn-group">

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
                              <th scope="col">Rezervasyon No</th>
                              <th scope="col">Check In</th>
                              <th scope="col">Misafirler</th>
                              <th scope="col">Oda</th>
                              <th scope="col">Giriş T.</th>
                              <th scope="col">Giriş S.</th>
                              <th scope="col">Çıkış T.</th>
                              <th scope="col">Çıkış S.</th>
                              <th scope="col">Gece</th>
                              <th scope="col">Acente</th> 
                              <th>İşlem</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in GetReservations" :key="item.id" class="border-bottom-primary">

<td style="width:20px">{{ index + 1 }}</td>
<td >{{ item.Branch.name }}</td>

<td v-if="item.CheckIn" style="background-color: limegreen;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td v-else style="background-color:crimson;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td ><div v-for="item in item.Guest" :key="item.id">{{ item.Name }}</div>  </td>
<td>{{ item.RoomInfo.name }}</td>
<td>{{ item.EntireDate }}</td>
<td>{{ item.EntireTime }}</td>
<td>{{ item.ExitDate }}</td>
<td>{{ item.ExitTime }}</td>
<td>{{ item.NightDay}}</td>
<td>{{ (item.Agent.name)?item.Agent.name:'Acenta Yok' }}</td>
<td style="width:30px">
  <div class="dropdown dropdown-action">
    <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
      <vue-feather type="settings"></vue-feather>
      <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
    </a>
    <div class="dropdown-menu dropdown-menu-right  ">
      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_reservation"
        @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i
          class="fa fa-pencil m-r-5"></i>Düzenle</a>
      <a class="dropdown-item" type="button" @click="deleteButton(item)"
        style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>



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
            <div class="tab-pane fade" id="pills-checkin" role="tabpanel" aria-labelledby="pills-checkin-tab">
              <div class="container-fluid">
                  <div class="row">

                    <div class="card">
                      <div class="row">
                        <div class="card-header col-md-10 ">

                        </div>
                        <div class="card-header col-md-2">
                          <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#add_roomInfo" style="float: right;">
                            Yeni Ekle
                          </button>

                        </div>
                        <div style="text-align: right;">
                          <div class="btn-group">

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
                              <th scope="col">Rezervasyon No</th>
                              <th scope="col">Check In</th>
                              <th scope="col">Misafirler</th>
                              <th scope="col">Oda</th>
                              <th scope="col">Giriş T.</th>
                              <th scope="col">Giriş S.</th>
                              <th scope="col">Çıkış T.</th>
                              <th scope="col">Çıkış S.</th>
                              <th scope="col">Gece</th>
                              <th scope="col">Acente</th> 
                              <th>İşlem</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in GetReservations" :key="item.id" class="border-bottom-primary">

<td style="width:20px">{{ index + 1 }}</td>
<td >{{ item.Branch.name }}</td>

<td v-if="item.CheckIn" style="background-color: limegreen;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td v-else style="background-color:crimson;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td ><div v-for="item in item.Guest" :key="item.id">{{ item.Name }}</div>  </td>
<td>{{ item.RoomInfo.name }}</td>
<td>{{ item.EntireDate }}</td>
<td>{{ item.EntireTime }}</td>
<td>{{ item.ExitDate }}</td>
<td>{{ item.ExitTime }}</td>
<td>{{ item.NightDay}}</td>
<td>{{ (item.Agent.name)?item.Agent.name:'Acenta Yok' }}</td>
<td style="width:30px">
  <div class="dropdown dropdown-action">
    <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
      <vue-feather type="settings"></vue-feather>
      <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
    </a>
    <div class="dropdown-menu dropdown-menu-right  ">
      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_reservation"
        @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i
          class="fa fa-pencil m-r-5"></i>Düzenle</a>
      <a class="dropdown-item" type="button" @click="deleteButton(item)"
        style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>



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
            <div class="tab-pane fade" id="pills-checkout" role="tabpanel" aria-labelledby="pills-checkout-tab">
              <div class="container-fluid">
                  <div class="row">

                    <div class="card">
                      <div class="row">
                        <div class="card-header col-md-10 ">

                        </div>
                        <div class="card-header col-md-2">
                          <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#add_roomInfo" style="float: right;">
                            Yeni Ekle
                          </button>

                        </div>
                        <div style="text-align: right;">
                          <div class="btn-group">

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
                              <th scope="col">Rezervasyon No</th>
                              <th scope="col">Check In</th>
                              <th scope="col">Misafirler</th>
                              <th scope="col">Oda</th>
                              <th scope="col">Giriş T.</th>
                              <th scope="col">Giriş S.</th>
                              <th scope="col">Çıkış T.</th>
                              <th scope="col">Çıkış S.</th>
                              <th scope="col">Gece</th>
                              <th scope="col">Acente</th> 
                              <th>İşlem</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in GetReservations" :key="item.id" class="border-bottom-primary">

<td style="width:20px">{{ index + 1 }}</td>
<td >{{ item.Branch.name }}</td>

<td v-if="item.CheckIn" style="background-color: limegreen;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td v-else style="background-color:crimson;" >{{ (item.CheckIn)?'Yapıldı':'Yapılmadı' }}</td>
<td ><div v-for="item in item.Guest" :key="item.id">{{ item.Name }}</div>  </td>
<td>{{ item.RoomInfo.name }}</td>
<td>{{ item.EntireDate }}</td>
<td>{{ item.EntireTime }}</td>
<td>{{ item.ExitDate }}</td>
<td>{{ item.ExitTime }}</td>
<td>{{ item.NightDay}}</td>
<td>{{ (item.Agent.name)?item.Agent.name:'Acenta Yok' }}</td>
<td style="width:30px">
  <div class="dropdown dropdown-action">
    <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
      <vue-feather type="settings"></vue-feather>
      <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
    </a>
    <div class="dropdown-menu dropdown-menu-right  ">
      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_reservation"
        @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i
          class="fa fa-pencil m-r-5"></i>Düzenle</a>
      <a class="dropdown-item" type="button" @click="deleteButton(item)"
        style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>



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
            <div class="tab-pane fade" id="pills-customer" role="tabpanel" aria-labelledby="pills-customer-tab">
              <div class="container-fluid">
                  <div class="row">

                    <div class="card">
                      <div class="row">
                        <div class="card-header col-md-10 ">

                        </div>
                        <div class="card-header col-md-2">
                          <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#add_roomInfo" style="float: right;">
                            Yeni Ekle
                          </button>

                        </div>
                        <div style="text-align: right;">
                          <div class="btn-group">

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
                              <th scope="col">Ad Soyad</th>
                              <th scope="col">Ülke</th>
                              <th scope="col">Telefon</th>
                              <th scope="col">Cinsiyet</th>
                              <th scope="col">T.C./Pas. No</th> 
                              <!-- <th scope="col">Giriş T.</th>
                              <th scope="col">Çıkış T.</th>
                              <th scope="col">Gece</th>  -->
                           
                              <th>İşlem</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in GetGuest" :key="item.id" class="border-bottom-primary">

                              <td style="width:20px">{{ index + 1 }}</td>
                              <td style="width:250px">{{ item.Name }}</td>
                              <td style="width:150px">{{ item.Country }}</td>
                              <td style="width:200px">{{ item.Phone }}</td>
                              <td style="width:200px">{{ item.Sex }}</td>
                              <td style="width:350px">{{ item.IdentityNumber }}</td> 
                              <td style="width:30px">
                                <div class="dropdown dropdown-action">
                                  <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                    <vue-feather type="settings"></vue-feather>
                                    <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-right  ">
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                      data-bs-target="#edit_roomInfo" @click="editSendData(item)"
                                      style="font-weight: bold; color:rgb(50, 102, 245 )"><i
                                        class="fa fa-pencil m-r-5"></i>Düzenle</a>
                                    <a class="dropdown-item" type="button" @click="deleteButton(item)"
                                      style="font-weight: bold; color:rgb(255, 0, 0)"><i
                                        class="fa fa-trash m-r-5"></i>Sil</a>



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
          </div>
        </div>
      </div>
    </div>
  </div>
</div></template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(["GetReservations","GetGuest"]),
  }


}
</script>