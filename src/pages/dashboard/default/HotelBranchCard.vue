<template>
    <div class="col-xxl-auto col-xl-12 col-sm-6 box-col-6 gx-5">
    
        <div class="row">
            <div class="card widget-1 ">

                <div class="ribbon ribbon-clip ribbon-primary fs-4">Tüm Arama Verileri </div>
                <div class="card-body row gap-4 mt-5">
                    <div class="widget-content">
                        <div class="widget-round secondary">
                            <div class="bg-round">
                                <svg class="svg-fill">
                                    <use href="@/assets/svg/icon-sprite.svg#stroke-user"> </use>
                                </svg>
                                <svg class="half-circle svg-fill">
                                    <use href="@/assets/svg/icon-sprite.svg#halfcircle"></use>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6>Yeni Müşteri {{ this.$store.getters.GetNewCaller.length }}</h6>
                        </div>
                    </div>
                    <div class="widget-content">
                        <div class="widget-round secondary">
                            <div class="bg-round">
                                <svg class="svg-fill">
                                    <use href="@/assets/svg/icon-sprite.svg#fill-user"> </use>
                                </svg>
                                <svg class="half-circle svg-fill">
                                    <use href="@/assets/svg/icon-sprite.svg#halfcircle"></use>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6>Eski Müşteri {{ this.$store.getters.GetCustomerCaller.length }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props: {
        branch: Array
    },
    computed: {
        ...mapGetters(["GetBranchInfo", "GetRoomInfo"]),

       
    },

    watch: {
     

    }
}
</script>