<template>
  <Breadcrumbs title="Departman Tanımlama" main="İşletme Ayarları" />
  <div>
    <!-- ADD MODAL   -->
    <div class="col-12">
      <div class="modal fade modal-bookmark" id="add_department" tabindex="-1" role="dialog"
        aria-labelledby="add_departmentLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="add_departmentLabel">Yeni Departman</h5>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
            </div>
            <div class="modal-body">
              <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                <div class="row">
                  <div class="mb-3 col-md-12">
                    <label for="task-title">Departman Adı</label>
                    <input class="form-control" id="task-title" type="text" v-model="departmentObj.title" required=""
                      autocomplete="off">
                  </div>

                </div>
                <div style="float: right;">
                  <button class="btn btn-success" type="submit" id="saveButton"
                    @click.prevent="saveButton()">Kaydet</button>
                  <button class="btn btn-danger ms-2 close" type="button" data-bs-dismiss="modal">İptal </button>
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
                    <input class="form-control" id="task-title" type="text" v-model="editDepartment.title" required=""
                      autocomplete="off">
                  </div>
                  <div class="media">
                    <label class="col-form-label m-r-10">Durumu (Aktif/Pasif)</label>
                    <div class="media-body text-end icon-state switch-outline">
                      <label class="switch">
                        <input type="checkbox" checked v-model="editDepartment.isActive"><span
                          class="switch-state bg-success"></span>
                      </label>
                    </div>
                  </div>

                </div>
                <div style="float: right;">
                  <button class="btn btn-success" type="submit" id="editButton">Kaydet</button>
                  <button class="btn btn-danger ms-2 close" type="button" data-bs-dismiss="modal">İptal </button>
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
                  <button class="btn btn-success" type="submit" id="saveButton"
                    @click.prevent="deleteButton()">Sil</button>
                  <button class="btn btn-danger ms-2 close" type="button" data-bs-dismiss="modal">İptal </button>
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
              <h3>Departman Bilgileri</h3>
            </div>
            <div class="card-header col-md-2">
              <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal" data-bs-target="#add_department"
                style="float: right;">
                Yeni Ekle
              </button>
            </div>
          </div>
          <div class="table-responsive">

            <table class="table">
              <thead>

                <tr class="border-bottom-primary">
                  <th scope="col">No</th>
                  <th scope="col">Depatman Adı</th>
                  <th scope="col">Aktif/Pasif</th>
                  <!-- <th scope="col">Oluşturma Tarihi</th>
              <th scope="col">Oluşturan Kullanıcı</th>
              <th scope="col">Güncelleme Tarihi</th>
              <th scope="col">Güncelleyen Kullanıcı</th> -->
                  <th>İşlem</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, index) in GetDepartments" :key="item.id" class="border-bottom-primary">

                  <td style="width:20px">{{ index + 1 }}</td>
                  <td style="width:350px">{{ item.title }}</td>
                  <td>{{ (item.isActive) ? 'Aktif' : 'Pasif' }}</td>
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
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"
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
</template>
<script>
import $ from 'jquery'


let collapsed = false;
import { mapState } from 'vuex';
import { mapActions, mapGetters } from "vuex";
import getImage from "@/mixins/getImage";
import moment from 'moment';
import { collection } from 'firebase/firestore';
const currentDate = new Date();
export default {

  data() {
    return {



      editDepartment: {},
      departmentObj: {
        title: "",
        userID: "",
        CreatedOn: currentDate,
        ModifiedOn: currentDate,
        isActive: true
      },
      userID: JSON.parse(localStorage.getItem("storedData")).userUid,
    }
  },
  computed: {
    ...mapGetters(["GetDepartments"]),

    ...mapState({
      bootstraplist: state => state.bootsrap.bootstrap,
      inverselist: state => state.bootsrap.inverse
    })
  },


  methods: {
    ...mapActions(["AddData", "EditData", "DeleteData", "myQuery"]),
    saveButton() {

      this.departmentObj.userID = this.userID
      this.departmentObj.ModifiedUserName = this.userID
      this.AddData({ db: "Department", dataSet: this.departmentObj }).then(p => {
        $(".btn-close").click();
        this.myQuery({ tableName: "Department", updateOpt: "SetDepartments" })

        this.departmentObj = {}
      })
    },
    editSendData(value) {
      this.editDepartment = value;


    },
    editButton(e) {
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.editDepartment.ModifiedOn = currentDate,

        this.editDepartment.ModifiedUserName = uid

      this.EditData({ db: "Department", data: this.editDepartment, id: this.editDepartment.id }).then(t => {
        $(".btn-close").click();
        this.departmentObj = {}

        this.myQuery({ tableName: "Department", updateOpt: "SetDepartments" })

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

    deleteButton(delData) {
      this.$swal({
        icon: 'warning',
        title: "Silmek istediğinize emin misiniz?",
        text: 'Silmek istediğiniz bilgiler kalıcı olarak silinecektir..!',
        showCancelButton: true,
        confirmButtonText: 'Sil',
        confirmButtonColor: '#e64942',
        cancelButtonText: 'İptal',
        cancelButtonColor: '#427eff',
      }).then((result) => {
        if (result.value) {
          this.DeleteData({ db: "Department", mt: "DeleteDataSet", data: delData }).then(p => {

            const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
            this.myQuery({ tableName: "Department", updateOpt: "SetDepartments" })

          })

          this.$swal({
            icon: 'success',
            text: 'Silme işlemi başarılı!',
            type: 'success',
            confirmButtonText: 'Tamam',
          });
        } else {
          this.$swal({
            text: 'Silme işlemi iptal edildi!',
            confirmButtonText: 'Tamam',
          });
        }
      });
    },



  },

  mounted() {

  },
  watch: {
    editDepartment(value) {
      this.departmentObj = value
    }
  }


}
</script>