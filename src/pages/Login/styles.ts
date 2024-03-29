import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
 
    form: { 
        padding: 50,  
    },

    banner: {
        flex: 1,

        paddingTop: Constants.statusBarHeight + 32,
        paddingBottom: 32,

        backgroundColor: '#15C3D6',
        paddingHorizontal: 24,

        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginBottom: 18,
        paddingBottom: 8,

        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6'
    },

    title: {
        color: '#5C8599',
        fontSize: 24,
        fontFamily: 'Poppins_500Medium',
    },

    label: {
        color: '#8FA7B3',
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 8,
    },

    link: {
        color: '#8FA7B3',
        fontFamily: 'Poppins_600SemiBold',
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1.4,
        borderColor: '#D3E2E6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    nextButton: {
        backgroundColor: '#39CC83',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 16,
    },

    nextButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#FFFFFF',
    },

    buttonEnable: { backgroundColor: '#39CC83', },
    buttonDisabled: { backgroundColor: '#9BE3BF' },
})
