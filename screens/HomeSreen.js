import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
    return (
        <>
            <View
                style={{
                    height: '100%',
                    backgroundColor: '#744e91',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 5 }}>Bo<Text style={{ color: 'white' }}>tt</Text>om T<Text style={{ color: 'white' }}>a</Text>b Navig<Text style={{ color: 'white' }}>ation</Text></Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>&</Text>
                <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 5 }}>Ic<Text style={{ color: 'white' }}>on</Text>s</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}><Text style={{ color: 'grey' }}>Installed</Text> & <Text style={{ color: 'grey' }}>Working</Text> Successfully <Icon name='verified' style={{ fontSize: 25, fontWeight: 'bold' }}></Icon></Text>
            </View>
        </>
    )
}

export default HomeScreen;