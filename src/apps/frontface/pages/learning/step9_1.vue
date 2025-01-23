<template>
    <main>
      <UContainer>
        <div class="form-container">
          <div class="form-header">
            {{ headerText }}
          </div>
          <div v-for="entry in entries" :key="entry.id" class="entry">
            <div class="entry-header">
              <span>{{ entry.code }}</span>
              <span>ชื่อ {{ entry.name }}</span>
              <span>อายุ {{ entry.age }} ปี</span>
            </div>
            <div class="entry-content">
              <p>ติดต่อทาง: {{ entry.contact }}</p>
              <p>ที่อยู่: {{ entry.address }}</p>
              <p>วันที่เริ่ม: {{ entry.startDate }}</p>
              <p>คำธรรมะที่ชอบ: {{ entry.favoriteDhamma }}</p>
              <p>เลขหมายติดตัว: {{ entry.referenceNumber }}</p>
            </div>
          </div>
          <div class="footer">
            {{ footerText }}
          </div>
        </div>
      </UContainer>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headerText: "ใบมีประวัติเก่า สำหรับผู้เคยปฏิบัติธรรมกับดอกไม้บ้าน",
        footerText: "ใบมีประวัติเก่า สำหรับผู้เคยปฏิบัติธรรมกับดอกไม้บ้าน",
        entries: [
          {
            id: 1,
            code: "GO1",
            name: "กิตติ กันตพิสิษฐ์ เกิดศิริธรรม",
            age: 62,
            contact: "โทรศัพท์สำนักงานสตรีคริสเตียนแห่งประเทศไทย สาขาตากลวง YWCA",
            address: "หมู่บ้านคาซ่าวิลล์ ซ.7 เขตบางพลี จ.สมุทรปราการ 10540",
            startDate: "12/06/2555",
            favoriteDhamma: "ทำให้จิตเข้าถึงธรรม",
            referenceNumber: "3 1012 1063 42"
          },
          {
            id: 2,
            code: "GO1",
            name: "พญ. กาญจนา เกิดศิริธรรม",
            age: 76,
            contact: "สภาสังคมสงเคราะห์แห่งประเทศไทย",
            address: "หมู่บ้านศรีประชา เขตบางพลี จ.สมุทรปราการ 10140",
            startDate: "29/01/2547",
            favoriteDhamma: "ไม่ใช่เห็นใจตน",
            referenceNumber: "3 1050 9906 62"
          },
          {
            id: 3,
            code: "GO1",
            name: "กิตติ กันตพิสิษฐ์ เกิดศิริธรรม",
            age: 62,
            contact: "โทรศัพท์สำนักงานสตรีคริสเตียนแห่งประเทศไทย สาขาตากลวง YWCA",
            address: "หมู่บ้านคาซ่าวิลล์ ซ.7 เขตบางพลี จ.สมุทรปราการ 10540",
            startDate: "12/06/2555",
            favoriteDhamma: "ทำให้จิตเข้าถึงธรรม",
            referenceNumber: "3 1012 1063 42"
          },
          {
            id: 4,
            code: "GO1",
            name: "กิตติ กันตพิสิษฐ์ เกิดศิริธรรม",
            age: 62,
            contact: "โทรศัพท์สำนักงานสตรีคริสเตียนแห่งประเทศไทย สาขาตากลวง YWCA",
            address: "หมู่บ้านคาซ่าวิลล์ ซ.7 เขตบางพลี จ.สมุทรปราการ 10540",
            startDate: "12/06/2555",
            favoriteDhamma: "ทำให้จิตเข้าถึงธรรม",
            referenceNumber: "3 1012 1063 42"
          },
          
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  body {
    font-family: 'TH SarabunPSK', sans-serif;
    line-height: 1.6;
    margin: 20px;
  }
  .form-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #000;
    padding: 20px;
    background-color: aliceblue;
    page-break-inside: avoid; /* ป้องกันการแบ่งหน้าในขณะที่พิมพ์ */
  }
  .form-header {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .entry {
    border: 1px solid #000;
    margin-bottom: 20px;
    padding: 10px;
    page-break-inside: avoid; /* ป้องกันการแบ่งหน้าในขณะที่พิมพ์ */
  }
  .entry-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .entry-content {
    margin-top: 10px;
  }
  .entry-content p {
    margin: 5px 0;
  }
  .footer {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #555;
  }
  @media print {
    body {
      margin: 0;
    }
    .form-container {
      width: 210mm;
      height: 297mm;
      /* ปรับขนาดตามที่ต้องการ */
      margin: 0;
      padding: 20mm;
      box-sizing: border-box;
    }
    .entry, .form-header, .footer {
      page-break-inside: avoid; /* ป้องกันการแบ่งหน้าในขณะที่พิมพ์ */
    }
  }
  </style>
  