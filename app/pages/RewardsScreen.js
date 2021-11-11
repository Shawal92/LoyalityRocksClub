import React from "react";
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView, ScrollView } from "react-native";

import HomeClaims from "../components/pages/home/HomeClaims";
import { WebView } from 'react-native-webview';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/layout/HeaderButton';
const RewardsScreen = () => {
    const navigation = useNavigation();
    return (
        
            <WebView source={{ uri: 'https://dev.carnivallrc.co.uk/rewards/index?app=1' }}
            onShouldStartLoadWithRequest={(event) => {
                
                console.log(event.url);
                if (event.url.toLowerCase().includes("rewards/vouchers")) {
                    
                    navigation.navigate('RewardsNavigator', {screen: 'Vouchers'} );
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
export default RewardsScreen;