import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.boxLogo}>
        <Image style={styles.logo} source={require('./assets/nubank-logo-branco.png')}></Image>
      </View>

      <View>
        <Text style={styles.Boasvindas}>Olá, Felipe Melo</Text>
      </View>

      <View>
        <TextInput style={styles.input} placeholder='Procurar...' placeholderTextColor={"#FFF"}></TextInput>
      </View>


      <View style={styles.boxcartao}>
        <Text style={styles.cc}>Cartão de Crédito</Text>
        <Text style={styles.fatura}>Fatura</Text>
        <Text style={styles.limite}>R$ 1.500,00</Text>
        <View>
          <TouchableOpacity style={styles}><Text style={styles.pagar}>Pagar Fatura</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.boxconta}>
      <Text style={styles.contab}>Conta</Text>
        <Text style={styles.saldo}>Saldo disponível</Text>
        <Text style={styles.dinheiro}>R$ 300,00</Text>
        <View>
          <TouchableOpacity style={styles}><Text style={styles.transferir}>Transferir</Text>
          </TouchableOpacity>
        </View>

      </View>


      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Meus Cartões</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#8b03bb',
  },

  logo: {
    width: 180,
    height: 75,

  },
  boxLogo: {
    alignItems: 'center',
    paddingTop: 60,

  },

  input: {
    fontSize: 16,
    borderRadius: 15,
    backgroundColor: '#8B03BB',
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#FFF',
  },

  btn: {
    backgroundColor: '#0099CC',
    padding: 15,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },


  Boasvindas: {
    textAlign: 'left',
    color: '#FFF',
    fontSize: 24,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
  },

  boxcartao: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },

  cc: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  fatura: {
    fontSize: 15,
  },

  limite: {
    fontSize: 35,
    paddingTop: 18,
    fontWeight: 'bold',
    color: '#0099cc'
  },

  pagar: {
    fontSize: 20,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#8B03BB',
    width: 160,
    textAlign: 'center',
    padding: 6,
    color: '#8B03BB',
    marginTop: 15,
  },

  boxconta: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },


  contab: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  saldo: {
    fontSize: 15,
  },

  dinheiro: {
    fontSize: 35,
    paddingTop: 18,
    fontWeight: 'bold',
    color: '#000000'
  },

  transferir: {
    fontSize: 20,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#8B03BB',
    width: 160,
    textAlign: 'center',
    padding: 6,
    color: '#8B03BB',
    marginTop: 15,
  },

  btnText: {
    fontSize: 22,
    color: '#FFF',
    textAlign: 'center',
  },

});