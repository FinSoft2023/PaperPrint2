export default defineEventHandler(async (event) => {
    return {
     fname: "กัญญารัตน์",               //ชื่อข้าพเจ้า
     lname: "สาระพันธ์",                //นามสกุล
     housenb: 506,                    //บ้านเลขที่
     group: 5,                        //หมู่
     road: "มิตรภาพ ",                 //ถนน
     subdistrict: "ศิลา",              //ตำบล
     district: "เมือง",                //อำเภอ
     province: "ขอนแก่น",              //  จังหวัด
     zipcode: "40000",                //รหัสไปรษณี
     phonenb: '096555542365',         //เบอร์โทร
     age: 20,                           //อายุ
     birthday: '02/05/2004',            //วันเกิด
     idcard: '1429900507767',           //เลขบัตรประชาชน
     idaccount: '06547855551',          //เลขบัญชีธนาคาร
     position: "อาจารย์",                //ตำแหน่ง
     department: "การจัดการ",            //แผนก
     salary: 20050,                     //เงินเดือน
     stockvalue:1200,                   //เงินอัตราเดือนละ
     office:"สำนักงานธนาคารออมสิ้น",      //สำนักงานเงินกู้
     debt:30000,                        //เงินกู้
     interest:'อัตราต่อปี 26%',            //อัตราต่อปี
     guarantee:"ค้ำประกัน รถยนต์",         //สิ่งที่ค้ำประกัน
     remain:15000,                      //เงินคงเหลือที่ติดหนี้
     accruedinterest:"ไม่มีดอกเบี้ย",       //ดอกเบี้ย
     reason:"กู้ยืมเงินเพื่อการประกอบอาชีพ",   //เหตุผลการกู้
     officerFName: "วีวี่",                //ชื่อเจ้าหน้าที่
     officerLName: "ยายี",               //นามสกุลเจ้าหน้าที่
     chaimanFName: "พาลี",               //ชื่อประธาน
     chaimanLname: "บาลี",               //นามสกุลประธาน
     directorFName: "ดาดา",             //  ชื่อกรรมการ
     directorLName: "กากา",             //นามสกุลกรรมการ
     test: "",

      dateReceived: new Date().toISOString(),
    }
  });