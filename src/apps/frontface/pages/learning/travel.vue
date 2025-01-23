<template>
  <div>
    <h1>ระบบการเดินทางกลับ แก้ไขชื่อ-สกุล</h1>
    <h2>รหัสโครงการ 1321 รุ่น 170</h2>
    <table border="1" style="width:100%; border-collapse: collapse; text-align: center;">
      <thead>
        <tr>
          <th rowspan="2">ลำดับ</th>
          <th rowspan="2">ชื่อ-สกุล</th>
          <th rowspan="2">เพศ</th>
          <th rowspan="2">อายุ</th>
          <th rowspan="2">มีรูป</th>
          <th colspan="4">การเดินทางกลับ</th>
          <th rowspan="2">มาปธ.กี่คร้ง</th>
          <th rowspan="2">เคยมาติว</th>
          <th rowspan="2">หมายเหตุ</th>
        </tr>
        <tr>
          <th>รถวัด</th>
          <th>อยู่ต่อรุ่น</th>
          <th>บขส.</th>
          <th>กลับเอง</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.gender }}</td>
          <td>{{ member.age }}</td>
          <td>{{ member.photo }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>รวมสมาชิก กลุ่ม 01: {{ members.length }} คน</p>
    <p>ชาย {{ countMale }} คน | หญิง {{ countFemale }} คน</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { name: "ธเนศ จินตโกศลวิทย์", gender: "ช", age: "", photo: "Yes" },
        { name: "รัตนพัฒธ์ อภิชิตปิติพงศ์", gender: "ช", age: "", photo: "Yes" },
        { name: "กันยรัตน์ เพ่งพินิจธรรม", gender: "ญ", age: "", photo: "Yes" },
        { name: "พ.ญ.กาญจนา ซับกิตติศิลป์", gender: "ญ", age: "", photo: "Yes" },
        { name: "นริศา จินตโกศลวิทย์", gender: "ญ", age: "", photo: "Yes" },
        { name: "ภารณี สุขสว่าง", gender: "ญ", age: "", photo: "Yes" },
        { name: "ยวิษฐา ขาวอ่อน", gender: "ญ", age: "", photo: "Yes" },
        { name: "รุ่งนภา สุวรรณเทศ", gender: "ญ", age: "", photo: "Yes" },
        { name: "วรรณภพ (Rose) ภิญโญสวัสดิ", gender: "ญ", age: "", photo: "Yes" },
        { name: "อภิสรา ชัยกิตติศิลป์", gender: "ญ", age: "", photo: "Yes" },
        { name: "นพเก้า หลิ่มสุวรรณ", gender: "ญ", age: "", photo: "Yes" },
      ],
    };
  },
  computed: {
    countMale() {
      return this.members.filter((m) => m.gender === "ช").length;
    },
    countFemale() {
      return this.members.filter((m) => m.gender === "ญ").length;
    },
  },
};
</script>

<style scoped>
table {
  margin: 10px 0;
}

th,
td {
  border: 1px solid #000;
  padding: 8px;
}
</style>