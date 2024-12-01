import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

type WebViewScreenProps = {
  url: string;
};

const WebViewScreen: React.FC<WebViewScreenProps> = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleError = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    console.warn('WebView error: ', nativeEvent);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>페이지 로딩 중...</Text>
        </View>
      )}

      <WebView
        source={{ uri: url }}
        style={styles.webview}
        // 로딩 시작 핸들러
        onLoadStart={handleLoadStart}
        // 로딩 완료 핸들러
        onLoadEnd={handleLoadEnd}
        // 에러 핸들러
        onError={handleError}
        // 자바스크립트 활성화
        javaScriptEnabled={true}
        // 돔 저장소 활성화
        domStorageEnabled={true}
        // 확대/축소 허용
        scalesPageToFit={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
