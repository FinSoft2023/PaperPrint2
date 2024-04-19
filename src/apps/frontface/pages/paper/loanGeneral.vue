<template>
    <main>
        <PaperDoc>
            <!-- กู้สามัญทั่วไป general1  -->

            <div class="grid justify-items-end">
                <p>เเบบ ส.1/2565</p>
                </div>

            <div class="grid grid-cols-3 grid-rows-2 justify-center mt-2 h-10">
              <div class="items-start">
                <div class="border-2 border-black p-2">
                  <p class="text-sm">รับที่
                    <FiLL :data="data?.receivedLocation" />
                  </p>
                  <p class="text-sm">วันที่
                    <FiLL :data="data?.dateReceived"
                      date-format="short" />
                  </p>
                </div>

                <div class="border-2 border-black p-1 mt-4" >
                  <p class="text-sm">หนังสือกู้เงินที่ <FiLL :data="data?.loanLetterNumber" />
                  </p>
                  <p class="text-sm">วันที่ <FiLL :data="data?.dateReceived"
                  date-format="short" /></p>
                  <p class="text-sm">บัญชีเงินกู้ที่
                  <FiLL :data="data?.loanAccountNumber" />
                  </p>
                  </div>
                </div>

              <div class="flex flex-col items-center row-span-2">
                <img class="w-[120px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  <p class="mt-2">คำขอกู้เงินสามัญทั่วไป</p>
              </div>

              <div class="flex flex-col items-end row-span-2">
                <div class="border-2 border-black p-2">
                  <p class="text-sm">เอกสารประกอบการกู้ ( อย่างละ 1 ฉบับ )
                  </p>
                  <p class="text-sm">1.สลิปเงินเดือน </p>
                  <p class="text-sm ">2.สำเนาบัตรประจำตัวประชาชนพร้อมรับรองสำเนาถูกต้องของผู้กู้ ผู้ค้ำ เเละคู่สมรส </p>
                  <p class="text-sm ">3.สำเนาทะเบียนบ้านพร้อมรับรองสำเนาถูกต้องของผู้กู้ ผู้ค้ำเเละคู่สมรส </p>
                  <p class="text-sm ">4.สำเนาทะเบียนสมรสหรือใบหย่าหร้อมรับรองสำเนาถูกต้องของผู้กู้เเละผู้ค้ำ </p>
                </div>
              </div>
            </div>
      
      <div class="grid justify-items-center mt-44">
            <p class="indent-80 text-sm">เขียนที่ <FiLL :data="data?.receivedLocation" /> </p>
            <p class="indent-80 text-sm">วันที่ <FiLL :data="data?.dateReceived"
                date-format="short" /> </p>
            </div>
            <div class="grid justify-items-start mt-6">
            <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
            </div>

            <div class="grid justify-items-start mt-6 " >
            <p class="indent-10">ข้าพเจ้า <FiLL :data="data?.fname"/> <FiLL :data="data?.lname"/> สมาชิกเลขทะเบียนที่  .................อายุ..........ปี
              เป็น [ &nbsp; ] ข้าราชการ/ลูกจ้างประจำ [ &nbsp; ] พนักงานราชการ [ &nbsp; ] พนักงานกระทรวงสาธารณสุข [&nbsp;] ลูกจ้าง
              [ &nbsp; ] อื่นๆ................................. ตำเเหน่ง...................................สังกัด........................
              เงินเดือน/เงินประจำตำเเหน่ง...............บาท หน่วยงาน....................เบอร์โทรภายใน................
              ที่อยู่เลขที่................หมู่ที่.........ถนน.............ตำบล.....................อำเภอ.............................
              จังหวัด.............................รหัสไปรษณีย์......................เบอร์โทร...........................LINE ID...................................
              เสนอคำขอกู้เงินสามัญเพื่อโปรดพิจารณาดังต่อไปนี้
            </p>
            <p>1.ข้าพเจ้าขอกู้เงินสามัญทั่วไป จำนวน.................... บาท(........................................................)</p>
            <p>2.ข้าพเจ้าจะนำเงินไปใช้ตามวัตถุประสงค์ ดังนี้ (อาจเเนบเอกสารเพื่อประกอบพิจารณาตามวัตถุประสงค์)</p>
            <p class="indent-10" >[ &nbsp; ] 2.1 เพื่อการอันจำเป็น อันได้เเก่ จัดหาสิ่งจำเป็นสำหรับครอบครัว ,อุปการะเลี้ยงบุคคลในครอบครัว,
              ปลดเปลื้องหนี้สิ้นของครัวเรือน,รักษาพยาบาลบุคคลในครอบครัว
            </p>
            <p class="indent-10" >[ &nbsp; ] 2.2 เพื่อชำระหนี้สหกรณ์ จำนวน.....................สัญญา ดังนี้
            </p>
            <div class="grid grid-cols-2 justify-center">
              <div class="items-start ">
                <p class="pl-20" > - เงินกู้สามัญทั่วไป </p>
                <p class="pl-20"> - เงินกู้สามัญเพื่อพัฒนาคุณภาพชีวิต </p>
                <p class="pl-20"> - เงินกู้เพื่อเหตุฉุกเฉิน </p>
                <p class="pl-20"> - เงินกู้สามัญเพื่อการประกอบอาชีพเสริมเพิ่มรายได้ </p>
                <p class="pl-20"> - เงินกู้พิเศษ </p>
                <p class="pl-20"> - เงินกู้หุ้น </p>
              </div>
              <div class="items-end ">
                <p class="pl-20">หนังสือกู้เงินที่...................................</p>
                <p class="pl-20">หนังสือกู้เงินที่...................................</p>
                <p class="pl-20">หนังสือกู้เงินที่...................................</p>
                <p class="pl-20">หนังสือกู้เงินที่...................................</p>
                <p class="pl-20">หนังสือกู้เงินที่...................................</p>
                <p class="pl-20">หนังสือกู้เงินที่...................................</p>
              </div>
            </div>
            </div>

            <div class="grid justify-items-start" >
            <p class="indent-10" >[ &nbsp; ] 2.3 เพื่อการศึกษาของบุตรหรือสมาชิก
            </p>
            <p class="indent-10" >[ &nbsp; ] 2.4 อื่นๆ (ระบุ).......................</p>
            <p>3. ข้าพเจ้าจะส่งคืนต้นเงินกู้พร้อมดอกเบี้ยในอัตราตามที่สหกรณ์กำหนดให้เเก่สหกรณ์เป็นงวดรายเดือนภายใน
              วันสิ้นเดือนทั้งนี้ตั้งเเต่งวดประจำเดือน.................พ.ศ.............เป็นต้นไป
            </p>
            <p>4. ข้าพเจ้าต้องถือหุ้นเพิ่มตามสัดส่วนของวงเงินโดยให้สหกรณ์หักจากเงินกู้เป็นจำนวน..................บาท
              (...................................................)
            </p>
            <p>5. ข้าพเจ้าจะทำหนังสือกู้เงินสำหรับเงินกู้สามัญทั่วไป ให้ไว้ต่อสหกรณ์ตามที่สหกรณ์กำหนด
            </p>
            <p>6. (ในกรณีที่ผู้ขอกู้มีคู่สมรสเเล้ว) ในการกู้เงินตามคำขอกู้นี้ ข้าพเจ้าได้รับคำยินยอมจากคู่สมรสเเล้ว เเละได้บันทึกคำยินยอม
              เป็นหลักการฐานในท้ายหนังสือกู้นี้ด้วย
            </p>
            </div>
            <div class="grid justify-items-end">
                <p>(โปรดพลิก)</p>
                </div>



        </PaperDoc>

        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general2 -->
        </MorePaperDoc>
        <MorePaperDoc>
           อ้อนเอง
        </MorePaperDoc>
        <MorePaperDoc>
            <table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-600 ...">ความเห็นของเจ้าหน้าที่</th>
      <th class="border border-slate-600 ...">ความเห็นของผู้มีอำนาจพิจารณา</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-600 ...">ได้ตรวจสอบเอกสารและคำขอกู้เงินแล้วพบว่ามีความถูกต้องตามระเบียบ หลักเกณฑ์และเงื่อนไขต่างๆ ทุกประเภท</td>
      <td class="border border-slate-600 text-center">[&nbsp;] อนุมัติ จำนวน........................... บาท 
        (....................................................)
      </td>
    </tr>
    <tr>
      <td class="border border-slate-600 ...">หักชำระ (ณ วันที่วิเคราะห์ข้อมูล)<br>
        - หนี้เดิม <FiLL :data="data?.debt" /> บาท<br>
        - ซื้อหุ้นตามส่วนเงินกู้ .......................บาท<br>
        - เบี้ยประกัน/ฌาปนกิจ .....................บาท
      </td>
      <td class="border border-slate-600 text-center">[&nbsp;] ไม่อนุมัติ เพราะ..................................................................................</td>
    </tr>
    <tr>
      <td class="border border-slate-600 text-center">(ลงชื่อ).........................เจ้าหน้าที่สหกรณ์<br>
        (<FiLL :data="data?.officerFName" /> <FiLL :data="data?.officerLName" />)
      </td>
      <td class="border border-slate-600 text-center">(ลงชื่อ).........................ประธานเงินกู้<br>
        (<FiLL :data="data?.chaimanFName" /> <FiLL :data="data?.chaimanLName" />)</td>
    </tr>
    <tr>
      <td class="border border-slate-600 text-center">
      </td>
      <td class="border border-slate-600 text-center">(ลงชื่อ).........................กรรมการผู้จัดการ<br>
        (<FiLL :data="data?.directorFName" /> <FiLL :data="data?.directorLName" />)</td>
    </tr>
  </tbody>
</table>
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general5 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general6 -->
            <div class="flex flex-col items-center mt-10">
        <img class="w-[120px] h-auto"
          src="https://www.saving-sskh.com/images/logo-saving.png"
          alt="Logo" />
      </div>
    <div class="grid justify-items-center ">
      <p class="text-lg">ใบสมัครเข้าเป็นสมาชิก</p>
      <p class="text-lg">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
      <p class="mt-5">***************************</p>
    </div>

    <div class="grid justify-items-center ">
      <p class="indent-80">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
      <p class="indent-80">วันที่ <FiLL :data="data?.dateReceived"
                date-format="short" /> </p>
    </div>
    <div class="grid justify-items-start mt-6">
      <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
    </div>
    <div class="grid justify-items-start mt-6 text-justify">
      <p class="indent-20">ข้าพเจ้า <FiLL :data="data?.mename"/> บ้านเลขที่ <FiLL :data="data?.housenb" /> หมู่ที่ <FiLL :data="data?.group" /> ถนน <FiLL :data="data?.road" /> ตำบล <FiLL :data="data?.subdistrict" />
          อำเภอ <FiLL :data="data?.district" /> จังหวัด <FiLL :data="data?.province" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" /> เบอร์โทรศัพท์ <FiLL :data="data?.phonenb" />
          ได้ทราบข้อบังคับของสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด โดยตลอดเเล้ว เห็นชอบในวัตถุประสงค์ จึงขอสมัครเข้าเป็นสมาชิกของสหกรณ์ฯ ในฐานะเป็นผู้เข้าซื้อขอจดทะเบียนสหกรณ์ฯ เเละขอให้ถ้อยคำเป็นหลักฐาน ดังต่อไปนี้.-
      </p>
      <p class="indent-20">ข้อ 1. ข้าพเจ้ามีอายุ <FiLL :data="data?.age" /> ปี (เกิดวันที่ <FiLL :data="data?.birthday" /> )
          เลขประจำตัวประชาชน <FiLL :data="data?.idcard" /> เลขที่บัญชีธนาคารกรุงไทย <FiLL :data="data?.idaccount" />
      </p>
      <p class="indent-20">ข้อ 2. ข้าพเจ้าเป็นข้าราชการ/ลูกจ้างประจำ/พนักงานราชการ/พนักงานกระทรวงสาธารณสุข
          (ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราวเงินบำรุง (ตามวุฒิ)/ ลูกจ้างชั่วคราวเงินบำรุง
          ทำงานประจำตำเเหน่ง <FiLL :data="data?.position" /> เเผนก <FiLL :data="data?.department" />
          สังกัดโรงพยาบาลศรีสะเกษ ได้รับเงินเดือน <FiLL :data="data?.salary" /> บาท( <MoneyText :data="data?.salary" /> )
      </p>
      <p class="indent-24">ข้อ 3. ข้าพเจ้ามิได้เป็นสมาชิกในสหกรณ์ฯ อื่นซึ่งมีวัตถุประสงค์ในการให้ยืมเงิน
      </p>
      <p class="indent-24">ข้อ 4. ข้าพเจ้าได้เข้าเป็นสมาชิกในชั้นนี้ ข้าพเจ้าของเเสดงความจำนงส่งเงินค่าหุ้นรายเดือน
          ต่อสหหรณ์ฯ ในอัตราเดือนละ <FiLL :data="data?.stockvalue" /> บาท (มูลค่าหุ้นละ 10.00 บาท)
      </p>
      <p class="indent-24">ข้อ 5. ข้าพเจ้าขอแถลงรายการหนี้สินทั้งหมดซึ่งข้าพเจ้ามีอยู่ดังนี้ (แสดงข้อความละเอียด
        ของแต่ละรายคือ ชื่อและสำนักงานของเจ้าหนี้ วันเป็นหนี้ จำนวนหนี้สินตั้งแต่แรก อัตราดอกเบี้ยร้อยละต่อปี
        หลักประกันที่ให้ไว้ จำนวนต้นเงินคงเหลือ จำนวนดอกเบี้ยค้างชำระและเป็นหนี้สินเพื่อการใดให้ครบทุกรายการ)
        อย่างน้อยต้องเป็นไปตามอัตราซึ่งกำหนดไว้ในหนังสือชี้ชวน แต่ถ้าจะแสดงความจำนงสูงกว่าอัตราที่กำหนดไว้ก็
        ย่อมเป็นการดี
      </p>
      <br>
      <div class="pl-36">1. <FiLL :data="data?.office" /> <FiLL :data="data?.debt" /> <FiLL :data="data?.interest" /> <FiLL :data="data?.guarantee" /> <FiLL :data="data?.remain" /> <FiLL :data="data?.accruedinterest" /> <FiLL :data="data?.reason" /></div>
      <p class="pl-36">2. ..........................................................................................................................</p>
      <p class="indent-24">ข้อ 6. ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ามีความประสงค์ขอกู้เงินสหกรณ์ฯ เพื่อชำระหนี้ซึ่ง
        ข้าพเจ้ามีอยู่ดังกล่าวในข้อ 5 นั้น ข้าพเจ้าขอชี้แจงเหตุผลดังต่อไปนี้
      </p>
      <p class="indent-24 break-all flex"><FiLL :data="data?.reason" /></p>
      <p class="indent-24">ข้อ 7. ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ายินยอมและขอร้องให้ผู้บังคับบัญชา หรือเจ้าหน้าที่
        จ่ายเงินได้รายเดือนของข้าพเจ้าเมื่อได้รับมอบหมายจากสหกรณ์ฯ โปรดหักจำนวนเงินค่าหุ้นรายเดือนและ
        จำนวนเงินงวดชำระหนี้ ข้าพเจ้าต้องส่งต่อสหกรณ์ฯ นั้น จากเงินเดือนของข้าพเจ้าเมื่อจ่ายเพื่อส่งต่อให้
        สหกรณ์ฯ ด้วย
      </p>
    </div>
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general7 -->
        </MorePaperDoc>
    </main>
</template>
<script setup
        lang="ts">
        import Index from '../index.vue';

        const { data } = await useFetch<any>('/api/loanGeneralG2');
</script>
