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
            <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>
      <p class="text-lg text-center font-semibold ml-32"> ใบสมัครสมาชิก (ล้านที่ 3) 
      <br> กองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย (กสธท.)
      </p>
      <p class="text-base ml-96"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" />
       <br>วันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /></p>
     
       <p class="text-base"> <span class="ml-12">ข้าพเจ้า</span> (นางสาว/นาง/นาย) 
              <FiLL class="min-w-80" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-96" />
            เกิดวันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /> คู่สมรสชื่อ <FiLL class="min-w-96" :data="`${data?.newprefix} ${data?.newfName}  ${data?.lName}`"/>
          </p> 
          <p class="text-base"> (1) <FiLLBox :checked="data?.savings"/> สมาชิกสามัญของสหกรณ์ออมทรัพย์ <FiLL :data="data?.savings" class="min-w-40" />จำกัด เลขสมาชิกสหกรณ์ <FiLL :data="data?.member" class="min-w-32" />
          <span class="text-base ml-6"><FiLLBox /> อื่นๆ </span>(ระบุ).....................................................................................................
          </p>
          <p class="text-base"> (2) ตำแหน่ง <FiLL :data="data?.position" class="min-w-40" /> หรือปฏิบัติหน้าที่ <FiLL :data="data?.position" class="min-w-40" />
      <br> <span class="text-base ml-6"> สถานที่ปฏิบัติงาน / ชื่อหน่วยงาน </span><FiLL :data="data?.agency" class="min-w-80" /> <br> <span class="text-base ml-6">ตำบล (แขวง)</span> <FiLL :data="data?.district" class="min-w-44" />
      อำเภอ (เขต) <FiLL :data="data?.district" class="min-w-32" /> <br> <span class="text-base ml-6">จังหวัด</span> <FiLL :data="data?.province" class="min-w-32" /> รหัสไปรษณี <FiLL :data="data?.zipcode" class="min-w-32" />
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
            <span class="text-base ml-20">รวมชำระหนี้ครั้งนี้ เป็นเงิน..........5,500.....บาท</span> (ห้าพันห้าร้อยยี่สิบบาทถ้วน)<br>
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
    </main>
</template>

<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>