<template>
     <main>
  <PaperDoc>
    <div class="mx-3">
        <div class="flex text-cenetr">
        <div class="items-start ">
                <img class="w-[80px] h-auto mt-8"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  </div>
                  <h1 class="text-xl text-center font-semibold mb-2 mt-16 border-2 border-black p-2 w-72 ml-32">ใบลาออกจากสมาชิกสหกรณ์</h1>
            </div>
                
      <div class="mx-7">
        <div class="flex flex-col items-end mt-4">
        <p>เขียนที่ <FiLL :data="data?.location"  /></p>
        <div class="text-center mt-2 ">
        <p class="mr-52">วันที่  <FiLL :data="data?.dateReceived"date-format="full"  /> 
        </p>
        </div>
      </div>
            </div>

              <div class="mb-2 mt-4">
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
        <div class="mt-4">
            <span class="ml-32">
                เมื่อที่ประชุมคณะกรรมการดำเนินการได้มีมติอนุมัติให้ข้าพเจ้าลาออกจากสหกรณ์ฯแล้ว ข้าพเจ้า
            </span>
            <span>
                จะมารับเงินค่าหุ้นที่มีอยู่ในสหกรณ์ด้วยตนเอง
            </span>
        </div>
            <br>
            <div class="mb-2">
            <span class="ml-32">จึงเรียนมาเพื่อโปรดพิจารณาและดำเนินการต่อไป

                <div class="mt-4">
        <div class="grid grid-cols-2 justify-start mt-4">
            <div class="items-start  text-center">
            </div>
            <div class="items-end ">
                
              <p class="text-left pl-20 mt-4">ขอแสดงความนับถือ
              </p>

              <p class="text-left pl-12 mt-6 ">...........................................................
            </p>

              <tr>
              <p class="text-left pl-16">(<FiLL class="min-w-40" :data="`${data?.fName}  ${data?.lName}`"/>)
              </p>
              </tr><br>

              <p class="text-left pl-12 mt-2 ">...........................................................พยาน(สมาชิก)
            </p>

              <tr>
              <p class="text-left pl-16">(<FiLL class="min-w-40" :data="`${data?.fNameWitness1}  ${data?.fNameWitness2}`"/>)
              </p>
              </tr><br>
          </div>
          <div class="grid grid-cols-2 justify-center">
            <div class="items-start  text-nowrap">
      </div><br>
  </div>
</div>
</div>
            <p class="pl-6">...................................................................................................................................................................................................
            </p>
            <div class="font-semibold underline ml-6">บันทึกข้อมูลเจ้าหน้าที่สหกรณ์
            </div>
            <div class="mt-8 ml-6">เงินค่าหุ้นชึ่งมีอยู่ในสหกรณ์ฯ  <span class="ml-2">เมื่อวันที่ <FiLL :data="data?.dateReceived"date-format="short"  />
                 ส่งงวดละ <FiLL class="min-w-16":data="data?.stockValue" />บาท จำนวนเงิน<FiLL class="min-w-16" :data="data?.stockValue" />บาท</span><br>
                                   หนี้คงเหลืออยู่ในสหกรณ์ฯ    <span class="ml-6">เมื่อวันที่ <FiLL :data="data?.dateReceived"date-format="short"  />
                ส่งงวดละ <FiLL class="min-w-16 ":data="data?.stockValue" />บาท จำนวนเงิน<FiLL class="min-w-16" :data="data?.satang" />บาท</span>
                                    
                    <p class="text-center ml-56"> ดอกเบี้ย ณ วันนี้ <FiLL class="min-w-28" :data="data?.satang" />คิดเป็นเงิน<FiLL class="min-w-16" :data="data?.satang" />บาท
                    </p>
                    <div class="mt-8 ml-60">................................................เจ้าหน้าที่สหกรณ์ฯ
                    </div>
                    <div class="ml-60">(<FiLL class="min-w-40 ":data="`${data?.fMarryOwnerCollateral1}  ${data?.lMarryOwnerCollateral1}`" />)
                    </div>
                    <div class="ml-60"><FiLL class="min-w-40 ":data="data?.dateReceived"date-format="short"  />

                    </div>

            </div>



            </span>
        </div>
          </div>
  </PaperDoc> 

</main>
</template>