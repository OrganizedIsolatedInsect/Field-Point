// Used this for importing image uri in JSON file into react native
// Must use data.js in order to import images using by using require("./../picture.jpg")
// https://stackoverflow.com/questions/54024112/how-to-import-images-from-json-data-into-create-react-app

const LegislationScreenData = [
  {
    id: 1,
    buttonText: "Motor Vehicle",
    imgURI: require("../Assets/Imgs/Legislation-Screen/motor-vehicle-150x160.jpg"),
    buttonPress: "Motor Vehicle",
  },

  {
    id: 2,
    buttonText: "Criminal Code of Canada",
    imgURI: require("../Assets/Imgs/Legislation-Screen/criminal-code-150x160.jpg"),
    buttonPress: "Criminal Code of Canada",
  },

  {
    id: 3,
    buttonText: "Cannabis Act",
    imgURI: require("../Assets/Imgs/Legislation-Screen/cannabis-button-150x160.jpg"),
    buttonPress: "",
  },

  {
    id: 4,
    buttonText: "Trespass Act",
    imgURI: require("../Assets/Imgs/Legislation-Screen/tresspassing-button-150x160.jpg"),
    buttonPress: "",
  },

  {
    id: 5,
    buttonText: "Controlled Substances",
    imgURI: require("../Assets/Imgs/Legislation-Screen/Controlled-substances-button_150x160.jpg"),
    buttonPress: "",
  },
  {
    id: 6,
    buttonText: "Charter of Rights And Freedoms Act",
    imgURI: require("../Assets/Imgs/Legislation-Screen/Charter-of-freedoms-button-150x160.jpg"),
    buttonPress: "",
  },
];

export default LegislationScreenData;
