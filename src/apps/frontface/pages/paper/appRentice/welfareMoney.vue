<template>
    <main >
        <PaperDoc>
            <br><br>  <br><br>
            <div class="flex text-cenetr">
            <div class="items-start ">
                <img class="w-[70px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  </div>
              <p class="text-3xl flex pl-56"> บันทึกข้อความ </p>
            </div>
            <div class="flex">
<p class="text-lg ">ส่วนราชการ</p> <p class="text-base ">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
</div>
            
        </PaperDoc>

      <MorePaperDoc>
        <br><br>  <br><br>
        <br><br>  <br><br>
        <br>

        <p class="text-2xl text-center">
                  <FiLL class="min-w-20" :data="data?.location" />
                  </p>
                  <p class="underline underline-offset-2 text-2xl text-center font-semibold">ใบสำคัญทางการเงิน</p>
 <p class="pl-96 text-xl">วันที่ <FiLL class="min-w-60" :data="data?.dateReceived"
                      date-format="full" /></p>
                      <p class=" text-xl"><span class="ml-20">ข้าพเจ้า </span><FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/>
                    สมาชิกเลขทะเบียนที่ <FiLL class="min-w-40" :data="data?.numberRegis" /> ตำแหน่งหรือตำบลที่อยู่ <FiLL class="min-w-80" :data="data?.district" />
                ได้รับเงินจาก  <FiLL class="min-w-20" :data="data?.location" /> ดังรายการต่อไปนี้
                </p>
                ___________________________________________________________________________________________________________________
              
              <div class="flex ">
                
                <p class=" text-xl ml-8 mt-14">เป็นเงินค่า <FiLL class="min-w-80" :data="data?.money" /> <FiLL class="min-w-80" :data="data?.bath" />
                บาท <FiLL class="min-w-80" :data="data?.togetherBath" /> รวม
                </p>
                

                <table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">&nbsp;บาท&nbsp;</th>
      <th class="border border-slate-300 ...">&nbsp;สตางค์&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ..."><FiLL  :data="data?.bath" no-line/></td>
      <td class="border border-slate-300 text-center"><FiLL  :data="data?.satang" no-line/></td>
    </tr>
    <tr>
      <td class="border border-slate-300 ..."><FiLL  :data="data?.bath" no-line/></td>
      <td class="border border-slate-300 text-center"><FiLL  :data="data?.satang" no-line/></td>
    </tr>
    <tr>
      <td class="border border-slate-300 ..."><FiLL  :data="data?.bath" no-line/></td>
      <td class="border border-slate-300 text-center"><FiLL  :data="data?.satang" no-line/></td>
    </tr>
  </tbody>
</table>
</div>

<p class="underline underline-offset-1  text-xl ">คำชี้แจง <FiLL class="min-w-80" :data="data?.Explanation" /></p>
<br>
<p class=" text-xl text-center "><FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> ผู้รับเงิน </p>

      </MorePaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>