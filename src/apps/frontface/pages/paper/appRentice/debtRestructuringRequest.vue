<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
            <div class="mt-10">
                <div class="text-xl text-center">
                    <p>สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษจำกัด</p>
                    <p>แบบคำขอปรับโครงสร้างหนี้</p>
                </div>
                <div class="grid grid-cols-2">
                    <div></div>
                    <div class="text-start">
                        <p class="mt-6">เขียนที่ <FiLL :data="data?.location" class="underline underline-offset-4 text-base text-right" no-line /></p>
                        <p class="mt-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
                    </div>
                    
                </div>
                <p class="text-left mt-6">เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <div> 
                    <p><span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-32" /> อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี</p>
                    <p>ตำแหน่ง <FiLL :data="data?.position" class="min-w-44" /> เงินเดือน <FiLL :data="data?.salary" class="min-w-28" /> บาท สังกัด <FiLL :data="data?.affiliation" class="min-w-60" /></p>
                    <p>อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล/แขวง <FiLL :data="data?.district" class="min-w-32" /> อำเภอ/เขต <FiLL :data="data?.district" class="min-w-28" /></p>
                    <p>จังหวัด <FiLL :data="data?.province" class="min-w-36" /> โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-36" /></p>
                </div>
                
                <p>ขอเรียนคณะกรรมการฯ ดังนี้</p>
                <p>ข้อ 1. ข้าพเจ้าได้กู้เงินตามหนังสือเงินกู้สามัญ/พิเศษเลขที่ <FiLL :data="data?.loanbook" class="min-w-36" /> เมื่อวันที่ <FiLL :data="data?.test" class="min-w-40" /></p>
                <p>จำนวนเงิน <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.monthlyIncome" class="min-w-80" /> ) กำหนดชำระต้นเงินกู้</p>
                <p>และดอกเบี้ยงวดรายเดือนทุกเดือนงวดละ <FiLL :data="data?.stockValue" class="min-w-24" /> บาท รวม <FiLL :data="data?.nb" class="min-w-20" /> งวด</p>
                <p>ข้อ 2. ข้าพเจ้าไม่สามารถชำระหนี้ได้ตามสัญญาเนื่องจาก<BlankSpace class="min-w-80" /></p>
                <p>ข้อ 3. ข้าพเจ้าได้แนบเอกสารหลักฐานที่แสดงให้เห็นว่ามีเหตุจำเป็นได้แก่<BlankSpace class="min-w-80" /></p>
                <p>ข้อ 4. ข้าพเจ้าจึงขอปรับโครงสร้างหนี้ดังนี้<BlankSpace class="min-w-80" /></p>
                <p class="ml-32 mt-4">จึงเรียนมาเพื่อโปรดพิจารณา</p>
                <div class="grid grid-cols-2 mt-6">
                    <div></div>
                    <div class="text-center">
                        <p>ขอแสงความนับถือ</p>
                        <p><BlankSpace class="min-w-44" /></p>
                        <p>( <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/> )</p>
                        <p>สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-28" /></p>
                    </div>
                </div>
            </div>
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
            <div class="mt-10">
                <div class="text-xl text-center">
                    <p>สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                    <p>หนังสือปรับโครงสร้างหนี้</p>
                </div>
                <div class="grid grid-cols-2">
                    <div></div>
                    <div class="text-start">
                        <p class="mt-6">เขียนที่ <FiLL :data="data?.location" class="underline underline-offset-4 text-base" no-line /></p>
                        <p class="mt-2 mb-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
                    </div>
                    
                </div>
                <div> 
                    <p><span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-32" /> อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี</p>
                    <p>ตำแหน่ง <FiLL :data="data?.position" class="min-w-44" /> สังกัด <FiLL :data="data?.affiliation" class="min-w-60" /></p>
                    <p>เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-44" /></p>
                    <p>อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล/แขวง <FiLL :data="data?.district" class="min-w-32" /> อำเภอ/เขต <FiLL :data="data?.district" class="min-w-28" /></p>
                    <p>จังหวัด <FiLL :data="data?.province" class="min-w-36" /> โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-80" /></p>
                </div>
                
                <p>ข้าพเจ้าได้กู้เงินจากสหกรณ์ตามสัญญาเงินกู้ <FiLL :data="data?.test" class="min-w-16" /> เลขที่ <FiLL :data="data?.loanbook" class="min-w-36" /> ลงวันที่ <FiLL :data="data?.idcard" class="min-w-32" /></p>
                <p>จำนวนเงินกู้ <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.monthlyIncome" /> ) กำหนดชำระคืนต้นเงินกู้พร้อมดอกเบี้ยในอัตราร้อยละ
                </p>
                
                
                <p>ข้อ 1. ข้าพเจ้าได้กู้เงินตามหนังสือเงินกู้สามัญ/พิเศษเลขที่ <FiLL :data="data?.loanbook" class="min-w-36" /> เมื่อวันที่ <FiLL :data="data?.loanbook" class="min-w-40" /></p>
                <p>จำนวนเงิน <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.monthlyIncome" class="min-w-80" /> ) กำหนดชำระต้นเงินกู้</p>
                <p>และดอกเบี้ยงวดรายเดือนทุกเดือนงวดละ <FiLL :data="data?.stockValue" class="min-w-24" /> บาท รวม <FiLL :data="data?.nb" class="min-w-20" /> งวด</p>
                <p class="ml-10 mt-4">ข้าพเจ้าได้อ่านและเข้าใจหนังสือนี้โดยตลอดแล้วจึงลงลายมือชื่อไว้เป็นหลักฐาน</p>
                <div class="grid grid-cols-2 mt-6">
                    <div></div>
                    <div class="text-center">
                        <p>ขอแสงความนับถือ</p>
                        <p><BlankSpace class="min-w-44" /></p>
                        <p>( <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/> )</p>
                        <p>สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-28" /></p>
                    </div>
                </div>
            </div>
        </MorePaperDoc>
    </main>
</template>
<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>