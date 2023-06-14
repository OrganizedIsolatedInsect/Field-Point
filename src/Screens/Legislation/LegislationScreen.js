import { View, Text, Button } from 'react-native' 
import React from 'react'

import { LegislationStack } from '../../Shared/Navigation/LegislationStackNavigator'

//button is temp until component for legislation is implemented 

const LegislationScreen = ({navigation }) => {
  return (
    <View>
      <Text>LegislationScreen</Text>
      <Button title='Criminal Code' onPress={() => navigation.navigate('CrimCodeStack')}/>
    </View>
  )
}

export default LegislationScreen