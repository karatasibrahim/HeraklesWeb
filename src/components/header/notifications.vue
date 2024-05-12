<template>
  <li class="onhover-dropdown">
    <div class="notification-box">
      <svg>
        <use href="@/assets/svg/icon-sprite.svg#notification" @click="notification_open()"></use>
      </svg> 
      <span class="badge rounded-pill badge-secondary">{{ this.$store.getters.GetNotifications.length }} </span>
    </div>
    <div
      class="onhover-show-div notification-dropdown"
      :class="{ active: notification }"
    >
      <h6 class="f-18 mb-0 dropdown-title">Bildirimler</h6>
      <ul v-for="item in this.$store.getters.GetNotifications" :key="item.id"> 
        <li class="b-l-primary border-4">
         
          <p>{{ item.Action }} <span v-if="item.ActionKey==='Create'" class="font-success" >{{dateFormat( item.ActionDate.toDate() )}}</span>
            <span v-else-if="item.ActionKey==='Update'" class="font-warning" >{{dateFormat( item.ActionDate.toDate() )}}</span>
            <span v-else="item.ActionKey==='Delete'" class="font-danger" >{{dateFormat( item.ActionDate.toDate() )}}</span>
          </p>
        </li>
        <!-- <li class="b-l-success border-4">
          <p>Order Complete<span class="font-success">1 hr</span></p>
        </li>
        <li class="b-l-info border-4">
          <p>Tickets Generated<span class="font-info">3 hr</span></p>
        </li>
        <li class="b-l-warning border-4">
          <p>Delivery Complete<span class="font-warning">6 hr</span></p>
        </li>-->
         
      </ul>
      <li><a class="f-w-700" href="#">Tüm Kayıtlar</a></li>
    </div>
  </li>
</template>

<script>
 /* eslint-disable */
 import moment from 'moment'; 
  export default {
    name: 'Notifications',
  
    data() {
      return {
        notification: false,
      };
    },
 
    methods: {
      dateFormat(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
      }
    },
      notification_open() {
        this.notification = !this.notification;
      },
    },
  };
</script>
