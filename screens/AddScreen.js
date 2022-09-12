import React from 'react'
import { Text, View } from 'react-native';

const AddScreen = () => {
    return (
        <>
            <View
                style={{
                    height: '100%',
                    backgroundColor: '#914e5d',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 5 }}>Hello World By Add Screen</Text>
            </View>
        </>
    )
}

export default AddScreen;