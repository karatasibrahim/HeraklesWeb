<template>
  <div>

    <div class="container-fluid">
      <div class="row ">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <!-- <a class="logo">
                  <img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt="looginpage" />
                  <img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage" />
                </a> -->
              </div>
              <div class="login-main">
                <form class="theme-form">
                  <h4>Hesabınız ile Oturum Açın</h4>
                  <p>Giriş yapmak için e-postanızı ve şifrenizi girin</p>
                  <div class="form-group">
                    <label class="col-form-label">E-posta Adresi</label>
                    <input class="form-control" type="email" required="" placeholder="admin@gmail.com"
                      v-model="user.email.value">
                    <span class="validate-error" v-if="!user.email.value || !validEmail(user.email.value)">{{
                      user.email.errormsg }}</span>

                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Şifre</label>
                    <div class="form-input position-relative">
                      <input class="form-control" type="password" name="login[password]" required=""
                        placeholder="*********" v-model="user.password.value">
                      <span class="validate-error" v-if="user.password.value.length < 6">{{ user.password.errormsg
                      }}</span>

                      <div class="show-hide"><span class="show"> </span></div>
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox">
                      <label class="text-muted" for="checkbox1">Beni Hatırla</label>
                    </div>  <a class="link" href="/auth/forget_password"
                      >Şifremi unuttum?</a
                    >
                    <div class="text-end mt-3">
                      <button class="btn btn-primary btn-block w-100" type="submit" @click.prevent="login">Giriş Yap</button>

                    </div>
                  </div>
                  <!-- <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login"
                        target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a
                        class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i
                          class="txt-twitter" data-feather="twitter"></i>twitter</a><a class="btn btn-light"
                        href="https://www.facebook.com/" target="_blank"><i class="txt-fb"
                          data-feather="facebook"></i>facebook</a></div>
                  </div> -->
                  <p class="mt-4 mb-0 text-center">Hesabınız yok mu?<a class="ms-2" href="/auth/register">Hesap Oluştur</a></p>
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
import {mapActions,mapGetters} from 'vuex';
import { conf } from "../../src/firebase/firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(conf);
export default {
  name: 'login',
  data() {
    return {

      result: { email: '', password: '' },

      user: {
        email: {
          value: '',
          errormsg: ''
        },
        password: {
          value: '',
          errormsg: ''
        }
      }
    };
  },

  created() {

  },

  methods: {
    ...mapActions(["personInfo"]),
    getPerson()
    {
      this.personInfo()
    },
    success_with_icon() {
    
          useToast().success("Giriş başarılı",{icon: 'fa fa-check'})
      },
      info_with_icon() {
        useToast().info("Lütfen bilgilerinizi kontrol ediniz",{icon: 'fa fa-check'})
      },
      error_with_icon() {
        useToast().error("Hatalı giriş yaptınız..!",{icon: 'fa fa-times'})
      },
       info_with_cancle() {
        this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'bottom-right', closeOnSwipe: true, type: 'default', duration: 2000, });
      },
    login() {
// this.$store.dispatch("login",{...this.user})
      
      if (!this.user.password.value || this.user.password.value.length < 6) {
        this.user.password.errormsg = 'min length 6'
        this.error_with_icon()
      } 
      else { this.user.password.errormsg = '' }
  if (!this.user.email.value) {
        this.user.email.errormsg = 'empty not allowed'
        this.error_with_icon()
      
      } 
      
      else if (!this.validEmail(this.user.email.value)) 
      {
        this.user.email.errormsg = 'Valid email required.'
        this.info_with_icon()
      }
      else {
        this.user.email.errormsg = ''
      }

     
     if (!this.user.email.errormsg && !this.user.password.errormsg ) {

        this.result = { email: this.user.email.value, password: this.user.password.value }
try{
 signInWithEmailAndPassword(auth,this.user.email.value,this.user.password.value).then((userCredential)=>{
        const user=userCredential.user;
        let password={email:this.user.email.value,token:userCredential.user.accessToken,userUid:userCredential.user.uid};
      
        if(this.user.email.value==password.email && password.token)
        {
        const jsonData=JSON.stringify(password);
        localStorage.setItem("storedData",jsonData); 
        this.success_with_icon()
        this.logging = true
        setTimeout(()=>{
           
              this.$router.push('/')
           
        },2000)
         }
      });
}
catch(error)
{
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