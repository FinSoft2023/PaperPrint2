export default defineEventHandler(async (event) => {
  return {
    receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ",
    dateReceived: new Date(),
    monthlyIncome: 10000,
    loanAccountNumber: "345/67",
    repaymentPlan: [
      { m: "มกราคม", amount: 1000 },
      { m: "กุมภาพันธ์", amount: 1000 },
      { m: "มีนาคม", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
      { m: "มษ", amount: 1000 },
    ],
  }
});