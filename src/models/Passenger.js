export default class Passenger {
    constructor ({id, firstName, lastName, email, mobile}) {
      this.id = id
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + " " + this.lastName
      this.mobile = mobile
      this.email = email
    }
  
    static fromPassengers(passengers) {
      const passengersArray = []
      passengers?.map(passenger => {
        passengersArray.push(
          new Passenger({
            id : passenger.id,
            firstName : passenger.first_name,
            lastName: passenger.last_name,
            mobile: passenger.mobile,
            email: passenger.email
          })
        )
        return null
      })
      return passengersArray
    }

    static fromPassenger(passenger) {
      return new Passenger({
        id : passenger.id,
        firstName : passenger.first_name,
        lastName: passenger.last_name,
        mobile: passenger.mobile,
        email: passenger.email
      })
    }
  }