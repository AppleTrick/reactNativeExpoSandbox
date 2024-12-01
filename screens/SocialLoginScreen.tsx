import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SocialLoginScreen: React.FC = () => {
  const handleGoogleLogin = () => {
    // 구글 로그인 로직
    console.log('구글 로그인 클릭');
  };

  const handleKakaoLogin = () => {
    // 카카오 로그인 로직
    console.log('카카오 로그인 클릭');
  };

  const handleNaverLogin = () => {
    // 네이버 로그인 로직
    console.log('네이버 로그인 클릭');
  };

  const handleAppleLogin = () => {
    // 애플 로그인 로직
    console.log('애플 로그인 클릭');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>로그인</Text>
      </View>

      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={handleGoogleLogin}>
          <FontAwesome5 name="google" size={24} color="white" />
          <Text style={styles.socialButtonText}>구글로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.kakaoButton]} onPress={handleKakaoLogin}>
          <FontAwesome5 name="comment" size={24} color="black" />
          <Text style={styles.kakaoButtonText}>카카오로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.naverButton]} onPress={handleNaverLogin}>
          <Text style={styles.naverButtonText}>N</Text>
          <Text style={styles.socialButtonText}>네이버로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.appleButton]} onPress={handleAppleLogin}>
          <FontAwesome5 name="apple" size={24} color="white" />
          <Text style={styles.socialButtonText}>Apple로 로그인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>계정이 없으신가요?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  socialButtonContainer: {
    gap: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  naverButton: {
    backgroundColor: '#2DB400',
  },
  naverButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  appleButton: {
    backgroundColor: 'black',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: 'gray',
  },
  signupLinkText: {
    color: 'blue',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default SocialLoginScreen;
