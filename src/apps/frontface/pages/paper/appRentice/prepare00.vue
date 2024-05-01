<template>
    <main>
        <PaperDoc> 
            <br><br> 
            <div class="border-2 border-slate-950">
              <p class="underline underline-offset-1 text-lg font-semibold text-center "> ขั้นตอนการสมัครสมาชิกกองทุนสวัสดิการสมาชิก กสธท, ล้านที่ 3</p>
              <p class="text-base">1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
              <p class="text-base">2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของสมาคมในชุดสมัครเท่านั้น)</p>
              <p class="text-base">3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
              <p class="text-base ml-8">3.1 สำเนาบัตรประชาชนผู้สมัคร จำนวน 1 ฉบับ</p>
              <p class="text-base ml-8">3.2 สำเนาหนังสือการเป็นสมาชิก สสธท. จำนวน 1 ฉบับ</p>
              <p class="text-base ml-8">3.3 สำเนาหนังสือการเป็นสมาชิก กสธท. ล้านที่ 2 จำนวน 1 ฉบับ</p>
              <p class="text-base">4.ผู้รับผลประโยชน์(คนเดิม) ต้องลงชื่อในส่วนของแบบคำรับรองสุขภาพตนเอง (ไม่ต้องแนบเอกสารใดๆ)</p>
              <p class="text-base">5. ผู้สมัครต้องมาสมัครด้วยตนเอง เท่านั้น</p>
              <p class="text-base">6.ชำระค่าสมัครและค่าเบี้ยประกันล่วงหน้า ด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ</p>
              <p class="text-base">7.เปิดรับสมัครวันที่ 1-25 ของทุกเดือน ช่วงปลายเดือนจะไม่รับสมัคร แต่ตรวจสอบเอกสารได้</p>
              <p class="text-base">8.ผู้สมัครอายุไม่เกิน 64 ปี 6 เดือน</p>
              <p class="text-base">9.ผู้รับผลประโยชน์จะเป็นคนเดิม ที่เคยกรอกในการสมัคร สสธท. หากต้องการเพิ่มผู้รับผลประโยชน์
                                   ต้องกรอกแบบฟอร์มขอเพิ่มผู้รับผลประโยชน์ และแนบเอกสารของผู้สมัครและคนที่เพิ่มขึ้นมาด้วย</p>
              <p class="text-base">10.กองทุนสวัสดิการ กสธท.ล้านที่ 2 เป็นการเพิ่มสวัสดิการให้กับสมาชิก สสธท. โดยการร่วมมือกับบริษัทประกันฯ</p>
            </div>
            
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
          <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
              <div class="items-start mt-8">
                <div class="border-2 border-black p-1  ">
                  <p class="text-xs font-semibold tracking-tighter">โปรดเขียนตัวบรรจงและกรอกข้อมูลให้ครบทุกช่อง
                  </p>
                </div>
                <div class="border-2 border-black p-1  ">

                  <p class=" text-xs font-semibold">เอกสารประกอบ
                  <p class=" text-xs font-semibold">(เริ่มใช้ตั้งแต่วันที่ 1 กุมภาพันธ์ 2565 เป็นต้นไป)
                   <p class="text-xs font-semibold" > <FiLLBox /> 1. สำเนาบัตรข้าราชการหรือบัตรประชาชน พร้อมรับรองสำเนา</p>
                   <p class="text-xs font-semibold" > <FiLLBox /> 2. สำเนาหนังสือสำคัญ สสรท. พร้อมรับรองสำเนา</p>
                   <p class="text-xs font-semibold" > <FiLLBox /> 3. ใบรับรองแพทย์ฉบับจริง มีอายุไม่เกิน 30 วัน
                                                                     (ตามแบบฟอร์มใบรับรองแพทย์ของ กสสท.)</p>



                  </p>
                  </p>
                </div>

             
                </div>

              <div class="flex flex-col items-center row-span-2 mt-20">
                          <img class="w-[100px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
              </div>

              <div class="flex flex-col items-end row-span-2">
                  <p class="text-sm mt-8 mr-12 font-semibold">สสธท.1
                  </p><br>
                  <p class="text-sm font-semibold underline underline-offset-2">เลขทะเบียนสมาชิก กสธท. <FiLL class="min-w-20" :data="data?.member" /></p>
                  
              </div>

            </div>
            
      <p class="text-lg text-center font-semibold  mt-36"> ใบสมัครสมาชิก (ล้านที่ 3) 
      <br> กองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย (กสธท.)
      </p>
      <p class="text-base ml-96"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" />
       <br>วันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /></p>
     
       <p class="text-base"> <span class="ml-12">ข้าพเจ้า</span> (นางสาว/นาง/นาย) 
              <FiLL class="min-w-80" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-96" />
            เกิดวันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /> 
          </p> 

        
          <span class="text-base ml-12">1. เลขทะเบียนสมาชิก กสรท. ที่...........</span>
          <span class="text-base ml-6"><FiLLBox /> สหกรณ์ออมทรัพย์........จำกัด</span>
          <span class="text-base ml-6"><FiLLBox /> สมัครตรง กสธท.........</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นสมาชิกสามัญ สสธท. และ กลธท. ด้านที่ 2</span>
          <span class="text-base ml-6"><FiLLBox /> เป็นเจ้าหน้าที่ กสธท./สสธท</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นกรรมการ/ผู้ตรวจสอบกิจการ/เจ้าหน้าที่ ชสอ.</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นสมาชิกสมทบ สสธท. และ กสชท. ล้านที่ 2 (ประเภทสมทบสหกรณ์ออมทรัพย์) ที่เป็นพนักงานราชการ/พกส./ 
                                                   ลูกจ้างชั่วคราว ในสังกัดกระทรวงสาธารณสุข</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นสมาชิกสมทบคู่สมรส/สมทบบุตร สสชท, และ กลธท. ด้านที่ 2 ที่ประกอบอาชีพ (โปรดระบุ)..........<br>ยกเว้นอาชีพเกษตรกร และผู้ไม่ได้ประกอบอาชีพ</span>

          <br><span class="text-base ml-12">2. สถานที่อยู่ (ในการจัดส่งเอกสาร)</span>
<span class="text-base ml-6">บ้านเลขที่ </span><FiLL :data="data?.housenb" class="min-w-32" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-32" /> ซอย .................... ถนน <FiLL :data="data?.road" class="min-w-32" />
<br> <span class="text-base ml-6">ตำบล (แขวง)</span> <FiLL :data="data?.district" class="min-w-32" />
      อำเภอ (เขต) <FiLL :data="data?.district" class="min-w-32" /> จังหวัด <FiLL :data="data?.province" class="min-w-32" /><br>  <span class="text-base ml-6">รหัสไปรษณี</span> <FiLL :data="data?.zipcode" class="min-w-32" />
      โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-32" />  โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-32" /> 

<br>
<span class="text-base ml-12"> 3. ขอสมัครเป็นสมาชิกของกองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย (กสธท.) ด้านที่ 3</span>
<br>
<span class="text-base ml-12"> 4. การชำระเงินค่าสมัครและเบี้ยประกันชีวิต ดังนี้</span>
<br>
<span class="text-base ml-20"> 4.1 การชำระเงินครั้งแรกเริ่มสมัคร เป็นเงิน.... ...บาท (ค่าสมัคร 100 บาท และเบี้ยประกันชีวิต.......บาท</span>
<br>
<span class="text-base ml-20"> 4.2 การชำระเงินครั้งต่อไป ข้าพเจ้ายินยอมให้หักและชำระเงินเบี้ยประกันต่ออายุ กลธท. ล้านที่ 3 ดังนี้</span>
<br> 
<span class="text-base ml-24"><FiLLBox /> เป็นสมาชิกสามัญ สสธท. และ กลธท. ด้านที่ 2</span>
<br> 
<span class="text-base ml-24"><FiLLBox /> นำชำระเอง / โอนเข้าระบบ KTB teller payment ของธนาคารกรุงไทย สาขานนทบุรี ชื่อบัญชี กองทุน
สวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย รหัสหน่วยงาน Company Code : 92778 ค่าธรรมเนียมการโอน 10 บาท</span>
<br>
<span class="text-base ml-24"><FiLLBox />ชำระจากเงินปันผล เฉลี่ยคืน จากสหกรณ์ต้นสังกัด</span>
<br>
<span class="text-base ml-12"> 5. หากข้าพเจ้าเสียชีวิต ข้าพเจ้ายินยอมมอบเงินสวัสดิการสงเคราะห์ให้สหกรณ์ต้นสังกัด เพื่อชำระหนี้ของข้าพเจ้า (กรณีสหกรณ์ต้น
สังกัดเป็นศูนย์ประสานงาน) และส่วนที่เหลือมอบให้บุคคล ตามที่กำหนดไว้ในใบสมัครหรือหนังสือเปลี่ยนแปลงของสมาคม สสขท.</span>
<br>
<span class="text-base ml-12"> 6. ข้าพเจ้าขอสัญญาว่า เมื่อคณะกรรมการอนุมัติให้ข้าพเจ้าเป็นสมาชิกแล้ว ข้าพเจ้าจะปฏิบัติตามระเบียบและประกาศของ
กองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย ทุกประการ และจะส่งเสริม สนับสนุน กสธท. ให้เจริญรุ่งเรืองยิ่งๆ ขึ้นไป</span>
<br>
<span class="text-base ml-12"> 6. ข้าพเจ้า......ขอรับรองว่า ข้าพเจ้ามีสุขภาพสมบูรณ์แข็งแรง (ไม่เคยมีประวัติ
การรักษาโรคตามใบรับรองแพทย์ที่ กสอท. กำหนด) มาก่อนวันสมัคร ตามระเบียบ กสธท. ข้อ 9.3 หากข้าพเจ้ารู้แล้วละเว้นเสีย
ไม่เปิดเผยข้อความจริงหรือแถลงข้อความนั้น เป็นความเท็จ ข้าพเจ้ายินยอม ให้ กสธท. ใช้สิทธิ์ตัดรายชื่อพ้นสมาชิกภาพ
กสธท. ตามระเบียบ กสธท. ข้อ 14 (1) (3) และ (7) ได้</span>



                

<p class="text-base pl-96 ">ลงชื่อ...........................................................ผู้สมัคร </p>
<p class="text-base pl-96 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> )</p>

        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 3 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 4 -->
            
        </MorePaperDoc>
    </main>
</template>

<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>