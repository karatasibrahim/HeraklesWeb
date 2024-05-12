<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <!-- <a class="logo">
                  <img
                    class="img-fluid for-light"
                    src="../assets/images/logo/logo.png"
                    alt="looginpage"
                  />
                  <img
                    class="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                    alt="looginpage"
                  />
                </a> -->
              </div>
              <div class="login-main">
                <form class="theme-form" @submit.prevent="registerApp">
                  <h4>Hesabını Oluştur</h4>
                  <p>Hesap oluşturmak için kişisel bilgilerinizi girin</p>
                  <div class="form-group">
                    <label class="col-form-label pt-0">Ad Soyad</label>
                    <div class="row g-2">
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Ad"
                          v-model="this.user.firstName"
                        />
                      </div>
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Soyad"
                          v-model="this.user.lastName"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">E-posta</label>
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="E-posta"
                      v-model="this.user.email"
                    />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Şifre</label>
                    <div class="form-input position-relative">
  
                      <input
                        class="form-control"
                        :type="active?'password':'text'"
                        name="login[password]"
                        required=""
                        placeholder="*********"
                        v-model="this.user.password"
                      />
                      <div class="show-hide"><span :class="active?'show':'hide'" @click.prevent="show"> </span></div>
                      </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label class="text-muted" for="checkbox1"
                        >Onaylıyorum.<a class="ms-2" href="#"
                          >Gizlilik Politikası</a
                        ></label
                      >
                    </div>
                    <button class="btn btn-primary btn-block" >
                      Hesap Oluştur
                    </button>
                  </div>
                  <!-- <h6 class="text-muted mt-4 or">Or signup with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="#" ><vue-feather class="txt-linkedin" type="linkedin"></vue-feather> LinkedIn </a><a class="btn btn-light" href="#" ><vue-feather class="txt-twitter" type="twitter"></vue-feather>twitter</a><a class="btn btn-light" href="#" ><vue-feather class="txt-fb" type="facebook"></vue-feather>facebook</a></div>
                  </div> -->
                  <p class="mt-4 mb-0">
                    Hesabınız zaten var mı?
                    <router-link class="ms-2"   to="/auth/login">
                      Giriş Yap
                    </router-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { conf } from "../../src/firebase/firebase.js";
const auth = getAuth();
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        errormsg:""
      },
      active: true,
    };
  },
  methods: {
    success_with_icon() {
      useToast().success("Kayıt işlemi başarılı..!", { icon: "fa fa-check" });
    },
    info_with_icon() {
      useToast().info("Lütfen bilgilerinizi kontrol ediniz..!", {
        icon: "fa fa-check",
      });
    },
    error_with_icon() {
      useToast().error("Hatalı giriş yaptınız..!", { icon: "fa fa-times" });
    },
    info_with_cancle() {
      this.$toast.show("İşlem iptal edildi..! ", {
        theme: "outline",
        position: "bottom-right",
        closeOnSwipe: true,
        type: "default",
        duration: 2000,
      });
    },
    show() {
      this.active = !this.active;
    },
    registerApp(email, password) {
      if (!this.user.password || this.user.password.value < 6) {
        this.user.password.errormsg = 'Şifre en az 6 karakter olmalıdır'
        this.error_with_icon()
      } 
      
  if (!this.user.email) {
        this.user.errormsg = 'Lütfen tüm alanları doldurunuz'
        this.error_with_icon()
      
      } 
      
      else if (!this.validEmail(this.user.email)) 
      {
        this.user.errormsg = 'E-posta geçersiz..!'
        this.info_with_icon()
      }
    
     if (!this.user.errormsg  ) {
 
try{
      createUserWithEmailAndPassword(
        auth,
        this.user.email,
        this.user.password
      ).then((userCredential) => {
        const user = userCredential.user;
        this.success_with_icon()
        this.logging = true
        setTimeout(()=>{

              this.$router.push('/login')
             
        },2000)
        
      });
    }
    catch(error){
     console.log(error)
  this.error_with_icon()
    }
  }
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
};
</script>
