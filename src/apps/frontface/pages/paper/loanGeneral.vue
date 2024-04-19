<template>
    <main>
        <PaperDoc>
            <!-- กู้สามัญทั่วไป general1  -->
        </PaperDoc>

        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general2 -->
        </MorePaperDoc>
        <MorePaperDoc>
           อ้อนเอง
        </MorePaperDoc>




        <MorePaperDoc>

            <div class="grid grid-cols-2">
 
            <div class="border-solid border-2 border-slate-950 ">

      <p class="text-center text-sm font-semibold">ความเห็นของเจ้าหน้าที่</p>
      <p class="text-sm ps-2">ได้ตรวจสอบเอกสารและคำขอกู้เงินแล้วพบว่ามีความถูกต้อง ตามระเบียบ หลักเกณฑ์และเงื่อนไขต่างๆ ทุกประเภท</p>
      <p class="text-sm ps-2">หักชำระ (ณ วันที่วิเคราะห์ข้อมูล)<br>
        - หนี้เดิม <FiLL :data="data?.debt" /> บาท<br>
        - ซื้อหุ้นตามส่วนเงินกู้ <FiLL :data="data?.remain" /> บาท<br>
        - เบี้ยประกัน/ฌาปนกิจ <FiLL :data="data?.stockvalue" /> บาท</p>
      <p class="text-center text-sm ps-2">(ลงชื่อ)................................. เจ้าหน้าที่สหกรณ์<br>
        (<FiLL :data="data?.officerFName" /> <FiLL :data="data?.officerLName" />)</p>

            </div>
            <div class="border-solid border-2 border-slate-950 ">
     <p class="text-center text-sm font-semibold ps-2">ความเห็นของผู้มีอำนาจพิจารณา</p>
     <p class="text-sm ps-2">[&nbsp;] อนุมัติ จำนวน <FiLL :data="data?.debt" /> บาท 
        (<MoneyText :data="data?.debt" />) </p>
    <p class="text-sm ps-2">[&nbsp;] ไม่อนุมัติ เพราะ...........................................................................
        ................................................................................................................</p>
      <p class="text-center text-sm ps-2">(ลงชื่อ) ............................... ประธานเงินกู้<br>
        (<FiLL :data="data?.chaimanFName" /> <FiLL :data="data?.chaimanLName" />)</p>
      <p class="text-center text-sm ps-2">(ลงชื่อ) ............................... กรรมการผู้จัดการ<br>
        (<FiLL :data="data?.directorFName" /> <FiLL :data="data?.directorLName" />)</p>
</div>

</div>
        </MorePaperDoc>














        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general5 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general6 -->
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
