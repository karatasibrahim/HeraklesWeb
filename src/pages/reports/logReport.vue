<template>
  <Breadcrumbs title="Tüm Arama Kayıtları" main="Raporlamalar" />
  <div>
    <!-- ADD MODAL   -->
   
    <div class="container-fluid">
      <div class="row">

        <div class="card">
          <div class="row">
            <div class="card-header col-md-10 ">
              <h3>Arama Kaydı Bilgileri</h3>
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
                <input class="form-control digits" v-model="selectedDate2" type="date"> 
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
              
                  <th scope="col">Adı</th>
                  <th scope="col">Soyadı</th>
                  <th scope="col">Doğum Tarihi</th>
                  <th scope="col">Telefon No</th>
                  <th scope="col">Erişim İzni</th>
              
                 
                  <th scope="col">Arama Tarihi</th>
     
           
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, index) in tableDataContent" :key="item.id" class="border-bottom-primary">

                  <td style="width:20px">{{ index + 1 }}</td>
                
                  <td style="width:350px">{{ item.FirsName }}</td>
                  <td style="width:350px">{{ item.LastName }}</td>
                  <td style="width:350px">{{ item.BirthDate }}</td>
                  
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
    ...mapGetters(["GetCaller"]),

    ...mapState({
      bootstraplist: state => state.bootsrap.bootstrap,
      inverselist: state => state.bootsrap.inverse
    })
  },


  methods: {
    ...mapActions(["AddData", "EditData", "DeleteData", "myQuery"]),
//     filterByDate(){
//       if (!this.selectedDate) {
//         this.tableDataContent =this.$store.getters.GetCaller; 
//     return;
//   }
//       if (this.selectedDate) {
//   const dateParts = this.selectedDate.split('-');  

//   if (dateParts.length === 3) {
//     const day = dateParts[2];
//     const month = dateParts[1];
//     const year = dateParts[0];
//     this.selectedDate=` ${day}.${month}.${year}`
     
  
//   }
// }

// const selectedDateParts = this.selectedDate.split('.');
//   const selectedDay = parseInt(selectedDateParts[0], 10);
//   const selectedMonth = parseInt(selectedDateParts[1], 10) - 1;  
//   const selectedYear = parseInt(selectedDateParts[2], 10);

//   const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
  
//   this.tableDataContent = this.$store.getters.GetCaller.filter(item => {
    
//     const callDateParts = item.CallDate.split('.');
//     const callDay = parseInt(callDateParts[0], 10);
//     const callMonth = parseInt(callDateParts[1], 10) - 1;
//     const callYear = parseInt(callDateParts[2], 10);

//     const callDate = new Date(callYear, callMonth, callDay);
 
//     return callDate >=selectedDate;
//   }); 
//     },
filterByDate(){
  if (!this.selectedDate ||  this.selectedDate2) {
        this.tableDataContent =this.$store.getters.GetCaller; 
    return;
  }
      if (this.selectedDate & this.selectedDate2) {
  const dateParts = this.selectedDate.split('-');  
  const dateParts2 = this.selectedDate2.split('-');  
  if (dateParts.length === 3 && dateParts2.length === 3) { 
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];
    this.selectedDate = `${day}.${month}.${year}`; 
    
    const day2 = dateParts2[0];
    const month2 = dateParts2[1];
    const year2 = dateParts2[2];
    this.selectedDate2 = `${day2}.${month2}.${year2}`; 
  }
}
     const selectedDateParts = this.selectedDate.split('.');
  const selectedDay = parseInt(selectedDateParts[0], 10);
  const selectedMonth = parseInt(selectedDateParts[1], 10) - 1;  
  const selectedYear = parseInt(selectedDateParts[2], 10);

  const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);

  //////
   const selectedDateParts2 = this.selectedDate2.split('.');
  const selectedDay2 = parseInt(selectedDateParts2[0], 10);
  const selectedMonth2 = parseInt(selectedDateParts2[1], 10) - 1;  
  const selectedYear2 = parseInt(selectedDateParts[2], 10);

  const selectedDate2 = new Date(selectedYear2, selectedMonth2, selectedDay2);
  console.log(this.selectedDate)   
  console.log(this.selectedDate2)
  
      const startDate =  selectedDate;
      const endDate =  selectedDate2;
      
      this.tableDataContent = this.$store.getters.GetCaller.filter(item => {
        const callDate = moment(item.CallDate, 'DD.MM.YYYY');
        return callDate.isBetween(startDate, endDate, null, '[]');  
      });
      console.log(this.tableDataContent)
    },
    exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');
      worksheet.addRow(['Ad', 'Soyad', 'Doğum Tarihi', 'Telefon', 'Erişim İzni', 'Arama Tarihi']);
      // Verileri tabloya ekleyin (örnek olarak)
      const tableData =  this.tableDataContent;
      tableData.forEach((row) => {
        worksheet.addRow([row.FirsName, row.LastName, row.BirthDate, row.Phone, row.GsmCheck, row.CallDate]);
      });

      
      workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'AramaKayitlari.xlsx';
        link.click();
      });
    },
generatePDF() {
   
  const callerData =  this.tableDataContent;

   
  const headerRow = ['Ad', 'Soyad', 'Doğum Tarihi', 'Telefon', 'Erişim İzni', 'Arama Tarihi'];

  
  const body = [headerRow];

   
  callerData.forEach((caller) => {
    const rowData = [
      caller.FirsName,
      caller.LastName,
      caller.BirthDate,
      caller.Phone,
      caller.GsmCheck,
      caller.CallDate,
    ];
    body.push(rowData);
  });

 
  const documentDefinition = {
    content: [
      {
        text: 'Herakles Termal Otel Müşteri Arama Raporu',
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