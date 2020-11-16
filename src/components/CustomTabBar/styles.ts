import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    tabArea: {
        height: 60,
        backgroundColor: '#4EADBE',
        flexDirection:'row',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemCenter: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 35, 
        marginTop: -20,
    },
    avatarIcon : {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    icon: {
        width: 24,
        height: 24, 
        backgroundColor: '#FFFFFF',
      },
})

export default styles;
