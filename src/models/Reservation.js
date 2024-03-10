export default class Reservation {
  constructor({ id, toLocation, fromLocation, date }) {
    this.id = id;
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.date = date;
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
        })
      );
      return null;
    });
    return reservationArray;
  }
}
