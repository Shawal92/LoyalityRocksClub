import React from "react";
import { useNavigation } from "@react-navigation/native";

import Form from "../../app/components/forms/Form";
import Button from "../../app/components/formikForm/FormButton";
import Page from "../../app/components/layout/Page";
import Paragraph from "../../app/components/typography/Paragraph";
import Title from "../../app/components/typography/Title";
import useAuth from "../auth/useAuth";
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import HeaderButton from '../components/layout/HeaderButton';
const LogoutScreen = () => {
    const { logOut} = useAuth();
    
    return (
        <Page>
            <Title text="Log out" />
            <Paragraph>Are you sure you want to sign out on this device? You will need to sign in again next time.</Paragraph>
            
                <Button text="Log out" onPress={() => logOut()} />
            
        </Page>
    )
}
// export const screenOptions = navData => {
//     return {
//       headerTitle: 'Logout',
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
export default LogoutScreen;