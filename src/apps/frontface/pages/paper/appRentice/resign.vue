<template>
  <main>
  <PaperDoc>
    <div class="mx-3">
                <h1 class="text-xl text-center font-semibold mb-2 mt-20 border-2 border-black p-2 ">สิทธิหน้าที่สมาชิก</h1>
      <div class="mx-7">
        <div class="flex flex-col items-end mt-10">
        <p>เขียนที่ <FiLL :data="data?.location"  /></p>
        <div class="text-center mt-2 ">
        <p>วันที่  <FiLL :data="data?.dateReceived"date-format="full"  /> 
        </p>
        </div>
      </div>
            </div>

              <div class="mb-2 mt-6">
                  <p class="mb-1">เรื่อง ขอลาออกจากสมาชิกสหกรณ์ฯ
                  </p>
                  <p class="mb-1">เรียน ประธานกรรมการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
                  </p>
              </div>
              <br>
              <span class="ml-32">
              ข้าพเจ้า นาย<FiLL class="min-w-72" :data="`${data?.fName}  ${data?.lName}`"/>  สมาชิกเลขที่ <FiLL class="min-w-32" :data="data?.member" />
          สังกัด <FiLL class="min-w-52":data="data?.affiliation" /> เบอร์โทรศัพท์<FiLL class="min-w-32":data="data?.nbPhon" />อายุการเป็นสมาชิก<FiLL class="min-w-8":data="data?.period" /> ปี<FiLL class="min-w-8":data="data?.nb" />เดือน
            <p class="mt-2">มีความประสงค์ขอลาออกจากสมาชิกสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกต จำกัด เนื่องจากมีความจำเป็น<br>
               ต้องใช้เงิน/ต้องการปลดหนี้/ย้ายไปปฏิบัติราชการที่อื่น/ลาออกจากราชการ/เกษียณอายุราชการ
            </p>
        </span>
            <span class="ml-32">
                เมื่อที่ประชุมคณะกรรมการดำเนินการได้มีมติอนุมัติให้ข้าพเจ้าลาออกจากสหกรณ์ฯแล้ว ข้าพเจ้า
            </span>
            <span>
                จะมารับเงินค่าหุ้นที่มีอยู่ในสหกรณ์ด้วยตนเอง
            </span>
            <br>
            <div class="mb-2 mt-4">
            <span class="ml-32">จึงเรียนมาเพื่อโปรดพิจารณาและดำเนินการต่อไป



            </span>
        </div>
          </div>
  </PaperDoc>
  <MorePaperDoc>
      <div class="flex flex-col mb-4 mt-20 mx-12">
      <p>
        ผู้ขอเปิดบัญชี <FiLL class="min-w-72 " :data="`${data?.fName}  ${data?.lName}`" />  สมาชิกเลขทะเบียนที่ <FiLL  class="min-w-40" :data="data?.member" />
        ที่อยู่เลขที่ <FiLL  class="min-w-28" :data="data?.housenb" /> ถนน <FiLL class="min-w-48" :data="data?.road" />ตำบล/แขวง<FiLL class="min-w-48" :data="data?.district" /> 
          อำเภอ/เขต<FiLL  class="min-w-40" :data="data?.district" /> จังหวัด<FiLL class="min-w-40" :data="data?.province" /> โทรศัพท์ <FiLL class="min-w-44" :data="data?.nbPhon" />
          สถานที่ทำงาน<FiLL class="min-w-48" :data="data?.economize" />โทรศัพท์<FiLL class="min-w-36" :data="data?.nbPhon" /> โทรสาร<FiLL class="min-w-36" :data="data?.nbPhon" />
      </p>
      <div class="mt-2">
          มีความประสงค์ขอเปิดบัญชีเงินฝากออมทรัพย์พิเศษในชื่อข้าพเจ้าไว้กับสหกรณ์นี้
              </div>
              <div class="mt-6">
              <span class="ml-12">โดยข้าพเจ้าได้ลงลายมือชื่อในบัตรตัวอย่างลายมือชื่อเรียบร้อย กับยินยอมผูกพันและปฏิบัติตาม
                  ระแบบของสหกรณ์นี้ ในส่วนที่ว่าด้วยเงินฝากออมทรัพย์พิเศษทุกประการ
              </span>
          </div>
          <div class="mt-32">
        <div class="grid grid-cols-2 justify-start mt-6">
            <div class="items-start  text-center">
              <tr>
              <td class="text-left pl-16 ">ผู้อนุมัติ.................................................
              </td>
              </tr>
              <tr>
              <td class="text-center pl-24">(<FiLL class="min-w-40" :data="`${data?.officerFName}  ${data?.officerLName}`"/>)
              </td>
              </tr>
              
              <tr>
              <td class="text-left pl-16 ">ผู้บันทึก.................................................
              </td>
              </tr>
              <tr>
                <div class="text-center pl-24">
                  (<FiLL class="min-w-40" :data="`${data?.fNameManager}  ${data?.lNameManager}`"/>)<br>
      </div><br>
              
              </tr>

            </div>
            <div class="items-end ">
              
              <tr>
              <td class="text-left pl-12 ">...........................................................
              </td>
              </tr>
              <tr>
              <td class="text-left pl-16">(<FiLL class="min-w-40" :data="`${data?.fName}  ${data?.lName}`"/>)
              </td>
              </tr><br>

          </div>
          <div class="grid grid-cols-2 justify-center mt-6">
            <div class="items-start  text-nowrap">
      </div><br>
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