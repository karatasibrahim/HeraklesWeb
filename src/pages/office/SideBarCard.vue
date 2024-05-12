<template>
<div class="file-sidebar">
    <div class="card">
        <div class="card-body">
            <ul>
                <li v-for="sidebar in sidebarMenus" :key="sidebar">
                    <div :class="sidebar.btnClass">
                        <vue-feather :type="sidebar.iconType"></vue-feather>
                        {{ sidebar.title }}
                    </div>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <div class="btn btn-outline-primary">
                        <vue-feather type="database"></vue-feather> Veri Depolama Kapasiteniz
                    </div>
                    <div class="m-t-15">
                        <div class="progress sm-progress-bar mb-1">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>1 GB Alanın 310 MB'tı Kullanıldı</p>
                    </div>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <div class="btn btn-outline-primary">
                        <vue-feather type="grid"></vue-feather> Ödeme Planı
                    </div>
                </li>
                <li>
                    <div class="pricing-plan">
                        <h6>Sınırlı Kullanım 1 GB</h6>
                        <h5>ÜCRETSİZ</h5>
                        <p>1 GB Kullanım Alanı</p>
                        <div class="btn btn-outline-primary btn-sm">Mevcut Paketiniz</div>
                        <img class="bg-img" src="@/assets/images/dashboard/folder.png" alt="" />
                    </div>
                </li>
                <li>
                    <div class="pricing-plan">
                        <h6>Paket Yükselt</h6>
                        <h5>$5/Aylık</h5>
                        <p>100 GB Depolama Alanı</p>
                        <div class="btn btn-outline-primary btn-sm">
                            İletişime Geçiniz
                        </div>
                        <img class="bg-img" src="@/assets/images/dashboard/folder1.png" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import {
    sidebarMenus
} from "../../data/filemanager/sidebar"
export default {
    data() {
        return {
            sidebarMenus: sidebarMenus
        }
    },
}
</script>
