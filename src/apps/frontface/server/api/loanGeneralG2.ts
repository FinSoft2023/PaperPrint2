export default defineEventHandler(async (event) => {
    return {
     fname: "มานะ",               //ชื่อข้าพเจ้า หรือผู้กู้
     lname: "เพียงใจ",                //นามสกุล เดียวกับคู่สมรส
     spouseFName: "ดีใจ",                 //ชื่อคู่สมรส   ถามพี่เขาว่าต้องใส่ชื่อคู่สมรสมั้ย
     officerFName: "วีวี่",                //ชื่อเจ้าหน้าที่สหกรณ์
     officerLName: "ยายี",               //นามสกุลเจ้าหน้าที่
     chaimanFName: "พาลี",               //ชื่อประธานกรรมการ
     chaimanLname: "บาลี",               //นามสกุลปรระธาน
     directorFName: "ดาดา",             //ชื่อกรรมการ
     directorLName: "กากา",             //นามสกุลกรรมการผู้จัดการ
     paymentFname: "สุธี",                //ชื่อเจ้าหน้าที่จ่ายเงิน
     paymentLname: "บันดร",              //นามสกุล

     idLine: "zaza88",                //ไอดีไลน์ 
     housenb: 506,                    //บ้านเลขที่
     group: 5,                        //หมู่
     road: "มิตรภาพ ",                 //ถนน
     subdistrict: "ศิลา",              //ตำบล
     district: "เมือง",                //อำเภอ
     province: "ขอนแก่น",              //จังหวัด
     zipcode: "40000",                //รหัสไปรษณี
     phonenb: '096555542365',         //เบอร์โทร
     age: 20,                           //อายุ
     birthday: '02/05/2004',            //วันเกิด
     idcard: '1429900507767',           //เลขบัตรประชาชน
     position: "อาจารย์",                //ตำแหน่ง
     department: "การจัดการ",            //แผนก
     affiliation: "กระทรวงกลาโหม",      // สังกัด
     agency : "ช่างประปา",               // หน่วยงาน
     salary: 20050,                     //เงินเดือน

     stockvalue:1200,                   //เงินอัตราเดือนละ
     office:"สำนักงานธนาคารออมสิ้น",      //สำนักงานเงินกู้
     debt:30000,                        //เงินกู้
     interest:'อัตราต่อปี 26%',            //อัตราต่อปี
     guarantee:"ค้ำประกัน รถยนต์",         //สิ่งที่ค้ำประกัน
     remain:15000,                      //เงินคงเหลือที่ติดหนี้
     accruedinterest:"ไม่มีดอกเบี้ย",       //ดอกเบี้ย
     reason:"กู้ยืมเงินเพื่อการประกอบอาชีพ",   //เหตุผลการกู้
     mout: "มกราคม",                    //เดือนกู้
     co: "2566",                        //พศ.ปีกู้
     contract: "1",                     //สัญญา
     
     idaccount: '06547855551',          //เลขบัญชีธนาคาร
     bank: 'ออมสิน',                     //ชื่อธนาคาร
     branchBank: 'ในเมือง',                     //สาขาธนาคาร
     remberRegistration : '12565',      // เลขที่ทะเบียนสมาชิก
     remaining : "20000" ,              // เงินคงเหลือ
     makepayment : "2000" ,            // ชำระเงินรายเดือน

     loanLetterNumber:"255/30",         //หนังสือที่
     loanAccountNumber:"655/1",         // บัญชีเลขที่
      receivedLocation:"สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด", // สถานที่

      dateReceived: new Date().toISOString(), //วันที่ปัจจุบัน

      repaymentPlan: [
        { fn: "การุ ", ln: "นาปา ", age: 50 , numberRegist: 254 },
        { fn: "ดาฮา", ln: "นาปา ", age: 36 , numberRegist: 985 },
        
      ],
    }
  });