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
                
                <p>ข้าพเจ้าได้กู้เงินจากสหกรณ์ตามสัญญาเงินกู้ <FiLL :data="data?.test" class="min-w-16" /> เลขที่ <FiLL :data="data?.loanbook" class="min-w-36" /> ลงวันที่ <FiLL :data="data?.test" class="min-w-32" /></p>
                <p>
                    จำนวนเงินกู้ <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.monthlyIncome" /> ) กำหนดชำระคืนต้นเงินกู้พร้อมดอกเบี้ยในอัตราร้อยละ
                    <FiLL :data="data?.test" class="min-w-16" /> ต่อปีส่งชำระแบบ <FiLL :data="data?.test" class="min-w-24" /> งวดละ <FiLL :data="data?.test" class="min-w-28" /> บาทรวม <FiLL :data="data?.test" class="min-w-20" /> งวด
                    ตั้งแต่เดือน <FiLL :data="data?.test" class="min-w-32" /> เป็นต้นมาแต่บัดนี้ข้าพเจ้ามีเหตุจำเป็นไม่สามารถชำระหนี้ให้แก่สหกรณ์ได้ตามกำหนด จึงขอทำหนังสือปรับโครงสร้างหนี้ไว้ต่อสหกรณ์ดังต่อไปนี้
                </p>
                
                
                <p>
                    ข้อ 1. ข้าพเจ้าสัญญาว่าจะชำระหนี้คืนเงินกู้ให้แก่สหกรณ์เป็นจำนวน <FiLL :data="data?.test" class="min-w-36" /> บาท ( <MoneyText :data="data?.monthlyIncome" /> )
                    พร้อมดอกเบี้ยในอัตราร้อยละ <FiLL :data="data?.test" class="min-w-16" /> ต่อปีส่งชำระแบบ <FiLL :data="data?.test" class="min-w-16" /> 
                    งวดละ <FiLL :data="data?.test" class="min-w-24" /> บาท รวม <FiLL :data="data?.test" class="min-w-24" /> งวดตั้งแต่เดือน <FiLL :data="data?.test" class="min-w-36" /> จนกว่าจะชำระหนี้เสร็จสิ้น
                </p>
                <p>
                    ข้อ 2. หากข้าพเจ้าผิดสัญญาตามข้อ 1. ข้าพเจ้ายินยอมให้ถือว่าเงินกู้นี้เป็นอันถึงกำหนดชำระคืนโดยสิ้นเชิง
                    ถ้าข้าพเจ้าไม่จัดการชำระหนี้ให้เสร็จสิ้นตามวรรคก่อนข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินเดือน เงินบำนาญ
                    เงินบำเหน็จ เงินกองทุนบำเหน็จบำนาญข้าราชการ เงินกองทุนสำรองเลี้ยงชีพ เงินค่าหุ้น เงินปันผลเงินเฉลี่ยคืนหรือเงินอื่น
                    ใดที่หน่วยงานต้นสังกัดและสหกรณ์จะพึงจ่ายให้แก่ข้าพเจ้าหักเงินดังกล่าวชำระหนี้ต่อสหกรณ์ให้เสร็จสิ้นได้ทันที
                </p>

                <div class="ml-10 item-center">
                    <p class="mt-4">ข้าพเจ้าได้อ่านและเข้าใจหนังสือนี้โดยตลอดแล้วจึงลงลายมือชื่อไว้เป็นหลักฐาน</p>
                    <div class="ml-10">
                        <p class="mt-2 ml-40">
                            <span class="ml-16">
                                ลงชื่อ<BlankSpace class="min-w-56" />สมาชิกผู้กู้
                            </span>
                        </p>
                        <p class="ml-40">
                            <span class="ml-24">(<FiLL class="min-w-56" :data="`${data?.fname}  ${data?.lname}`"/>)</span>
                        </p>
                        <p class="mt-2 ml-40">
                            <span class="ml-16">
                                ลงชื่อ<BlankSpace class="min-w-56" />พยาน/คู่สมรส
                            </span>
                        </p>
                        <p class="ml-40">
                            <span class="ml-24">(<BlankSpace class="min-w-56" />)</span>
                        </p>
                    </div>
                </div>
                <div>
                    <p class="font-bold">เจ้าของหลักทรัพย์ค้ำประกันลงนามรับทราบการปรับโครงสร้างหนี้ จำนวน 1 คน</p>
                        1.ข้าพเจ้า(ลงชื่อ) <BlankSpace class="min-w-32" /> รับทราบการปรับโครงสร้างหนี้   (ลงชื่อ) <BlankSpace class="min-w-32" /> คู่สมรสผู้ค้ำประกัน
                        <p class="mt-2"><span class="ml-16">(<FiLL class="min-w-56" :data="`${data?.fname}  ${data?.lname}`"/>)</span> <span class="ml-32">( <BlankSpace class="min-w-56" /> )</span></p>
                            
                    <div class="grid grid-cols-2 mt-4">
                        <div class="mt-4">
                            <p class="ml-12">(ลงชื่อ) <BlankSpace class="min-w-40" /> พยาน(ผู้จัดการ)</p>
                            <p class="ml-16 mt-2">( <BlankSpace class="min-w-56" /> )</p>
                        </div>

                        <div class="mt-4">
                            <p class="ml-12">(ลงชื่อ) <BlankSpace class="min-w-40" /> พยาน(เจ้าหน้าที่)</p>
                            <p class="ml-16 mt-2">( <BlankSpace class="min-w-56" /> )</p>
                        </div>
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