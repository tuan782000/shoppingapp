import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

type Props = {
    icon: ReactNode,
    prefix: ReactNode,
}

const Tabbar = (props: Props) => {
    const {icon, prefix} = props;
  return (
    <View>
      <Text>Tabbar</Text>
    </View>
  )
}

export default Tabbar