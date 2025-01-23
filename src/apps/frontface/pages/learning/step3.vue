<template>
  <div class="table-container">
    <h1>ขั้นตอนที่ 3</h1>
    <table>
      <thead>
        <tr>
          <th>รหัส</th>
          <th>ชื่อ</th>
          <th>เพศ</th>
          <th>อายุ</th>
          <th>ภาค</th>
          <th>ผู้ประสานงาน</th>
          <th>การเดินทาง</th>
          <th>ที่นั่งรถ</th>
          <th>บ้านพัก</th>
          <th>ที่นั่งสมาชิก</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.gender }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.district }}</td>
          <td>{{ row.coordinator }}</td>
          <td>{{ row.transport }}</td>
          <td>{{ row.startDate }}</td>
          <td>{{ row.house }}</td>
          <td>{{ row.seat }}</td>
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
        {
          id: "03-0170-0",
          name: "บุญฐิสา สร้อยสำโรง",
          gender: "ญ",
          age: 0,
          district: "ไม่มีสังกัดภาค",
          coordinator: "ทั่วไป",
          transport: "รถวัด",
          startDate: "1/30",
          house: "B2L23/2",
          seat: "C1",
        },
        {
          id: "03-0170-0",
          name: "สายเพ็ญ ติ๊บหล้า",
          gender: "ญ",
          age: 40,
          district: "ไม่มีสังกัดภาค",
          coordinator: "รถวัด",
          transport: "รถวัด",
          startDate: "1/17",
          house: "B2L25/2",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "สิริลักณ์ ปรีดาวัฒนาการ",
          gender: "ญ",
          age: 0,
          district: "ไม่มีสังกัด",
          coordinator: "ทั่วไป",
          transport: "รถวัด",
          startDate: "1/18",
          house: "B2L25/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "ธเนศ จินตโกศลวิทย์",
          gender: "ช",
          age: 66,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "1/27",
          house: "C1R01/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "รัตนพัฒน์ อภิชิตปิติพงศ์",
          gender: "ช",
          age: 56,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "1/28",
          house: "C1R01/2",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "กันยรัตน์ เพ่งนินิจธรรม",
          gender: "ญ",
          age: 61,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "1/11",
          house: "A3R06/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "นพเก้า หลิ่วสุวรรณ",
          gender: "ญ",
          age: 58,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "",
          house: "",
          seat: "",
        },
        {
          id: "03-0170-0",
          name: "นริศา จินตโกศลวิทย์",
          gender: "ญ",
          age: 61,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "1/15",
          house: "A3R06/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "ภารณี สุขสว่าง",
          gender: "ญ",
          age: 57,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "1/12",
          house: "A3R06/2",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "รุ่งนภา สุวรรณเทศ",
          gender: "ญ",
          age: 50,
          district: "นครหลวง 1 ",
          coordinator: "ประกายรัตน์",
          transport: "รถวัด",
          startDate: "1/8",
          house: "A3R07/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "กาญจนา ชัยกิตติศิลป์",
          gender: "ญ",
          age: 76,
          district: "นครหลวง 1 ",
          coordinator: "ศิริวิไล ชัยว",
          transport: "รถวัด",
          startDate: "1/4",
          house: "",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "วรรณภพ ภิญโญสวัสดิ์สิทธิ์",
          gender: "ญ",
          age: 50,
          district: "นครหลวง 1 ",
          coordinator: "ศิริวิไล ชัยว",
          transport: "รถวัด",
          startDate: "1/7",
          house: "A2R12/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "อภิสรา กิตติศิลป์",
          gender: "ญ",
          age: 45,
          district: "นครหลวง 1 ",
          coordinator: "ศิริวิไล ชัยว",
          transport: "รถวัด",
          startDate: "1/3",
          house: "",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "ยวิษฐา ขาวอ่อน",
          gender: "ญ",
          age: 49,
          district: "นครหลวง 1 ",
          coordinator: "สาวิตรี เจริญ",
          transport: "รถวัด",
          startDate: "1/23",
          house: "B2R02/3",
          seat: "J6",
        },
        {
          id: "03-0170-0",
          name: "กรรณิกา เรืองรัศมีจันทร",
          gender: "ญ",
          age: 72,
          district: "นครหลวง 2 ",
          coordinator: "พ.ประธาน",
          transport: "รถวัด",
          startDate: "1/1",
          house: "A2R05/2",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "ธันยนันท์ ศรสันติ",
          gender: "ญ",
          age: 62,
          district: "นครหลวง 2 ",
          coordinator: "พ.ประธาน",
          transport: "รถวัด",
          startDate: "1/24",
          house: "A1R05/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "ภรณี กิจไพศาลศักดิ์",
          gender: "ญ",
          age: 59,
          district: "นครหลวง 2 ",
          coordinator: "พ.ประธาน",
          transport: "อยู่ต่อ",
          startDate: "",
          house: "A2R08/3",
          seat: "Cha",
        },
        {
          id: "03-0170-0",
          name: "ราตรี ดวงแก้ว",
          gender: "ญ",
          age: 59,
          district: "นครหลวง 2 ",
          coordinator: "พ.ประธาน",
          transport: "อยู่ต่อ",
          startDate: "",
          house: "A2R08/2",
          seat: "H9",
        },
        {
          id: "03-0170-0",
          name: "รุจิสา เรืองรัศมีจันทร",
          gender: "ญ",
          age: 58,
          district: "นครหลวง 2 ",
          coordinator: "พ.ประธาน",
          transport: "รถวัด",
          startDate: "1/2",
          house: "A2R05/3",
          seat: "Cha",
        },
        // เพิ่มข้อมูลอื่น ๆ ได้ตามต้องการ
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

h1 {
  margin-bottom: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
