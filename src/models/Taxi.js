export default class Taxi {
  constructor({
    id,
    name,
    vehicleNo,
    driverName,
    make,
    model,
    year,
    color,
    contact,
    licNumber,
    expDate,
    availability,
  }) {
    this.id = id;
    this.vehicleNo = vehicleNo;
    this.name = name;
    this.driverName = driverName;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.contact = contact;
    this.licNumber = licNumber;
    this.expDate = expDate;
    this.availability = availability;
  }

  static fromTaxies(taxies) {
    const taxiesArray = [];
    taxies?.map((taxi) => {
      taxiesArray.push(
        new Taxi({
          id: taxi.id,
          vehicleNo: taxi.reg_no,
          name: taxi.name,
          driverName: taxi.driver_name,
          make: taxi.make,
          model: taxi.model,
          year: taxi.year,
          color: taxi.color,
          contact: taxi.driver_contact,
          licNumber: taxi.driver_license_no,
          expDat: taxi.policy_exp_date,
          availability: taxi.availability,
        })
      );
      return null;
    });
    return taxiesArray;
  }

  static fromTaxi(taxi) {
    return new Taxi({
      id: taxi.id,
      vehicleNo: taxi.vehicle_no,
      name: taxi.name,
      driverName: taxi.driver_name,
      make: taxi.make,
      model: taxi.model,
      year: taxi.year,
      color: taxi.color,
      contact: taxi.driver_contact,
      licNumber: taxi.driver_license_no,
      expDat: taxi.policy_exp_date,
      availability: taxi.availability,
    });
  }
}
