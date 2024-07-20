<template>
    <main>
        <PaperDoc>
            <!-- <div class="border-t border-r border-l border-b border-gray-900 p-2">
            </div> -->
            <div class="font-bold text-md mt-2">ใบส่งเงินฝากออมทรัพย์พิเศษ SPECIAL SAVVINGS DEPOSIT SLIP</div>
            <div class="flex justify-end mt-3">
                <p>สหกรณ์ออมทรัพย์.........................................................................................จำกัด
                </p>
            </div>
            <hr class="my-4 border-b-2 border-black">
            <div class="grid grid-cols-2">
                <div>
                    <p>สำนักงาน</p>
                    <p>Office</p>
                    <hr class="h-px w-48 my-1 bg-gray-200 border-0 dark:bg-gray-700">
                    <p>วันที่</p>
                    <p>Date</p>
                </div>
                <div class="flex flex-col gap-1">                   
                    <div class="flex items-center">
                        <input id="default-radio-1"
                               type="radio"
                               value=""
                               name="default-radio"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1"
                               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">เงินสด Cash
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="default-radio-1"
                               type="radio"
                               value=""
                               name="default-radio"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1"
                               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">รายกานโอน Transfer
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="default-radio-1"
                               type="radio"
                               value=""
                               name="default-radio"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1"
                               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">เช็คเรียกเก็บ CL/CC
                        </label>
                    </div>
                    <div class="flex items-center mb-2">
                        <input id="default-radio-1"
                               type="radio"
                               value=""
                               name="default-radio"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1"
                               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">อื่น ๆ Others
                        </label>
                    </div>

                </div>
            </div>
            <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-black">
                <tbody>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            colspan="2"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <div class="flex">
                                ชื่อบัญชี Account Name
                                <p class="ml-8">
                                    <FiLL :data="data?.fname" />
                                    <FiLL :data="data?.lname" />
                                </p>
                            </div>
                        </td>

                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <div class="flex">
                                เลขที่บัญชี Account No.
                                <p class="ml-8">
                                    6895420004
                                </p>
                            </div>


                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">

                        </td>

                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            colspan="2"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            ยอดเงินสดนำฝาก Amount in Cash Deposit
                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p>จำนวนเงิน Amount in Baht</p>

                        </td>
                        <td scope="row"
                            rowspan="4"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p class="flex justify-center">ลายมือชื่อผู้นำฝาก</p>
                            <p class="flex justify-center">Deposit By</p>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            colspan="2"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <FiLL :data="data?.salary" class="min-w-36" /> 
                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <FiLL :data="data?.oldInterestRate" class="min-w-16" /> 
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            ธนาคาร/สาขา Bank/Branch
                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p>เลขที่เช็ค Cheque Number</p>

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p></p>

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            .
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p></p>

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            .
                        </td>
                        <td scope="row"
                            rowspan="4"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p class="flex justify-center">ลายมือชื่อเจ้าหน้าที่</p>
                            <p class="flex justify-center">Authorized Signature</p>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            <p></p>

                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            .
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            colspan="2"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            ยอดรวมเงินฝากเป็นตัวอักษร Total Amount in Words
                        </td>

                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            ยอดรวมเงินฝาก Total Amount
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 ">
                        <td scope="row"
                            colspan="2"
                            class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                        </td>
                        <td scope="row"
                            class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                            .
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-xs mt-2">
                <div class="font-bold">
                </div>
                <div class="flex">หมายเหตุ <p class="ml-2">1. โปรดทำใบนำฝากแยกต่างหากอย่างละฉบับ สำหรับเงินสด
                        และเช็คหรือดร๊าฟท์
                        2. โปรดเขียนชื่อหรือหมายเลขบัญชีหลังเช็คหรือดร๊าฟท์ก่อนนำเข้าบัญชี</p>
                </div>
                <div class="ml-14">
                    3.ใบนำฝากเงินนี้จะมีผลสมบูรณ์ก็ต่อเมื่อสหกรณ์ได้รับเงินหรือได้เรียกเก็บเงินตามตั๋วเงินที่ระบุไว้ตามรายการข้างต้น
                    ถูกต้องครบถ้วนและนำเข้าบัญชีเรียบร้อยแล้วเท่านั้น
                </div>
            </div>
        </PaperDoc>


    </main>
</template>

<script setup
        lang="ts">
        import Index from '../index.vue';

        const { data } = await useFetch<any>('/api/loanEmergency');
</script>