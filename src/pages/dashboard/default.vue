<template>
  <div>
    <Breadcrumbs main="Ana Sayfa" title="Genel" />

    <div class="container-fluid">
      <div class="row widget-grid">
        <!-- {{ branchList }} -->
        <WelcomeCard />
        <HotelBranchCard  />



        <!-- <PurchaseSaleCard /> -->
        <!-- <OrdersProfitCard /> -->
        <!-- <OverallBalanceCard />
        <RecentOrdersCard /> -->
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeCard from "./default/WelcomeCard.vue";
import PurchaseSaleCard from "./default/PurchaseSaleCard.vue";
import OrdersProfitCard from "./default/OrdersProfitCard.vue";
import OverallBalanceCard from "./default/OverallBalanceCard.vue";
import RecentOrdersCard from "./default/RecentOrdersCard.vue";
import HotelBranchCard from "./default/HotelBranchCard.vue";

export default {
  data() {
    return {
      branchList: []
    }
  },
  computed: {
    branchList() {
      return this.$store.state.branchInfo.map((branch) => branch.BranchName)
    },
  },
  components: {
    WelcomeCard,
    PurchaseSaleCard,
    OrdersProfitCard,
    OverallBalanceCard,
    RecentOrdersCard,
    HotelBranchCard,
  },
}
</script>
