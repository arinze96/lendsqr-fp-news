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
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomStatusBar from '../../../components/CustomStatusBar/CustomStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as GlobalStyles from '../../../GLobalStyles/GlobalStyles';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';
import {setDoc} from 'firebase/firestore';
import {auth, provider, usersDB} from '../../../firebase/firebase_config';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '443753209511-ef6hj3u4agr07uu29cqmb8ptilsktojn.apps.googleusercontent.com',
// });

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const validationSchema = Yup.object({
  fullname: Yup.string().trim().required('required!'),
  phone: Yup.string().trim().max(18, 'invalid').required('required!'),
  email: Yup.string().trim().email('invalid').required('required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('password is required!'),
});

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = React.useState('');
  const [showpassword, setShowPassword] = React.useState(true);
  const [visible, setVisible] = React.useState('eye-slash');

  const userInfo = {
    fullname: '',
    email: '',
    phone: '',
    password: '',
  };

  const handleMessage = message => {
    setMessage(message);
  };

  const togglePass = () => {
    if (showpassword == true) {
      setShowPassword(false);
      setVisible('eye');
    } else {
      setShowPassword(true);
      setVisible('eye-slash');
    }
  };

  const SignUpWithEmailAndPassword = (values, formikActions) => {
    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user) {
          AsyncStorage.setItem('@signed_up', 'true');
          navigation.navigate('LoginScreen');
        }
        // ...
      })
      .catch(error => {
        alert(error.code);
        formikActions.setSubmitting(false);
        formikActions.resetForm();
        // ..
      });
    setDoc(usersDB, {
      ...values,
    })
      .then(() => {
        console.log('data submitted');
      })
      .catch(error => {
        console.log(error.response.data, 'bad error');
      });
  };

  // signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     this.setState({ userInfo });
  //     console.log('userInfo', userInfo, 'userInfo');
  //   } catch (error) {
  //     console.log('fatal', error, 'fatal');
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // const SignUpWithGoogle = () => {
  //   signInWithRedirect(auth, provider)
  //     .then(result => {
  //       const user = result.user;
  //     })
  //     .catch(error => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // };
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

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
          <Formik
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={SignUpWithEmailAndPassword}>
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <View style={styles.textInputWrapper}>
                  {/* FIRST NAME INPUT */}
                  <Animatable.View
                    animation={'slideInUp'}
                    duration={1300}
                    style={styles.textInputContainer}>
                    <View style={styles.labelContainer}>
                      <Text>Full Name</Text>
                      {errors.fullname ? (
                        <Text style={styles.errorMessage}>
                          {errors.fullname}
                        </Text>
                      ) : null}
                    </View>
                   
                    <View style={styles.textInputBox}>
                    <Icon
                      name="user"
                      size={14}
                      color={GlobalStyles.Colors.generalBlack}
                    />
                      {/* <Icon name="person" size={14} color={GlobalStyles.Colors.generalGray02}/> */}
                      <TextInput
                        value={values.fullname}
                        style={styles.textinputStyles}
                        placeholder="Full Name"
                        error={touched.fullname && errors.fullname}
                        errors={'error'}
                        autoCapitalize="none"
                        onBlur={handleBlur('fullname')}
                        onChangeText={handleChange('fullname')}
                      />
                    </View>
                  </Animatable.View>

                  {/* EMAIL INPUT */}
                  <Animatable.View
                    animation={'slideInUp'}
                    duration={1600}
                    style={styles.textInputContainer}>
                    <View style={styles.labelContainer}>
                      <Text>Email Address</Text>
                      {errors.email ? (
                        <Text style={styles.errorMessage}>{errors.email}</Text>
                      ) : null}
                    </View>
                    <View style={styles.textInputBox}>
                      <Icon
                        name="envelope"
                        size={14}
                        color={GlobalStyles.Colors.generalBlack}
                      />
                      {/* <Icon name="person" size={14} color={GlobalStyles.Colors.generalGray02}/> */}
                      <TextInput
                        value={values.email}
                        style={styles.textinputStyles}
                        placeholder="Email Address"
                        error={touched.email && errors.email}
                        errors={'error'}
                        autoCapitalize="none"
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                      />
                    </View>
                  </Animatable.View>

                  {/* PHONE NUMBER INPUT */}
                  <Animatable.View
                    animation={'slideInUp'}
                    duration={1700}
                    style={styles.textInputContainer}>
                    <View style={styles.labelContainer}>
                      <Text>Phone Number</Text>
                      {errors.phone ? (
                        <Text style={styles.errorMessage}>{errors.phone}</Text>
                      ) : null}
                    </View>
                    <View style={styles.textInputBox}>
                      <Icon
                        name="phone"
                        size={14}
                        color={GlobalStyles.Colors.generalBlack}
                      />
                      {/* <Icon name="person" size={14} color={GlobalStyles.Colors.generalGray02}/> */}
                      <TextInput
                        value={values.phone}
                        style={styles.textinputStyles}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        error={touched.phone && errors.phone}
                        errors={'error'}
                        autoCapitalize="none"
                        onBlur={handleBlur('phone')}
                        onChangeText={handleChange('phone')}
                      />
                    </View>
                  </Animatable.View>

                  {/* PASSWORD INPUT */}
                  <Animatable.View
                    animation={'slideInUp'}
                    duration={1400}
                    style={styles.textInputContainer}>
                    <View style={styles.labelContainer}>
                      <Text>Password</Text>
                      {errors.password ? (
                        <Text style={styles.errorMessage}>
                          {errors.password}
                        </Text>
                      ) : null}
                    </View>
                    <View style={styles.textInputBox}>
                      <Icon
                        name="lock"
                        size={14}
                        color={GlobalStyles.Colors.generalBlack}
                      />
                      {/* <Icon name="person" size={14} color={GlobalStyles.Colors.generalGray02}/> */}
                      <TextInput
                        value={values.password}
                        style={styles.textinputStyles}
                        placeholder="Password"
                        error={touched.password && errors.password}
                        errors={'error'}
                        secureTextEntry={showpassword}
                        autoCapitalize="none"
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                      />
                      <Icon
                        name={visible}
                        size={14}
                        onPress={() => {togglePass()}}
                        color={GlobalStyles.Colors.generalBlack}
                      />
                    </View>
                  </Animatable.View>

                  {/* SUBMIT BUTTON */}
                  <Animatable.View animation={'slideInUp'}>
                    <Pressable
                      disabled={isSubmitting ? true : false}
                      onPress={handleSubmit}
                      style={{
                        ...styles.submitButton,
                        backgroundColor: isSubmitting
                          ? GlobalStyles.Colors.generalGray1
                          : GlobalStyles.Colors.generalBlack,
                      }}>
                      {isSubmitting ? (
                        <ActivityIndicator
                          size="small"
                          color={GlobalStyles.Colors.generalWhite}
                        />
                      ) : (
                        <Text style={styles.submitButtonText}>Signup</Text>
                      )}
                    </Pressable>
                  </Animatable.View>

                  {/* SUBMIT BUTTON */}
                  <Animatable.View animation={'slideInUp'}>
                    <Pressable
                      onPress={() => {
                        // signIn();
                        alert('under construction');
                      }}
                      style={{
                        ...styles.submitButton,
                        marginTop: 10,
                      }}>
                      <View style={styles.registerWithGoogle}>
                        <Image
                          source={require('../../../../assets/images/google.png')}
                          style={styles.googleLogo}
                          resizeMode="contain"
                        />
                        <Text
                          style={{...styles.submitButtonText, marginLeft: -25}}>
                          Signup with Google
                        </Text>
                      </View>
                    </Pressable>
                  </Animatable.View>

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      height: 20,
                      marginTop: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text>already have an account?</Text>
                    <Text
                      onPress={() => {
                        navigation.navigate('LoginScreen');
                      }}
                      style={{
                        marginLeft: 10,
                        color: GlobalStyles.Colors.generalBlue,
                      }}>
                      Signin
                    </Text>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
        <View style={{width: width, height: 150, marginBottom: 10}}></View>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
