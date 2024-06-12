export default class Drivers {
  constructor({ id, taxiId, licenseNo, name, contactNo }) {
    this.id = id;
    this.name = name;
    this.taxiId = taxiId;
    this.licenseNo = licenseNo;
    this.contactNo = contactNo;
  }

  static fromDrivers(drivers) {
    const driverArray = [];
    drivers?.map((driver) => {
      driverArray.push(
        new Drivers({
          id: driver.id,
          name: driver.name,
          taxiId: driver.taxi_id,
          licenseNo: driver.license_no,
          contactNo: driver.contact_no,
        })
      );
      return null;
    });
    return driverArray;
  }
}
