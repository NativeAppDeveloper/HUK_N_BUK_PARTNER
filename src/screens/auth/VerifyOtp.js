import React, { useEffect, useRef, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackHandler from '../../component/BackHandler';
import Text24 from '../../component/customText/Text24';
import Text14 from '../../component/customText/Text14';
import { colors } from '../../utils/Styles';
const VerifyOtp = (props) => {
    let { route } = props
    const isFocused = useIsFocused()

    // define all state here
    const [openFlag, setOpenFlag] = useState(false);
    const [matchOtp, setMatchOtp] = useState('')
    const [enterOtp, setEnterOtp] = useState('')
    const [seconds, setSeconds] = useState(59);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

  

    // timer start
    useEffect(() => {
        if (isFocused) {
            let interval = null;
            if (isTimerRunning) {
                interval = setInterval(() => {
                    setSeconds((seconds) => {
                        if (seconds === 0) {
                            clearInterval(interval);
                            setIsTimerRunning(false);
                            return 30;
                        }
                        return seconds - 1;
                    });
                }, 1000);
            }
            return () => clearInterval(interval);
        }
    }, [isTimerRunning, isFocused]);


    return (
        <SafeAreaView style={{flex:1,}}>
            <BackHandler/>
        <KeyboardAwareScrollView bounces={false} extraHeight={moderateScale(100)}>
            <View style={{width:'90%',alignSelf:'center'}}>
            <Text24 text={'OTP Verification'}/>

                <Text14 color={colors.gray} text={`We have sent you a 6 digit verification code on `}/>
                <Text14 text={'+91 6556565656'}/>
        
            <OTPInputView
                style={{ width: '100%', height: moderateScale(100), alignSelf: 'center' }}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad={openFlag}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                    setEnterOtp(code)
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />

           

           </View>

        </KeyboardAwareScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45,
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: scale(45),
        height: moderateVerticalScale(60), borderRadius: moderateScale(8),
        color: 'black',
        fontFamily: 'PlusJakartaSans-ExtraBold',
        backgroundColor: '#efefef'
    },

    underlineStyleHighLighted: {
        // borderColor: colors.theme,

    },
});

export default VerifyOtp


