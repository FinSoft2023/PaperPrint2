<template>
  <main>

    <MorePaperDoc>
      รายชื่อ เจ้าภาพผู้ใหญ่และคนเก่า รุ่น 170 ( ติวรุ่น 35)
      <table class="styled-table">
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ-นามสกุล</th>
            <th>อายุ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.group }}</td>
          </tr>
        </tbody>
      </table>
    </MorePaperDoc>

  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'กัลฯ พญ.กาญจนา ชัยกิตติศิลป์', group: '76' },
        { name: 'กัลฯ อภิสรา ชัยกิตติศิลป์', group: '44' },
        { name: 'กัลฯ ดร.จิตดวุฒ ลื้มศิริเศรษฐกุล', group: '75' },
        { name: 'กัลฯ พรลพัชร นรารัตน์วันชัย', group: '58' },
        { name: 'กัลฯ ขวัญฤดี อำนวยเวโรจน์', group: '54' },
        { name: 'กัลฯ เรวดิ ปาลวัฒน์วิไชย', group: '62' },
        { name: 'กัลฯ ปรภาภัทร รุตชจิระธนลักาณ์', group: '50' },
        { name: 'กัลฯ อรพินทร์ ลิ้มธนานุรักษ์', group: '56' },
        { name: 'กัลฯ ดร.กุลธิดา รักา์ศิลขันธ์', group: '39' },
        { name: 'กัลฯ พญ.ลำพู โกศัลย์วิทย์', group: '48' },
        { name: 'กัลฯ คณิต อรินพไพบูรณ์', group: '63' },
        { name: 'กัลฯ อุทัย คูตระกูล', group: '61' },
        { name: 'กัลฯ สมเดช สุประดิษอาภรณ์', group: '67' },
        { name: 'กัลฯ เตือมใจ ชึ่งโชติกุล', group: '78' },
        { name: 'กัลฯ อภิสิทธิ์ วิฝสิษฏ์วรพร', group: '51' },

        // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
      ]
    };
  }
};
</script>

<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: 'Arial', sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #a0dfe3;
  color: #0a0202;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>