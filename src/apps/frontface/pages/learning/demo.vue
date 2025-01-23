<template>
    <div class="table-container">
      <h1>ตัวอย่างตาราง</h1>
      <div class="table">
        <!-- Header -->
        <div class="row header">
          <div class="cell">Header 1</div>
          <div class="cell">Header 2</div>
          <div class="cell">Header 3</div>
          <div class="cell">Header 4</div>
        </div>
        
        <!-- Rows -->
        <div v-for="(row, rowIndex) in tableData" :key="rowIndex" class="row">
          <div v-for="(cell, cellIndex) in row" :key="cellIndex" class="cell">
            {{ cell }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Example data matching the image's structure
        tableData: [
          ['A1', 'B1', 'C1', 'D1'],
          ['A2', 'B2', 'C2', 'D2'],
          ['A3', 'B3', 'C3', 'D3'],
        ],
      };
    },
  };
  </script>
  
  <style>
  .table-container {
    font-family: Arial, sans-serif;
    max-width: 1000px;
    margin: auto;
    text-align: center;
  }
  
  .table {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
  
  .row {
    display: table-row;
  }
  
  .cell {
    display: table-cell;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  
  .header {
    font-weight: bold;
    background-color: #f4f4f4;
  }
  </style>
  