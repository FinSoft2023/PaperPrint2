<template>
  <main>
    <MorePaperDoc>
      <div class="header">
          <h1>ใบเช็ครับฝากโทรศัพท์</h1>
          <p>รุ่น 170</p>
          </div>
          <div class="header1">
          <h2>กลุ่ม 01 พี่เลี้ยง สุภาภรณ์ ปัถวี</h2>
          </div>
      <div class="table-container">
        <table class="styled-table">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ-สกุล</th>
              <th>เพศ</th>
              <th>รุ่นโทร์สัมพัทธ์</th>
              <th>รับฝาก</th>
              <th>รับคืน</th>
              <th>หมายเหตุ (รอยตำหนิ)</th>
            </tr>

          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.batch }}</td>
              <td>{{ item.deposit }}</td>
              <td>{{ item.return }}</td>
              <td>{{ item.notes }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MorePaperDoc>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
          { name: 'ทเนศ จินดาโภคสวัสดิ์', gender: 'ช', batch: '', deposit: '', return: '', notes: '' },
          { name: 'รัตนพันธ์ อภิจิตรพิทักษ์', gender: 'ช', batch: '', deposit: '', return: '', notes: '' },
          { name: 'กันธรัตน์ เพลิ่้มพินิจรรม', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'พ.ญ. กาญจนา ชัยกิตติศิลป์', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'นริสา จินดาโภคสวัสดิ์', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'ภารณี สุขสว่าง', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'ยุรษฎา ขาวอ่อน', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'รุ้งนภา สุวรรณเทพ', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'วรรณอมร กัญญ์โรจน์ศิโตสภักสิทธิ์', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'อภิสรา ชัยกิตติศิลป์', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          { name: 'นพเก้า หลอดสุวรรณ', gender: 'ญ', batch: '', deposit: '', return: '', notes: '' },
          // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
        ]
    };
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f9f9f9;
}
.header {
  text-align: center;
  margin-bottom: 20px;
}
.header h1 {
  margin: 0;
}
.header1 h2 {
  margin: 300;
}
.table-container {
  overflow-x: auto;
}
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
</style>
