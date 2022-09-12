import React from 'react'
import { Text, View } from 'react-native';

const ActivityScreen = () => {
    return (
        <>
            <View
                style={{
                    height: '100%',
                    backgroundColor: '#c4a31d',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 5 }}>Hello World By Activity Screen</Text>
            </View>
        </>
    )
}

export default ActivityScreen;