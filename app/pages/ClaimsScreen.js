import React,{useEffect} from "react";
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/layout/HeaderButton';
const ClaimsScreen = () => {
    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       navigation.navigate('Claims');
    //     });
    
    //     return unsubscribe;
    //   }, [navigation]);
      
    return (      
            <WebView source={{ uri: 'https://dev.carnivallrc.co.uk/claims/index?app=1' }}
            onShouldStartLoadWithRequest={(event) => {
                
                if (event.url.toLowerCase().includes("claims/success")) {                   
                    navigation.navigate('ClaimsNavigator', {screen: 'Success'} );
                    return false;

                }
                return true;
                
              }}/>
            
    )
}
export const screenOptions = navData => {
    return {
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            color='white'
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      
    };
  };
export default ClaimsScreen;