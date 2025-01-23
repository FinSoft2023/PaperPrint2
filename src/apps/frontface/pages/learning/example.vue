<template>
    <div class="form-container">
      <h1>บูชาธรรม รุ่นที่ _______</h1>
      <div class="form-table">
        <!-- Section 1 -->
        <div v-for="(section, index) in formSections" :key="index" class="form-section">
          <div v-for="(row, rowIndex) in section.rows" :key="rowIndex" class="form-row">
            <div class="form-label">
              {{ row.label }}
            </div>
            <div class="form-inputs">
              <input
                v-for="n in row.inputs"
                :key="n"
                type="text"
                class="form-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formSections: [
          {
            rows: [
              { label: 'ผู้นำกล่าวบูชาธรรม', inputs: 2 },
              { label: 'ผู้นำกล่าวยูปะยะเภสัช', inputs: 2 },
              { label: 'ผู้นำพาวนาตอกไม้ ชุดที่ 1', inputs: 2 },
              { label: 'ผู้นำพาวนาตอกไม้ ชุดที่ 2', inputs: 2 },
              { label: 'ผู้นำพาวนาตอกไม้ ชุดที่ 3', inputs: 2 },
              { label: 'ผู้นำพาวนาภัยวัจน์ ชุดที่ 1', inputs: 2 },
              { label: 'ผู้นำพาวนาภัยวัจน์ ชุดที่ 2', inputs: 2 },
            ],
          },
          {
            rows: [
              { label: 'ผู้นำสวดรวมปัจจัย ช', inputs: 1 },
              { label: 'ผู้นำสวดรวมปัจจัย ญ', inputs: 1 },
              { label: 'ผู้นำรับของมา ช', inputs: 1 },
              { label: 'ผู้นำรับของมา ญ', inputs: 1 },
              { label: 'สัมภาระเล็ด ช', inputs: 2 },
              { label: 'สัมภาระเล็ด ญ', inputs: 2 },
            ],
          },
          {
            rows: [
              { label: 'ผู้นำกล่าวอวยพรวันเกิด', inputs: 2 },
              { label: 'ผู้นำกล่าวถวายรักษาโรค', inputs: 2 },
              { label: 'ผู้นำกล่าวถวายภัตตาหาร', inputs: 2 },
              { label: 'ผู้นำสวดขอมาลา', inputs: 1 },
              { label: 'ตัวแทนกล่าวอำลา', inputs: 1 },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .form-container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: auto;
    text-align: left;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-table {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-section {
    border-top: 1px solid #000;
    padding-top: 10px;
  }
  
  .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .form-label {
    width: 50%;
    font-size: 14px;
  }
  
  .form-inputs {
    display: flex;
    gap: 10px;
  }
  
  .form-input {
    width: 50px;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 14px;
  }
  </style>
  