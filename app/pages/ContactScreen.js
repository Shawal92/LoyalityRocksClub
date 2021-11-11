import React from "react";

import { WebView } from 'react-native-webview';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import HeaderButton from '../components/layout/HeaderButton';

const ContactScreen = () => {
    return (
        <WebView source={{ uri: 'https://dev.carnivallrc.co.uk/contact/index?app=1' }}/>

    )
}
// export const screenOptions = navData => {
//     return {
//       headerTitle: 'Contact',
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
export default ContactScreen;