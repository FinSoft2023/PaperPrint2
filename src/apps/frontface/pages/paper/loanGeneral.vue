<template>
    <main>
        <PaperDoc>
            <!-- กู้สามัญทั่วไป general1  -->
        </PaperDoc>

        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general2 -->
        </MorePaperDoc>


        <MorePaperDoc>
           <p class="text-base">8.ข้าพเจ้าประสงค์ขอรับเงินกู้โดย [&nbsp;] เช็ค [&nbsp;] โอน/นำเข้าบัญชีเงินฝากของข้าพเจ้า ชื่อธนาคาร <FiLL :data="data?.bank" /> 
        สาขา <FiLL :data="data?.branchBank" /> บัญชีเลขที่ <FiLL :data="data?.idaccount" />
        </p>
        <p class="font-semibold text-sm underline underline-offset-1">ข้าพเจ้าขอรับรองว่า ขณะนี้ไม่อยู่ในระหว่างการถูกสอบสวนหรือต้องโทษทางวินัย และไม่อยู่ระหว่างการขอลาออกจากงานหรือโอนย้ายหน่วยงาน และข้าพเจ้ายินยอมปฏิบัติตามหลักเกณฑ์และเงื่อนไขที่กำหนอดทุกประการ
        </p><br>
        <p class="font-semibold text-lg text-center">บันทึกคำเสนอค้ำประกัน</p>
        <p class="text-base tracking-tight text-center">ข้าพเจ้าผู้มีชื่อต่อไปนี้ ได้อ่านและเข้าใจจึงยินยอมผูกพันตนที่จะค้ำประกันตามคำขอกู้นี้ จึงลงลสยมือชื่อไว้เป็นสำคัญ</p>


        <div class="flex flex-col ml-10 text-start">
        <LineFiLL :data="data?.repaymentPlan"
          :limit="6">
          <template #data="{ index, item }">
            <p class="text-start text-base">
              <FiLL :data="index"
                number
                normal />.
                ชื่อ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FiLL :data="item.fn" /> <FiLL :data="item.ln" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; อายุ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FiLL :data="item.age" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ปี เลขทะเบียนที่&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FiLL :data="item.numberRegist" /><br>
              <p class="pl-20 text-base">(ลงชื่อ).............................................................ผู้ค้ำประกัน</p>
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base">
              <FiLL :data="index"
                number
                normal />.
                ชื่อ 
              ...............................................................................อายุ 
             ......................ปี เลขทะเบียนที่ ...................................<br>
             <p class="pl-20 text-base">(ลงชื่อ).................................................................ผู้ค้ำประกัน</p>
            </p>
          </template>
        </LineFiLL>

      </div>
<br>

        <div class="grid grid-cols-2">
  <div></div>
  <div class="text-center text-base">(ลงชื่อ)..................................................................ผู้ขอกู้</div>
  <div ></div>
  <div class="text-center text-base">(<FiLL :data="data?.fname" />  <FiLL :data="data?.lname" />)</div>
  <div ></div>
  <div class="text-center text-base">เบอร์โทร..................................................................</div>
  <div ></div>
  <div ><br></div>
  <div ></div>
  <div class="text-center text-base">(ลงชื่อ)..................................................................คู่สมรสผู้กู้</div>
  <div ></div>
  <div class="text-center text-base">(<FiLL :data="data?.spouseFName" />  <FiLL :data="data?.lname" />)</div>
  <div ></div>
  <div class="text-center text-base">เบอร์โทร..................................................................</div>
  <div ></div>
  <div ><br></div>
  <div ><br></div>
  <div class="text-center text-base">(ลงชื่อ)..........................................................เจ้าหน้าที่สหกรณ์</div>
  <div ></div>
  <div class="text-center text-base">(<FiLL :data="data?.officerFName" />  <FiLL :data="data?.officerLName" />)</div>

</div>

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
