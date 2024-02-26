import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style= {{flex: 1, backgroundColor: '#0a0a0a', paddingVertical: 45, paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row', gap: 15, marginBottom: 15,borderBottomColor: '#222', borderBottomWidth: 1, paddingBottom: 15}}>
        <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor: '#222', borderWidth: 2, borderColor: '#eee'}}></View>
        <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor: '#222', borderWidth: 2, borderColor: '#eee'}}></View>
        <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor: '#222', borderWidth: 2, borderColor: '#eee'}}></View>
        <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor: '#222', borderWidth: 2, borderColor: '#eee'}}></View>
      </View>
      <View>
        <View style={{borderBottomColor: '#222', borderBottomWidth: 2, width: '100%', alignItem: 'center', paddingHorizontal: 20, paddingVertical: 10}}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center',}}>
            <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: '#222', borderWidth: 2, borderColor: '#eee'}}></View>
            <Text style={{color: '#ccc', fontSize: 24,}}>Usuario 1</Text>
          </View>
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <View style={{backgroundColor: '#222', height: 350, width: 350}}></View>
          </View>
          <Text style={{color: '#ccc', fontSize: 20}}>Descrição da imagem aqui</Text>
        </View>

        <View style={{borderBottomColor: '#222', borderBottomWidth: 2, width: '100%', alignItem: 'center', paddingHorizontal: 20, paddingVertical: 10, marginVertical: 15}}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center',}}>
            <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: '#222', borderWidth: 2, borderColor: '#eee'}}></View>
            <Text style={{color: '#ccc', fontSize: 24,}}>Usuario 2</Text>
          </View>
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <View style={{backgroundColor: '#222', height: 350, width: 350}}></View>
          </View>
          <Text style={{color: '#ccc', fontSize: 20}}>Descrição da imagem aqui</Text>
        </View>
      </View>
    </View>
  );
}