<template>
    <div class="table-container">
      <h1>บุญเดือนเกิด</h1>
      <h2>บุญเดือนเกิด ประจำวาระที่ 170 เดือนเมษายน</h2>
      <table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ - นามสกุล</th>
            <th>วันเกิด</th>
            <th>อายุ</th>
            <th>กลุ่ม</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td>{{ row.no }}</td>
            <td>
              <div>{{ row.name }}</div>
              <small>ผู้มอบ: {{ row.donor }}</small>
            </td>
            <td>{{ row.birthDate }}</td>
            <td>{{ row.age }} ปี</td>
            <td>กลุ่ม {{ row.group }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
          { no: 1, name: "ผู้ศึก กัลฯ อุษณียา ขาวอ่อน", birthDate: "22/04/2517", age: 48, group: "01", donor: "" },
          { no: 2, name: "ผู้ศึก กัลฯ รุจีลา เรืองศรีจันทร์", birthDate: "08/04/2508", age: 58, group: "02", donor: "" },
          { no: 3, name: "ผู้ศึก กัลฯ พันตำรวจโทหญิงวิริยา พรสิทธิ์", birthDate: "28/04/2508", age: 57, group: "02", donor: "" },
          { no: 4, name: "ผู้ศึก กัลฯ บุญส่ง บุญคุ้ม", birthDate: "05/04/2496", age: 70, group: "04", donor: "" },
          { no: 5, name: "ผู้ศึก กัลฯ วิวรรณ อัศสาพร", birthDate: "14/04/2499", age: 67, group: "04", donor: "" },
          { no: 6, name: "ผู้ศึก กัลฯ ไพศาล คงวิชัย", birthDate: "15/04/2507", age: 59, group: "05", donor: "" },
          { no: 7, name: "ผู้ศึก กัลฯ นิดา เตชะพิสิฐ์", birthDate: "01/04/2499", age: 67, group: "06", donor: "" },
          { no: 8, name: "ผู้ศึก กัลฯ วัยอา อนันต์พิพัฒน์สุข", birthDate: "09/04/2499", age: 67, group: "06", donor: "" },
          { no: 9, name: "ผู้ศึก กัลฯ สุรจันทร์ ชุ่มชื่น", birthDate: "15/04/2508", age: 58, group: "06", donor: "" },
          { no: 10, name: "ผู้ศึก กัลฯ โมนา อัญญโชติ", birthDate: "06/04/2546", age: 20, group: "07", donor: "" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .table-container {
    text-align: center;
    margin: 20px auto;
    font-family: sans-serif;
  }
  
  h1,
  h2 {
    margin: 10px 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
    font-size: 16px;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  td div {
    margin-bottom: 5px;
  }
  
  small {
    color: gray;
  }
  </style>
  