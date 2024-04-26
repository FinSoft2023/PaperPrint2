<template>
    <main>
        <PaperDoc>
            <diV class="text-3xl font-medium text-center mt-20" >
                <p>บันทึกข้อความ</p>
            </diV>
            <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
              <div class="flex-col items-center row-span-2">
                <img class="w-[100px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
              </div>
            </div>
            
            <div class="mt-20 text-2xl font-medium">
                <p>
                    ส่วนราชการ ______________________________________________________________ ที่_________________________________วันที่___________________________________
                    เรื่อง______________________________________________________________________
                </p>
            </div>
            <div class="mt-4 text-base">
              <p>
                  เรียน &nbsp; ประธานกรรมการสหกร์์ออมทัพย์โรงพยาบาลศรีสะเกษ จำกัด
                </p>
            </div>
            <div class="grid justify-items-start mt-10 text-pretty text-base " >
              <p><span class="ml-20">ด้วย ข้าพเจ้า</span>...........................................ตำเเหน่ง....................................สังกัดโรงพยาบาลศรีสะเกษ สมาชิกสหกรณ์ออมทรัพย์ฯ 
                เลขทะเบียนที่..........................................มีความประสงค์ขอเปลี่ยนเเปลงผู้ค้ำประกันเงินกู้สามัญ / เงินกู้พิเศษ ตามสัญญาเลขที่...............................ลงวันที่..............................
                จำนวนเงินกู้................................... บาท จากเดิม (นาย/นาง/นางสาว)............................................ตำเเหน่ง........................................สมาชิกเลขที่..............................
                สังกัด..................................เปลี่ยนเเปลงเป็น(นาย/นาง/นางสาว)................................ตำเเหน่ง.......................สมิกเลขที่.........................สังกัด..............................
              </p>
              <p class="mt-4 text-base ">
                  <span class="ml-20">จึงเรียนมาเพื่อโปรดพิจารณา</span>
              </p>
            </div>

            <div class="grid grid-cols-2 text-end mt-14">
  <div></div>
  <div></div>
  <div ></div>
  <div></div>
  <div ></div>
  <div ></div>
  <div ></div>
  <div ><br></div>
  <div ></div>
  <div class="text-center text-base">..................................................................</div>
  <div ></div>
  <div class="text-center mt-4">
    ( <FiLL class="min-w-44" :data="`${data?.spouseFName}  ${data?.lname}`"/>)<br><br>
    <p class="text-center text-base">
      สามชิกเลขที่.......................
    </p>
    <p class="text-center text-base mt-6">
      เบอร์โทรศัพท์.............................................
    </p>
</div>
</div>

        </PaperDoc>


        <MorePaperDoc>
           
                        <!-- กู้สามัญทั่วไป general2  -->
                        <div class="border-solid border-2 border-slate-950 ">
<br>
<p class="text-center text-lg font-semibold ">บันทึกให้คำยินยอมของคู่สมรสผู้กู้</p> <br>
<p class=" text-base pl-96">เขียนที่ <FiLL  class="min-w-60" :data="data?.receivedLocation" /> &nbsp;</p>
<p class=" text-base pl-96">วันที่ <FiLL  class="min-w-64" :data="data?.dateReceived" date-format="full"/> </p><br>
<p class=" text-base pl-8">
  <span class="ml-20">ข้าพเจ้า</span><FiLL class="min-w-44" :data="`${data?.fname}  ${data?.lname}`"/> 
   อายุ <FiLL :data="data?.age" class="min-w-20"/> ปี อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20"/> หมู่ที่ <FiLL :data="data?.group" class="min-w-10"/> ถนน <FiLL :data="data?.road" class="min-w-20"/> ตำบล <FiLL :data="data?.subdistrict"class="min-w-20" />  
อำเภอ <FiLL :data="data?.district" class="min-w-20"/> จังหวัด <FiLL :data="data?.province" class="min-w-20"/> ขอทำความยินยอมให้ (นาย/นาง/นางสาว) <FiLL class="min-w-44" :data="`${data?.spouseFName}  ${data?.lname}`"/> ซึ่งเป็นคู่สมรสของข้าพเจ้าโดยถูกต้องตามกฎหมาย
มีอำนาจทำนิติกรรมทุกชนิดกับสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด และให้ถือเสมือนหนึ่งเป็นการกระทำของข้าพเจ้า เพื่อเป็นหลักฐานแห่งการยินยอมนี้ ข้าพเจ้าได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยานผู้มีนามข้างท้ายนี้
</p>
<p class="text-base pl-80">(ลงชื่อ)............................................................คู่สมรสผู้ให้ความยินยอม</p>
<div class="pl-96">
   (<FiLL class="min-w-52" :data="`${data?.spouseFName}  ${data?.lname}`"/> ) 
</div>
<p class="text-base pl-80">(ลงชื่อ)............................................................พยาน(สมาชิก)</p>
<p class="text-base pl-96">(.............................................................)</p>
<p class="text-base pl-80">(ลงชื่อ)............................................................พยาน(สมาชิก)</p>
<p class="text-base pl-96">(.............................................................)</p>
<br><br>
</div>
<br>
<p class=" text-base pl-8">7.ช้าพเจ้าขอเสนอหลักประกันดังนี้</p>
<p class=" text-base pl-16">7.1 สมาชิกค้ำประกัน ได้แก่</p>
<div class="flex flex-col ml-10 text-start "no-line>
        <LineFiLL :data="data?.repaymentPlan"
          :limit="6">
          <template #data="{ index, item }">
            <p class=" text-base pl-8"></p>
            <p class="text-start text-base"><span class="ml-20">7.1 </span>
              <FiLL :data="index"
                number
                normal no-line/>.
                ชื่อ
                <FiLL class="min-w-72" :data="`${item.fn}  ${item.ln}`" />  
                    
              เลขทะเบียนที่
              
              <FiLL :data="item.numberRegist" class="min-w-32" />
              
              <br>ตำแหน่ง <FiLL :data="item.poSition" class="min-w-80" /> สังกัด <FiLL :data="item.afiilia" class="min-w-56" />
             <br> เบอร์โทร <FiLL :data="item.phoneNumber" class="min-w-72" /> วงเงินค้ำประกัน <FiLL :data="item.limit" class="min-w-48" />
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base"><span class="ml-20">7.1 </span>
              <FiLL :data="index"
                number
                normal no-line/>.
                ชื่อ 
              ................................................................................. เลขทะเบียนที่....................................<br>
            ตำแหน่ง........................................................................................สังกัด.......................................................................<br>
             เบอร์โทร.......................................................................................วงเงินค้ำประกัน.....................................................
            </p>
          </template>
        </LineFiLL>

      </div>
        </MorePaperDoc>


        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general3  -->

           <p class="text-base">8.ข้าพเจ้าประสงค์ขอรับเงินกู้โดย <FiLLBox /> เช็ค <FiLLBox :checked="data?.bank" /> โอน/นำเข้าบัญชีเงินฝากของข้าพเจ้า ชื่อธนาคาร <FiLL :data="data?.bank" class="min-w-32" /> 
        สาขา <FiLL :data="data?.branchBank" class="min-w-28" /> บัญชีเลขที่ <FiLL :data="data?.idaccount" class="min-w-48" />
        </p>
        <p class="font-semibold text-sm underline underline-offset-1">ข้าพเจ้าขอรับรองว่า ขณะนี้ไม่อยู่ในระหว่างการถูกสอบสวนหรือต้องโทษทางวินัย และไม่อยู่ระหว่างการขอลาออกจากงานหรือโอนย้ายหน่วยงาน และข้าพเจ้ายินยอมปฏิบัติตามหลักเกณฑ์และเงื่อนไขที่กำหนอดทุกประการ
        </p><br>
        <p class="font-semibold text-lg text-center">บันทึกคำเสนอค้ำประกัน</p>
        <p class="text-base tracking-tight text-center">ข้าพเจ้าผู้มีชื่อต่อไปนี้ ได้อ่านและเข้าใจจึงยินยอมผูกพันตนที่จะค้ำประกันตามคำขอกู้นี้ จึงลงลายมือชื่อไว้เป็นสำคัญ</p>


        <div class="flex flex-col ml-10 text-start">
        <LineFiLL :data="data?.repaymentPlan"
          :limit="6">
          <template #data="{ index, item }">
            <p class="text-start text-base ">
              <FiLL :data="index"
                number
                normal no-line/>.
                ชื่อ 
                <FiLL class="min-w-60" :data="`${item.fn}  ${item.ln}`" />   อายุ 
              <FiLL :data="item.age" class="min-w-28"/> ปี เลขทะเบียนที่
               <FiLL :data="item.numberRegist" class="min-w-28"/><br>
              <p class="pl-20 text-base">(ลงชื่อ).............................................................ผู้ค้ำประกัน</p>
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base">
              <FiLL :data="index"
                number
                normal no-line/>.
                ชื่อ 
              ...............................................................................อายุ 
             ......................ปี เลขทะเบียนที่ ...................................<br>
             <p class="pl-20 text-base">(ลงชื่อ).................................................................ผู้ค้ำประกัน</p>
            </p>
          </template>
        </LineFiLL>

      </div>
<br>

        <div class="grid grid-cols-2 text-end">
  <div></div>
  <div class="text-start text-base">(ลงชื่อ)..................................................................ผู้ขอกู้</div>
  <div ></div>
  <div class="text-center pr-16">
  (<FiLL class="min-w-44" :data="`${data?.fname}  ${data?.lname}`"/>)<br><br>
</div>
  <div ></div>
  <div class="text-start text-base">เบอร์โทร..................................................................</div>
  <div ></div>
  <div ><br></div>
  <div ></div>
  <div class="text-start text-base">(ลงชื่อ)..................................................................คู่สมรสผู้กู้</div>
  <div ></div>
  <div class="text-center pr-16">
    ( <FiLL class="min-w-44" :data="`${data?.spouseFName}  ${data?.lname}`"/>)<br><br>
</div>
  <div ></div>
  <div class="text-start text-base">เบอร์โทร..................................................................</div>
  <div ></div>
  <div ><br></div>
  <div ><br></div>
  <div class="text-start text-base">(ลงชื่อ)..............................................................เจ้าหน้าที่สหกรณ์</div>
  <div ></div>
  <div class="text-center pr-16">
    (<FiLL class="min-w-44" :data="`${data?.officerFName}  ${data?.officerLName}`"/>)<br>
</div>
</div>

        </MorePaperDoc>

    </main>
</template>
<script setup
        lang="ts">
        import Index from '../index.vue';

        const { data } = await useFetch<any>('/api/group2');
</script>
