<template>
    <table>
      <thead>
        <tr>
          <th>ชื่อ</th>
          <th>รายละเอียดเพิ่มเติม</th>
          <th>ภาค</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.name">
          <td>{{ member.name }}</td>
          <td>{{ member.detail }}</td>
          <td>{{ member.section }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        members: [
          { name: 'กันยรัตน์', detail: 'เพ่งพินิจธรรม', section: '6' },
          { name: 'พ.ญ. กาญจนา', detail: 'ซ่อพินิจธรรม', section: '1' },
          { name: 'ธเนศ', detail: 'จินตโกศลวิทย์', section: '7' },
          { name: 'นพเก้า', detail: 'หลัวสุวรรณ', section: '1' },
          { name: 'นริศา', detail: 'จินตโกศลวิทย์', section: '7' },
          { name: 'ภารณี', detail: 'สุขสว่าง', section: '1' },
          { name: 'ยวิษฐา', detail: 'ขาวอ่อน', section: '1' },
          { name: 'รัตนพัฒน์', detail: 'อภิชิตปิติพงศ์', section: '1' },
          { name: 'รุ่งนภา', detail: 'สุวรรณเทศ', section: '6' },
          { name: 'วรรณภพ', detail: 'ภิญโญสวัสดิ์สิทธิ์ (Thiel)', section: '1' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>