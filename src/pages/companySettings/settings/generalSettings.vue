<template>
    <Breadcrumbs title="Sistem Ayarları" main="Genel Ayarlar" />
    <div class="container-fluid">

        <div class="row">

            <div class="col-sm-12">
                <div class="card">
              
                    <div class="card-body">
                        <div class="form theme-form">
                           
                            <div class="row">
                                <div class="col-md-10">
                                <h4 style="color: rgb(0, 26, 255);">Emniyet Kimlik Bildirim Sistemi (KBS)</h4></div>
                                <div class="col-md-2">
            ŞUBE SEÇİNİZ
            <multiselect v-model="tableValue"
              :options="$store.getters.GetBranchInfo.map(t => { return { 'name': t.BranchName, 'id': t.id } })" :searchable="false"
              :group-select="true" :close-on-select="false" track-by="name" label="name" :select-label="value" @change="getRoomData"
              placeholder="Seçiniz"></multiselect>

          </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Kullanıcı Adı</label> 
                                        <input class="form-control" v-model="this.branchObj.EgmUser" type="text" placeholder="Kullanıcı Adı">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>T.C. Kimlik No</label>
                                        <input class="form-control" v-model="this.branchObj.EgmIdentity" type="text" placeholder="T.C. Kimlik No">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Parola</label>
                                        <input class="form-control" v-model="this.branchObj.EgmPass" type="text" placeholder="Parola">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <hr>
                            <br>
                            <div>
                                <h4 style="color: rgb(216, 5, 5);">Jandarma Kimlik Bildirim Sistemi (KBS)</h4>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Kullanıcı T.C. No</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.JgkIdentity" placeholder="Kullanıcı T.C. No">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Tesis Kodu</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.JgkCode" placeholder="Tesis Kodu">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Parola</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.JgkPass" placeholder="Parola">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <hr>
                            <br>
                            <div>
                                <h4 style="color: red;">Gelir İdaresi Başkanlığı</h4>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Gib Kodu</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.GibCode" placeholder="Gib Kodu">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Gib Parola</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.GibSec" placeholder="Gib Parola">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Gib Şifre</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.GibPass" placeholder="Gib Şifre">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <hr>
                            <br>
                            <div>
                                <h4 style="color: rgb(244, 187, 0);">Mail Gönderim Bilgileri</h4>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="mb-3">
                                        <label>Mail Adresi</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.Mail" placeholder="Mail Adresi">
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="mb-3">
                                        <label>Uygulama Şifresi</label>
                                        <input class="form-control" type="text" v-model="this.branchObj.AppPass" placeholder="Uygulama Şifresi">
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="checkbox checkbox-primary">
                                        <input id="checkbox-primary-1" v-model="this.branchObj.Hotmail" type="checkbox">
                                        <label for="checkbox-primary-1" style="margin-top:40px;">Hotmail</label>
                                    </div>


                                </div>
                                <div class="col-sm-2">

                                    <div class="checkbox checkbox-primary">
                                        <input id="checkbox-primary-2" v-model="this.branchObj.Gmail" type="checkbox">
                                        <label for="checkbox-primary-2" style="margin-top:40px;">Gmail</label>
                                    </div>
                                   
                                </div>
                                <div class="col-sm-2">
                                    <button class="btn btn-primary" style="margin-top:40px;" type="submit">Kaydet</button>
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
            tableValue: { },
            branchObj:{}
        }
    },
    computed: {
    ...mapGetters(["GetBranchInfo"]),
  },
  methods:{
    ...mapActions(["AddData","EditData","DeleteData","myQuery"]),
  },
   
  watch: {
    async tableValue(e) { 
      this.values = e.name
      if(e.name==="Çinili Otel-1"){
         var data= await Promise.all(this.$store.getters.GetBranchInfo.filter(element=>element.BranchName==="Çinili Otel-1").map(async element=>{
  
  return element;
  })
  );
  
  this.branchObj=JSON.parse(JSON.stringify(data[0])); 
      }
      else if(e.name==="Çinili Otel-2"){
        var data= await Promise.all(this.$store.getters.GetBranchInfo.filter(element=>element.BranchName==="Çinili Otel-2").map(async element=>{
  
  return element;
  })
  );
  this.branchObj=data;
      }
      else
      {
        var data= await Promise.all(this.$store.getters.GetBranchInfo.filter(element=>element.BranchNamee==="Çinili PLUS").map(async element=>{
   
  return element;
  })
  );
  this.branchObj=data;
      }
     
    },
    
  }

}
</script>