<template>
    <main>
        <PaperDoc>
            <!-- กู้สามัญทั่วไป general1  -->

        </PaperDoc>


        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general2  -->
        </MorePaperDoc>


        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general3  -->
        </MorePaperDoc>


        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general4  -->
        </MorePaperDoc>

        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general5  -->

                        <div class="mx-3">
                        <div class="grid grid-cols-1 grid-rows-2 justify-center h-10">
                        <div ></div>

                        <div class=" items-center row-span-2">
                          <div class="text-base text-center mt-6">
                                      <p>-2-</p>
                                      <p class="text-base font-semibold mt-4 ">ถ้อยเเถลงเเละให้การยินยอมของผู้สมัครสมาชิก สสธท.</p>
                                  </div>
                        </div>

                        <div class="flex flex-col items-end row-span-2 mt-4">
                          <img class="w-[100px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
                            <p class="mr-6">สสธท.2</p>
                        </div>
                      </div>
                    </div>

            <div class="grid justify-items-start mt-28 text-lg">
            <p><span class="ml-10">เขียนที่</span> <FiLL :data="data?.location" class="min-w-80 text-base" /> วันที่ <FiLL  class="min-w-56 text-base" :data="data?.dateReceived"date-format="full" /></p>
            </div>

            <div class="grid justify-items-start mt-2 text-pretty text-base mx-10 ">
            <p><span class="ml-14">ข้าพเจ้า &nbsp;</span> นาย/นาง/นางสาว
              <FiLL class="min-w-96" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            </p>
            <p>เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-44" /> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี</p>
            <p><span class="ml-14">ข้าพเจ้า</span>ข้าพเจ้าขอให้ประวัติสุขภาพของข้าพเจ้าเพื่อประกอบการสมัครสมาชิก สสธท. ดังนี้
            </p>
            <p><FiLLBox /> 1. มีสุขภาพแข็งแรง</p>
            <p><FiLLBox /> 2. ไม่เป็นผู้มีกายทุพพลภาพ จนไม่สามารถปฏิบัติหน้าที่ได้</p>
            <p><FiLLBox /> 3. ไม่มีจิตฟันเฟือน ไม่สมประกอบ</p>
            <p><span class="ml-5">4.</span> <span class="underline">ประวัติการรักษาโรคต่อไปนี้</span></p>
            

            <div class="grid grid-rows-2 grid-flow-col">
                <div class="row-span-3">
                  <p class="pl-10" >(4.1) โรคมะเร็ง </p>
                  <p class="pl-10"> (4.2) โรคหัวใจ </p>
                  <p class="pl-10"> (4.3) โรควัณโรค </p>
                  <p class="pl-10"> (4.4) โรคปอดเรื้อรัง </p>
                  <p class="pl-10"> (4.5) โรคเบาหวานขั้นรุนแรง </p>
                  <p class="pl-10"> (4.6) ภาวะไตวาย(ล้างไต) </p>
                  <p class="pl-10"> (4.7) โรคเอดส์ </p>
                  <p class="pl-10"> (4.8) โรคตับแข็ง </p>
                  <p class="pl-10"> (4.9) โรคเอสแอลอี (SLE) </p>
                </div>
                <div class="row-span-2 col-span-2 ml-10">
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                </div>
            </div>
          </div>
            <div>
              <p class="mr-2"><span class="ml-14">5.</span> โรคร้ายแรงอื่น ๆ (ระบุ)............................................................................................................................................</p>
             <div class="mt-2 mr-20">
              <p><span class="ml-10 mt-16 text-pretty">ข้าพเจ้าขอยืนยันว่าถ้อยแถลงที่ให้ไว้เป็นความจริงทุกประการ</span> <span class="underline">หากข้าพเจ้าแถลงข้อความอันเป็นเท็จแล้ว
                  ให้ สสธท. ตัดสิทธิ์จากการเป็นสมาชิก สสธท. ตามข้อบังคับสมาคม พ.ศ. 2564 ข้อ 15(4) ได้ทันที 
                  และข้าพเจ้าตลอดทั้งทายาทหรือผู้รับเงินสงเคราะห์ของข้าพเจ้าจะไม่ขอรับสิทธิ์และใช้สิทธิ์ใด ๆ และขอสละสิทธิ์ในการที่จะ
                  รับเงินสงเคราะห์ครอบครัวเมื่อข้าพเจ้าเสียชีวิต รวมทั้ง ข้าพเจ้าไม่ติดใจที่จะเรียกร้องเงินสงเคราะห์หรือเงินอื่นใดจาก สสธท. ทั้งสิ้น</span>โดยข้าพเจ้ายินยอมปฏิบัติตามข้อบังคับสมาคมทุกประการ
            </p>
            <p class="mt-4"><span class="ml-10 ">ข้าพเจ้า</span>ยินยอมเปิดเผยประวัติสุขภาพของข้าพเจ้า&nbsp; โดยมอบให้&nbsp; สสธท.&nbsp; ขอประวัติการรักษาของข้าพเจ้า
              จากสถานพยาบาลที่เกี่ยวข้องได้
            </p>
             </div>

             <div class="grid grid-cols-1 text-center ">
            <div></div>
            <div></div>
            <div ></div>
            <div></div>
            <div ></div>
            <div ></div>
            <div ></div>
            <div ><br></div>
            <div ></div>
            <div class="text-center text-base mr-4">ลงชื่อ..................................................................</div>
            <div ></div>
            <div class="text-center ">
              ( <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/>)
              <p class="text-center text-base mt-2">
                (ผู้สมัครสมาชิก สสธท.)
              </p>
            </div>
            </div>

            <div class="grid grid-rows-2 grid-flow-col mt-6">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-start text-base mr-4">ลงชื่อ..................................................................</div>
            <div ></div>
            <div class="text-start ml-4">
              ( <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/>)
              <p class="text-start text-base mt-2 ml-5">
                พยาน/เจ้าหน้าที่ศูนย์ประสานงาน
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2 ml-10 ml-4">
                  <div ></div>
            <div class="text-center text-base mr-4">ลงชื่อ..................................................................</div>
            <div ></div>
            <div class="text-center ">
              ( <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/>)
              <p class="text-center text-base mt-2">
                พยาน/ผู้มีชื่อรับเงินสงเคราะห์
              </p>
            </div>
                </div>
            </div>
              

            
 
            
            </div>





                        

        </MorePaperDoc>

        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general6  -->

                        <div class="border-solid border-2 border-slate-950 mt-10 p-4">
<br>
<p class="text-center text-lg font-semibold ">คำยินยอมของคู่สมรส</p> 
<p  class="text-center text-base ">(ใช้เฉพาะกรณีที่ผู้ค้ำประกันมีคู่สมรส)</p>
<p class=" text-end text-base mr-10 mt-10">เขียนที่ <FiLL :data="data?.location" class="min-w-70"/></p>
<p class=" text-end text-base mr-32">วันที่ <FiLL :data="data?.dateReceived" class="min-w-60" date-format="full" /> </p><br>

<p class=" text-base mt-4"><span class="ml-16">ข้าพเจ้า นาย/นาง </span><FiLL class="min-w-96" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
  <span class="ml-20">เป็นคู่สมรสของ นาย/นาง</span><FiLL class="min-w-96" :data="`${data?.prefixMrs} ${data?.ofFname}  ${data?.lName}`"/> <span class="ml-6">ยินยอมให้คู่สมรสของข้าพเจ้าเป็นผู้ค้ำประกันเงินกู้สามัญของสหกรณ์ออมทรัพย์แห่งนี้</span>  
  <span class="ml-32">ตามหนังสือค้ำประกันเงินกู้ข้างต้นนี้และข้าพเจ้าได้ลงลายมือชื่อไว้เป็นสำคัญ</span>
</p>
<div class="grid grid-cols-1 text-center mt-4 pl-48">
            <div class="text-center text-base">ลงชื่อ.................................................................คู่สมรสผู้ให้คำยินยอม</div>
            <div class="text-center pr-24">
              ( <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>)<br><br>
            </div>
            <div class="text-center text-base mr-16 mt-4">ลงชื่อ.................................................................ผู้ค้ำประกัน</div>
            <div class="text-center pr-24">
              ( <FiLL class="min-w-56" :data="`${data?.ofFname}  ${data?.lName}`"/>)<br><br>
            </div>
            <div class="text-center text-base mr-10 mt-10">ลงชื่อ.................................................................พยาน (สมาชิก)</div>
            <div class="text-center pr-24">
              (...................................................................)<br><br>
            </div>
            <div class="text-center text-base mr-10 mt-10">ลงชื่อ.................................................................พยาน (สมาชิก)</div>
            <div class="text-center pr-24">
              (...................................................................)<br><br>
            </div>
            </div>
            
           </div>
        </MorePaperDoc>

        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general7  -->

                        <div class="border-solid border-2 border-slate-950 mt-10 p-4">
<br>
<p class="text-center text-lg font-semibold ">คำยินยอมของคู่สมรส</p> 
<p  class="text-center text-base ">(ใช้เฉพาะกรณีที่ผู้ค้ำประกันมีคู่สมรส)</p>
<p class=" text-end text-base mr-10 mt-10">เขียนที่ <FiLL :data="data?.location" class="min-w-70"/></p>
<p class=" text-end text-base mr-32">วันที่ <FiLL :data="data?.dateReceived" class="min-w-60" date-format="full" /> </p><br>

<p class=" text-base mt-4"><span class="ml-16">ข้าพเจ้า นาย/นาง </span><FiLL class="min-w-96" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
  <span class="ml-20">เป็นคู่สมรสของ นาย/นาง</span><FiLL class="min-w-96" :data="`${data?.prefixMrs} ${data?.ofFname}  ${data?.lName}`"/> <span class="ml-6">ยินยอมให้คู่สมรสของข้าพเจ้าเป็นผู้ค้ำประกันเงินกู้สามัญของสหกรณ์ออมทรัพย์แห่งนี้</span>  
  <span class="ml-32">ตามหนังสือค้ำประกันเงินกู้ข้างต้นนี้และข้าพเจ้าได้ลงลายมือชื่อไว้เป็นสำคัญ</span>
</p>
<div class="grid grid-cols-1 text-center mt-4 pl-48">
            <div class="text-center text-base">ลงชื่อ.................................................................คู่สมรสผู้ให้คำยินยอม</div>
            <div class="text-center pr-24">
              ( <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>)<br><br>
            </div>
            <div class="text-center text-base mr-16 mt-4">ลงชื่อ.................................................................ผู้ค้ำประกัน</div>
            <div class="text-center pr-24">
              ( <FiLL class="min-w-56" :data="`${data?.ofFname}  ${data?.lName}`"/>)<br><br>
            </div>
            <div class="text-center text-base mr-10 mt-10">ลงชื่อ.................................................................พยาน (สมาชิก)</div>
            <div class="text-center pr-24">
              (...................................................................)<br><br>
            </div>
            <div class="text-center text-base mr-10 mt-10">ลงชื่อ.................................................................พยาน (สมาชิก)</div>
            <div class="text-center pr-24">
              (...................................................................)<br><br>
            </div>
            </div>
            
           </div>
        </MorePaperDoc>

    </main>
</template>
<script setup
        lang="ts">

        const { data } = await useFetch<any>('/api/group2');
</script>
