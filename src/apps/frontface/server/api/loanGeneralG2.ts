export default defineEventHandler(async (event) => {
    return {
     fname: "กัญญารัตน์",
     lname: "สาระพันธ์",
     housenb: 506,
     group: 5,
     road: "มิตรภาพ",
     subdistrict: "ศิลา",
     district: "เมือง",
     province: "ขอนแก่น",
     zipcode: "40000",
     phonenb: '096555542365',
     age: 20,
     birthday: '02/05/2004',
     idcard: '1429900507767',
     idaccount: '06547855551',
     position: "อาจารย์",
     department: "การจัดการ",
     salary: 20050,
     stockvalue:1200,
     office:"สำนักงานธนาคารออมสิ้น",
     debt:30000,
     interest:'อัตราต่อปี 26%',
     guarantee:"ค้ำประกัน รถยนต์",
     remain:15000,
     accruedinterest:"ไม่มีดอกเบี้ย",
     reason:"กู้ยืมเงินเพื่อการประกอบอาชีพ",
     officerFName: "วีวี่",
     officerLName: "ยายี",
     chaimanFName: "พาลี",
     chaimanLname: "บาลี",
     directorFName: "ดาดา",
     directorLName: "กากา",
     affiliation: "กระทรวงกลาโหม", // สังกัด
     remberRegistration : '12565', // ทะเบียนสมาชิก
     agency : "ช่างประปา",  // หน่วยงาน
     remaining : "20000" , // เงินคงเหลือ
     makepayment : "2000" , // ชำระเงิน
     loanLetterNumber:"255/30", // หนังสือเลขที่
     loanAccountNumber:"655/1", // บัญชีเลขที่
      receivedLocation:"สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด", // สถานที่
      dateReceived: new Date().toISOString(),
    }
  });