import React from 'react'
import { Text, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <>
            <View
                style={{
                    height: '100%',
                    backgroundColor: '#4e7091',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 5 }}>Hello World By Profile Screen</Text>
            </View>
        </>
    )
}

export default ProfileScreen;