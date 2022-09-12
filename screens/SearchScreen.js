import React from 'react'
import { Text, View } from 'react-native';

const SearchScreen = () => {
    return (
        <>
            <View
                style={{
                    height: '100%',
                    backgroundColor: '#4e9167',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 5 }}>Hello World By Search Screen</Text>
            </View>
        </>
    )
}

export default SearchScreen;