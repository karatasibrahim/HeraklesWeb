<template>
    
    <div class="col-xxl-1" v-for="(item, index) in card" :key="index">
        <div class="card social-profile">
            <div class="card-body">
              
                <div class="social-details">
                    <h5 class="mb-1"><a href="social-app.html">{{ item.name }}</a></h5><span class="f-light">
                       
                     
                    </span>
                    
               
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import { mapState } from 'vuex';
import getImage from "@/mixins/getImage"
export default {
    mixins: [getImage],
    computed: {
        ...mapState({
            card: (state) => state.common.usercard,

        }),
    },
}
</script>