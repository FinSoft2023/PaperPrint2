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
        
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>