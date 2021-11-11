import React from "react";
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const ClaimsSuccessScreen = () => {
    const navigation = useNavigation();
    return ( 
            <WebView source={{ uri: 'https://dev.carnivallrc.co.uk/claims/success?app=1' }}
            onShouldStartLoadWithRequest={(event) => {                
                if (event.url.toLowerCase().includes("rewards")) {                 
                    navigation.navigate('RewardsNavigator', {screen: 'Rewards'}  );
                    return false;
                }
                
                return true;
                
              }}/>
            
    )
}

export default ClaimsSuccessScreen;