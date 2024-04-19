export default defineEventHandler(async (event) => {
    return {
      receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ",    // ชื่อโรงบาล
      loanAccountNumber: "345/67",                      // 
      fname: "สุริยะ",                                    //  
      lname: "ประจันนวล",                                //      
      memberNumber: "143520004343",                     //
      location: "แพทย์",                                //
      affiliation:"โรงพยาบาลเลย",                       //
      day:"27",                                         //
      month:"ธันวาคม",                                   //
      year:"2567",                                      //
      writeAt:"โรงพยาบาลเลย",                           //
      officer:"สมศัก",                                  //
      usedTo:"การศึกษา",                                //
      monthlyIncome: 10000,                            //
      intendent: "กรกนก",                              //  














      repaymentPlan: [
        { m: "มค", amount: 1000 },
        { m: "กพ", amount: 1000 },
        { m: "มน", amount: 1000 },
        { m: "มษ", amount: 1000 },
      ],
      dateReceived: new Date().toISOString(),
    }
  });
  