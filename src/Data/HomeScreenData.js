// Used this for importing image uri in JSON file into react native
// Must use data.js in order to import images using by using require("./../picture.jpg")
// https://stackoverflow.com/questions/54024112/how-to-import-images-from-json-data-into-create-react-app

import { Color } from "../Shared/styles.js";

const HomeScreenData = [
  {
    "id": 1,
    "name": "Legislation",
    "iconStyle": "FontAwesome5",
    "iconName": "book",
    "buttonText": "Legislation",
    "iconSize": 36,
    "iconColor": Color.primaryText,
    "imgURI": require("../Assets/Imgs/Home-Screen/Legislation-button-home-334x120.jpg"),
    "buttonPress": "LegislationStack",
    
  },

  {
    "id": 2,
    "name": "Policy",
    "iconStyle": "FontAwesome",
    "iconName": "hourglass",
    "buttonText": "Policy",
    "iconSize": 36,
    "iconColor": Color.primaryText,
    "imgURI": require("../Assets/Imgs/Home-Screen/Policy-button-home334x120.jpg"),
    "buttonPress": "PolicyScreen",
    
  },

  {
    "id": 3,
    "name": "Resources",
    "iconStyle": "Ionicons",
    "iconName": "newspaper",
    "buttonText": "Resources",
    "iconSize": 36,
    "iconColor": Color.primaryText,
    "imgURI": require("../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg"),
    "buttonPress": "ResourcesScreen",
    
  }
]

export default HomeScreenData