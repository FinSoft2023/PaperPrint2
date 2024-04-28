<template>
    <main>
        <PaperDoc>
            <!-- กู้สามัญทั่วไป general1  -->
            <br><br> <br><br> <br><br>
            <div class="border-2 border-slate-950">
              <p class="underline underline-offset-1 text-lg font-semibold "> ขั้นตอนการสมัครสมาชิก สสธท. ประเภทสามัญ (แอดไลน์ 0943934878 เพื่อสอบถามรายละเอียด)</p>
<p class="text-base">1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
<p class="text-base">2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของสมาคมในชุดสมัครเท่านั้น)</p>
<p class="text-base">3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
<p class="text-base ml-8">3.1 สำเน่บัตรประชาชนผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
<p class="text-base ml-8">3.2 สำเนาทะเบียนบ้านผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
<p class="text-base ml-8">3.3 สำเนาทะเบียนสมรส หรือสำเนาทะเบียนหย่า ของผู้สมัคร (ถ้ามี) อย่างละ 1 ฉบับ</p>
<p class="text-base ml-8">3.4 สำเนาใบเปลี่ยนชื่อ /อสกุล ของผู้สมัครและผู้รับผลประโยชน์ (ถ้ามี) อย่างละ 1 ฉบับ</p>
<p class="text-base">4.ผู้รับผลประโยชน์ต้องลงชื่อในส่วนผู้รับผลประโยชน์ และ แบบคำรับรองสุขภาพตนเอง</p>
<p class="text-base">5.ผู้รับสมัครต้องมาสมัครด้วยตนเอง เท่านั้น</p>
<p class="text-base">6.ชำระค่าสมัครและเงินสงเคราะห์ล่วงหน้า ด้วยการด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ
  <br> จำนวน 5,540.-บาท ผู้สมัครอายุไม่เกิน 54 ปี บริบูรณ์ ณ วันสมัคร
</p>
<p class="text-base">7.เปิดรับสมัครวันที่ 1-25 ของทุกเดือน ช่วงปลายเดือนจะไม่รับสมัคร แต่ตรวจสอบเอกสารได้</p>
<p class="text-base">8.สมาชิกที่กู้เกิน 300,000 - 1,000,000 บาท ต้องสมัครสสธท. หรือทำประกันสินเชื่อ 500,000 -บาท <br>
สมาชิกที่กู้ 1,000,000 - 2,000,000 บาท ต้องสมัครสสธท.หรือเลือกสมัครกองทุนล้านที่ 2 หรือประกัน 5 แสน <br>
สมาชิกกู้เกิน 2,000,000 บาท ต้องสมัครล้านที่ 2 ด้วย ต้องดำเนิกเอกสารดังกล่าวให้เรียบร้อย ส่งพร้อมกับเอกสารเงินกู้ 
หากไม่ปฏิบัติตามหลักเกณฑ์การกู้ อาจไม่ได้รับการพิจารณาเงินกู้ในรอบนั้น
</p>
<br>


            </div>

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

                        <div class="mr-3">
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
            <p><FiLLBox  :checked="data?.fName"  /> 1. มีสุขภาพแข็งแรง</p>
            <p><FiLLBox  :checked="data?.fName"  /> 2. ไม่เป็นผู้มีกายทุพพลภาพ จนไม่สามารถปฏิบัติหน้าที่ได้</p>
            <p><FiLLBox  :checked="data?.fName"  /> 3. ไม่มีจิตฟันเฟือน ไม่สมประกอบ</p>
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
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) ..............................................................................</p>
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
            <div class="text-center mt-2">
              (.......................................................................)
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
            <div class="text-start ml-4 mt-2">
              (.......................................................................)
              <p class="text-start text-base mt-2 ml-5">
                พยาน/เจ้าหน้าที่ศูนย์ประสานงาน
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
            <div class="text-center text-base mr-4">ลงชื่อ..................................................................</div>
            <div ></div>
            <div class="text-center mt-2 ">
              (.......................................................................)
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

                          <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
                        <div class="items-start mt-8">
                          
                          </div>

              <div class="flex flex-col items-center row-span-2 mt-16">
                <img class="w-[120px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
              </div>

              <div class="flex flex-col items-end row-span-2">
                <p class="mb-2 mr-12">สสธท. 3</p>
              </div>
            </div>

            <div class="grid justify-items-center mt-36 text-lg font-semibold">
            <p>หนังสือแสดงเจตนาการมอบให้รับเงินสงเคราะห์</p>
            <p>สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย</p>
            </div>

            <div class="mr-14">
            <div class="grid justify-items-end mt-2 text-base ">
            <p>เขียนที่ <FiLL :data="data?.location" class="min-w-80" /></p>
            <p>วันที่ <FiLL class="min-w-80 mr-2" :data="data?.dateReceived"
                      date-format="full" /></p>
            </div>

            <div class="grid justify-items-start mt-2 text-pretty text-base ">
            <p><span class="ml-20">ข้าพเจ้า </span> 
              <FiLL class="min-w-60" :data="` ${data?.fName}  ${data?.lName}`"/> อายุ <FiLL :data="data?.age" class="min-w-16" /> ปี วันเกิดที่ 
              <FiLL class="min-w-44" :data="data?.dateReceived"
                      date-format="full" /> สมาชิกสมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย เลขทะเบียนที่ <FiLL :data="data?.numberRegis" class="min-w-36" />
              อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-16" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-10" /> ถนน <FiLL :data="data?.road" class="min-w-20" /> 
              ตำบล <FiLL :data="data?.district" class="min-w-16" /> อำเภอ <FiLL :data="data?.district" class="min-w-16" /> จังหวัด <FiLL :data="data?.province" class="min-w-24" /> 
              รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-16" /> โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-56 " /> มือถือ <FiLL :data="data?.nbPhon" class="min-w-60" />
            </p>
          </div>

          <div class="grid justify-items-start mt-8 text-pretty text-base p-1 ">
            <p><span class="ml-20">1. สถานภาพ</span></p>
            <p class="ml-20"><FiLLBox /> โสด <span class="ml-10"><FiLLBox  :checked="data?.fName"  />สมรส คู่สมรสชื่อ </span><FiLL class="min-w-60" :data="` ${data?.ofFname}  ${data?.lName}`"/>
            <FiLLBox /> หย่า หรือ หม้าย </p>
            <p><span class="ml-20">2. ข้าพเจ้าขอแสดงเจตนาการรับเงินสงเคราะห์ที่ สสธท. พึงจ่าย ให้ผู้จัดการศพข้าพเจ้า</span></p>
            <p>คือ <FiLL class="min-w-60" :data="` ${data?.ofFname}  ${data?.lName}`"/> เกี่ยวข้องเป็น <FiLL :data="data?.newStatus" class="min-w-32" /> ของข้าพเจ้า(10%ของเงินสงเคราะห์)
              ส่วนที่เหลือมอบให้บุคคล ดังต่อไปนี้เป็นผู้รับเงินสงเคราะห์ คือ</p>
              
            <div class="mt-8">
              <LineFiLL :data="data?.repaymentPlan"
          :limit="5">
          <template #data="{ index, item }">
            <p class=" text-base pl-8"></p>
            <p class="text-start text-base"><span class="ml-20">2. </span>
              <FiLL :data="index"
                number
                normal no-line/>
                
                <FiLL class="min-w-56" :data="`${item.fn}  ${item.ln}`" />  
                    
              เกี่ยวข้องเป็น
              
              <FiLL :data="item.status" class="min-w-20" />
              
              ของข้าพเจ้า สัดส่วน <FiLL :data="item.share" class="min-w-16" /> % 
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base"><span class="ml-20">2. </span>
              <FiLL :data="index"
                number
                normal no-line/>
                
              ................................................................ เกี่ยวข้องเป็น........................
              ของข้าพเจ้า สัดส่วน.................... %
            </p>
          </template>
        </LineFiLL>
          </div>

          <div class="mt-6">
            <p><span class="ml-20">โดยมีเงื่อนไขดังนี้</span> <FiLLBox /> ได้รับเต็มจำนวนเพียงผู้เดียว  <FiLLBox  :checked="data?.fName"  /> ได้รับส่วนแบ่งเท่าๆกัน</p>
            <p class="ml-10"><span class="ml-40"><FiLLBox />อื่นๆ ระบุ.................................................................................................................................</span> </p>
            <p><span class="ml-20">อนึ่ง ข้าพเจ้าขอรับรองว่า การแสดงเจตนาครั้งนี้เป็นไปด้วยความสมัครใจ ไม่มีผู้ใดบังคับ ข่มขู่ หรือกระทำการใดๆ 
            ให้ข้าพเจ้าแสดงเจตนาดังกล่าว จึงได้ลงลายมือชื่อไว้เป็นสำคัญ ท้ายหนังสือนี้</span> </p>

          </div>
            </div>
          <div class="grid grid-rows-2 grid-flow-col mt-6">
                <div class="row-span-3">
                  <div ></div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-center text-base ml-72 mr-6">(ลงชื่อ)..........................................................ผู้ให้คำยินยอม</div>
                  <div ></div>
                  <div class="text-center ml-56">
                    (..................................................................)
                    <p class="text-center text-base">
                      ผู้สมัครสมาชิก สสธท.
                    </p>
                  </div>
                  <div class="text-center text-base ml-56 mt-2 mr-2">(ลงชื่อ)..........................................................พยาน</div>
                  <div ></div>
                  <div class="text-center ml-56">
                    (..................................................................)
                    
                  </div>
                  <div class="text-center text-base ml-72 mt-2 ">(ลงชื่อ)...........................................................เจ้าหน้าที่ สสธท.</div>
                  <div ></div>
                  <div class="text-center ml-56">
                    (<FiLL class="min-w-56" :data="` ${data?.officerFName}  ${data?.officerLName}`"/>)
                    
                  </div>
                </div>
            </div>
              

            
 
            
            </div>

        </MorePaperDoc>

        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general7  -->

                        <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
                        <div class="items-start mt-2">
                          
                          </div>

              <div class="flex flex-col items-center row-span-2 mt-2">
                
              </div>

              <div class="flex flex-col items-end row-span-2">
                <p class="mb-2 mr-12">สสธท. 9</p>
              </div>
            </div>

            <div class="grid justify-items-center mt-10 text-lg font-semibold">
            <p>หนังสือยินยอมและมอบอำนาจการรับเงินสงเคราะห์</p>
            <p>สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย (สสธท.)</p>
            </div>

            <div class="mr-14 mt-4">
            <div class="grid justify-items-center mt-2 text-base ">
            <p class="ml-12">เขียนที่ <FiLL :data="data?.location" class="min-w-96" /></p>
            <p class="ml-16">วันที่ <FiLL class="min-w-96" :data="data?.dateReceived"
                      date-format="full" /></p>
            </div>

            <div class="grid justify-items-start mt-6 text-pretty text-base ">
            <p><span class="ml-14">โดยหนังสือฉบับนี้ข้าพเจ้า </span> 
              <FiLL class="min-w-60" :data="` ${data?.fName}  ${data?.lName}`"/> ซึ่งเป็นผู้ถือบัตรประจำตัวประชาชนเลขที่ <FiLL :data="data?.idcard" class="min-w-40" /> 
              ที่อยู่ปัจจุบันเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-14" />  ซอย <FiLL :data="data?.group" class="min-w-14" /> ถนน <FiLL :data="data?.road" class="min-w-32" /> 
              ตำบล(แขวง) <FiLL :data="data?.district" class="min-w-24" /> อำเภอ(เขต) <FiLL :data="data?.district" class="min-w-24" /> จังหวัด <FiLL :data="data?.province" class="min-w-28" /> 
              รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> โทรศัพท์บ้าน <FiLL :data="data?.nbPhon" class="min-w-44 " /> โทรศัพท์มือถือ <FiLL :data="data?.nbPhon" class="min-w-44" />
              ยินยอมและมอบอำนาจให้สหกรณ์ออมทรัพย์ <FiLL :data="data?.agency" class="min-w-52" /> จำกัด หรือ <FiLL class="min-w-52" :data="` ${data?.ofFname}  ${data?.lName}`"/> ซึ่งเป็นผู้ถือบัตรประจำตัวประชาชนเลขที่ <FiLL :data="data?.idcard" class="min-w-40" /> 
              ที่อยู่ปัจจุบันเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-12" />  ซอย <FiLL :data="data?.group" class="min-w-12" /> ถนน <FiLL :data="data?.road" class="min-w-32" /> 
              ตำบล(แขวง) <FiLL :data="data?.district" class="min-w-28" /> อำเภอ(เขต) <FiLL :data="data?.district" class="min-w-28" /> จังหวัด <FiLL :data="data?.province" class="min-w-36" /> 
              รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> โทรศัพท์บ้าน <FiLL :data="data?.nbPhon" class="min-w-44 " /> โทรศัพท์มือถือ <FiLL :data="data?.nbPhon" class="min-w-48" />
              เป็นผู้ ( ) รับเงินค่าจัดการศพ ( ) รับเงินสงเคราะห์ ( ) อื่นๆ ที่พึ่งได้รับ
            </p>
            <p>แทนข้าพเจ้าเพื่อนำเงินดังกล่าวชำระหนี้ของ <FiLL :data="data?.affiliation" class="min-w-40" /> ที่มีต่อสหกรณ์ออมทรัพย์<FiLL :data="data?.savings" class="min-w-28" /> จำกัด จนเสร็จการ </p>
            <p>
              <span class="ml-14">ข้าพเจ้าขอรับผิดชอบในการที่ผู้รับยินยอมและรับมอบอำนาจได้กระทำไปตามหนังสือยินยอมและมอบอำนาจนี้
              เสมือนว่าข้าพเจ้าได้กระทำด้วยตนเองทั้งสิ้น</span>
            </p>
            <p>
              <span class="ml-14">เพื่อเป็นหลักฐานข้าพเจ้าได้ลงลายมือชื่อ / ลายพิมพ์นิ้วมือ ไว้เป็นสำคัญต่อหน้าพยานแล้ว</span>
            </p>
          </div>

          
          <div class="grid grid-rows-2 grid-flow-col mt-4">
                <div class="row-span-3">
                  <div ></div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-center text-base ml-60 mr-6">(ลงชื่อ)..........................................................ผู้ยินยอมและมอบอำนาจ</div>
                  <div ></div>
                  <div class="text-center ml-28">
                    (...........................................................)
                  </div>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col mt-2">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-center text-base mr-4">(ลงชื่อ)............................................ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(...........................................)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ .................................
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-end text-base">(ลงชื่อ)............................................ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(...........................................)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ .................................
              </p>
            </div>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col mt-2">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-center text-base mr-4">(ลงชื่อ)............................................ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(...........................................)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ .................................
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-end text-base">(ลงชื่อ)............................................ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(...........................................)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ .................................
              </p>
            </div>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col mt-6">
                <div class="row-span-3">
                  <div ></div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-center text-base ml-60 mr-6">(ลงชื่อ)..........................................................ผู้ยินยอมและมอบอำนาจ</div>
                  <div ></div>
                  <div class="text-center ml-28">
                    (...........................................................)
                  </div>
                </div>
            </div>
            <p>
              <span class="ml-14">ข้าพเจ้าขอรับรองว่าเป็นลายมือชื่อ&nbsp; /&nbsp; ลายพิมพ์นิ้วมือของผู้ยืนยอมและมอบอำนาจและผู้รับยินยอม
                และรับมอบอำนาจจริงและได้ลงลายมือชื่อ&nbsp;/&nbsp; ลายพิมพ์นิ้วมือต่อหน้าข้าพเจ้า</span>
            </p>
            <div class="grid grid-rows-2 grid-flow-col mt-2">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-end text-base mr-4">(ลงชื่อ)............................................พยาน</div>
            <div ></div>
            <div class="text-end">
              <p class="text-center text-base ml-16">(................................................)</p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-center text-base">(ลงชื่อ)............................................พยาน</div>
            <div ></div>
            <div class="text-center">
              <p class="text-center text-base ml-1">(................................................)</p>
            </div>
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
