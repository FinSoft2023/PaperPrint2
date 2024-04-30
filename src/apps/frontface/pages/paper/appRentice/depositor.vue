<template>
    <main>
    <PaperDoc>
        <div class="mx-7">
                <p class="text-xl text-center font-semibold  mb-4 mt-20 ">
                    <FiLL :data="data?.location"date-format="full" class="min-w-40"no-line />
                </p>
                <p class="text-lg text-center font-semibold  mb-4">บัตรตัวอย่างลายมือชื่อผู้ฝากเงินประเภท
                    <FiLL :data="data?.economize"date-format="full" class="min-w-40" />

                  


                </p>

                <div class="mb-2">
                    <p class="mb-1">ชื่อผู้ฝาก
                        <FiLL class="min-w-72" :data="`${data?.fName}  ${data?.lName}`" />
                        บัญชีเงินฝากเลขที่ <FiLL :data="data?.nbAccount"date-format="full" class="min-w-36" />
                    </p>
                </div>
                <br>
                <div class="mb-2">
                    <p class="font-semibold mb-1 text-left ml-12">ตัวอย่างลายมือชื่อ</p>

                           <p class="text-center text-base">
                           1. ...........................................................................................................................................
                           <p class="text-center text-base">
                           2. ...........................................................................................................................................
                           <p class="text-center text-base">
                           3. ...........................................................................................................................................
                        </p>
                    </p>
                </p>
                <br>
                <div class="mb-2">
                    <p class="font-semibold">เงื่อนไขการถอนเงิน</p>.............................................................................................................................................................................
                        .............................................................................................................................................................................
                    
                    </div>
            </div>
        </div>
    </PaperDoc>
    <PaperDoc>
        <div class="flex flex-col mb-4 mt-20 mx-12">
        <p>
          ผู้ขอเปิดบัญชี <FiLL class="min-w-72 " :data="`${data?.fName}  ${data?.lName}`" />  สมาชิกเลขทะเบียนที่ <FiLL  class="min-w-40" :data="data?.member" />
          ที่อยู่เลขที่ <FiLL  class="min-w-28" :data="data?.housenb" /> ถนน <FiLL class="min-w-48" :data="data?.road" />ตำบล/แขวง<FiLL class="min-w-48" :data="data?.district" /> 
            อำเภอ/เขต<FiLL  class="min-w-40" :data="data?.district" /> จังหวัด<FiLL class="min-w-40" :data="data?.province" /> โทรศัพท์ <FiLL class="min-w-44" :data="data?.nbPhon" />
            สถานที่ทำงาน<FiLL class="min-w-80" :data="data?.economize" /><br> 
            โทรศัพท์<FiLL class="min-w-72" :data="data?.nbPhon" /> โทรสาร<FiLL class="min-w-72" :data="data?.nbPhon" /> 
            เปิดบัญชีเมื่อวันที่<FiLL class="min-w-80" :data="data?.dateReceived" date-format="full"/> 
            หมายเหตุ..................................................................................................................................................................................
            ....................................................................................................................................................................................................
            ....................................................................................................................................................................................................
        </p>
      </div>

    </PaperDoc>

    <PaperDoc>
        <div class="flex flex-col mb-4 mt-20 mx-12">
        <p>
          ผู้ขอเปิดบัญชี <FiLL class="min-w-72 " :data="`${data?.fName}  ${data?.lName}`" />  สมาชิกเลขทะเบียนที่ <FiLL  class="min-w-40" :data="data?.member" />
          ที่อยู่เลขที่ <FiLL  class="min-w-28" :data="data?.housenb" /> ถนน <FiLL class="min-w-48" :data="data?.road" />ตำบล/แขวง<FiLL class="min-w-48" :data="data?.district" /> 
            อำเภอ/เขต<FiLL  class="min-w-40" :data="data?.district" /> จังหวัด<FiLL class="min-w-40" :data="data?.province" /> โทรศัพท์ <FiLL class="min-w-44" :data="data?.nbPhon" />
            สถานที่ทำงาน<FiLL class="min-w-48" :data="data?.economize" />โทรศัพท์<FiLL class="min-w-36" :data="data?.nbPhon" /> โทรสาร<FiLL class="min-w-36" :data="data?.nbPhon" />
        </span>
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
            </div>
    </MorePaperDoc>
    </main>
  </template>

  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>