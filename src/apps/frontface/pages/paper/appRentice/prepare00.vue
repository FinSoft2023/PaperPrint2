<template>
    <main>
        <PaperDoc> 
            <br><br> 
            <div class="border-2 border-slate-950">
              <p class="underline underline-offset-1 text-lg font-semibold text-center "> ขั้นตอนการสมัครสมาชิก สส.ชสอ. ประเภทสามัญ</p>
              <p class="underline underline-offset-1 text-lg font-semibold text-center "> ผู้สมัครต้องเป็นสมาชิกสหกรณ์มาแล้วไม่น้อยกว่า 1 ปี (เริ่มใช้มกราคม 2566 เป็นต้นไป)</p>
              <p class="text-base">1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
              <p class="text-base">2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของ รพ.รัฐ เท่านั้น)</p>
              <p class="text-base">3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
              <p class="text-base ml-8">3.1 สำเนาบัตรประชาชนผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
              <p class="text-base ml-8">3.2 สำเนาทะเบียนบ้านผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
              <p class="text-base ml-8">3.3 สำเนาทะเบียนสมรส หรือสำเนาทะเบียนหย่า ของผู้สมัคร (ถ้ามี) จำนวน 1 ฉบับ</p>
              <p class="text-base ml-8">3.4 สำเนาใบเปลี่ยนชื่อ / สกุล ของผู้สมัครและผู้รับผลประโยชน์ (ถ้ามี) อย่างละ 1 ฉบับ</p>
              <p class="text-base">4.ผู้รับผลประโยชน์ต้องลงชื่อในส่วนผู้รับผลประโยชน์ และ แบบคำรับรองสุขภาพตนเอง</p>
              <p class="text-base">5.ผู้สมัครต้องมาสมัครด้วยตนเอง เพื่อถ่ายรูปเต็มตัว ณ วันสมัคร แนบเป็นหลักฐาน</p>
              <p class="text-base">6.ชำระค่าสมัครและเงินสงเคราะห์ล่วงหน้า ด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ
                <br> จำนวน 4,840 .- บาท
              </p>
              <p class="underline underline-offset-1 text-base font-semibold  "> หมายเหตุ เพื่อความสะดวกรวดเร็ว รบกวนแจ้งเจ้าหน้าที่เพื่อนัดวัน เวลา ในการสมัคร</p>
              <p class="text-base mt-1">โทร.0943934878 สุภานัน</p>


            </div>
            
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
            
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