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

                        <div class="text-base text-center mt-10">
                            <p>-2-</p>
                            <p class="text-base font-semibold">ถ้อยเเถลงเเละให้การยินยอมของผู้สมัครสมาชิก สสธท.</p>
                        </div>

                        <div class="flex-col items-center row-span-2">
                            <img class="w-[80px] h-auto"
                            src="https://www.saving-sskh.com/images/logo-saving.png"
                            alt="Logo" />
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
