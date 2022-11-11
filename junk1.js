import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
  import React from 'react';
  import * as Animatable from 'react-native-animatable';
  import {Formik} from 'formik';
  import * as Yup from 'yup';
  import CustomStatusBar from '../../../components/CustomStatusBar/CustomStatusBar';
  import InputBox from '../../../components/InputBox/InputBox';
  import * as GlobalStyles from '../../../GLobalStyles/GlobalStyles';
  import styles from './styles';
  import {useNavigation} from '@react-navigation/native';
  import db from '../../../firebase/firebase_config';
  import auth from '../../../firebase/firebase_config'
  import {createUserWithEmailAndPassword} from 'firebase/auth';
  import {doc, setDoc} from 'firebase/firestore';
  import {usersDB,setEmailAndPassword,usersCollection,getUserCollection} from '../../../firebase/firebase_config'
  
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  const SignUpScreen = () => {
    let user = 1;
    const navigation = useNavigation();
    const [message, setMessage] = React.useState('');
    const [fullname, setfullname] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [showpassword, setShowPassword] = React.useState(true);
    const [visible, setVisible] = React.useState('eye-off-outline');
    const [isSignedIn, setIsSignedIn] = React.useState(false);
  
  
    const handleMessage = message => {
      setMessage(message);
    };
  
    const togglePass = () => {
      if (showpassword == true) {
        setShowPassword(false);
        setVisible('eye-outline');
      } else {
        setShowPassword(true);
        setVisible('eye-off-outline');
      }
    };
    
    const Signup = async () => {
  
      setEmailAndPassword(email, password)
      setDoc(usersDB, {
        fullname: fullname,
        email: email,
        phone: phone,
        password: password,
      }).then(() => {
          console.log('data submitted');
        })
        .catch(error => {
          console.log(error.response.data, 'bad error');
        });
    };
  
    return (
      <>
        <CustomStatusBar backgroundColor={'black'} barStyle={'light-content'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyles}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.pageCaptionHeader}>
              <Image
                source={require('../../../../assets/images/fpnewlogo.png')}
                style={styles.logoStyles}
                resizeMode="contain"
              />
              <Text style={styles.captionText}>
                Create new account to receive daily news feed
              </Text>
            </View>
            <>
              <View style={styles.textInputWrapper}>
                {/* FIRST NAME INPUT */}
                <Animatable.View
                  animation={'slideInUp'}
                  style={styles.textInputContainer}>
                  <View style={styles.labelContainer}>
                    <Text>Full Name</Text>
                    {/* {errors.fullname ? (
                          <Text style={styles.errorMessage}>
                            {errors.fullname}
                          </Text>
                        ) : null} */}
                  </View>
                  <View style={styles.textInputBox}>
                    {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
                    <TextInput
                      value={fullname}
                      style={styles.textinputStyles}
                      placeholder="Full Name"
                      errors={'error'}
                      autoCapitalize="none"
                      onChangeText={(fullname) => {
                        setfullname(fullname);
                      }}
                    />
                  </View>
                </Animatable.View>
  
                {/* EMAIL INPUT */}
                <Animatable.View
                  animation={'slideInUp'}
                  style={styles.textInputContainer}>
                  <View style={styles.labelContainer}>
                    <Text>Email Address</Text>
                    {/* {errors.email ? (
                          <Text style={styles.errorMessage}>{errors.email}</Text>
                        ) : null} */}
                  </View>
                  <View style={styles.textInputBox}>
                    {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
                    <TextInput
                      value={email}
                      style={styles.textinputStyles}
                      placeholder="Email Address"
                      errors={'error'}
                      autoCapitalize="none"
                      onChangeText={(email) => {
                        setemail(email);
                      }}
                    />
                  </View>
                </Animatable.View>
  
                {/* PHONE NUMBER INPUT */}
                <Animatable.View
                  animation={'slideInUp'}
                  style={styles.textInputContainer}>
                  <View style={styles.labelContainer}>
                    <Text>Phone Number</Text>
                    {/* {errors.phone ? (
                          <Text style={styles.errorMessage}>{errors.phone}</Text>
                        ) : null} */}
                  </View>
                  <View style={styles.textInputBox}>
                    {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
                    <TextInput
                      value={phone}
                      style={styles.textinputStyles}
                      placeholder="Phone Number"
                      keyboardType="phone-pad"
                      errors={'error'}
                      autoCapitalize="none"
                      // onBlur={handleBlur('phone')}
                      onChangeText={(phone) => {
                        setphone(phone);
                      }}
                    />
                  </View>
                </Animatable.View>
  
                {/* PASSWORD INPUT */}
                <Animatable.View
                  animation={'slideInUp'}
                  style={styles.textInputContainer}>
                  <View style={styles.labelContainer}>
                    <Text>Password</Text>
                    {/* {errors.password ? (
                          <Text style={styles.errorMessage}>
                            {errors.password}
                          </Text>
                        ) : null} */}
                  </View>
                  <View style={styles.textInputBox}>
                    {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
                    <TextInput
                      value={password}
                      style={styles.textinputStyles}
                      placeholder="Password"
                      errors={'error'}
                      autoCapitalize="none"
                      onChangeText={(pass) => {
                        setpassword(pass);
                      }}
                    />
                  </View>
                </Animatable.View>
  
                {/* SUBMIT BUTTON */}
                <Animatable.View animation={'slideInUp'}>
                  <TouchableOpacity
                    onPress={() => {
                      Signup();
                    }}
                    style={{
                      ...styles.submitButton,
                      backgroundColor: GlobalStyles.Colors.generalBlack,
                    }}>
                   
                    <Text style={styles.submitButtonText}>Signup</Text>
                  </TouchableOpacity>
                </Animatable.View>
  
                {/* SUBMIT BUTTON */}
                <Animatable.View animation={'slideInUp'}>
                      <Pressable
                       
                        style={{
                          ...styles.submitButton,
                          marginTop: 10,
                          backgroundColor: GlobalStyles.Colors.generalBlack,
                        }}>
                          <View
                            style={styles.registerWithGoogle}>
                            <Image
                              source={require('../../../../assets/images/google.png')}
                              style={styles.googleLogo}
                              resizeMode="contain"
                            />
                            <Text style={{ ...styles.submitButtonText, marginLeft: -25 }}>
                              Signup with Google
                            </Text>
                          </View>
                      </Pressable>
                    </Animatable.View>
              </View>
            </>
            
          </KeyboardAvoidingView>
          <View style={{width: width, height: 150, marginBottom: 10}}></View>
        </ScrollView>
      </>
    );
  };
  
  export default SignUpScreen;
  
  
  
  