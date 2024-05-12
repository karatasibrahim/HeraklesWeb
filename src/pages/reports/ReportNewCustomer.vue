<template>
    <Breadcrumbs title="Yeni Müşteri Arama Kayıtları" main="Raporlamalar" />
    <div>
      <!-- ADD MODAL   -->
     
      <div class="container-fluid">
        <div class="row">
  
          <div class="card">
            <div class="row">
              <div class="card-header col-md-10 ">
                <h3>Yeni Müşteri Bilgileri</h3>
              </div>
              <div class="card-header col-md-2">
                
              </div>
            </div>
            <div class="table-responsive">
              <div class="row">
                <div class="col-md-2">
                <input class="form-control digits" v-model="selectedDate" type="date"> 
              </div>
              <div class="col-md-2">
                <button class="btn  btn-primary btn-air-primary" @click="filterByDate">Filtrele </button>
              </div>
              </div>
               
              
                <div style="display: flex; justify-content: flex-end;"> 
              <button class="btn btn-pill btn-success btn-air-success" @click="exportToExcel">EXCEL </button>
            <button class="btn btn-pill btn-danger btn-air-danger" @click="generatePDF">PDF </button>
            </div>
              <table class="table">
                <thead>
  
                  <tr class="border-bottom-primary">
                    <th scope="col">No</th>
                   
                  <th scope="col">Telefon No</th>
                  <th scope="col">Erişim İzni</th>
                  
                 
                  <th scope="col">Arama Tarihi</th>
             
                  </tr>
                </thead>
  
                <tbody>
                  <tr v-for="(item, index) in tableDataContent" :key="item.id" class="border-bottom-primary">
  
                    <td style="width:20px">{{ index + 1 }}</td>
                   
                  <td style="width:350px">{{ item.Phone }}</td>
                  <td style="width:350px">{{ item.GsmCheck }}</td>
                
                  
                  <td style="width:350px">{{ item.CallDate }}</td>
                 
                  </tr>
                </tbody>
              </table>
  
            </div>
          </div>
  
  
  
        </div>
      </div>
  
  
  
    </div>
  </template>
  <script>
  import $ from 'jquery'
  
  
  let collapsed = false;
  import { mapState } from 'vuex';
  import { mapActions, mapGetters } from "vuex";
  import getImage from "@/mixins/getImage";
  import moment from 'moment';
  import { collection } from 'firebase/firestore';
  const currentDate = new Date();
  
  import ExcelJS from 'exceljs/dist/exceljs.min.js';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
  export default {
  
    data() {
      return {
  
        tableDataContent: [], 
        selectedDate: null, 
        editDepartment: {},
        departmentObj: {
          title: "",
          userID: "",
          CreatedOn: currentDate,
          ModifiedOn: currentDate,
          isActive: true
        },
        userID: JSON.parse(localStorage.getItem("storedData")).userUid,
      }
    },
    computed: {
      ...mapGetters(["GetNewCaller"]),
  
      ...mapState({
        bootstraplist: state => state.bootsrap.bootstrap,
        inverselist: state => state.bootsrap.inverse
      })
    },
  
  
    methods: {
      ...mapActions(["AddData", "EditData", "DeleteData", "myQuery"]),
    
    
      exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');
      worksheet.addRow(['Telefon', 'Erişim İzni', 'Arama Tarihi']);
      // Verileri tabloya ekleyin (örnek olarak)
      const tableData = this.tableDataContent;
      tableData.forEach((row) => {
        worksheet.addRow([row.Phone, row.GsmCheck, row.CallDate]);
      });

      
      workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'YeniMusteriAramaKayitlari.xlsx';
        link.click();
      });
    },
    filterByDate(){
      if (!this.selectedDate) {
        this.tableDataContent =this.$store.getters.GetNewCaller;
    //this.$store.commit('SetFilteredData', this.$store.getters.GetNewCaller);
    return;
  }
      if (this.selectedDate) {
  const dateParts = this.selectedDate.split('-');  

  if (dateParts.length === 3) {
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    this.selectedDate=` ${day}.${month}.${year}`
     
  
  }
}

const selectedDateParts = this.selectedDate.split('.');
  const selectedDay = parseInt(selectedDateParts[0], 10);
  const selectedMonth = parseInt(selectedDateParts[1], 10) - 1; // JavaScript ay indeksi 0 ile başlar
  const selectedYear = parseInt(selectedDateParts[2], 10);

  const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
  
  this.tableDataContent = this.$store.getters.GetNewCaller.filter(item => {
    
    const callDateParts = item.CallDate.split('.');
    const callDay = parseInt(callDateParts[0], 10);
    const callMonth = parseInt(callDateParts[1], 10) - 1;
    const callYear = parseInt(callDateParts[2], 10);

    const callDate = new Date(callYear, callMonth, callDay);
 
    return callDate >=selectedDate;
  }); 
    },
generatePDF() {
   
  const callerData = this.tableDataContent;

   
  const headerRow = [ 'Telefon', 'Erişim İzni', 'Arama Tarihi'];

  
  const body = [headerRow];

   
  callerData.forEach((caller) => {
    const rowData = [
      
      caller.Phone,
      caller.GsmCheck,
      caller.CallDate,
    ];
    body.push(rowData);
  });

 
  const documentDefinition = {
    content: [
      {
        text: 'Herakles Termal Otel Yeni Müşteri Arama Kayıtları',
        style: 'header',
      },
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*'],
          body: body, 
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
    },
  };

  
  pdfMake.createPdf(documentDefinition).open();
},
  
dateFormat(value) {
        if (value) {
          return moment(String(value)).format('DD-MM-YYYY')
        }
      },
  
    },
  
    mounted() {
  
    },
    watch: {
      
    }
  
  
  }
  </script>