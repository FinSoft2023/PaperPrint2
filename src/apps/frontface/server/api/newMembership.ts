export default defineEventHandler(async (event) => {
    return {
        fname: "ยิ่งใหญ่",             //ชื่อหน้า
        lname: "ยืนยง",              //นามสกุล
        houseNumber: "666/66",      //บ้านเลขที่
        village: 11,                //หมู่ที่
        alley: 9,                   //ซอย
        road: "ข้าวหุง",              //ถนน
        district: "โนนต่ำ",          //ตำบล
        canton: "โนนสูง",            //อำเภอ
        province: "โนนไกล",         //จังหวัด
        phoneNo: "0987654231",      //เบอร์โทร
        position: "แพทย์",          //ตำแหน่ง  
        memberNumber: "69696969",   //เลขทะเบียนสมาชิก
        zipCode: "42150",           //รหัสไปรษณี
        age: 29,                    //อายุ
        birthday: "22",             //วันเกิด
        birthmonth: "ธันวาคม",       //เดือนเกิด
        birthyear: "2538",          //ปีเกิด
        idenNumber: "1929300028581",    //เลขประจำตัวประชาชน
        bankAccountNumber: "8767656542",    //เลขบัญชีธนาคาร
        depart: "ฉุกเฉิน",            //แผนก
        monthlyMoney: 35000,        //เงินเดือน
        mothlyPayment: 10000,       //จ่ายรายเดือน
        other: "text",              //อื่นๆ
        fnameInterestedWitness: "ธนงทวย",   //ชื่อพยานผู้มีผลประโยชน์
        lnameInterestedWitness: "คงควรคอย", //นามสกุลพยานผู้มีผลประโยชน์
        dateReceived: new Date().toISOString(),
    }
  });