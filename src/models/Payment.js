export default class Payment {
  constructor({ id, date, method, amount, reservation }) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.method = method;
    this.reservation = reservation;
  }

  static fromPayments(payments) {
    const paymentArray = [];
    payments?.map((payment) => {
      paymentArray.push(
        new Payment({
          id: payment.id,
          amount: payment.amount,
          date: payment.date,
          method: payment.method,
          reservation: payment.reservation_id,
        })
      );
      return null;
    });
    return paymentArray;
  }
}
