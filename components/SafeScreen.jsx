import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import  Colors  from "../constants/Colors";

export default function SafeScreen({children}) {
    const insets = useSafeAreaInsets();

    return (
      <View style={[styles.container, {paddingTop: inset.top }]}>
        {children}
      </View>
    );
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.background,
    },
});