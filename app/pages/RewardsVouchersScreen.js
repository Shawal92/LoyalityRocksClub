import React from "react";
import { useNavigation } from '@react-navigation/native';

import { WebView } from 'react-native-webview';

const RewardsVouchersScreen = () => {
    const navigation = useNavigation();
    return (
        
            <WebView source={{ uri: 'https://dev.carnivallrc.co.uk/rewards/vouchers?app=1' }}
            onShouldStartLoadWithRequest={(event) => {
                
                console.log(event.url);
                if (event.url.toLowerCase().includes("rewards/success")) {
                    
                    navigation.navigate('RewardsNavigator', {screen: 'Successs'} );
                    return false;
                }
                
                return true;
                
              }}/>
            
    )
}

export default RewardsVouchersScreen;