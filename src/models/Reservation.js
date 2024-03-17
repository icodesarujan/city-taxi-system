import Taxi from "./Taxi";

export default class Reservation {
  constructor({ id, toLocation, fromLocation, date, taxi }) {
    this.id = id;
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.date = new Date(date).toLocaleDateString();
    this.taxi = taxi
  }

  static fromReservations(reservations) {
    const reservationArray = [];
    reservations?.map((reservation) => {
      reservationArray.push(
        new Reservation({
          id: reservation.id,
          fromLocation: reservation.from,
          toLocation: reservation.to,
          date: reservation.date,
          taxi: new Taxi({
            name: reservation.taxies.name
          })
        })
      );
      return null;
    });
    return reservationArray;
  }
}
