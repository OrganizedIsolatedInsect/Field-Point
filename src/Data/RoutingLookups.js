//Data for Listing Legislation on the Landing Screen -

class RoutingItem {
  constructor(id, title, screenName, dataBaseName, legislation) {
    this.id = id;
    this.title = title;
    this.screenName = screenName; //the name of the screen where the bookmark goes.
    this.dataBaseName = dataBaseName; //the name of the database
    this.legislation = legislation;
  }
}

export const RoutingItems = [
  new RoutingItem(
    "1",
    "Criminal Code of Canada",
    "CrimCodeSubSectionsScreen",
    "C-46_Criminal_Code",
    "CrimCode"
  ),
  new RoutingItem(
    "2",
    "Motor Vehicle Acts + Regulations",
    "MotorVehicleActsRegs",
    "MVA",
    "MVA"
  ),
];
