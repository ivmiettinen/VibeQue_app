import React from 'react';
import { View, Text, Image } from 'react-native';
import SongBox from './src/Components/SongBox';
//import Index from './src/Components/Index';

class HomeScreen extends React.Component {
  render() {
    return (
      // <View>
      //   <Index />
      // </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Image
          style={{width: 350, height: 80, marginTop: 50}}
          source={require('./src/pics/logo1.png')}
        />
        <SongBox />
      </View>
    );
  }
}

export default HomeScreen;