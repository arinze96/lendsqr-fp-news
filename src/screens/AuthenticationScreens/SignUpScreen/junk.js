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
  import InputBox from '../../../components/InputBox/InputBox';
  import * as GlobalStyles from '../../../GLobalStyles/GlobalStyles';
  import styles from './styles';
  import { useNavigation } from '@react-navigation/native';
  import db from '../../../firebase/firebase_config'
  import {createUserWithEmailAndPassword} from 'firebase/auth'
  import { doc, setDoc } from "firebase/firestore"; 
  
  
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
    const [visible, setVisible] = React.useState('eye-off-outline');
    const [isSignedIn, setIsSignedIn] = React.useState(false)
  
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
        setVisible('eye-outline');
      } else {
        setShowPassword(true);
        setVisible('eye-off-outline');
      }
    };
  
    const Signup = (values, formikActions) => {
      createUserWithEmailAndPassword(db, values.email, values.password );
      setDoc(doc(db, "users", "qV3D1ouAWCj2VvzY6NHY"), {
        ...values,
      }).then(() => {
        log('data submitted')
      }).catch((error) => {
        console.log(error);
      })
    }
  
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
              onSubmit={
                // values => {
                //   console.log(values);
                // }
                Signup
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
                    {/* FIRST NAME INPUT */}
                    <Animatable.View
                      animation={'slideInUp'}
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
                        {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
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
                      style={styles.textInputContainer}>
                      <View style={styles.labelContainer}>
                        <Text>Email Address</Text>
                        {errors.email ? (
                          <Text style={styles.errorMessage}>{errors.email}</Text>
                        ) : null}
                      </View>
                      <View style={styles.textInputBox}>
                        {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
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
                      style={styles.textInputContainer}>
                      <View style={styles.labelContainer}>
                        <Text>Phone Number</Text>
                        {errors.phone ? (
                          <Text style={styles.errorMessage}>{errors.phone}</Text>
                        ) : null}
                      </View>
                      <View style={styles.textInputBox}>
                        {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
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
                        {/* <Icon name="person" size={20} color={GlobalStyles.Colors.generalGray02}/> */}
                        <TextInput
                          value={values.password}
                          style={styles.textinputStyles}
                          placeholder="Password"
                          error={touched.password && errors.password}
                          errors={'error'}
                          autoCapitalize="none"
                          onBlur={handleBlur('password')}
                          onChangeText={handleChange('password')}
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
                          <Text style={styles.submitButtonText}>Signup</Text>
                        )}
                      </Pressable>
                    </Animatable.View>
  
                    {/* SUBMIT BUTTON */}
                    <Animatable.View animation={'slideInUp'}>
                      <Pressable
                        disabled={isSubmitting ? true : false}
                        onPress={
                          // () => {
                          // if(network == "true") {
                          handleSubmit
                          // navigation.navigate('HomneScreen')
                          // ()}else {alert('Network error, check your internet')}
                          // }
                        }
                        style={{
                          ...styles.submitButton,
                          marginTop: 10,
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
                        )}
                      </Pressable>
                    </Animatable.View>
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
  