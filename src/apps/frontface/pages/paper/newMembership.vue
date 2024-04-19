<template>
    <main>
        <PaperDoc>
            <p class="text-center" v-for="i in 24">โต้ + ปูน</p>
        </PaperDoc>

        <MorePaperDoc>
            <div class="mx-auto max-w-2xl">
                <p class="text-center mb-4">ชื่อสมาชิก _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ เลขทะเบียนที่ _ _ _ _ _ _ _ _ _ _ _ หน่วย _ _ _ _ _ _ _ _ _ _ _ _ </p>
                <hr class="my-4 border-b-2 border-black">
                <p class="text-center mb-4">บัตรตัวอย่างลายมือชื่อสมาชิก</p>
                <hr class="my-1 border-b-1 border-black">
                <hr class="my-1 border-b-1 border-black">
                
                <div class="flex justify-between text-center">
                    <div class="flex ">
                        <p class="ml-20 text-center mt-3 ml-50">ตัวอย่างลายมือชื่อ</p>
                    </div>
                    <div class="flex items-center">
                        <p class="mr-20 text-center mt-3">วันที่ _ _ _ _ /_ _ _ _ /_ _ _ _</p>
                    </div>
                </div>
                
                <hr class="my-1 border-b-1 border-black">
                <hr class="my-1 border-b-1 border-black">
                <ol class="list-decimal mx-auto max-w-xs">
                    <li class="text-center mb-2 mt-6"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</li>
                    <li class="text-center mb-2"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</li>
                    <li class="text-center mb-3"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</li>
                </ol>
                <div>
                    <p class="text-center mb-1">(โปรดลงลายมือชื่อคนละ 3 ลายมือชื่อ)</p>
                    <p class="text-center mb-4">ขอรับรองว่าลายมือชื่อข้างบนนี้ เป็นลายมือชื่อของสมาชิกผู้นี้จริง</p>
                    <p class="text-center mb-4 ml-19">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ พยาน</p>
                    <p class="text-center mb-4 mr-9">(_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _)</p>
                    <p class="text-center mb-4 ml-19">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ พยาน</p>
                    <p class="text-center mb-4 mr-9">(_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _)</p>
                </div>
            </div>
        </MorePaperDoc>

        <MorePaperDoc>
            <div class="mx-auto max-w-2xl">
                <table class="table-auto w-full border-collapse border">
                    <tr>
                    <td rowspan="2" class="border-2 border-black text-center">วัน เดือน ปี</td>
                    <td rowspan="2" class="border-2 border-black text-center">เงินได้ รายเดือน</td>
                    <td colspan="2" class="border-2 border-black text-center">เป็นผู้กู้ตามหนังสือกู้</td>
                    <td colspan="2" class="border-2 border-black text-center">เป็นผู้คํ้าประกันตาม</td>
                    <td rowspan="2" class="border-2 border-black text-center">เจ้าหน้าที่</td>
                    <td rowspan="2" class="border-2 border-black text-center">หมายเหตุ</td>
                    </tr>
                    <tr>
                    <td class="border-2 border-black text-center p-2">ที่</td>
                    <td class="border-2 border-black text-center">วันที่</td>
                    <td class="border-2 border-black text-center">หนังสือกู้ที่</td>
                    <td class="border-2 border-black text-center">บัญชีเงินกู้ที่</td>
                    </tr>
                    <tbody>
                    <tr v-for="i in 12" :key="i">
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted">&nbsp;</td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                        <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                    </tr>
                    <tr class="min-h-1">
                        <td class="border-b-2 border-x-2 border-black min-h-1">&nbsp;</td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                        <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </MorePaperDoc>
        <MorePaperDoc>
            <div class="flex flex-col items-center">
            <img class="w-[120px] h-auto"
              src="https://www.saving-sskh.com/images/logo-saving.png"
              alt="Logo" />
              
          </div>
          
          <div class="flex flex-col items-end">
        </div>
  
        <p class=" text-xl text-center col-span-2">ใบสมัครเข้าเป็นสมาชิก</p>
        <p class=" text-xl text-center col-span-2">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        <p class=" text-xl text-center col-span-2 mt-4">*********************************</p>
        <div class="flex flex-col items-end mt-3 mr-6">
          <p>สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
          <p >วันที่ .................. เดือน ................. ปี ................ </p>
        </div>
  
        <div class="flex flex-col mt-1">
          <p class="mt-4">เรียน คณะกรรมการดำเนินการสหกรณ๋ออมทรัพย์ โรงพยาบาลศรีสะเกษ จำกัด</p>
        
  
        <div class="flex flex-col mr-6">
          <p class="mt-6 indent-20 ">
            ข้าพเจ้า <FiLL :data="data?.fname" /> <FiLL :data="data?.lname" /> บ้านเลขที่ <FiLL :data="data?.housenumber" /> หมู่ที่ <FiLL :data="data?.village" />
            ถนน <FiLL :data="data?.road" /> ตำบล <FiLL :data="data?.district" /> อำเภอ <FiLL :data="data?.canton" /> จังหวัด <FiLL :data="data?.province" />
            รหัสไปรษณีย์ <FiLL :data="data?.zipCode" /> เบอร์โทรศัพท์ <FiLL :data="data?.phoneNo" />   
            ได้ทราบข้อบังคับของสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด โดยตลอดแล้ว เห็นชอบในวัตถุประสงค์ จึงขอสมัครเข้าเป็นสมาชิกของสหกรณ์ฯ ในฐานะเป็นผู้เข้าซื้อขอจดทะเบียนสหกรณ์ฯ และขอให้ถ้อยคำเป็นหลักฐาน ดังต่อไปนี้.-
          </p>
          <p class="indent-20">
            ข้อ 1. ข้าพเจ้ามีอายุ ปี (เกิดวันที่.........เดือน........พ.ศ.......)เลขประจำตัวประชาชน................ เลขที่บัญชีธนาคารกรุงไทย...................
          </p>
          <p class="indent-20">
            ข้อ 2. ข้าพเจ้าเป็นข้าราชการ/ลูกจ้างประจำ/ พนักงานราชการ/พนักงานกระทรวงสาธารณสุข(ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราวเงินบำรุง (ตามวุฒิ)
            / ลูกจ้างชั่วคราวเงินบำรุงทำงานประจำตำแหน่งสังกัดโรงพยาบาลศรีสะเกษ ได้รับเงินเดือน..........แผนก........บาท(....................)
          </p>
          <p class="indent-20">
          ข้อ 3. ข้าพเจ้ามิได้เป็นสมาชิกในสหกรณ์ฯ อื่นซึ่งมีวัตถุประสงค์ในการให้ยืมเงิน
        </p>
        <p class="indent-20">ข้อ 4. ข้าพเจ้าได้เข้าเป็นสมาชิกในชั้นนี้ ข้าพเจ้าของแสดงความจำนงส่งเงินค่าหุ้นรายเดือนต่อสหกรณ์ฯ ในอัตราเดือนละ บาท (มูลค่าหุ้นละ 10.00 บาท)</p>
        <p class="indent-20">ข้อ 5. ข้าพเจ้าขอแถลงรายการหนี้สินทั้งหมดซึ่งข้าพเจ้ามีอยู่ดังนี้ (แสดงข้อความละเอียดของแต่ละรายคือ ชื่อและสำนักงานของเจ้าหนี้ วันเป็นหนี้ จำนวนหนี้สินตั้งแต่แรก อัตราดอกเบี้ยร้อยละต่อปี
        หลักประกันที่ให้ไว้ จำนวนต้นเงินคงเหลือ จำนวนดอกเบี้ยค้างชำระและเป็นหนี้สินเพื่อการใดให้ครบทุกรายการ)
        อย่างน้อยต้องเป็นไปตามอัตราซึ่งกำหนดไว้ในหนังสือขี้ชวน แต่ถ้าจะแสดงความจำนงสูงกว่าอัตราที่กำหนดไว้ก็ย่อมเป็นการดี</p>
        <p class="text-center">1. .................................................</p>
        <p class="text-center">2. .................................................</p>
        
        <p class="indent-20">ข้อ 6.ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ามีความประสงค์ขอกู้เงินสหกรณ์ฯ เพื่อชำระหนี้ซึ่งข้าพเจ้ามีอยู่ดังกล่าวในข้อ 5 นั้น ข้าพเจ้าขอขี้แจงเหตุผลตังต่อไปนี้.</p>
        <p>&nbsp;</p>
        <p class="indent-20">ข้อ 7. ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ายินยอมและขอร้องให้ผู้บังคับบัญชา หรือเจ้าหน้าที่จ่ายเงินได้รายเดือนของข้าพเจ้าเมื่อได้รับมอบหมายจากสหกรณ์ฯ โปรดหักจำนวนเงินค่าหุ้นรายเดือนและ
          จำนวนเงินงวดชำระหนี้ ข้าพเจ้าต้องส่งต่อสหกรณ์ฯ นั้น จากเงินเดือนของข้าพเจ้าเมื่อจ่ายเพื่อส่งต่อให้สหกรณ์ฯ ด้วย</p>
          
        </div>
        
    </div>
  
        </MorePaperDoc>
        <MorePaperDoc>
            <div class="flex flex-col">
        <p class="indent-20 text-start ml-10">ข้อ 8 ข้าพเจ้าสัญญาว่า  ถ้าคณะผู้จัดจัดตั้งสหกรณ์ตกลงให้ข้าพเจ้าเป็นสมาชิกได้ และเมื่อได้</p>
        <p class="text-start ml-10"> จดทะเบียนสหกรณ์ฯ ขึ้นแล้ว ข้าพเจ้าจะลงลายมือชื่อในทะเบียนสมาชิก ทั้งชำระค่าธรรมเนียมแรกเข้าและ</p>
        <p class="text-start ml-10">เงินดังกล่าว ข้าพเจ้ายินยอมขอร้องให้ปฏิบัติตามความในข้อ 7 ด้วย</p>
        <p class="indent-20 text-start ml-10">ข้อ 9. ถ้าข้าพเจ้าได้เป็นสมาชิก จะปฏิบัติตามข้อบังคับ ระเบียบ และมติของสหกรณ์ฯ</p>
        <br>
        <p class="text-start ml-10">ทุกประการ</p>
        </div>
  
        <div class="grid grid-cols-2 justify-center mt-3">
<div class="flex items-start">

</div>


<div class="">

  <p class="mt-4 text-right mr-20">..............................................................</p>
  <p class="mt-4 text-right mr-20">(...........................................................)</p>
  <p class="mt-4 text-right mr-40">ผู้สมัคร</p>
  

</div>

</div>
        </MorePaperDoc>
        <MorePaperDoc>
            <div class="flex flex-col items-center">
                <img class="w-[120px] h-auto"
                src="https://www.saving-sskh.com/images/logo-saving.png"
                alt="Logo" />
            </div>
            <div class="mx-auto max-w-prose text-left mt-2">
                <p class="text-center font-bold">หนังสือยินยอมให้ส่วนราชการหักเงินชำระหนี้</p>
                <p class="text-center font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <div class="text-sm">
                <p class="text-right mt-5 mb-5">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด 
                    <br>วันที่......... เดือน...................... พ.ศ..........</p>
                <p>
                    <span class="ml-20">ข้าพเจ้า</span> <FiLL :data="data?.fname" /> <FiLL :data="data?.lname" /> 
                    อายุ <FiLL :data="data?.age" />   ปี 
                    ปัจจุบันอาศัยอยู่บ้านเลขที่ <FiLL :data="data?.houseNumber" /> 
                    หมู่ที่ <FiLL :data="data?.village" />
                    ตรอก/ซอย <FiLL :data="data?.alley" />
                    ถนน <FiLL :data="data?.road" />
                    ตำบล/แขวง <FiLL :data="data?.district" />
                    อำเภอ/เขต <FiLL :data="data?.canton" />
                    จังหวัด <FiLL :data="data?.province " />
                    เบอร์โทร <FiLL :data="data?.phoneNo" />
                

                รับราชการสังกัด <span class="font-bold">โรงพยาบาลศรีสะเกษ</span> ตำแหน่ง <FiLL :data="data?.position" />
                และเป็นสมาชิก <span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> เลขทะเบียนสมาชิก <FiLL :data="data?.memberNumber" />  
                
                มีความประสงค์ให้ส่วนราชการ/ หน่วยงานที่ข้าพเจ้าสังกัดอยู่หักเงิน และนำส่งเงินให้สหกรณ์ออมทรัพย์
                ที่ข้าพเจ้าเป็นสมาชิก จึงมีหนังสือให้ความยินยอมฉบับนี้ไว้กับ <span class="font-bold">โรงพยาบาลศรีสะเกษ</span> ทั้งปัจจุบันอนาคต ดังนี้
                </p>
                <p><span class="ml-20">ข้อ 1.</span>ยินยอมให้เจ้าหน้าที่ผู้จ่ายเงินหักเงินเดือน ค่าจ้าง หรือเงินบำนาญ 
                    หรือเงินบำเหน็จ หรือเงินอื่นโตที่ข้าพเจ้าพึงได้รับจากทางราชการหรือหน่วยงานที่ข้าพเจ้าสังกัดอยู่ ทั้งปัจจุบัน 
                    อนาคต ตามจำนวนที่<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> ได้แจ้งให้ในแต่ละเดือนส่งชำระหนี้ ชำระค่าหุ้น 
                    หรือเงินอื่นแล้วแต่กรณีให้<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าทุกเดือน</p>
                <p><span class="ml-20">ข้อ 2.</span>กรณีข้าพเจ้าพ้นจากการเป็นข้าราชการ/ลูกจ้างและได้รับบำเหน็จบำนาญหรือเงินอื่นใต 
                    ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินของส่วนราชการหรือหน่วยงานที่ข้าพเจ้าสังกัดอยู่หักเงินจากเงินบำเหน็จ หรือเงินป่านาญ 
                    หรือเงินอื่นใดที่ข้าพเจ้าพึงได้รับจากทางราชการตามข้อ 1 ตามจำนวนที่<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> 
                    ได้แจ้งและให้ส่งเงินจำนวนดังกล่าวนั้น ให้<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าทุกครั้ง</p>
                <p><span class="ml-20">ข้อ 3.</span>การหักเงินเดือน ค่าจ้าง เงินบำนาญ หรือเงินบำเหน็จ หรือเงินอื่นใด ไม่ว่ากรณีใด 
                    ตามข้อ 2 เมื่อได้หักชำระหนี้แก่ทางราชการแล้ว(ถ้ามี) ข้าพเจ้ายินยอมให้หักเงินดังกล่าวส่งชำระหนี้ให้ 
                    <span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> ก่อนเป็นอันดับแรก</p>
                <p><span class="ml-20">ข้อ 4.</span>หนังสือยินยอมให้หักเงินตามข้อ 3 นี้ ให้มีผลตั้งแต่บัดนี้เป็นต้นไปและข้าพเจ้าสัญญาว่า 
                    จะไม่ถอนการให้คำยินยอมนี้ไม่ว่าทั้งหมดหรือบางส่วน จนกว่าข้าพเจ้าจะได้พ้นจากการเป็นสมาชิกของสหกรณ์ 
                    หรือพ้นภาระหนี้สินที่ข้าพเจ้ามีต่อสหกรณ์ เว้นแต่จะได้รับคำยินยอมเป็นหนังสือจาก<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span></p>
                <p><span class="ml-20">ข้อ 5.</span>ในกรณีที่ข้าพเจ้าต้องเปลี่ยนแปลงส่วนราชการที่สังกัด โดยโอนไปสังกัดส่วนราชการอื่น 
                    หรือหน่วยงานอื่นของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินของส่วนราชการหรือหน่วยงานของรัฐ 
                    หรือองค์กรปกครองส่วนท้องถิ่นแห่งใดแห่งหนึ่ง ที่ข้าพเจ้าโอนไปสังกัดมีอำนาจ</p>
                </div>
            </div>
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply7 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <div class="flex flex-col items-center">
                <img class="w-[120px] h-auto"
                src="https://www.saving-sskh.com/images/logo-saving.png"
                alt="Logo" />
            </div>
            <div class="mx-auto max-w-prose text-left mt-2">
                <p class="text-center font-bold">หนังสือยินยอมให้ส่วนราชการหักเงินชำระหนี้</p>
                <p class="text-center font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <div class="text-sm">
                <p class="text-right mt-5 mb-5">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด 
                    <br>วันที่......... เดือน...................... พ.ศ..........</p>
                <p>
                    <span class="ml-20">ข้าพเจ้า</span> <FiLL :data="data?.fname" /> <FiLL :data="data?.lname" /> 
                    อายุ <FiLL :data="data?.age" />   ปี 
                    ปัจจุบันอาศัยอยู่บ้านเลขที่ <FiLL :data="data?.houseNumber" /> 
                    หมู่ที่ <FiLL :data="data?.village" />
                    ตรอก/ซอย <FiLL :data="data?.alley" />
                    ถนน <FiLL :data="data?.road" />
                    ตำบล/แขวง <FiLL :data="data?.district" />
                    อำเภอ/เขต <FiLL :data="data?.canton" />
                    จังหวัด <FiLL :data="data?.province " />
                    เบอร์โทร <FiLL :data="data?.phoneNo" />
                

                รับราชการสังกัด <span class="font-bold">โรงพยาบาลศรีสะเกษ</span> ตำแหน่ง <FiLL :data="data?.position" />
                และเป็นสมาชิก <span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> เลขทะเบียนสมาชิก <FiLL :data="data?.memberNumber" />  
                
                มีความประสงค์ให้ส่วนราชการ/ หน่วยงานที่ข้าพเจ้าสังกัดอยู่หักเงิน และนำส่งเงินให้สหกรณ์ออมทรัพย์
                ที่ข้าพเจ้าเป็นสมาชิก จึงมีหนังสือให้ความยินยอมฉบับนี้ไว้กับ <span class="font-bold">โรงพยาบาลศรีสะเกษ</span> ทั้งปัจจุบันอนาคต ดังนี้
                </p>
                <p><span class="ml-20">ข้อ 1.</span>ยินยอมให้เจ้าหน้าที่ผู้จ่ายเงินหักเงินเดือน ค่าจ้าง หรือเงินบำนาญ 
                    หรือเงินบำเหน็จ หรือเงินอื่นโตที่ข้าพเจ้าพึงได้รับจากทางราชการหรือหน่วยงานที่ข้าพเจ้าสังกัดอยู่ ทั้งปัจจุบัน 
                    อนาคต ตามจำนวนที่<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> ได้แจ้งให้ในแต่ละเดือนส่งชำระหนี้ ชำระค่าหุ้น 
                    หรือเงินอื่นแล้วแต่กรณีให้<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าทุกเดือน</p>
                <p><span class="ml-20">ข้อ 2.</span>กรณีข้าพเจ้าพ้นจากการเป็นข้าราชการ/ลูกจ้างและได้รับบำเหน็จบำนาญหรือเงินอื่นใต 
                    ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินของส่วนราชการหรือหน่วยงานที่ข้าพเจ้าสังกัดอยู่หักเงินจากเงินบำเหน็จ หรือเงินป่านาญ 
                    หรือเงินอื่นใดที่ข้าพเจ้าพึงได้รับจากทางราชการตามข้อ 1 ตามจำนวนที่<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> 
                    ได้แจ้งและให้ส่งเงินจำนวนดังกล่าวนั้น ให้<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าทุกครั้ง</p>
                <p><span class="ml-20">ข้อ 3.</span>การหักเงินเดือน ค่าจ้าง เงินบำนาญ หรือเงินบำเหน็จ หรือเงินอื่นใด ไม่ว่ากรณีใด 
                    ตามข้อ 2 เมื่อได้หักชำระหนี้แก่ทางราชการแล้ว(ถ้ามี) ข้าพเจ้ายินยอมให้หักเงินดังกล่าวส่งชำระหนี้ให้ 
                    <span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> ก่อนเป็นอันดับแรก</p>
                <p><span class="ml-20">ข้อ 4.</span>หนังสือยินยอมให้หักเงินตามข้อ 3 นี้ ให้มีผลตั้งแต่บัดนี้เป็นต้นไปและข้าพเจ้าสัญญาว่า 
                    จะไม่ถอนการให้คำยินยอมนี้ไม่ว่าทั้งหมดหรือบางส่วน จนกว่าข้าพเจ้าจะได้พ้นจากการเป็นสมาชิกของสหกรณ์ 
                    หรือพ้นภาระหนี้สินที่ข้าพเจ้ามีต่อสหกรณ์ เว้นแต่จะได้รับคำยินยอมเป็นหนังสือจาก<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span></p>
                <p><span class="ml-20">ข้อ 5.</span>ในกรณีที่ข้าพเจ้าต้องเปลี่ยนแปลงส่วนราชการที่สังกัด โดยโอนไปสังกัดส่วนราชการอื่น 
                    หรือหน่วยงานอื่นของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินของส่วนราชการหรือหน่วยงานของรัฐ 
                    หรือองค์กรปกครองส่วนท้องถิ่นแห่งใดแห่งหนึ่ง ที่ข้าพเจ้าโอนไปสังกัดมีอำนาจ</p>
                </div>
            </div>
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply9 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <div class="flex flex-col items-center">
                <img class="w-[120px] h-auto"
                src="https://www.saving-sskh.com/images/logo-saving.png"
                alt="Logo" /> 
            </div>
            <div class="flex flex-col items-end">
            </div>
            <p class=" text-xl text-center col-span-2">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
            <div class="flex flex-col items-end mt-3 mr-6">
                <p>เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <p class="mr-20">0859 ถนนกสิกรรม ตำบลเมืองใต้</p>
                <p class="mr-14">อำเภอเมือง จังหวัดศรีสะเกษ 33000</p>
                <p class="mr-20 mt-4" >วันที่...............เดือน...................................ปี................</p>
            </div>
    
            <div class="flex flex-col mt-1">
                <p class="mt-4">เรียน ประธานกรรมการสหกรณ์ออมทรัทย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                
        
                <div class="flex flex-col mr-6">
                    <p class="mt-6 indent-20 ">
                        ข้าพเจ้า <FiLL :data="data?.fname" /> <FiLL :data="data?.lname" /> เป็นข้าราชการ/ลูกจ้างประจำ/
                        พนักงานราชการ/พนักงานกระทรวงสาธารณสุข (ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราว
                        เงินบำรุง (ตามวุฒิ) ลูกจ้างชั่วคราวเงินบำรุง ตำแหน่ง <FiLL :data="data?.position" /> <span class="font-bold"> สังกัดโรงพยาบาลศรีสะเกษ เป็นสมาชิกสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> เลขทะเบียนที่ <FiLL :data="data?.regisNumber" />
                        และยินยอมให้สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด หักเงินที่ข้าพเจ้าได้รับเงินเดือน ค่าจ้าง
                        เงินบำนาญ เงินบำเหน็จ เงินบำเหน็จตกทอด กบข. ฌกส. หรือเงินอื่นใดที่ข้าพเจ้ามีสิทธิได้รับจาก
                        ส่วนราชการต้นสังกัด เพื่อชำระค่าหุ้นหรือหนี้ตามสัญญากู้เงิน ไม่ว่าจะเป็นหนี้เงินต้นและดอกเบี้ย ค่าอุปกรณ์
                        แห่งหนี้และค่าเสียหายตามที่ปรากฏในสัญญากู้ได้เต็มจำนวน ทั้งนี้โดยไม่ต้องบอกกล่าวให้ผู้ยินยอมหรือ
                        ผู้รับผลประโยชน์ทราบล่วงหน้าก่อน
                    </p>


                    <p class="mt-14 ml-40">
                        <span class="ml-14">
                            ลงชื่อ..................................................................ผู้ให้คำยินยอม (ผู้สมัคร)
                        </span>
                    </p>
                    <p class="mb-6 text-center">(<FiLL :data="data?.fname" /> <FiLL :data="data?.lname" />)</p>

                    <p class="mt-4 ml-40">
                        <span class="ml-14">
                            ลงชื่อ..................................................................พยาน(ผู้รับผลประโยชน์)
                        </span>
                    </p>
                    <p class="text-center">(<FiLL :data="data?.fnameInterestedWitness" /> <FiLL :data="data?.lnameInterestedWitness" />)</p>
                    <p class="text-center">เกี่ยวข้องเป็น <FiLL :data="data?.relation" /></p>
                    <p class="text-center">เบอร์โทร <FiLL :data="data?.phoneNo" /></p>


                    <p class="mt-14 ml-40">
                        <span class="ml-14">
                            ลงชื่อ..................................................................พยาน(หัวหน้าฝ่ายการเงิน)
                        </span>
                    </p>
                    <p class="mb-6 text-center">(..................................................................)</p>

                    <p class="mt-4 ml-40">
                        <span class="ml-14">
                            ลงชื่อ..................................................................ผู้อำนวยการโรงพยาบาลศรีสะเกษ
                        </span>
                    </p>
                    <p class="text-center">(..................................................................)</p>
                </div>
            </div>
        </MorePaperDoc>
    </main>
</template>
<script setup lang="ts">
import Index from '../index.vue';

const { data } = await useFetch<any>('/api/newMembership');
</script>