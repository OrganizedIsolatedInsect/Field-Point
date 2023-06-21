//Data for Listing Legislation on the Landing Screen -

class RoutingItem {
  constructor(id, title, screenName, dataBaseName) {
    this.id = id;
    this.title = title;
    this.destination = screenName;
    this.dataBaseName = dataBaseName;
  }
}

export const RoutingItem = [
  new RoutingItem(
    "1",
    "Criminal Code of Canada",
    "CriminalCode",
    "C-46_Criminal_Code"
  ),
  new RoutingItem(
    "2",
    "Motor Vehicle Acts + Regulations",
    "MotorVehicleActsRegs",
    "MVA"
  ),
];
