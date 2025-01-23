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
              <span>ชื่อเล่น {{ entry.nickname }}</span>
              <span>เพศ {{ entry.sex }}</span>
              <span>อายุ {{ entry.age }} ปี</span>                        
              <span>วันเกิด {{ entry.birthday }}</span>

            </div>
            <div class="entry-content">
              <p>สถานภาพ: {{ entry.status }}</p>
              <p>การศึกษา: {{ entry.study }}</p>
              <p>อาชีพ: {{ entry.occupation }}</p>
              <p>วันที่สำรวจ: {{ entry.date }}</p>
              <p>โทร: {{ entry.contact }}</p>
              <p>เข้าวัดครั้งแรก: {{ entry.startDate }}</p>
              <p>ที่อยู่: {{ entry.address }}</p>
              <p>กัลยาณมิตรคนแรก: {{ entry.firstoneman }}</p>
              <p>มีความสัมพันธ์เป็น: {{ entry.relationship }}</p>
              <p>เป้าหมายในชีวิต: {{ entry.Goalsinlife }}</p>
              <p>คำธรรมะที่ชอบ: {{ entry.favoriteDhamma }}</p>
              <p>เลขหมายบัตรประชาชน: {{ entry.referenceNumber }}</p>
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
            name: "กัลฯ กันยรัตน์ เพ่งพินิจธรรม",
            nickname: "หย่ง",
            age: 60,
            sex: "ญ",
            birthday: "04/08/2505",
            status: "โสด",
            study: "จบการศึกษาระดับ อนุปริญญา สาขาการตลาด YWCA. 9610207 ภาค นครหลวง 6",
            date: "12/06/2555",
            firstoneman: "สุวิมล เลขวณิชกุล",
            relationship: "เพื่อน",
            contact: "02-286-1831 Moblie 089-928-1784",
            address: "161/216 หมู่บ้านสวนเก้าแสน ซ.7 ต.บางปลา อ.บางพลี จ.สมุทรปราการ 10540",
            startDate: "12/06/2555",
            Goalsinlife: "เข้าถึงพระธรรมมกาย",
            favoriteDhamma: "ต่างคนต่างคิดไม่จำเป็นต้องเหมือนกัน",
            referenceNumber: "3 1012 01063 42 0"
          },
          {
            id: 2,
            code: "GO1",
            name: "กัลฯ พ.ญ. กาญจนา ชัยกิตติศิลป์",
            nickname: "",
            age: 76,
            sex: "ญ",
            birthday: "05/02/2490",
            status: "สมรส",
            occupation: "แผนกสูติ นรีเวช โรงพยาบาลกรุงเทพ",
            study: "จบการศึกษาระดับ ปริญญาตรี สาขาแพทยศาสตร์ศิริราช ม.มหิดล 1219 ภาค นครหลวง 1",
            date: "2530",
            firstoneman: "พรรณี มั่งคั่ง",
            relationship: "เพื่อน",
            contact: "Moblie 061-235-6445 Off.3103000",
            address: "166/5 ซ.49 ถ.สุขุมวิท ต.คลองตัน อ.คลองเตย จ.กทม. 10110",
            startDate: "2530",
            Goalsinlife: "เข้าถึงพระธรรมมกาย",
            favoriteDhamma: "ทำวันนี้ให้ดีที่สุดี",
            referenceNumber: "5 1009 99060 62 7"
            
          },
          {
            id: 1,
            code: "GO1",
            name: "กัลฯ ธเนศ จินตโกศลวิทย์",
            nickname: "วิทย์",
            age: 65,
            sex: "ช",
            birthday: "06/09/2500",
            status: "สมรส",
            occupation: "ธุรกิจส่วนตัว",
            study: "จบการศึกษาระดับ ปริญญาตรี สาขาบริหารธุรกิจ ม.รามคำแหง 1902057 ภาค นครหลวง 7 ",
            date: "2538",
            firstoneman: "นริศา จินตโกศลวิทย์",
            relationship: "ภรรยา",
            contact: "Moblie 087-672-9538",
            address: "300/4 ถ.รัชดาภิเษก ต.ห้วยขวาง อ.ห้วยขวาง จ.กทม. 10310",
            startDate: "2538",
            Goalsinlife: "ไปถึงที่สุดแห่งธรรม",
            favoriteDhamma: "ทำกรรมไว้ย่อมได้รับกรรมนั้น",
            referenceNumber: "3 1022 01658 21 1"
            
          },
          {
            id: 1,
            code: "GO1",
            name: "กัลฯ นพเก้า หลิ่วสุวรรณ",
            nickname: "แตน",
            age: 57,
            sex: "ญ",
            birthday: "08/10/2508",
            status: "สมรส",
            study: "จบการศึกษาระดับ ปริญญาตรี คณะมนุษยศาสตร์ ม.รามคำแหง 9850101 ภาค นครหลวง 1 ",
            occupation: "แม่บ้าน",
            date: "2555",
            firstoneman: "พัชรินทร์",
            relationship: "เพื่อน",
            contact: "Moblie 095-019-0389 Off. 65-6300-2091",
            address: "927/166 ซ.3 ถ.ลาดพร้าว 87 ต.คลองจั่น อ.บางกะปิ จ.กทม. 10240",
            startDate: "2538",
            Goalsinlife: "ที่สุดแห่งธรรม",
            favoriteDhamma: "",
            referenceNumber: "3 1017 00162 72 5"
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
    width: 150%;
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