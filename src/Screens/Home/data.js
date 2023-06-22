import { Color } from "../../Shared/styles.js";

const data = [
  {
    "id": 1,
    "name": "Legislation",
    "iconStyle": "FontAwesome5",
    "iconName": "book",
    "buttonText": "Legislation",
    "iconSize": 36,
    "iconColor": Color.primaryText,
    "imgURI": require("./../../Assets/Imgs/Home-Screen/Legislation-button-home-334x120.jpg"),
    "buttonPress": () => navigation.navigate({LegislationScreen})
    
  }
]

export default data