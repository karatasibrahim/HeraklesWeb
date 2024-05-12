<template>
<div class="col-xl-9 col-md-12 box-col-12">
    <div class="file-content">
        <div class="card">
            <div class="card-header">
                <div class="media">
                    <form class="form-inline" action="#" method="get">
                        <div class="form-group mb-0">
                            <i class="fa fa-search"></i>
                            <input class="form-control-plaintext" type="text" placeholder="Ara..." />
                        </div>
                    </form>
                    <div class="media-body text-end">
                        <form class="d-inline-flex" action="#" method="POST" enctype="multipart/form-data" name="myForm">
                            <div class="btn btn-primary">  
                             <vue-feather type="plus-square" ></vue-feather> 
                            <input style="width:200px;" type="file" @change="uploadFile">
                            <!-- <vue-feather type="upload" class="text-top"></vue-feather> Upload -->
                        </div>
                            
                        </form>
                       
                    </div>
                </div>
            </div>  
            <div class="card-body file-manager">
                <h4 class="mb-3">Tüm Dosyalar</h4>
                <h6>Yakın zamanda kullanılanlar</h6>
                <ul class="files">
                    <li class="file-box" v-for="item in this.Addfiles" :key="item">
                  
                        <div class="file-top">
                            <i :class="item.iconClass"></i><i class="fa fa-ellipsis-v f-14 ellips"></i>
                            <iframe :src=" item" width="75%" height="100%" download sandbox="allow-same-origin allow-scripts"></iframe>
      
                        </div>  
                        <div class="file-bottom">
                            <h6>Dosya Adı:{{ item.name }}</h6>
                            <p class="mb-1">Boyutu: {{ item.size }} </p>
                            <p class="mb-1">Oluşturma Zamanı: {{ item.timeCreated }}</p>
                            <p><b>İşlem Zamanı: </b>{{ item.updated }}</p>
                        </div>
                    </li>
                </ul>
                
              
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    recentOpenfiles,
    folders,
     
} from "../../data/filemanager/content"
import 'firebase/storage';
import firebase from 'firebase/app';
import {getStorage,listAll,getMetadata, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db,fileStorage, firebaseFnk} from "../../firebase/firebase";

export default {
    data() {
        return {
            Addfiles: [],
            fileObj: {},
            recentOpenfiles: recentOpenfiles,
            folders: folders,
            files: ''
        }
    },
    methods: {
    async uploadFile(event) { 
        const storage = getStorage();
      const file = event.target.files[0]; 
      const storageRef = ref(storage,`Çinili Otel/Dosyalarım/${file.name}`); 
      const uploadTask=await uploadBytes(storageRef,file) 
    },
        async getFiles() {

            const storage = getStorage();
            const storageRef = ref(storage, `Çinili Otel/Dosyalarım/`);  
         await listAll(storageRef).then((res) => {
const fileNames = res.items.map((itemRef) => itemRef.name); 
                res.items.forEach((itemRef) => {
 
                      
                        //for (let item of itemRef.name) { 
                         //  console.log(item)
                            const storageRef2 = ref(storage, `Çinili Otel/Dosyalarım/${itemRef.name}`);
                           // console.log("REF2",storageRef2)
                            getMetadata(storageRef2).then((res) => {
                                this.fileObj={
                                    name:res.name,
                                    contentType:res.contentType,
                                    size:res.size,
                                    timeCreated:res.timeCreated,
                                    updated:res.updated
                                } 
                              // console.log("FileOBJ",this.fileObj)
                              // this.Addfiles.push(this.fileObj)
                            });
                            
                       // }
                       
                    getDownloadURL(itemRef).then((url) => {

                       

                        return this.Addfiles.push(url);
                    });
                });
            });
// // Tum dosya adlarını alıyorum
//             const listResult = await listAll(storageRef);
//             const fileNames = listResult.items.map((item) => item.name);
          
//             for (let item of fileNames) {
//                 const storageRef2 = ref(storage, `Çinili Otel/Dosyalarım/${item}`);
//                 await getMetadata(storageRef2).then((res) => {
//                     this.fileObj.name = res.name;
//                     this.fileObj.contentType = res.name;
//                     this.fileObj.size = res.name;
//                     this.fileObj.timeCreated = res.timeCreated;
//                     this.fileObj.updated = res.updated;
     
 
// });
// }
  



        },
    downloadFile(file) {
      const storageRef = ref(storage,`files/${file.name}`);

      storageRef.getDownloadURL().then((url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
      });
    },
    deleteFile(file) {
      const storageRef = ref(storage,`files/${file.name}`);

      storageRef.delete().then(() => {
        this.getFiles();
      });
    },
  },
  mounted() {
     
     this.getFiles();
  },
}
</script>
