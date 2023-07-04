//Data for Identifying which screen routing to take when bookmarking items.

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
    "CrimCodeSubSectionsScreen",
    "CrimCodeSubSectionsScreen",
    "C-46_Criminal_Code",
    "Crim Code"
  ),
  new RoutingItem(
    "2",
    "Motor Vehicle Acts + Regulations",
    "MotorVehicleActsRegs",
    "MVA",
    "MVA"
  ),
];
