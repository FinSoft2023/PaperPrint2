<template>
  <div class="table-container">
    <h1>รายชื่อนักเรียน</h1>
    <table>
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>ชื่อ - สกุล</th>
          <th>กลุ่ม</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row.no }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.group }}</td>
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
        { no: 1, name: "อังสุมา อัญญโชติ", group: "07" },
        { no: 2, name: "วราภรณ์ อมรชัยวุฒิกุล", group: "08" },
        { no: 3, name: "วิชัย ชาญศักดิ์วิไล", group: "09" },
        { no: 4, name: "ศิริพร ธนะจันทร์", group: "10" },
        { no: 5, name: "อารีรัตน์ บุญสกุลเดช", group: "11" },
        { no: 6, name: "รสสุคนธ์ นันทศรีรัตน์", group: "11" },
        { no: 7, name: "สุวิมล ปิลันธนภาคย์", group: "12" },
      ],
    };
  },
};
</script>

<style scoped>
.table-container {
  text-align: center;
  margin: 20px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
}

th,
td {
  border: 1px solid #000000;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f5dba0;
  font-weight: bold;
}
</style>
