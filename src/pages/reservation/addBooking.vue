<template>
  <Breadcrumbs title="Rezervasyon Tanımlama" main="Resepsiyon" />

  <div>
    <!-- ADD MODAL   -->
    <div class="col-12">
      <div class="modal fade modal-bookmark" id="add_reservation" tabindex="-1" role="dialog"
        aria-labelledby="add_reservationLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="add_reservationLabel">Yeni Rezervasyon</h5>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
            </div>
            <div class="modal-body">
              <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                <div class="row">
                  <div class="col-xl-12">
                    <form class="card">


                      <div class="row">
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Giriş Tarihi</label>
                            <Datepicker class="datepicker-here form-control digits" v-model="reservationObj.EntireDate"
                              data-language="tr">
                            </Datepicker>
                            <!-- <input class="form-control digits" type="date" v-model="reservationObj.EntireDate"> -->
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Giriş Saati</label>
                            <input class="form-control digits" type="time" v-model="reservationObj.EntireTime">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Oda Grubu</label>
                            <multiselect v-model="reservationObj.RoomGroup" :options="roomGroupData" id="roomGroup"
                              :searchable="false" :group-select="true" :close-on-select="false" track-by="name"
                              label="name" placeholder="Oda numarasını seçiniz.."></multiselect>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Şube</label>
                            <multiselect v-model="tableValue"
                              :options="$store.getters.GetBranchInfo.map(t => { return { 'name': t.BranchName, 'id': t.id } })"
                              :searchable="false" :group-select="true" :close-on-select="false" track-by="name"
                              label="name" placeholder="Oda tipini seçiniz.."></multiselect>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Çıkış Tarihi</label>
                            <Datepicker class="datepicker-here form-control digits" v-model="reservationObj.ExitDate"
                              data-language="tr">
                            </Datepicker>
                            <!--  <input class="form-control digits" v-model="reservationObj.ExitDate" type="date"> -->
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Çıkış Saati</label>
                            <input class="form-control digits" type="time" v-model="reservationObj.ExitTime">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Oda No</label>
                            <multiselect v-model="reservationObj.RoomInfo" @select="getRoomGroupData" :options="this.roomContent.map((t) => {
                              return {
                                name:
                                  t.Title,
                                id: t.id,
                              };
                            })" id="roomGroup" :searchable="false" :group-select="true" :close-on-select="false"
                              track-by="name" label="name" placeholder="Oda numarasını seçiniz.."></multiselect>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Acente/Firma</label>
                            <multiselect v-model="reservationObj.Agent"
                              :options="$store.getters.GetAgents.map(t => { return { 'name': t.AgentTitle, 'id': t.id } })"
                              :searchable="false" :group-select="true" :close-on-select="false" track-by="name"
                              label="name" placeholder="Acente Firma Bilgisi"></multiselect>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Konaklama türü</label>
                            <multiselect v-model="reservationObj.BedType" :options="optionsBedType" :searchable="false"
                              :group-select="true" :close-on-select="false" track-by="name" label="name"
                              placeholder="Pick a value"></multiselect>

                          </div>
                        </div>
                        <div class="mb-3 col-md-3">
                          <div class="media">
                            <label class="col-form-label m-r-10">Check In</label>
                            <div class="mb-3">
                              <div class="media-body text-end icon-state switch-outline">
                                <label class="switch">
                                  <input type="checkbox" checked v-model="reservationObj.CheckIn"><span
                                    class="switch-state bg-success"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3 col-md-3">
                          <div class="media">
                            <label class="col-form-label m-r-10">E-posta gönderilsin mi?</label>
                            <div class="mb-3">
                              <div class="media-body text-end icon-state switch-outline">
                                <label class="switch">
                                  <input type="checkbox" v-model="reservationObj.emailCheck"><span
                                    class="switch-state bg-success"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-md-3" v-if="reservationObj.emailCheck">
                          <div class="mb-3">
                            <label class="form-label">E-posta</label>
                            <input v-model="reservationObj.Email" class="form-control" type="text"
                              placeholder="E-posta giriniz">
                          </div>
                        </div>


                        <div class="row">

                          <div class="table-responsive signal-table">

                            <table class="table table-hover">
                              <thead>
                                <tr>

                                  <th scope="col">T.C. No / Pas. No</th>
                                  <th scope="col">Ad</th>
                                  <th scope="col">Soyad</th>
                                  <th scope="col">Doğum Tarihi</th>
                                  <th scope="col">Ülke</th>
                                  <th scope="col">Telefon</th>
                                  <th scope="col">Cinsiyet</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(rowT, index) in rowsTable" :key="index">

                                  <td>{{ rowT.IdentityNumber }} </td>
                                  <td>{{ rowT.FirstName }}</td>
                                  <td>{{ rowT.LastName }}</td>
                                  <td>{{ rowT.BirthDate }} </td>
                                  <td>{{ rowT.Country }}</td>
                                  <td>{{ rowT.Phone }} </td>
                                  <td>{{ rowT.Sex }} </td>

                                  <td>
                                    <button class="btn btn-danger btn-" @click.prevent="deleteRow(index)">Sil</button>
                                  </td>
                                </tr>
                                <tr>

                                  <td>
                                    <input class="form-control" v-model="Guest.IdentityNumber" type="text"
                                      placeholder="T.C. No / Pas. No">
                                  </td>
                                  <td>
                                    <input class="form-control" v-model="Guest.FirstName" style="width:120px;" type="text"
                                      placeholder="Ad">
                                  </td>
                                  <td>
                                    <input class="form-control" v-model="Guest.LastName" style="width:120px;" type="text"
                                      placeholder="Soyad">
                                  </td>
                                  <td>
                                    <input placeholder="Doğum Tarihi" class="form-control digits" style="12opx;"
                                      v-model="Guest.BirthDate" type="date">

                                  </td>
                                  <td>
                                    <select v-model="Guest.Country" class="form-select form-control-primary-fill"
                                      name="select">

                                      <option value="0">Seçiniz...</option>
                                      <option value="BİLİNMİYOR">BİLİNMİYOR</option>
                                      <option value="TÜRKİYE">TÜRKİYE</option>
                                      <option value="KUZEY KIBRIS TURK CUMHURİYETİ">KUZEY KIBRIS TURK CUMHURİYETİ</option>
                                      <option value="AFGHANISTAN">AFGHANISTAN</option>
                                      <option value="ALBANIA4">ALBANIA</option>
                                      <option value="ALGERIA">ALGERIA</option>
                                      <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                                      <option value="ANDORRA">ANDORRA</option>
                                      <option value="ANGOLA">ANGOLA</option>
                                      <option value="ANGUILLA">ANGUILLA</option>
                                      <option value="ANTARCTICA">ANTARCTICA</option>
                                      <option value="ANTIGUA AND BARBUDA">ANTIGUA AND BARBUDA</option>
                                      <option value="ARGENTINA">ARGENTINA</option>
                                      <option value="ARMENIA">ARMENIA</option>
                                      <option value="ARUBA">ARUBA</option>
                                      <option value="AUSTRALIA">AUSTRALIA</option>
                                      <option value="AUSTRIA">AUSTRIA</option>
                                      <option value="17">AZERBAIJAN</option>
                                      <option value="18">BAHAMAS</option>
                                      <option value="19">BAHRAIN</option>
                                      <option value="20">BANGLADESH</option>
                                      <option value="21">BARBADOS</option>
                                      <option value="22">BELARUS</option>
                                      <option value="23">BELGIUM</option>
                                      <option value="24">BELIZE</option>
                                      <option value="25">BENIN</option>
                                      <option value="26">BERMUDA</option>
                                      <option value="27">BHUTAN</option>
                                      <option value="28">BOLIVIA</option>
                                      <option value="29">BOSNIA AND HERZEGOVINA</option>
                                      <option value="30">BOTSWANA</option>
                                      <option value="31">BOUVET ISLAND</option>
                                      <option value="32">BRAZIL</option>
                                      <option value="33">BRITISH INDIAN OCEAN TERRITORY</option>
                                      <option value="34">BRUNEI DARUSSALAM</option>
                                      <option value="35">BULGARIA</option>
                                      <option value="36">BURKINA FASO</option>
                                      <option value="37">BURUNDI</option>
                                      <option value="38">CAMBODIA</option>
                                      <option value="39">CAMEROON</option>
                                      <option value="40">CANADA</option>
                                      <option value="41">CAPE VERDE</option>
                                      <option value="42">CAYMAN ISLANDS</option>
                                      <option value="43">CENTRAL AFRICAN REPUBLIC</option>
                                      <option value="44">CHAD (Tchad)</option>
                                      <option value="45">CHILE</option>
                                      <option value="46">CHINA</option>
                                      <option value="47">CHRISTMAS ISLAND</option>
                                      <option value="48">COCOS (KEELING) ISLANDS</option>
                                      <option value="49">COLOMBIA</option>
                                      <option value="50">COMOROS</option>
                                      <option value="51">CONGO - REPUBLIC OF</option>
                                      <option value="52">CONGO - THE DEMOCRATIC REPUBLIC OF THE (formerly Zaire)</option>
                                      <option value="53">COOK ISLANDS</option>
                                      <option value="54">COSTA RICA</option>
                                      <option value="55">CÔTE DIVOIRE (Ivory Coast)</option>
                                      <option value="56">CROATIA (Hrvatska)</option>
                                      <option value="57">CUBA</option>
                                      <option value="58">CYPRUS</option>
                                      <option value="59">CZECH REPUBLIC</option>
                                      <option value="60">DENMARK</option>
                                      <option value="61">DJIBOUTI</option>
                                      <option value="62">DOMINICA</option>
                                      <option value="63">DOMINICAN REPUBLIC</option>
                                      <option value="64">ECUADOR</option>
                                      <option value="65">EGYPT</option>
                                      <option value="66">EL SALVADOR</option>
                                      <option value="67">EQUATORIAL GUINEA</option>
                                      <option value="68">ERITREA</option>
                                      <option value="69">ESTONIA</option>
                                      <option value="70">ETHIOPIA</option>
                                      <option value="71">FAEROE ISLANDS</option>
                                      <option value="72">FALKLAND ISLANDS (MALVINAS)</option>
                                      <option value="73">FIJI</option>
                                      <option value="74">FINLAND</option>
                                      <option value="75">FRANCE</option>
                                      <option value="76">FRENCH GUIANA</option>
                                      <option value="77">FRENCH POLYNESIA</option>
                                      <option value="78">FRENCH SOUTHERN TERRITORIES</option>
                                      <option value="79">GABON</option>
                                      <option value="80">GAMBIA</option>
                                      <option value="81">GEORGIA</option>
                                      <option value="82">GERMANY (Deutschland)</option>
                                      <option value="83">GHANA</option>
                                      <option value="84">GIBRALTAR</option>
                                      <option value="85">GREECE</option>
                                      <option value="86">GREENLAND</option>
                                      <option value="87">GRENADA</option>
                                      <option value="88">GUADELOUPE</option>
                                      <option value="89">GUAM</option>
                                      <option value="90">GUATEMALA</option>
                                      <option value="91">GUERNSEY</option>
                                      <option value="92">GUINEA</option>
                                      <option value="93">GUINEA-BISSAU</option>
                                      <option value="94">GUYANA</option>
                                      <option value="95">HAITI</option>
                                      <option value="96">HEARD ISLAND AND MCDONALD ISLANDS</option>
                                      <option value="97">HONDURAS</option>
                                      <option value="98">HONG KONG (Special Administrative Region of China)</option>
                                      <option value="99">HUNGARY</option>
                                      <option value="100">ICELAND</option>
                                      <option value="101">INDIA</option>
                                      <option value="102">INDONESIA</option>
                                      <option value="103">IRAN (Islamic Republic of Iran)</option>
                                      <option value="104">IRAQ</option>
                                      <option value="105">IRELAND</option>
                                      <option value="106">ISRAEL</option>
                                      <option value="107">ITALY</option>
                                      <option value="108">JAMAICA</option>
                                      <option value="109">JAPAN</option>
                                      <option value="110">JERSEY</option>
                                      <option value="111">JORDAN (Hashemite Kingdom of Jordan)</option>
                                      <option value="112">KAZAKHSTAN</option>
                                      <option value="113">KENYA</option>
                                      <option value="114">KIRIBATI</option>
                                      <option value="115">KOREA (Democratic Peoples Republic of [North] Korea)</option>
                                      <option value="116">KOREA (Republic of [South] Korea)</option>
                                      <option value="117">KUWAIT</option>
                                      <option value="118">KYRGYZSTAN</option>
                                      <option value="119">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
                                      <option value="120">LATVIA</option>
                                      <option value="121">LEBANON</option>
                                      <option value="122">LESOTHO</option>
                                      <option value="123">LIBERIA</option>
                                      <option value="124">LIBYA (Libyan Arab Jamahirya)</option>
                                      <option value="125">LIECHTENSTEIN (Fürstentum Liechtenstein)</option>
                                      <option value="126">LITHUANIA</option>
                                      <option value="127">LUXEMBOURG</option>
                                      <option value="128">MACAO (Special Administrative Region of China)</option>
                                      <option value="129">MACEDONIA (Former Yugoslav Republic of Macedonia)</option>
                                      <option value="130">MADAGASCAR</option>
                                      <option value="131">MALAWI</option>
                                      <option value="132">MALAYSIA</option>
                                      <option value="133">MALDIVES</option>
                                      <option value="134">MALI</option>
                                      <option value="135">MALTA</option>
                                      <option value="136">MARSHALL ISLANDS</option>
                                      <option value="137">MARTINIQUE</option>
                                      <option value="138">MAURITANIA</option>
                                      <option value="139">MAURITIUS</option>
                                      <option value="140">MAYOTTE</option>
                                      <option value="141">MEXICO</option>
                                      <option value="142">MICRONESIA (Federated States of Micronesia)</option>
                                      <option value="143">MOLDOVA</option>
                                      <option value="144">MONACO</option>
                                      <option value="145">MONGOLIA</option>
                                      <option value="146">MONTSERRAT</option>
                                      <option value="147">MOROCCO</option>
                                      <option value="148">MOZAMBIQUE (Moçambique)</option>
                                      <option value="149">MYANMAR (formerly Burma)</option>
                                      <option value="150">NAMIBIA</option>
                                      <option value="151">NAURU</option>
                                      <option value="152">NEPAL</option>
                                      <option value="153">NETHERLANDS</option>
                                      <option value="154">NETHERLANDS ANTILLES</option>
                                      <option value="155">NEW CALEDONIA</option>
                                      <option value="156">NEW ZEALAND</option>
                                      <option value="157">NICARAGUA</option>
                                      <option value="158">NIGER</option>
                                      <option value="159">NIGERIA</option>
                                      <option value="160">NIUE</option>
                                      <option value="161">NORFOLK ISLAND</option>
                                      <option value="162">NORTHERN MARIANA ISLANDS</option>
                                      <option value="163">NORWAY</option>
                                      <option value="164">OMAN</option>
                                      <option value="165">PAKISTAN</option>
                                      <option value="166">PALAU</option>
                                      <option value="167">PALESTINIAN TERRITORIES</option>
                                      <option value="168">PANAMA</option>
                                      <option value="169">PAPUA NEW GUINEA</option>
                                      <option value="170">PARAGUAY</option>
                                      <option value="171">PERU</option>
                                      <option value="172">PHILIPPINES</option>
                                      <option value="173">PITCAIRN</option>
                                      <option value="174">POLAND</option>
                                      <option value="175">PORTUGAL</option>
                                      <option value="176">PUERTO RICO</option>
                                      <option value="177">QATAR</option>
                                      <option value="178">RÉUNION</option>
                                      <option value="179">ROMANIA</option>
                                      <option value="180">RUSSIAN FEDERATION</option>
                                      <option value="181">RWANDA</option>
                                      <option value="182">SAINT HELENA</option>
                                      <option value="183">SAINT KITTS AND NEVIS</option>
                                      <option value="184">SAINT LUCIA</option>
                                      <option value="185">SAINT PIERRE AND MIQUELON</option>
                                      <option value="186">SAINT VINCENT AND THE GRENADINES</option>
                                      <option value="187">SAMOA (formerly Western Samoa)</option>
                                      <option value="188">SAN MARINO (Republic of)</option>
                                      <option value="189">SAO TOME AND PRINCIPE</option>
                                      <option value="190">SAUDI ARABIA (Kingdom of Saudi Arabia)</option>
                                      <option value="191">SENEGAL</option>
                                      <option value="192">SERBIA AND MONTENEGRO</option>
                                      <option value="193">SEYCHELLES</option>
                                      <option value="194">SIERRA LEONE</option>
                                      <option value="195">SINGAPORE</option>
                                      <option value="196">SLOVAKIA (Slovak Republic)</option>
                                      <option value="197">SLOVENIA</option>
                                      <option value="198">SOLOMON ISLANDS</option>
                                      <option value="199">SOMALIA</option>
                                      <option value="200">SOUTH AFRICA (Zuid Afrika)</option>
                                      <option value="202">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
                                      <option value="203">SPAIN (España)</option>
                                      <option value="204">SRI LANKA</option>
                                      <option value="205">SUDAN</option>
                                      <option value="206">SURINAME</option>
                                      <option value="207">SVALBARD AND JAN MAYEN</option>
                                      <option value="208">SWAZILAND</option>
                                      <option value="209">SWEDEN</option>
                                      <option value="210">SWITZERLAND (Confederation of Helvetia)</option>
                                      <option value="211">SYRIAN ARAB REPUBLIC</option>
                                      <option value="212">TAIWAN (Chinese Taipei for IOC)</option>
                                      <option value="213">TAJIKISTAN</option>
                                      <option value="214">TANZANIA</option>
                                      <option value="215">THAILAND</option>
                                      <option value="216">TIMOR-LESTE (formerly East Timor)</option>
                                      <option value="217">TOGO</option>
                                      <option value="218">TOKELAU</option>
                                      <option value="219">TONGA</option>
                                      <option value="220">TRINIDAD AND TOBAGO</option>
                                      <option value="221">TUNISIA</option>
                                      <option value="222">TURKMENISTAN</option>
                                      <option value="223">TURKS AND CAICOS ISLANDS</option>
                                      <option value="224">TUVALU</option>
                                      <option value="225">UGANDA</option>
                                      <option value="226">UKRAINE</option>
                                      <option value="227">UNITED ARAB EMIRATES</option>
                                      <option value="228">UNITED KINGDOM (Great Britain)</option>
                                      <option value="229">UNITED STATES</option>
                                      <option value="230">UNITED STATES MINOR OUTLYING ISLANDS</option>
                                      <option value="231">URUGUAY</option>
                                      <option value="232">UZBEKISTAN</option>
                                      <option value="233">VANUATU</option>
                                      <option value="234">VATICAN CITY (Holy See)</option>
                                      <option value="235">VENEZUELA</option>
                                      <option value="236">VIET NAM</option>
                                      <option value="237">VIRGIN ISLANDS( BRITISH)</option>
                                      <option value="238">VIRGIN ISLANDS( U.S.)</option>
                                      <option value="239">WALLIS AND FUTUNA</option>
                                      <option value="240">WESTERN SAHARA (formerly Spanish Sahara)</option>
                                      <option value="241">YEMEN</option>
                                      <option value="242">ZAMBIA</option>
                                      <option value="243">ZIMBABWE</option>
                                      <option value="244">KOSOVA CUMHURİYETİ</option>
                                      <option value="246">FİLİSTİN</option>
                                      <option value="249">EUROPEAN UNION</option>
                                      <option value="250">ULKE KODU GIRILMEMIS</option>


                                    </select>

                                  </td>
                                  <td>
                                    <input class="form-control" style="width:142px;" v-model="Guest.Phone" type="number"
                                      placeholder="Telefon">
                                  </td>
                                  <td>

                                    <select v-model="Guest.Sex" class="form-select form-control-primary-fill"
                                      name="select">

                                      <option value="Kadın">Kadın</option>
                                      <option value="Erkek">Erkek</option>
                                      <option value="Bilinmiyor">Bilinmiyor</option>
                                    </select>
                                  </td>

                                  <td>
                                    <button class="btn btn-primary" @click.prevent="addRow">Ekle</button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>


                    </form>
                  </div>

                </div>
                <div style="float: right;">
                  <button class="btn btn-success" type="submit" id="saveButton"
                    @click.prevent="saveButton()">Kaydet</button>
                  <button class="btn btn-danger ms-2 close" type="button" data-bs-dismiss="modal">İptal </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- EDİT MODAL  -->
      <div class="modal fade modal-bookmark" id="edit_reservation" tabindex="-1" role="dialog"
        aria-labelledby="edit_reservationLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="edit_reservationLabel">Rezervasyon Düzenle Departman</h5>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
            </div>
            <div class="modal-body">
              <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="" @submit.prevent="editButton">
                <div class="row">
                  <div class="col-xl-12">
                    <form class="card">


                      <div class="row">
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Giriş Tarihi</label>
                            <input class="form-control digits" type="date" v-model="editReservation.EntireDate">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Giriş Saati</label>
                            <input class="form-control digits" type="time" v-model="editReservation.EntireTime">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Oda Grubu</label>
                            <multiselect v-model="editReservation.RoomGroup"
                              :options="$store.getters.GetRoomGroups.map(t => { return { 'name': t.Title, 'id': t.id } })"
                              id="roomGroup" :searchable="false" :group-select="true" :close-on-select="false"
                              track-by="name" label="name" placeholder="Oda numarasını seçiniz.."></multiselect>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Şube</label>
                            <multiselect v-model="editReservation.Branch"
                              :options="$store.getters.GetBranchInfo.map(t => { return { 'name': t.BranchName, 'id': t.id } })"
                              :searchable="false" :group-select="true" :close-on-select="false" track-by="name"
                              @change="getRoomData" label="name" placeholder="Oda tipini seçiniz.."></multiselect>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Çıkış Tarihi</label>
                            <input class="form-control digits" v-model="editReservation.ExitDate" type="date">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Çıkış Saati</label>
                            <input class="form-control digits" type="time" v-model="editReservation.ExitTime">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Oda No</label>
                            <multiselect v-model="editReservation.RoomInfo"
                              :options="$store.getters.GetRoomInfo.map(t => { return { 'name': t.Title, 'id': t.id } })"
                              id="roomGroup" :searchable="false" :group-select="true" :close-on-select="false"
                              track-by="name" label="name" placeholder="Oda numarasını seçiniz.."></multiselect>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Acente/Firma</label>
                            <multiselect v-model="editReservation.Agent"
                              :options="$store.getters.GetAgents.map(t => { return { 'name': t.AgentTitle, 'id': t.id } })"
                              :searchable="false" :group-select="true" :close-on-select="false" track-by="name"
                              label="name" placeholder="Acente Firma Bilgisi"></multiselect>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Konaklama türü</label>
                            <multiselect v-model="editReservation.BedType" :options="optionsBedType" :searchable="false"
                              :group-select="true" :close-on-select="false" track-by="name" label="name"
                              placeholder="Pick a value"></multiselect>

                          </div>
                        </div>
                        <div class="mb-3 col-md-3">
                          <div class="media">
                            <label class="col-form-label m-r-10">Check In</label>
                            <div class="mb-3">
                              <div class="media-body text-end icon-state switch-outline">
                                <label class="switch">
                                  <input type="checkbox" checked v-model="editReservation.CheckIn"><span
                                    class="switch-state bg-success"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3 col-md-3">
                          <div class="media">
                            <label class="col-form-label m-r-10">E-posta gönderilsin mi?</label>
                            <div class="mb-3">
                              <div class="media-body text-end icon-state switch-outline">
                                <label class="switch">
                                  <input type="checkbox" v-model="editReservation.emailCheck"><span
                                    class="switch-state bg-success"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-md-3" v-if="editReservation.emailCheck">
                          <div class="mb-3">
                            <label class="form-label">E-posta</label>
                            <input v-model="editReservation.Email" class="form-control" type="text"
                              placeholder="E-posta giriniz">
                          </div>
                        </div>


                        <div class="row">

                          <div class="table-responsive signal-table">

                            <table class="table table-hover">
                              <thead>
                                <tr>

                                  <th scope="col">T.C. No / Pas. No</th>
                                  <th scope="col">Ad Soyad</th>
                                  <th scope="col">Doğum Tarihi</th>
                                  <th scope="col">Ülke</th>
                                  <th scope="col">Telefon</th>
                                  <th scope="col">Cinsiyet</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(rowT, index) in editReservation.Guest" :key="index">

                                  <td>{{ rowT.IdentityNumber }} </td>
                                  <td>{{ rowT.Name }}</td>
                                  <td>{{ rowT.BirthDate }} </td>
                                  <td>{{ rowT.Country }}</td>
                                  <td>{{ rowT.Phone }} </td>
                                  <td>{{ rowT.Sex }} </td>

                                  <td>
                                    <button class="btn btn-danger btn-"
                                      @click.prevent="deleteRowGuest(index)">Sil</button>
                                  </td>
                                </tr>
                                <tr>

                                  <td>
                                    <input class="form-control" v-model="Guest.IdentityNumber" style="width:100px;"
                                      type="text" placeholder="T.C. No / Pas. No">
                                  </td>
                                  <td>
                                    <input class="form-control" v-model="Guest.FirstName" style="width:100px;" type="text"
                                      placeholder="Ad">
                                  </td>
                                  <td>
                                    <input class="form-control" v-model="Guest.LastName" style="width:100px;" type="text"
                                      placeholder="Soyad">
                                  </td>
                                  <td>
                                    <input placeholder="Doğum Tarihi" class="form-control digits" style="10opx;"
                                      v-model="Guest.BirthDate" type="date">

                                  </td>
                                  <td>
                                    <select v-model="Guest.Country" class="form-select form-control-primary-fill"
                                      name="select">
                                      <option value="Türkiye">Türkiye</option>
                                      <option value="K.K.T.C.">K.K.T.C.</option>
                                    </select>

                                  </td>
                                  <td>
                                    <input class="form-control" style="width:142px;" v-model="Guest.Phone" type="number"
                                      placeholder="Telefon">
                                  </td>
                                  <td>

                                    <select v-model="Guest.Sex" class="form-select form-control-primary-fill"
                                      name="select">

                                      <option value="Kadın">Kadın</option>
                                      <option value="Erkek">Erkek</option>
                                    </select>
                                  </td>

                                  <td>
                                    <button class="btn btn-primary" @click.prevent="addRow">Ekle</button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>


                    </form>
                  </div>

                </div>
                <div style="float: right;">
                  <button class="btn btn-success" type="submit" id="editButton">Kaydet</button>
                  <button class="btn btn-danger ms-2 close" type="button" data-bs-dismiss="modal">İptal </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
      <!-- DELETE MODAL -->
      <div class="modal fade modal-bookmark" id="delete_reservation" tabindex="-1" role="dialog"
        aria-labelledby="delete_reservationLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title  txt-danger" id="delete_reservationLabel">Silmek istediğinizden emin misiniz?</h5>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
            </div>
            <div class="modal-body">
              <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                <h5>Seçmiş olduğunuz veri kalıcı olarak silinecek. İşlemi onaylıyor musunuz?</h5>
                <p></p>
                <div style="float: right;">
                  <button class="btn btn-success" type="submit" id="saveButton"
                    @click.prevent="deleteButton()">Sil</button>
                  <button class="btn btn-danger ms-2 close" type="button" data-bs-dismiss="modal">İptal </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">

        <div class="container-fluid">
          <div class="row">

            <div class="card">
              <div class="row">
                <div class="card-header col-md-10 ">
                  <h3>Rezervasyon Bilgileri</h3>
                </div>
                <div class="card-header col-md-2">
                  <button class="btn btn-primary btn-md" type="button" data-bs-toggle="modal"
                    data-bs-target="#add_reservation" style="float: right;">
                    Yeni Ekle
                  </button>

                </div>
                <div style="text-align: right;">
                  <div class="btn-group">

                    <button class="btn btn-sm btn-success"><i class="fa fa-file-excel-o"></i> EXCEL</button>
                    <button class="btn btn-sm btn-secondary"><i class="fa fa-file-pdf-o"></i> PDF</button>
                    <button class="btn btn-sm btn-info"><i class="fa fa-print"></i> YAZDIR</button>
                  </div>
                </div>
              </div>
              <div class="table-responsive">

                <table class="table">
                  <thead>

                    <tr class="border-bottom-primary">
                      <th scope="col">No</th>
                      <th scope="col">Şube</th>

                      <th scope="col">Check In</th>
                      <th scope="col">Misafirler</th>
                      <th scope="col">Oda</th>
                      <th scope="col">Giriş T.</th>
                      <th scope="col">Giriş S.</th>
                      <th scope="col">Çıkış T.</th>
                      <th scope="col">Çıkış S.</th>
                      <th scope="col">Gece</th>
                      <th scope="col">Acente</th>
                      <th scope="col">KBS Durumu</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in GetReservations" :key="item.id" class="border-bottom-primary">

                      <td style="width:20px">{{ index + 1 }}</td>
                      <td>{{ item.Branch.name }}</td>

                      <td v-if="item.CheckIn" style="background-color: limegreen;">{{ (item.CheckIn) ? 'Yapıldı' :
                        'Yapılmadı'
                      }}</td>
                      <td v-else style="background-color:crimson;">{{ (item.CheckIn) ? 'Yapıldı' : 'Yapılmadı' }}</td>
                      <td>
                        <div v-for="item in item.Guest" :key="item.id">{{ item.FirstName }} {{ item.LastName }}</div>
                      </td>
                      <td>{{ item.RoomInfo.name }}</td>
                      <td>{{ dateFormat(item.EntireDate.toDate()) }}</td>
                      <td>{{ item.EntireTime }}</td>
                      <td>{{ dateFormat(item.ExitDate.toDate()) }}</td>
                      <td>{{ item.ExitTime }}</td>
                      <td>{{ item.NightDay }}</td>
                      <td>{{ (item.Agent.name) ? item.Agent.name : 'Acenta Yok' }}</td>
                      <td v-if="item.EgmStatus" style="background-color: limegreen;">{{ (item.EgmStatus) ? 'Gönderildi'
                        : 'Gönderilmedi' }}</td>
                      <td v-else style="background-color:crimson;">{{ (item.EgmStatus) ? 'Gönderildi' : 'Gönderilmedi' }}
                      </td>
                      <td style="width:30px">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                            <vue-feather type="settings"></vue-feather>
                            <!-- <i class="icofont icofont-settings" style="color:orangered" ></i> -->
                          </a>
                          <div class="dropdown-menu dropdown-menu-right  ">
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_reservation"
                              @click="editSendData(item)" style="font-weight: bold; color:rgb(50, 102, 245 )"><i
                                class="fa fa-pencil m-r-5"></i>Düzenle</a>
                            <a class="dropdown-item" type="button" @click="checkOutButton(item)"
                              style="font-weight: bold; color:rgb(255, 170, 0)"><i class="fa fa-sign-out m-r-5"></i>Check
                              Out</a>

                            <a class="dropdown-item" type="button" @click="deleteButton(item)"
                              style="font-weight: bold; color:rgb(255, 0, 0)"><i class="fa fa-trash m-r-5"></i>Sil</a>



                          </div>
                        </div>



                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>



          </div>
        </div>



      </div>
    </div>



  </div>
</template>
<script>
import $ from 'jquery'
import { mapState } from 'vuex';
import { mapActions, mapGetters } from "vuex";
import getImage from "@/mixins/getImage";
import moment from "moment";
import { collection } from 'firebase/firestore';
import Datepicker from "vue3-datepicker";
import Datepicker1 from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
const currentDate = new Date();
export default {
  components: {
    Datepicker,
    Datepicker1,
  },
  data() {
    return {
      checkOutKbsObj: {},
      tableValue: {},
      roomContent: [],
      roomGroupData: [],
      optionsBedType: [
        { code: 1, name: 'Sadece Oda' },
        { code: 2, name: "Oda + Kahvaltı" },
        { code: 3, name: "Yarım Pansiyon" },
        { code: 4, name: "Tam Pansiyon" },

      ],
      rowsTable: [],
      rowsTableObj: {},
      rowsEditTable: [],
      Guest: {
        IdentityNumber: "",
        Name: "",
        BirthDate: "",
        Country: "",
        Phone: "",
        Sex: "",
        userID: "",
        CreatedOn: currentDate,
        ModifiedOn: currentDate,
        isActive: true,
        Email: ""
      },

      editReservation: {},
      reservationObj: {
        EntireDate: "",
        EntireTime: "",
        ExitDate: "",
        ExitTime: "",
        RoomGroup: "",
        RoomInfo: "",
        Branch: "",
        Agent: "",
        DocID: "",
        BedType: "",
        CheckIn: true,
        EgmStatus: false,
        Email: "",
        NightDay: "",
        userID: "",
        CreatedOn: currentDate,
        ModifiedOn: currentDate,

      },
      kbsObj: {
      },
      userID: JSON.parse(localStorage.getItem("storedData")).userUid,
    }
  },
  created() {
    // this.getTodayDate();
  },
  computed: {
    ...mapGetters(["GetReservations", "GetBranchInfo", "GetRoomInfo"]),

    ...mapState({
      bootstraplist: state => state.bootsrap.bootstrap,
      inverselist: state => state.bootsrap.inverse
    })
  },


  methods: {
    ...mapActions(["AddDataRes", "AddDataID", "EditData", "DeleteData", "myQuery"]),
    getRoomGroupData(e) {
      var res = {};
      var data = JSON.parse(JSON.stringify(this.roomContent))
      data.forEach(element => {
        if (element.Title == e.name) {

          res = { name: element.RoomGroup.name, id: element.RoomGroup.id }
          this.roomGroupData = [{ name: res.name, id: res.id }];
        }

      });
      console.log(res)
      return res;
    },


    getRoomData(e) {
      console.log(e)
    },
    addRow() {
      this.rowsTable.push({ ...this.Guest });
      this.Guest = {}
    },
    deleteRow(index) {
      this.rowsTable.splice(index, 1);
    },
    deleteRowGuest(index) {
      this.editReservation.Guest.splice(index, 1);
    },
    async saveButton() {
     
      this.reservationObj.Branch = this.tableValue

      this.reservationObj.NightDay = (this.reservationObj.ExitDate - this.reservationObj.EntireDate) / (1000 * 60 * 60 * 24) + 1;
      this.rowsTableObj = this.rowsTable.map(item => ({
        IdentityNumber: item.IdentityNumber,
        FirstName: item.FirstName,
        LastName: item.LastName,
        BirthDate: item.BirthDate,
        Country: item.Country,
        Phone: item.Phone,
        Sex: item.Sex,
        isActive: item.isActive,
        Email: item.Email

      }))
       
      for (let i = 0; i < this.rowsTableObj.length; i++) {
        this.rowsTableObj[i].userID = this.userID
        this.rowsTableObj[i].isActive = true
        this.rowsTableObj[i].Email = this.reservationObj.Email
        //  this.AddData({ db: "Guests", dataSet: this.rowsTableObj[i] })

      

        if (this.rowsTableObj[i].IdentityNumber.length > 10) {
          this.kbsObj.IdentityNumber = this.rowsTableObj[i].IdentityNumber;
          this.kbsObj.RoomNumber = this.reservationObj.RoomInfo.name;
          this.kbsObj.isSend = false;
          this.kbsObj.DocID = "";

          if (this.reservationObj.Branch.name == "Çinili Otel-1") {
            this.kbsObj.OtelId = 1;
          }
          else if (this.reservationObj.Branch.name == "Çinili Otel-2") {
            this.kbsObj.OtelId = 2;
          }
          else {
            this.kbsObj.OtelId.OtelId = 3;
          }


          var refDocData = await this.AddDataID({ db: "ReservationsKBS", dataSet: this.kbsObj })
        }

        else if (this.rowsTableObj[i].IdentityNumber.length <= 10) {
          this.kbsObj.DocID=="";          
          this.kbsObj.PassNumber = this.rowsTableObj[i].IdentityNumber;
          this.kbsObj.RoomNumber = this.reservationObj.RoomInfo.name;
          this.kbsObj.isSend = false;
          this.kbsObj.BirthDate = this.rowsTableObj[i].BirthDate;
          this.kbsObj.Country = this.rowsTableObj[i].Country;
          this.kbsObj.FirstName = this.rowsTableObj[i].FirstName;
          this.kbsObj.LastName = this.rowsTableObj[i].LastName;
          this.kbsObj.Sex = this.rowsTableObj[i].Sex;
           
         var refDocData = await this.AddDataID({ db: "ReservationsKBS", dataSet: this.kbsObj })
         
    
         
        
          
        }
      
      }

      this.reservationObj.Guest = [...this.rowsTable];

      this.reservationObj.userID = this.userID
      this.reservationObj.ModifiedUserName = this.userID
      this.reservationObj.DocID = refDocData;
      console.log("ID", this.reservationObj.DocID)

      this.AddDataRes({ db: "Reservations", documentID: this.reservationObj.DocID, dataSet: this.reservationObj }).then(p => {
        $(".btn-close").click();
        this.myQuery({ tableName: "Reservations", updateOpt: "SetReservations", })

        this.reservationObj = {}
        this.rowsTable = {}
      })
    },
    editSendData(value) {
      this.editReservation = value;


    },
    editButton(e) {
      const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
      this.editReservation.ModifiedOn = currentDate,

        this.editReservation.ModifiedUserName = uid

      this.EditData({ db: "Reservations", data: this.editReservation, id: this.editReservation.id }).then(t => {
        $(".btn-close").click();
        this.reservationObj = {}

        this.myQuery({ tableName: "Reservations", updateOpt: "SetReservations" })

      })

    },

    getEmployee(t) {

      try {
        var data = this.$store.getters.GetUsers.find((a) => a.UserID == t);
        console.log(data)
        return data.FirstName + " " + data.LastName;
      } catch (error) {
        return t;
      }
    },
    dateFormat(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
      }
    },

    deleteButton(delData) {
      this.$swal({
        icon: 'warning',
        title: "Silmek istediğinize emin misiniz?",
        text: 'Silmek istediğiniz bilgiler kalıcı olarak silinecektir..!',
        showCancelButton: true,
        confirmButtonText: 'Sil',
        confirmButtonColor: '#e64942',
        cancelButtonText: 'İptal',
        cancelButtonColor: '#427eff',
      }).then((result) => {
        if (result.value) {
          this.DeleteData({ db: "Reservations", mt: "DeleteDataSet", data: delData }).then(p => {

            const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
            this.myQuery({ tableName: "Reservations", updateOpt: "SetReservations" })

          })

          this.$swal({
            icon: 'success',
            text: 'Silme işlemi başarılı!',
            type: 'success',
            confirmButtonText: 'Tamam',
          });
        } else {
          this.$swal({
            text: 'Silme işlemi iptal edildi!',
            confirmButtonText: 'Tamam',
          });
        }
      });
    },
    async checkOutButton(e) {

      this.$swal({
        icon: 'warning',
        title: "Check Out işlemi yapmak istediğinizden emin misiniz?",
        text: 'Check Out işlemi geri alınamaz çıkış işlemi otomatik KBS ye gönderilecektir..!',
        showCancelButton: true,
        confirmButtonText: 'Onayla',
        confirmButtonColor: '#e64942',
        cancelButtonText: 'İptal',
        cancelButtonColor: '#427eff',
      }).then(async (result) => {
        if (result.value) {
          var checkoutIdentity = e.Guest[0].IdentityNumber;


          // for (let i = 0; i < this.rowsTableObj.length; i++) 
          // { 
          // if(checkoutIdentity.length > 10)
          // {
          this.checkOutKbsObj.IdentityNumber = checkoutIdentity;

          this.checkOutKbsObj.isSend = false;
          this.checkOutKbsObj.DocID = e.DocID;
          if (e.Branch.name == "Çinili Otel-1") {
            this.checkOutKbsObj.OtelId = 1;
          }
          else if (e.Branch.name == "Çinili Otel-2") {
            this.checkOutKbsObj.OtelId = 2;
          }
          else {
            this.checkOutKbsObj.OtelId = 3;
          }

          await this.AddDataRes({ db: "ReservationsCheckOut", documentID: e.DocID, dataSet: this.checkOutKbsObj });
          this.DeleteData({ db: "Reservations", mt: "DeleteDataSet", data: e }).then(a => {
            this.myQuery({ tableName: "Reservations", updateOpt: "SetReservations" })
          })
          // }

          // else if(this.rowsTableObj[i].IdentityNumber.length <= 10){
          //           this.kbsObj.DocID="";
          //           this.kbsObj.PassNumber=this.rowsTableObj[i].IdentityNumber;

          //           this.kbsObj.isSend=false;

          //          await this.AddDataID({ db: "ReservationsCheckOut", dataSet: this.kbsObj })


          // }
          // }



          this.$swal({
            icon: 'success',
            text: 'Check Out işlemi başarılı!',
            type: 'success',
            confirmButtonText: 'Tamam',
          });
        } else {
          this.$swal({
            text: 'Check Out işlemi iptal edildi!',
            confirmButtonText: 'Tamam',
          });
        }
      });





    }
  },
  mounted() {
    this.reservationObj.EntireDate = currentDate;
    this.reservationObj.ExitDate = currentDate;
    this.reservationObj.EntireTime = "14:00";
    this.reservationObj.ExitTime = "11:00"
  },
  watch: {
    async tableValue(e) {


      if (e.name === "Çinili Otel-1") {
        var data = await Promise.all(this.$store.getters.GetRoomInfo.filter(element => element.Branch.name === "Çinili Otel-1").map(async element => {

          return element;
        })
        );
        this.roomContent = JSON.parse(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)))
      }
      else if (e.name === "Çinili Otel-2") {
        var data = await Promise.all(this.$store.getters.GetRoomInfo.filter(element => element.Branch.name === "Çinili Otel-2").map(async element => {

          return element;
        })
        );
        this.roomContent = JSON.parse(JSON.stringify(data));

      }
      else {
        var data = await Promise.all(this.$store.getters.GetRoomInfo.filter(element => element.Branch.name === "Çinili PLUS").map(async element => {

          return element;
        })
        );
        this.roomContent = JSON.parse(JSON.stringify(data));
      }

    },
    editReservation(value) {

      this.rowsEditTable = this.reservationObj.Guest
      this.reservationObj = value
    }
  },
  setup() {
    const date3 = ref();

    return {
      date3,
    }
  },
}









</script>
 
 