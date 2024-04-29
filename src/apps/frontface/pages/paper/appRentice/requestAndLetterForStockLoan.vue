<template>
  <main class="font-sans">
    <PaperDoc>  <!-- หน้า 1 -->
      <div class="grid justify-items-center mt-20">
        <div class="grid grid-cols-3 justify-center">
          <div class="flex items-start">
            <div class="border-2 border-black p-2">
              <p>รับที่ <FiLL :data="data?.test" class="min-w-16" /> วันที่<FiLL :data="data?.test" class="min-w-16" />
                <FiLL :data="data?.receivedLocation" no-line />
              </p>
              <p>เจ้าหน้าที่/กรรมการ<FiLL :data="data?.test" class="min-w-20" />
                <FiLL :data="data?.dayMonthYear"date-format="short" no-line />
              </p>
              <p>แก้ไข/ส่งคืน<FiLL :data="data?.test" class="min-w-14" />/<FiLL :data="data?.test" class="min-w-14" />
                <FiLL :data="data?.dayMonthYear"date-format="short" no-line />
              </p>
              <p>สังกัด<FiLL :data="data?.test" class="min-w-40" />
                <FiLL :data="data?.dayMonthYear"date-format="short" no-line />
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img class="w-[120px] h-auto"
              src="https://www.saving-sskh.com/images/logo-saving.png"
              alt="Logo" />
          </div>

          <div class="flex flex-col items-end">

            <div class="border-2 border-black p-2">
              <p>หนังสือกู้ที่<FiLL :data="data?.test" class="min-w-20" />/<FiLL :data="data?.test" class="min-w-16" />
                <FiLL :data="data?.receivedLocation" no-line />
              </p>
              <p>วันที่<FiLL :data="data?.test" class="min-w-48" />
                <FiLL :data="data?.dayMonthYear"date-format="short" no-line />
              </p>
              <p>บัญชีเงินกู้ที่<FiLL :data="data?.test" class="min-w-20" />/<FiLL :data="data?.test" class="min-w-16" />
                <FiLL :data="data?.loanAccountNumber" no-line />
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="font-bold text-xl text-center col-span-2 mt-6">คำขอและหนังสือกู้หุ้นโดยใช้หุ้นค้ำประกัน</p>
      <div class="flex flex-col items-end mt-3">
        <p class="mt-2">วันที่<FiLL :data="data?.test" class="min-w-16" />
          เดือน<FiLL :data="data?.test" class="min-w-16" />
          พ.ศ<FiLL :data="data?.test" class="min-w-16" />
            </p>
      </div>

      <div class="flex flex-col mt-4">
        <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
      </div>
        <p class="mt-2"><span class=" ml-20">ด้วยข้าพเจ้า</span><FiLL :data="data?.test" class="min-w-32" />
          สมาชิกเลขที่<FiLL :data="data?.test" class="min-w-20" />ตำแหน่ง<FiLL :data="data?.test" class="min-w-20" />หน่วยงาน<FiLL :data="data?.test" class="min-w-20" />
          สถานภาพสมรส<FiLL :data="data?.test" class="min-w-20" />เงินเดือน<FiLL :data="data?.test" class="min-w-12" />มีค่าหุ้นรวม<FiLL :data="data?.test" class="min-w-16" />บาท 
          มีหนี้สามัญคงเหลือ<FiLL :data="data?.test" class="min-w-32" />บาท
          ขอกู้เงินของสหกรณ์โดยใช้หุ้นค้ำประกัน จำนวน<FiLL :data="data?.test" class="min-w-32" />บาท (<MoneyText :data="data?.test" class="min-w-60" />)</p>
    
        <div class="border-solid border-2 border-slate-950 mt-2 p-4"> 
          <p><span class=" ml-20">ในการขอกู้เงินครั้งนี้ ข้พเจ้า(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-60" />ได้ตกลงยินยอม</span>
            รับภาระหนี้สินทั้งหมดแทน (นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-40" />ผู้เป็นคู่สมรสของข้าพเจ้า จึงใด้ลงลายมือชื่อไว้เป็นสำคัญ
            <p class="text-right"><span>(ลงชื่อ)<FiLL :data="data?.test" class="min-w-44" />(ลายเซ็น) คู่สมรสผู้ให้คำยินยอม</span></p>
            <p class="text-right"><span class="mr-32">(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>

          </p>
        </div>
        <p class="mt-2">1. ขัาพเจ้ากู้เงินไปใช้เพื่อจุดประสงค์<FiLL :data="data?.test" class="min-w-80" /></p>
        <p>2. ข้าพเจ้ายินยอมให้เจ้าหน้าที่หักเงินเดือนได้ เมื่อได้รับมอบหมายจากสหกรณ์โดยไม่มีข้อแม้ใดๆ</p>
        <p>3. ข้าพเจ้าประสงค์ขอลาออกจากสหกรณ์ ข้าพเจ้าต้องแจ้งเป็นหนังสือและจัดการชำระหนี้สินคงด้างที่มีให้หมดสิ้นก่อน</p>
        <p>4. ข้าพเจ้าไม่ชำระหนี้ตามสัญญา ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินเดือน เงินบำเหน็จ เงินกองทุนสำรองเลี้ยงชีพ หรือเงินอื่นใด
ที่ข้าพเจ้าได้รับ ให้นำไปชำระหนี้สามัญพร้อมตอกเบี้ยที่ยังคงด้างอยู่ให้หมดสิ้น โดยไม่มีข้อแม้ใดๆ</p>
       <div class="border-solid border-2 border-slate-950 mt-2 p-4"> 
        <p class="font-bold">อนุมัติให้กู้หุ้น<FiLL :data="data?.test" class="min-w-28" />บาท ชำระ<FiLL :data="data?.test" class="min-w-28" />งวด งวดละ<FiLL :data="data?.test" class="min-w-28" />บาท พร้อมดอกเบี้ย</p>


      </div>
        <p class="mt-2"><span class="ml-20">ผู้กู้<FiLL :data="data?.test" class="min-w-44" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>
        <p ><span class="ml-20">พยาน<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>
        <p ><span class="ml-20">พยาน<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>
        <p class="mt-2"><span class="ml-20">ข้าพเจ้าได้รับเงินกู้หุ้น จำนวน<FiLL :data="data?.test" class="min-w-32" />บาท(<MoneyText :data="data?.test" class="min-w-60" />)</span></p>
        <p>ณ วันที่<FiLL :data="data?.test" class="min-w-20" />เดือน<FiLL :data="data?.test" class="min-w-20" />พ.ศ.<FiLL :data="data?.test" class="min-w-20" /></p>
        <p class="mt-2"><span class="ml-20">แสดงบัตรประชาชนต่อเจ้าหน้าที่ ผู้รับเงิน<FiLL :data="data?.test" class="min-w-20" />(ลายเซ็น)(<FiLL :data="data?.test" class="min-w-32" />)(ตัวบรรจง)</span></p>
        <p ><span class="ml-52">เจ้าหน้าที่ผู้จ่ายเงินกู้ <FiLL :data="data?.test" class="min-w-20" />(ลายเซ็น)(<FiLL :data="data?.test" class="min-w-32" />)(ตัวบรรจง)</span></p>

        <div class="border-solid border-2 border-slate-950  p-4"> 
          <p class="font-bold text-center">บัญชีที่โอนต้องเป็นบัญชีของผู้กู้เท่านั้น</p>
          </div>
          <p class="mt-2"><span class="ml-20">ข้าพเจ้ามอบอำนาจให้สหกรณ์โอนเงินกู้เข้าบัญชีธนาคาร<FiLL :data="data?.test" class="min-w-28" />สาขา<FiLL :data="data?.test" class="min-w-28" /></span></p>
          <p>เลขบัญชี<FiLL :data="data?.test" class="min-w-80" />โดยข้าพเจ้ายินยอมรับภาระค่าธรรมเนียมในการโอน</p>
          <p><span class="ml-36">ผู้กู้<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)<FiLL :data="data?.test" class="min-w-40" />(ตัวบรรจง)</span></p>
          <p><span class="ml-24">เจ้าหน้าที่<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)<FiLL :data="data?.test" class="min-w-40" />(ตัวบรรจง)</span></p>
       
    
    
    
    
    
        </PaperDoc>
  </main>
</template>

<script setup
lang="ts">

const { data } = await useFetch<any>('/api/group2');
</script>