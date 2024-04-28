<template>
    <main class="font-sans">
      <MorePaperDoc>
        <div class="grid justify-items-start font-bold mt-12 ml-48">
          <p class="pl-96">สส.ชสอ. ส.1/2(สามัญ)</p>
        </div>

        <div class=" grid justify-items-center mt-6">
            <p class=" font-medium font-bold text-xl">สำหรับเจ้าหน้าที่ศูนย์ประสานงาน</p>
        </div>
        <div class="grid justify-items-start text-pretty text-base mt-2">
          <p><span class="ml-11">ตรวจสอบแล้วขอรับรองว่า </span>
            นาย/นาง/นางสาว <FiLL class="min-w-36" :data="`${data?.fName}  ${data?.lName}`"/> เป็นผู้มีคุณสมบัติ
            ในการสมัครสมาชิก สส.ชสอ. รวมทั้งได้แบบเอกสารหลักฐานประกอบการสมัคร และชำระเงินค่าสมัคร เงินบำรุง และ
            เงินค่าสงเคราะห์ล่วงหน้าครบถ้วน ตามข้อบังคับ ระเบียบ และประกาศ สส.ชสอ. เรื่อง การรับสมัครสมาชิก สส.ชสอ. หรือ
            การเปิดรับสมัครเป็นกรณีพิเศษ แล้วแต่กรณี
          </p>
        </div>
  
        <div class="grid justify-items-center mt-4">
        <p class="pl-72">ลงชื่อ............................................................</p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <div class=" grid justify-items-center mt-4">
            <p class="mt-2 font-medium font-bold text-xl">สำหรับคณะกรรมการศูนย์ประสานงาน</p>
        </div>  
        <div class="grid justify-items-start  mt-4">
          <p>เรียน <span class=" ml-2"> นายก สส.ชสอ.</span></p>
          <p><span class="ml-11">ตรวจสอบแล้วขอรับรองว่า สมาชิกมีคุณสมบัติครบถูกต้อง </span></p>
          <p><span class="ml-11"><FiLLBox /> เห็นควรรับเป็นสมาชิก สส.ชสอ. </span></p>
          <p><span class="ml-11"><FiLLBox /> ไม่ควรรับเป็นสมาชิก สส.ชสอ. เนื่องจาก........................................................................................................................</span></p>
        </div>
        <div class="grid grid-cols-3 grid-rows-2 justify-center h-1 ml-14">
          <div class="items-start mt-4">
                <div class="border-2 border-black p-2">
                  <p class="text-sm font-bold ">ผู้มีอำนาจเสนอ (แล้วแต่กรณี)
                  </p>
                  <p class="text-sm"><FiLLBox /> เหรัญยิก/เลขานุการ ศุนย์ฯ </p>            
                  <p class="text-sm "><FiLLBox /> อุปนายก ศูนย์ฯ </p>
                  <p class="text-sm "><FiLLBox /> ประธาน ศูนย์ฯ </p>
                </div>
                </div>
                </div>
        <div class="grid justify-items-center mt-4">
        <p class="pl-72">ลงชื่อ............................................................</p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <br> 

        <div class="border-solid border-2 border-slate-950 "></div>
        <div class=" grid justify-items-center mt-6">
            <p class=" font-medium font-bold text-xl">สำหรับเจ้าหน้าที่ สส.ชสอ.</p>
        </div>
        <div class="grid justify-items-start text-pretty text-base mt-2">
          <p><span class="ml-11">ตรวจสอบแล้วขอรับรองว่า </span>
            ผู้สมัครเป็นผู้มีคุณสมบัติ ในการสมัครสมาชิก สส.ชสอ.และได้แนบหลักฐานประกอบการ
            สมัครครบถ้วน พร้อมทั้งชำระค่าสมัคร เงินบำรุง และเงินค่าสงเคราะห์ล่วงหน้าครบถ้วน ตามข้อบังคับ ระเบียบ และประกาศ
             สส.ชสอ. เรื่อง การรับสมัครสมาชิก สส.ชสอ. หรือการเปิดรับสมัครเป็นกรณีพิเศษ แล้วแต่กรณี
          </p>
        </div>
        <div class="grid justify-items-center mt-8">
        <p class="pl-72">ลงชื่อ............................................................</p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <div class=" grid justify-items-center mt-6">
            <p class=" font-medium font-bold text-xl">สำหรับคณะกรรมการ สส.ชสอ.</p>
        </div>
        <div class="grid justify-items-start  mt-4">
          <p class=" font-semibold ">คำสั่ง <FiLLBox /> <span class="font-normal">อนุมัติรับเข้าเป็นสมาชิกตั้งแต่วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></span></p>
          <p><span class="ml-11">(คณะกรรมการ...............................คราวประชุมครั้งที่.............เมื่อวันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/> ) </span></p>
          <p><span class="ml-11"><FiLLBox /> ไม่อนุมัติ เนื่องจาก........................................................................................................................</span></p>
        </div>
        <div class="grid grid-cols-3 grid-rows-2 justify-center h-1 ml-14">
          <div class="items-start mt-4">
                <div class="border-2 border-black p-2">
                  <p class="text-sm font-bold ">ผู้มีอำนาจเสนอ (แล้วแต่กรณี)
                  </p>
                  <p class="text-sm"><FiLLBox /> กรรมการ สส.ชสอ. </p>            
                  <p class="text-sm "><FiLLBox /> อุปนายก สส.ชสอ. </p>
                  <p class="text-sm "><FiLLBox /> นายก สส.ชสอ. </p>
                </div>
                </div>
                </div>
        <div class="grid justify-items-center mt-4">
        <p class="pl-72">ลงชื่อ............................................................</p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <br> 
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>