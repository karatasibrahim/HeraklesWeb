<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10"
        :src="getUserData.ImageUrl" style="height: 40px;"
        
      />
      <div class="media-body"> 
        <span>{{getUserData.FirstName}} {{getUserData.LastName}}   </span>
        <p class="mb-0 font-roboto">
          Yönetici <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      
      <li>
        <a href="https://anydesk.com/en/downloads/" target="_blank"> <vue-feather   type="aperture"></vue-feather><span style="color:red;">Anydesk</span></a>
      </li>
      <li>
        <a @click="logout"
          ><vue-feather type="log-in"></vue-feather><span>Çıkış Yap</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
  export default {
    data() {
    return {
userInfo:{}
    }
  },
  computed: {
  ...mapGetters(["GetUsers"]),
  getUserData(){
return this.GetUsers
  },
 

  },
    name: 'Profile',
    methods: {
      getDepartment(t) {
            try {
                var data=this.$store.getters.GetDepartments.find((a)=>a.id==t);
        
                return data.title;

       
      } catch (error) {
        return t;
      }
      
       
      
   },  
     
      logout: function() {
            this.$router.replace('/auth/login');
            localStorage.removeItem('storedData')
          },
          

    },
    mounted (){
      
    }
    
  };
</script>
