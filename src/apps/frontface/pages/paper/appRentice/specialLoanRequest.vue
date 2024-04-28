<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
        <div class="grid grid-cols-3 justify-center">
            <div class="flex items-start">
            </div>
            <div class="flex flex-col items-center">
            <img class="w-[120px] h-auto"
                src="https://www.saving-sskh.com/images/logo-saving.png"
                alt="Logo" />
            </div>
            <div class="flex flex-col items-end">
                <div class=" p-2">
                    <p>รับที่<BlankSpace class="min-w-32" /></p>
                    <p>วันที่<BlankSpace class="min-w-32" /></p>
                    <p>สัญญาที่กู้ที่<BlankSpace class="min-w-20" /></p>
                </div>
            </div> 
            <div></div>
            <div class="mt-4"> 
                <div class="text-xl text-center font-bold">
                    <p>คำขอกู้เงินพิเศษ</p>
                </div>
            </div>   
        </div>
        <div class="flex flex-col items-end">
            <div class="text-start">
                <p class="mt-6">เขียนที่สำนักงานสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <p class="mt-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
            </div>
        </div>
        <p class="text-left mt-6">เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        <div> 
            <p class="mt-2"><span class="ml-12">ข้าพเจ้า นาย/นาง/นางสาว </span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-20" /> </p>
            <p class="mt-2">เป็น ( &nbsp; ) ข้าราชการ ( &nbsp; ) พนักงาน ( &nbsp; ) ลูกจ้างประจำ ตำแหน่ง <BlankSpace class="min-w-80" /></p>
            <p class="mt-2">สังกัด <FiLL :data="data?.affiliation" class="min-w-52" /> ตำบล <FiLL :data="data?.district" class="min-w-24" /> อำเภอ <FiLL :data="data?.district" class="min-w-28" />จังหวัด <FiLL :data="data?.province" class="min-w-36" />  </p>
            <p class="mt-2">เป็นสมาชิกแล้ว <FiLL :data="data?.alreadyMember" class="min-w-12" /> ปี อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-12" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล <FiLL :data="data?.district" class="min-w-32" /></p>
            <p class="mt-2"> อำเภอ <FiLL :data="data?.district" class="min-w-28" />จังหวัด <FiLL :data="data?.province" class="min-w-36" /> หมายเลขโทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-36" /> มีเงินได้รายเดือน <FiLL :data="data?.salary" class="min-w-28" /> บาท</p>

            <p class="mt-2">สถานภาพสมรส ( ) โสด, ( ) สมรสแล้ว, ( ) เป็นหม้าย กรณีสมรสแลัวคู่สมรสชื่อ <BlankSpace class="min-w-32" /> </p>
            <p class="mt-2"><BlankSpace class="min-w-32" />อาชีพ<BlankSpace class="min-w-32" /> มีเงินได้เดือนละ <BlankSpace class="min-w-32" /> บาท สถานที่ทำงาน  <BlankSpace class="min-w-32" /></p>
            <p class="mt-2"><BlankSpace class="min-w-32" /> หมายเลขโทรศัพท์ <BlankSpace class="min-w-32" /> </p>

            <p class="mt-2 ml-12"> ข้อ 1. วัตถุประสงค์ในการขอกู้ ( โปรดกาเครื่องหมาย / ใน ( &nbsp; ) ที่ต้องการ )</p>

        </div>
       
        
      
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
            
        </MorePaperDoc>
    </main>
</template>
<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>