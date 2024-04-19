<template>
    <main>
        <PaperDoc>
            บีม จอง
        </PaperDoc>

        <MorePaperDoc>
           
            




            
        </MorePaperDoc>
        <MorePaperDoc>
            <table class="border-separate border-spacing-2 border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general4 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <div class="flex flex-col items-center mt-32">
                <p class="text-lg">หนังสือยืนยันภาระผูกพัน</p>
      </div>
    <div class="grid justify-items-start mt-6">
      <p class="indent-24">ตามที่ข้าพเจ้า ผู้กู้(นาย/นาง/นางสาว).................................................ทะเบียนสมาชิกที่...........................หน่วยงาน......................................................................
        สังกัด..............................................................................................................................
        ได้ยื่นคําขอกู้เงิน  พิเศษ  สามัญ พัฒนาคุณภาพชีวิต กับสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จํากัด ในการนี้ข้าพเจ้า ขอให้ถ้อยคําตามความสัตย์จริง โดยหากข้าพเจ้าให้ถ้อยคําอันเป็นเท็จ ข้าพเจ้ายินดีให้สหกรณ์ ออมทรัพย์ฯ ดําเนินคดีตามกฎหมายแก่ข้าพเจ้าทันที</p>
        <p class="indent-24">- ข้าพเจ้า มี  ไม่มี  หนี้เงินกู้สวัสดิการกับธนาคาร...................................................................................................จํานวนเงินหนี้คงเหลือ บาท ส่งชําระรายเดือน ๆ ละ</p>
        <p class="indent-24">- ข้าพเจ้า มี ปี ไม่มี หนี้เงินกู้กองทุนบําเหน็จบํานาญ ฯ
จํานวนเงินหนี้คงเหลือ
บาท ส่งชําระรายเดือน ๆ ละ
บาท
บาท</p>
        <p class="indent-24">- ข้าพเจ้า ปี เป็น D ไม่เป็น สมาชิกสหกรณ์ออมทรัพย์อื่นที่มีวัตถุประสงค์ในการให้กู้ยืมเงิน - ข้าพเจ้า ปี อยู่ ปี ไม่อยู่ในระหว่างถูกพิทักษ์ทรัพย์ในคดีล้มละลาย และไม่อยู่ในระหว่าง
ถูกฟ้องในคดีล้มละลาย</p>
        <p class="indent-24">- ข้าพเจ้าฯ ยินยอมให้สหกรณ์ออมทรัพย์ฯ ตรวจสอบข้อมูลหนี้ของข้าพเจ้ากับธนาคาร / บริษัท ข้อมูลเครดิตแห่งชาติ จํากัด ได้</p>
    </div>
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

        const { data } = await useFetch<any>('/api/sampleWithData');
</script>
