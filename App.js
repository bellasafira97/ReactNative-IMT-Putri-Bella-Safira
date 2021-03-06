import React, { Component } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class App extends Component{
  state = { 
    massa: 0, 
    tinggi: 0, 
    hasil: null }

  hitungIMT(massa, tinggi) {
    var imt = massa / Math.pow(tinggi, 2)
    var diagnosis = ''
      if (imt < 18.5){
        diagnosis = 'Berat Badan Anda Kurang!!!';
      } else if (imt >18.5 && imt < 24.9){
        diagnosis = 'Berat Badan Anda Ideal';
      } else if (imt >25 && imt < 29.9){
        diagnosis = 'Berat Badan Anda Berlebih';
      } else if (imt >30 && imt < 39.9){
        diagnosis = 'Berat Badan Anda Sangat Berlebih!';
      } else{
        diagnosis = 'Obesitas!!!';
      } 
      return { imt, diagnosis }
  }

  render() {
    return (
      <View style={{ height:'100%', backgroundColor: 'lightblue' }}>
        <View style={{ height: 60, backgroundColor: 'blue' }}>
          <Text style={{fontWeight: 'bold', fontSize: 20,color: 'white', textAlign:'center', marginTop:'4%'}}>INDEKS MASSA TUBUH</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20 }}>
          <TextInput style={{ flex: 1, textAlign:'center' }} onChangeText={(e)=>this.setState({massa:e}) } placeholder='Massa (kg)'/>
          <TextInput style={{ flex: 1, textAlign: 'center' }} onChangeText={(e)=>this.setState({tinggi:e/100}) } placeholder='Tinggi (cm)'/>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Button 
            onPress={() => {
              this.setState({
                massa: this.state.massa,
                tinggi: this.state.tinggi, 
                hasil: this.hitungIMT(this.state.massa, this.state.tinggi) 
              })
            }} 
            color='blue' title='Hitung IMT'/>
        </View>
        {
          this.state.hasil ? 
            <View style={{ paddingVertical: 15, alignItems: 'center' }}>
              <View style={ wrapperContent }>            
                <Text style={{color:'black'}}>Massa Tubuh:</Text>
                <Text style={styleContent}>{ this.state.massa } kg</Text>
              </View>
              <View style={ wrapperContent }>                
                <Text style={{color:'black'}}>Tinggi Badan:</Text>
                <Text style={styleContent}>{ this.state.tinggi } m</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={{color:'black'}}>Indeks Massa Tubuh:</Text>
                <Text style={styleContent}>{ this.state.hasil.imt }</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={{color:'black'}}>Diagnosa:</Text>
                <Text style={styleContent}>{ this.state.hasil.diagnosis }</Text>
              </View>
            </View>
          : null
        }
      </View>
    );
  }
}

var wrapperContent = {
  padding: 10, 
  alignItems: 'center'
}

var styleContent = {
  color: 'black',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign:'center'
}

export default App;
