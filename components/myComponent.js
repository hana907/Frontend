// components/MyComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {

  // Touch start handler
  const handleTouchStart = (event) => {
    console.log('Touch Start', event);
  };

  // Touch end handler
  const handleTouchEnd = (event) => {
    console.log('Touch End', event);
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Text>Touch the screen!</Text>
    </View>
  );
};

export default MyComponent;