<template>
    <Breadcrumbs title="Profil Düzenleme" main="Kullanıcı" />
    <div class="container-fluid">
        <div class="edit-profile">
            <div class="row">
                <!-- <sidePage /> -->
                <editProfile />
                <!-- <projects /> -->
            </div>
        </div>
</div>
</template>
<script>
 
 
import editProfile from "./editProfile.vue"
export default {
    data(){
        return {

        }
    },
    components: {
      
       
        editProfile
    },
  

}
</script>