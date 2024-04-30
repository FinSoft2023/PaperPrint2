<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
            <div class="border-solid border-2 border-slate-950 mt-20">
                <p class="font-bold underline">ขั้นตอนการสมัครสมาชิก สสธท. ประเภทสมทบ(แอดไลน์ 0943934878 เพื่อสอบถามรายละเอียด)รับเฉพาะ 
                    <p class="font-bold underline"> ค่สมรส และบุตรที่บรรลุนิติภาวะ (20 ปีขึ้นไป) และประกอมอาชีพแล้ว หรือนักศึกษา ไม่รับอาชีพเกษตรกร</p>
                </p>
                <div class="grid grid-cols-3 justify-center">
                    <div class="flex flex-col items-start col-span-2">
                        <p >1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
                        <p >2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของสมาคมในชุดสมัครเท่านั้น)</p>
                        <p >3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
                        <p class="ml-8"> 3.1 สำเนาบัตรประชาชนผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ บิดา มารดา</p>
                        <p class="ml-8"> 3.2 สำเนาทะเปียนบ้านผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
                        <p class="ml-8"> 3.3 สำเนาทะเบียนสมรส หรือสำเนาทะเปียนหย่า ของผู้สมัคร (ถ้ามี) จำนวน 1 ฉบับ</p>
                        <p class="ml-8"> 3.4 สำเนาใบเปลี่ยนชื่อ / สกุล ของผู้สมัครและผู้รับผลประโยชน์ (ถ้ามี) อย่างละ 1 ฉบับ</p>
                        <p class="ml-8"> 3.5 สำเนาปัตรข้าราชการ หรือบัตรพนักงานต่างๆ หรือหนังสือรับรองการเป็นพนักงาน</p>
                        <p>4.ผู้รับผลประโยชน์ต้องลงชื่อในส่วนผู้รับผลประโยชน์ และ แบบคำรับรองสุขภาพตนเอง</p>
                        <p>5.ผู้สมัครต้องมาสมัครด้วยตนเอง เท่านั้น</p>
                        <p>6.ชำระค่าสมัครและเงินสงเคราะห์ล่วงหน้า ด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ</p>
                        <p>จำนวน 5,540.-บาท ผู้สมัครอายุไม่เกิน 54 ปี บริบูรณ์ ณ วันสมัคร</p>
                        <p>7.เปิดรับสมัครวันที่ 1-25 ของทุกเดือน ช่วงปลายเดือนจะไม่รับสมัคร แต่ตรวจลอบเอกสารได้</p>
                    
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="border-solid border-2 border-slate-950  font-bold text-xl mt-12 mr-6">
                            <p class="ml-4 mr-4">
                            <p> สสธท. ไม่เปิดรับ </p>
                            <p> สมาชิกสมทบ </p>
                            <p> บิดา มารดา </p></p>
                            
                        </div>
                    </div>

                </div>
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
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 1. สำเนาบัตรข้าราชการหรือบัตรประชาชน</p>
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 2. สำเนาทะเบียนบ้าน</p>
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 3. สำเนาทะเบียนสมรส (ถ้ามี)</p>
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 4. ใบสำคัญการเปลี่ยนชื่อ-นามสกุล (ถ้ามี)</p>
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 5. ใบรับรองแพทย์ฉบับจริง ที่ สสธท.กำหนด มีอายุไม่เกิน 30 วัน</p>
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 6. สำเนาบัตรและสำเนาทะเบียนบ้านผู้รับเงินสงเคราะห์</p>
                        <p class="text-xs font-semibold" > <FiLLBox checked/> 7. กรณีสมาชิกสมัครตรง ต้องมีใบเสร็จรับเงินงวดสุดท้าย หรือใบรับรองของสหกรณ์ต้นสังกัด</p>
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
                  </p>
                  <p class="text-sm font-semibold underline underline-offset-2">ใบเสร็จรับเงิน สสธท.เล่มที่ <FiLL class="min-w-20" :data="data?.nb" /></p>
                  <p class="text-sm font-semibold underline underline-offset-2">เลขที่ <FiLL class="min-w-20" :data="data?.member" /></p>
                  
              </div>

            </div>
            
      <p class="text-lg text-center font-semibold ml-32 mt-48"> ใบสมัครสมาชิก <span class="underline underline-offset-2">ประเภทสามัญ</span>
      (วาระปกติ)
      <br> สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณะสุขไทย (สสธท.)
      </p>
      <p class="text-base ml-96"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" />
       <br>วันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /></p>
     
       <p class="text-base mt-2"> <span class="ml-12">ข้าพเจ้า</span> (นางสาว/นาง/นาย) 
              <FiLL class="min-w-80" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-96" />
            เกิดวันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /> คู่สมรสชื่อ <FiLL class="min-w-96" :data="`${data?.newprefix} ${data?.newfName}  ${data?.lName}`"/>
          </p> 
          <p class="text-base"> (1) <FiLLBox :checked="data?.savings"/> สมาชิกสามัญของสหกรณ์ออมทรัพย์ <FiLL :data="data?.savings" class="min-w-40" />จำกัด เลขสมาชิกสหกรณ์ <FiLL :data="data?.member" class="min-w-32" />
          <span class="text-base ml-6"><FiLLBox /> อื่นๆ </span>(ระบุ).....................................................................................................
          </p>
          <p class="text-base"> (2) ตำแหน่ง <FiLL :data="data?.position" class="min-w-40" /> หรือปฏิบัติหน้าที่ <FiLL :data="data?.position" class="min-w-40" />
      <br> <span class="text-base ml-6"> สถานที่ปฏิบัติงาน / ชื่อหน่วยงาน </span><FiLL :data="data?.agency" class="min-w-60" />  ตำบล (แขวง) <FiLL :data="data?.district" class="min-w-28" /><br>
      <span class="text-base ml-6">อำเภอ (เขต)</span> <FiLL :data="data?.district" class="min-w-32" />  จังหวัด <FiLL :data="data?.province" class="min-w-32" /> รหัสไปรษณี <FiLL :data="data?.zipcode" class="min-w-32" />
      <br> <span class="text-base ml-6">โทรศัพท์ (ที่ทำงาน)</span> <FiLL :data="data?.nbPhon" class="min-w-32" /> 
    </p>
<p class="text-base ">(3)  สถานที่อยู่(ในการจัดส่งเอกสาร) <br>
<span class="text-base ml-6">บ้านเลขที่ </span><FiLL :data="data?.housenb" class="min-w-32" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-32" /> ซอย .................... ถนน <FiLL :data="data?.road" class="min-w-32" />
<br> <span class="text-base ml-6">ตำบล (แขวง)</span> <FiLL :data="data?.district" class="min-w-32" />
      อำเภอ (เขต) <FiLL :data="data?.district" class="min-w-32" /> จังหวัด <FiLL :data="data?.province" class="min-w-32" /><br>  <span class="text-base ml-6">รหัสไปรษณี</span> <FiLL :data="data?.zipcode" class="min-w-32" />
      โทรศัพท์ (บ้าน) <FiLL :data="data?.nbPhon" class="min-w-32" />  โทรศัพท์ (มือถือ) <FiLL :data="data?.nbPhon" class="min-w-32" /> 
</p> 
<p class="text-base ">(4) การชำระเงิน ดังนี้ <br>
<span class="text-base ml-12">4.1การชำระเงินครั้งแรก</span>
<br>
<div class="grid grid-rows-2 grid-flow-col">
                <div class="row-span-3">
                  <p class="ml-12" ><FiLLBox :checked="data?.savings"/> ค่าสมัครสมาชิกครั้งแรก</p>
                  <p class="ml-12"> <FiLLBox :checked="data?.savings"/> ค่าบำรุงรายปี </p>
                 
                </div>
                <div class="row-span-2 col-span-2 ml-10">
                  <p>เป็นเงิน 20 บาท</p>
                  <p>เป็นเงิน 20 บาท</p>                  
                </div>
            </div>
            <span class="text-base ml-12"><FiLLBox :checked="data?.savings"/> เงินสงเคราะห์ล่วงหน้า..............5,500.....บาท</span> <br>
            <span class="text-base ml-20">รวมชำระหนี้ครั้งนี้ เป็นเงิน..........5,540.....บาท</span> (ห้าพันห้าร้อยสี่สิบบาทถ้วน)<br>
            <span class="text-base ml-12">4.2 การชำระเงินครั้งต่อไป ข้าพเจ้ายินยอมให้หักและชำระเงินสงเคราะห์ล่วงหน้า ดังน้ี</span><br>
            <span class="text-base ml-12"> <FiLLBox :checked="data?.savings"/> ชำเป็นเงินสดที่สมาคมหรือศุนย์ประสานงานสมาคม</span><br>
            <span class="text-base ml-12"> <FiLLBox :checked="data?.savings"/> ชำระเงินเข้าบัญชีสมาคมธนาคารไทยพาณิชย์ สาขาเดอะคริสตัล ราชพฤกษ์ ชื่อบัญชี สมาคมฌาปนกิจ</span>สงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย
            สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย ประเภทกระแสรายวัน (Bill Payment Pay- In Slip) เลขบัญชี 458-0-39888-5<br>
            <span class="text-base ml-12"> <FiLLBox :checked="data?.savings"/> ชำระจากเงินปันผล เฉลี่ยคืน จากสหกรณ์ต้นสังกัด <br>
              <span class="text-base ml-12"> ข้าพเจ้าได้ทราบและเข้าใจวัตถุประสงค์ </span> ข้อบังคับ ระเบียบ และประกาศของสมาคมฌาปนกิจสงเคราะห์</span>
            สมาชิกสามัญของสหกรณ์ออมทรัพย์สาธารณสุขไทย แล้ว มีความประสงค์สมัครเป็นสมาชิก และยินยอมปฏิบัติตามข้อบังคับและเงื่อไขดังกล่าวทุกประการ<br>
</p> 
<p class="text-base pl-96 ">ลงชื่อ...........................................................ผู้สมัคร </p>
<p class="text-base pl-96 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> )</p>   
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 3 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 4 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 5 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 6 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 7 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 8 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 9 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 10 -->
            
        </MorePaperDoc>
    </main>
</template>

<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>