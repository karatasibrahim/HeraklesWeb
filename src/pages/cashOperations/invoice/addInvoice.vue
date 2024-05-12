<template>
    <Breadcrumbs title="Fatura Oluştur" main="Kasa İşlemleri" />
    <div class="row">
        <div class="col-xl-8">
            <form class="card">
                <div class="card-header ">
                    <h4 class="card-title mb-0">Müşteri Bilgileri</h4>

                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">VKN/TCKN</label>
                                <input class="form-control" type="text" placeholder="VKN/TCKN">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Unvan</label>
                                <input class="form-control" type="text" placeholder="Ad Soyad/Unvan">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Vergi Dairesi</label>
                                <input class="form-control" type="email" placeholder="Vergi Dairesi">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Adres</label>
                                <input class="form-control" type="text" placeholder="Adres">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">E-posta</label>
                                <input class="form-control" type="text" placeholder="E-posta">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Telefon</label>
                                <input class="form-control" type="text" placeholder="Telefon">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Fax</label>
                                <input class="form-control" type="text" placeholder="Fax No">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Web Sitesi</label>
                                <input class="form-control" type="text" placeholder="Web Sitesi">
                            </div>
                        </div>

                    </div>
                </div>

            </form>
        </div>
        <div class="col-xl-4">
            <div class="card">
                <div class="card-header ">
                    <h4 class="card-title mb-0">Fatura Bilgileri</h4>
                    <div class="card-options"><a class="card-options-collapse" href="javascript:void(0)"
                            data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a
                            class="card-options-remove" href="javascript:void(0)" data-bs-toggle="card-remove"><i
                                class="fe fe-x"></i></a></div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Fatura Türü:</label>
                                <div class="col-sm-6">
                                    <select class="form-select form-control-inverse" name="select">

                                        <option value="opt2">Satış</option>
                                        <option value="opt3">İade</option>
                                        <option value="opt4">Tevkifat</option>
                                        <option value="opt5">İstisna</option>
                                        <option value="opt6">Özel Matrah</option>
                                        <option value="opt7">İhrac Kayıtlı</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Gönderim Şekli:</label>
                                <div class="col-sm-6">
                                    <select class="form-select form-control-inverse" name="select">

                                        <option value="opt2">Elektronik</option>
                                        <option value="opt3">Kağıt</option>

                                    </select>
                                </div>
                            </div>
                        </div>






                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Düzenlenme Tarihi:</label>
                                <div class="col-sm-6"> <input class="form-control digits" type="date" name="date"> </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Düzenlenme Saati:</label>
                                <div class="col-sm-6">
                                    <input class="form-control digits" type="time" value="12:15:00">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Para Birimi:</label>
                                <div class="col-sm-6">
                                    <select class="form-select form-control-inverse" name="select">

                                        <option value="opt1">Türk Lirası</option>
                                        <option value="opt2">Euro</option>
                                        <option value="opt3">Us Dollar</option>
                                        <option value="opt4">İngiliz Sterlini</option>


                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">XSLT Dosyası:</label>
                                <div class="col-sm-6">
                                    <select class="form-select form-control-inverse" name="select">

                                        <option value="opt1">GİB XSLT</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div class="md-12">

            <form class="card">
                <div class="card-header ">
                    <h4 class="card-title mb-0">Ürün Hizmet Bilgileri</h4>

                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="table-responsive signal-table">

                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Ürün / Hizmet</th>
                                        <th scope="col">Miktar</th>
                                        <th scope="col">Birim</th>
                                        <th scope="col">Birim Fiyat</th>
                                        <th scope="col">İskonto(%)</th>
                                        <th scope="col">KDV(%)</th>
                                        <th scope="col">Toplam Fiyat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(satir, index) in satirlar" :key="index">
                                        <th>{{ index + 1 }}</th>
                                        <td>{{ satir.product }} </td>
                                        <td>{{ satir.quantity }}</td>
                                        <td>{{ satir.unit }} </td>
                                        <td>{{ satir.unitPrice }}</td>
                                        <td>{{ satir.discount }} </td>
                                        <td>{{ satir.tax }}</td>
                                        <td>{{ satir.total }}</td>
                                        <td>
                                            <button class="btn btn-danger btn-" @click.prevent="sil(index)">Sil</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-control" disabled v-model="yeniSatir.index" type="text"
                                                placeholder="No">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.product" type="text"
                                                placeholder="Adı">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.quantity" type="text"
                                                placeholder="Değer">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.unit" type="number"
                                                placeholder="Değer">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.unitPrice" type="number"
                                                placeholder="Değer">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.discount" type="number"
                                                placeholder="Değer">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.tax" type="number"
                                                placeholder="Değer">
                                        </td>
                                        <td>
                                            <input class="form-control" v-model="yeniSatir.total" type="number"
                                                placeholder="Değer">
                                        </td>
                                        <td>
                                            <button class="btn btn-primary" @click.prevent="ekle">Ekle</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>

        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card-header">
                            <h4 class="card-title mb-0">Açıklama</h4>
                            <textarea class="form-control" rows="6" style="margin-top: 10px;"
                                placeholder="Açıklamalar"></textarea>
                             <br/>
                                <h6>*Girilen bilgilerin kontrol edildiğini ve doğru olduğunu onaylıyorum.
                                <input class="checkbox_animated" id="chk-ani" type="checkbox" checked=""> </h6>
                           <button class="btn btn-danger" @click="sendInvoice" style="margin-top:-38px; float: right;">
                            <img src="../../../assets/images/gib.png" width="40px" height="40px" alt="Resim Açıklaması">
                            E-Fatura Onayla</button>
                        </div>
                        
                    </div>
                    <div class="col-md-4">
            
                <div class="card-header ">
                    <h4 class="card-title mb-0">Toplamlar</h4>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Ürün/Hizmet Tutar:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  type="text" disabled  placeholder="1,00">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">İskonto Tutar:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  type="text" disabled  placeholder="0,00">
                                </div>
                            </div>
                        </div>
                         <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">KDV (%18):</label>
                                <div class="col-sm-6">  <input class="form-control"  type="text"   placeholder="0,18"></div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Vergiler Hariç Tutar:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  type="text"   placeholder="1,00">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Vergiler Dahil Tutar:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  type="text"   placeholder="1,00">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label">Ödenecek Tutar:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  type="text"   placeholder="1,00">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            
        </div>

                    
                </div>

            </div>
        </div>



    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
          
            token: null,
      username: 'ibrahimkaratas@windowslive.com',
      password: 'qQ*pU_7z_%K4CmFw',
      responseData: null,
            satirlar: [],
            yeniSatir: {
                product: '',
                quantity: 0,
                unit: 0,
                unitPrice: 0,
                discount: 0,
                tax: 0,
                total: 0


            }

        }
    },
    methods: {
        sendInvoice(){
           
const url='https://edocumentapitest.mysoft.com.tr/oauth/token?';
const data = new URLSearchParams();
data.append('username',this.username);
data.append('password',this.password);
data.append('grant_type','password');

axios.post(url,data,{
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}).then((response)=>{
    this.responseData=response.data;
    
   
    this.token=JSON.parse(JSON.stringify(this.responseData.access_token));
    
    let dataSend={
  "id": "2",
  "invoiceETTN": "C29150A2-F879-48C2-A447-1CB1FF2BA360",
  "eDocumentType": "EFATURA",
  "isThrowExceptionOnEDocumentTypeChange": "true",
  "connectorGuid": "3ADEFE96-9B5E-498A-B744-3DF27D574731",
  "profile": "EARSIVFATURA",
  "invoiceType": "İSTİSNA",
  "tenantIdentifierNumber": "string",
  "prefix": "MYF",
  "xsltName": "string",
  "docDate": "MM/dd/yyyy HH:mm:ss",
  "docTime": "MM/dd/yyyy HH:mm:ss sadece saat alanı",
  "dueDate": "MM/dd/yyyy HH:mm:ss",
  "currencyCode": "TRY",
  "currencyRate": "1,000000",
  "senderType": "ELEKTRONIK",
  "orderNo": "SDS95655989289",
  "orderDate": "MM/dd/yyyy HH:mm:ss",
  "billingRefInvoiceNo": "SDS95655989289",
  "billingRefInvoiceDate": "MM/dd/yyyy HH:mm:ss",
  "billingRefNote": "İstenilen stok gönderilmedi",
  "categoryName": "string",
  "isReplacesEDespatch": "1",
  "pkAlias": "urn:mail:defaultpk@ornekadres.com",
  "isNewAccount": "1",
  "isNewAcc": "1",
  "invoiceAccount": {
    "accountCode": "558586",
    "shortName": "MYSOFT",
    "taxOffice": {
      "code": "string",
      "name": "string"
    },
    "telephone1": "+902129010212",
    "email1": "info@mysoft.com.tr",
    "fax1": "+902129010212",
    "mobilePhone1": "+908506000661",
    "postalCode": "34220",
    "room": "212",
    "streetName": "Eski Londra Asfaltı Caddesi",
    "blockName": "A1",
    "buildingName": "Teknopark",
    "buildingNumber": "24",
    "region": "YTÜ Davutpaşa Kampüsü Teknoloji Gelşt. Bölgesi",
    "district": "Çifte Havuzlar Mahallesi",
    "webSiteUrl": "https://www.mysoft.com.tr/",
    "naceCode": "644453",
    "mersisNo": "0012345678911",
    "tenantIdentifierNumber": "string",
    "dueDay": "5",
    "category1Name": "KATEGORİ 1",
    "category2Name": "KATEGORİ 2",
    "category3Name": "KATEGORİ 3",
    "note": "Açıklama",
    "isCheckWithAccountCode": "HAYIR",
    "isPassive": "HAYIR",
    "id": "2",
    "accountName": "MYSOFT DİJİTAL DÖNÜŞÜM ANONİM ŞİRKETİ",
    "identifierNumber": "6271036106",
    "city": {
      "code": "string",
      "name": "string"
    },
    "country": {
      "code": "string",
      "name": "string"
    },
    "citySubdivision": "Davutpaşa"
  },
  "isInternetSales": "0",
  "internetShipmentInfo": {
    "webSiteUrl": "https://mysoft.com.tr",
    "paymentType": "KREDIKARTI/BANKAKARTI",
    "internetAccountName": "mysoft",
    "paymentDate": "MM/dd/yyyy HH:mm:ss",
    "paymentNote": "Kredi kartı",
    "shippingDate": "MM/dd/yyyy HH:mm:ss",
    "shippingAccountName": "MYSOFT",
    "shippingAccountVknTckn": "11111111111"
  },
  "invoiceDetail": [
    {
      "isNewProduct": "0",
      "product": {
        "id": "1",
        "productType": "Product",
        "productCode": "123678",
        "productName": "IPHONE X"
      },
      "unitCode": "KGM",
      "unitName": "KİLOGRAM",
      "qty": "10",
      "unitPriceTra": "56,000000",
      "amtTra": "560,00",
      "discRate": "60,00",
      "discAmtTra": "60,00",
      "vatRate": "18",
      "amtVatTra": "0,50",
      "note": "Stoğa yüzde 18 KDV uygulandı",
      "taxExemptionReasonCode": "103",
      "taxExemptionReasonName": "Askeri Amaçlı İstisna",
      "withholdingTaxTypeCode": "604",
      "withholdingTaxPercentage": "5,60",
      "oivRate": "12",
      "oivAmtTra": "12",
      "otvCode": "A",
      "otvRate": "5",
      "otvAmtTra": "5",
      "otvTaxExemptionReasonCode": "45",
      "isKDVInclude": "0",
      "tax": [
        {
          "taxName": "Özel İletişim Vergisi",
          "taxCode": "103",
          "taxRate": "18",
          "taxAmount": 0,
          "taxableAmount": 0,
          "taxExemptionReasonCode": "103",
          "taxExemptionReasonName": "Askeri Amaçlı İstisna"
        }
      ],
      "InvoiceDetailOrderLineReference": [
        {
          "PurchaseOrderNo": "string",
          "PurchaseOrderDate": "2019-08-24T14:15:22Z",
          "SalesOrderNo": "string",
          "SalesOrderDate": "2019-08-24T14:15:22Z"
        }
      ],
      "InvoiceDetailReceiptLineReference": [
        {
          "DespatchNo": "string",
          "DespatchDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "notes": [
    {
      "note": "https://mysoft.com.tr"
    }
  ]
};
    const apiUrl = 'https://edocumentapi.mysoft.com.tr/api/InvoiceOutbox/invoiceOutbox';
const accessToken = 'Bearer ' + this.token;  
 
const requestData = dataSend;  

const headers = {
  'Authorization': accessToken,
  'Content-Type': 'application/json',
};

axios.post(apiUrl, requestData, { headers })
  .then((response) => {
    const result = response.data;
    console.log("RES",result);
  })
  .catch((error) => {
    console.error(error);
  });
    
}).catch((error)=>{
    console.log(error);
});


 







 



        },
        testFunc() {
            console.log("test")
        },
        ekle() {
            this.satirlar.push({ ...this.yeniSatir });
            this.yeniSatir = {}
        },
        sil(index) {
            this.satirlar.splice(index, 1);
        }
    }


}

</script>
 