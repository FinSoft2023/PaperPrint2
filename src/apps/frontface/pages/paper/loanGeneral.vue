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
            <table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-600 ...">ความเห็นของเจ้าหน้าที่</th>
      <th class="border border-slate-600 ...">ความเห็นของผู้มีอำนาจพิจารณา</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-600 ...">ได้ตรวจสอบเอกสารและคำขอกู้เงินแล้วพบว่ามีความถูกต้องตามระเบียบ หลักเกณฑ์และเงื่อนไขต่างๆ ทุกประเภท</td>
      <td class="border border-slate-600 text-center">[&nbsp;] อนุมัติ จำนวน........................... บาท 
        (....................................................)
      </td>
    </tr>
    <tr>
      <td class="border border-slate-600 ...">หักชำระ (ณ วันที่วิเคราะห์ข้อมูล)<br>
        - หนี้เดิม <FiLL :data="data?.debt" /> บาท<br>
        - ซื้อหุ้นตามส่วนเงินกู้ .......................บาท<br>
        - เบี้ยประกัน/ฌาปนกิจ .....................บาท
      </td>
      <td class="border border-slate-600 text-center">[&nbsp;] ไม่อนุมัติ เพราะ..................................................................................</td>
    </tr>
    <tr>
      <td class="border border-slate-600 text-center">(ลงชื่อ).........................เจ้าหน้าที่สหกรณ์<br>
        (<FiLL :data="data?.officerFName" /> <FiLL :data="data?.officerLName" />)
      </td>
      <td class="border border-slate-600 text-center">(ลงชื่อ).........................ประธานเงินกู้<br>
        (<FiLL :data="data?.chaimanFName" /> <FiLL :data="data?.chaimanLName" />)</td>
    </tr>
    <tr>
      <td class="border border-slate-600 text-center">
      </td>
      <td class="border border-slate-600 text-center">(ลงชื่อ).........................กรรมการผู้จัดการ<br>
        (<FiLL :data="data?.directorFName" /> <FiLL :data="data?.directorLName" />)</td>
    </tr>
  </tbody>
</table>
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
