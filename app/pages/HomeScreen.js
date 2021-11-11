import React, { useState, useEffect ,useRef} from "react";
import { WebView } from 'react-native-webview';
import authStorage from "../auth/storage";
import { useNavigation } from '@react-navigation/native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import HeaderButton from '../components/layout/HeaderButton';
import useAuth from "../auth/useAuth";
import colors from "../config/colors";

const HomeScreen =   () => {
    const navigation = useNavigation();
    
    const[token, setToken] = useState("");

    const jwtToken = async () => {
        const token = await authStorage.getToken();
        if(!token) return;
        setToken(token);
      };
    console.log(token);
    useEffect(() => {
        jwtToken();
     
     }, []);
    return (  
              
            <WebView  source={{ uri: 'https://dev.carnivallrc.co.uk/dashboard/index?app=1'+'&token='+token }}
            onShouldStartLoadWithRequest={(event) => {
                
                console.log(event.url);
                if (event.url.toLowerCase().includes("claims")) {
                    
                  navigation.navigate('ClaimsNavigator', {screen: 'Claims'});
                  return false;
                }
                 if(event.url.toLowerCase().includes("rewards")){
                  navigation.navigate('RewardsNavigator', {screen: 'Rewards'} );
                  return false;
                }
                return true;
                
              }}
              
            />  
                     
    )
}
// export const screenOptions = navData => {
//     return {
//       headerTitle: 'Home',
//       headerLeft: () => (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item
//             title="Menu"
//             iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//             onPress={() => {
//               navData.navigation.toggleDrawer();
//             }}
//           />
//         </HeaderButtons>
//       ),
      
//     };
//   };
export default HomeScreen;