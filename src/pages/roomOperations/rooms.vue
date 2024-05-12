<template>
  <Breadcrumbs title="Oda Durumu" main="Oda İşlemleri" />
  <div class="container-fluid">
    <div class="row">

      <div class="card">
        <div class="row">
          <div class="card-header col-md-8 ">
            <h4>Oda Durumları</h4>
          </div>
          <div class="card-header col-md-4">
            ŞUBE SEÇİNİZ
            <multiselect v-model="tableValue"
              :options="$store.getters.GetBranchInfo.map(t => { return { 'name': t.BranchName, 'id': t.id } })"
              :searchable="false" :group-select="true" :close-on-select="false" track-by="name" label="name"
              :select-label="value" @change="getRoomData" placeholder="Seçiniz"></multiselect>

          </div>

          <div class="  box-col-12">
            <div class="product-wrapper-grid" :class="listViewEnable ? 'list-view' : ''">
          <div class="row">   
              <div class="col-md-2" v-for="item in this.roomContent" :key="item">
                 <div class="card" >
                      <div class="product-box"> 
                          <div class="product-img" >
                              <div class="ribbon ribbon-warning" style="font-size: 22px;"  >ODA: {{ item.Title }}</div>
                              <div class="ribbon ribbon-primary ribbon-right" style="font-size: 22px;" v-if="item.Status===0" >ARIZALI</div>
                              <div class="ribbon ribbon-success ribbon-right" style="font-size: 22px;" v-else-if="item.Status===1 || item.Status==null">BOŞ</div>
                              <div class="ribbon ribbon-danger ribbon-right" style="font-size: 22px;" v-else="item.Status===3" >DOLU</div>
                             
                              
                              <img class="img-fluid" src="../../assets/images/room.jpg"    style="opacity: 80%;" alt />
                            
                              <div class="product-hover" style="display: flex; justify-content: center; margin-top: 45px;">
                                  <ul>
                                    
                                      <li   data-bs-toggle="modal"  
                                          data-bs-target="#exampleModalCenter"> 
                                          <a class="dropdown-item" type="button" @click="viewData(item)"
                          > <i class="icon-eye"> </i></a>
                                         
                                      </li>
                                   
                                  </ul>
                              </div>
                          </div>
                          <div class="product-details"  >
                             
                              <div class="product-price" style="position: inherit; display: flex; align-items: center; justify-content: center;"> {{ item.RoomType.name }}        
                                               
                              </div>
                          </div>
                      </div>
                  </div>
                </div>


              </div>
            </div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalCenter" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="product-box row">
                        <div class="product-img col-lg-6">
                            <img class="img-fluid"  
                            src="../../assets/images/room.jpg"    style="opacity: 80%;"   alt="">
                        </div>
                      
                        <div class="product-details col-lg-6 text-start">
                          <div class="card-body">
                    <div class="ribbon ribbon-secondary ribbon-vertical-left"><i class="icon-gift"></i>
                      
     
                      
                      </div>
                                <ul>
    <li v-for="(guest, index) in this.roomGuestObj.Guests" :key="index">
      First Name: {{ guest.FirstName }}
      Last Name: {{ guest.LastName }}
    </li>
  </ul>     
                  </div>
                            
            
                          
                           
                           
                        </div>
                    </div>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>



    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'userCards',
  data() {
    return {
      roomGuestObj:{},
      roomContent:[],
      values: "",
      tableValue: { }

    }
  },
  computed: {
    ...mapGetters(["GetBranchInfo", "GetRoomInfo"]),
  },
  methods:{
    ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
    viewData(e){
      
      this.roomGuestObj=e;
      
    },
    dateFormat(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
      }
    },
    getEmployee(t) {

      try {
        var data = this.$store.getters.GetUsers.find((a) => a.UserID == t);
        return data.FirstName + " " + data.LastName;
      } catch (error) {
        return t;
      }
    },
  },
  components: {

  },
  watch: {
    async tableValue(e) {
      this.values = e.name
      if(e.name==="Çinili Otel-1"){
         var data= await Promise.all(this.$store.getters.GetRoomInfo.filter(element=>element.Branch.name==="Çinili Otel-1").map(async element=>{
    
  return element;
  })
  );
  
  this.roomContent=data;
      }
      else if (e.name === "Çinili Otel-2") {
        var data = await Promise.all(this.$store.getters.GetRoomInfo.filter(element => element.Branch.name === "Çinili Otel-2").map(async element => {

          return element;
        })
        );
        this.roomContent = data;
      }
      else {
        var data = await Promise.all(this.$store.getters.GetRoomInfo.filter(element => element.Branch.name === "Çinili PLUS").map(async element => {

          return element;
        })
        );
        this.roomContent = data;
      }

    },

  }
}
</script>
