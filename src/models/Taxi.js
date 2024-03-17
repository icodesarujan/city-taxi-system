export default class Taxi {
  constructor ({id, name, vehicleNo, driverName}) {
    this.id = id
    this.vehicleNo = vehicleNo
    this.name = name
    this.driverName = driverName
  }

  static fromTaxies(taxies) {
    const taxiesArray = []
    taxies?.map(taxi => {
      taxiesArray.push(
        new Taxi({
          id : taxi.id,
          vehicleNo : taxi.reg_no,
          name: taxi.name,
          driverName: taxi.driver_name
        })
      )
      return null
    })
    return taxiesArray
  }

  static fromTaxi(taxi) {
    return new Taxi({
      id : taxi.id,
      vehicleNo : taxi.vehicle_no,
      name: taxi.name,
      driverName: taxi.driver_name
    })
  }
}