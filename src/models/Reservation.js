import Passenger from "./Passenger";
import Taxi from "./Taxi";

export default class Reservation {
  constructor({ id, toLocation, fromLocation, date, taxi, passenger }) {
    this.id = id;
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.date = new Date(date).toLocaleDateString();
    this.taxi = taxi
    this.passenger = passenger
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
          taxi: Taxi.fromTaxi(reservation.taxies),
          passenger: Passenger.fromPassenger(reservation.passengers)
        })
      );
      return null;
    });
    return reservationArray;
  }
}
