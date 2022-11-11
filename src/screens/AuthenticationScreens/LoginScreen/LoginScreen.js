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
import * as GlobalStyles from '../../../GLobalStyles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {setDoc} from 'firebase/firestore';
import {auth, usersDB} from '../../../firebase/firebase_config';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const validationSchema = Yup.object({
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
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const userInfo = {
    email: '',
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

  const SignIn = (values, formikActions) => {
    console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user) {
          setIsSignedIn(true);
          AsyncStorage.setItem('@logged_in', 'true');
          navigation.navigate('BottomTabNavigator');
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
            <Text style={styles.captionText}>Login into your account</Text>
          </View>
          <Formik
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={
              // values => {
              //   console.log(values);
              // }
              SignIn
            }>
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
                  {/* EMAIL INPUT */}
                  <Animatable.View
                    animation={'slideInUp'}
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
                      <Icon
                        name="envelope"
                        size={14}
                        color={GlobalStyles.Colors.generalWhite}
                      />
                    </View>
                  </Animatable.View>

                  {/* PASSWORD INPUT */}
                  <Animatable.View
                    animation={'slideInUp'}
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
                      onPress={
                        // () => {
                        // if(network == "true") {
                        handleSubmit
                        // ()}else {alert('Network error, check your internet')}
                        // }
                      }
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
                        <Text style={styles.submitButtonText}>Login</Text>
                      )}
                    </Pressable>
                  </Animatable.View>

                  {/* SUBMIT BUTTON */}
                  <Animatable.View animation={'slideInUp'}>
                    <Pressable
                      onPress={() => {
                        alert('under construction')
                      } }
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
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      height: 20,
                      marginTop: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text>i don't have an account?</Text>
                    <Text
                      onPress={() => {
                        navigation.navigate('SignUpScreen');
                      }}
                      style={{
                        marginLeft: 10,
                        color: GlobalStyles.Colors.generalBlue,
                      }}>
                      Signup
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
