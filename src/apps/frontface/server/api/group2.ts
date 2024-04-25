export default defineEventHandler(async (event) => {
    return {
     fName: "สืบสกุล",            //ชื่อข้าพเจ้า
     lName: "สุขสำราญ",           //นามสกุล
     position: "ประธาน",

      dateReceived: new Date().toISOString(), //วันที่ปัจจุบัน  full จะได้ผลลัพธ์ 1 เมษายน พศ.2567    short ผลลัพธ์  01/04/2567

      repaymentPlan: [
        { fn: "การุ ", ln: "นาปา ", age: 50 , numberRegist: 254 , phoneNumber: '0965542332' ,poSition: 'พนักงาน' ,afiilia: 'บริษัทขายรถ',limit: 20000 },
        { fn: "ดาฮา", ln: "นาปา ", age: 36 , numberRegist: 985 , phoneNumber: '0989942374' ,poSition: 'ผู้จัดการ' ,afiilia: 'บริษัทขายรถ' ,limit: 20000},
        //เอาไปใส่หน้าที่ 2 กับ 3
        // ชื่อนามสกุล                อายุ         เลขทะเบียน          เบอร์โทร                    ตำแหน่ง             สังกัด             วงเงินค้ำประกัน
      ],
    }
  });