import React from "react";
import { useNavigation } from '@react-navigation/native';

import { WebView } from 'react-native-webview';

const RewardsSuccessScreen = () => {
    const navigation = useNavigation();
    return (
        
            <WebView source={{ uri: 'https://dev.carnivallrc.co.uk/rewards/success?app=1' }}
            onShouldStartLoadWithRequest={(event) => {
                
                console.log(event.url);
                if (event.url.toLowerCase().includes("rewards")) {
                    
                    navigation.navigate('RewardsNavigator', {screen: 'Rewards'} );
                    return false;
                }
                
                return true;
                
              }}/>
            
    )
}

export default RewardsSuccessScreen;