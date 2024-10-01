import { useState } from 'react';
import { Linking, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './Pages/HomePage';
export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // <SafeAreaView style={{flex: 1}}>
    //   <View style={styles.container}>
    //     <Text style={styles.loginText}>Sign In</Text>
    //     <TextInput 
    //       placeholder='Email Address'
    //       placeholderTextColor='white' 
    //       value={email} 
    //       onChangeText={setEmail} 
    //       style={[styles.inputContainer, {marginTop: 90}]}
    //     />
    //     <View style={[styles.inputContainer, {marginTop: '5%'}]}>
    //       <TextInput 
    //         style={[styles.input, {flex: 1}]}
    //         placeholder='Password' 
    //         placeholderTextColor='white'
    //         value={password} 
    //         onChangeText={setPassword} 
    //         secureTextEntry 
    //       />
    //       <TouchableOpacity>
    //         <Icon
    //           name={'eye-outline'}
    //           size={24}
    //           color="white"
    //           style={{bottom: 0}}
    //         />
    //       </TouchableOpacity>
    //     </View>

    //     <Pressable style={styles.continueButton}>
    //       <Text style={styles.buttonText}>Continue</Text>
    //     </Pressable>

    //     <Text style={styles.forgotPassText}>Forgot Password?</Text>
        
    //     <View style={styles.ssoView}>
    //       <Text style={[styles.ssoText, {marginBottom: '2%'}]}>Sign in with</Text>
    //       <Pressable style={styles.ssoButton}>
    //         <Text>Colegia</Text>
    //       </Pressable>
    //       <Text style={[styles.ssoText, {marginHorizontal: '10%', marginTop: '2%'}]}>By continuing, you agree to Alaia's 
    //         <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://google.com')}> Terms & Conditions </Text>
    //         and Privacy Policy and Data Disclosure Policy
    //       </Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HomePage username='Diwaakar'></HomePage>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // justifyContent: 'center',
  },
  ssoView: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    borderRadius: 25
  }, 
  ssoButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
    marginVertical: 'auto',
  },
  ssoText: {
    color: 'grey',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: '10%',
    textAlignVertical: 'center'
  },
  inputContainer: {
    height: 40,
    color: 'white',
    flexDirection: 'row',
    marginTop: 15, 
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginHorizontal: '10%',
  },
  continueButton: {
    marginTop: '8%',
    borderRadius: 30,
    backgroundColor: 'white',
    color: 'blue',
    fontSize: 'bold',
    alignItems: 'center',
    marginHorizontal: '15%'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
    paddingVertical: 15,
  },
  forgotPassText: {
    alignSelf: 'center',
    marginTop: '5%',
    color: 'white',
  }
});
