import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalArea: {
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        justifyContent: 'flex-end',
    },

    modalBody : {
        backgroundColor: '#83D6E3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingVertical: 20,
        paddingBottom: 40,
        paddingHorizontal: 20,
        minHeight: 500, 
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
      },
      
    label: {
        color: '#8fa7b3',
        fontFamily: 'Poppins_400Regular',
        marginBottom: 8,
    },

    closeButton : {
        width: 40,
        height: 40,
        zIndex: 9
    },

    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    modalItem : { 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
    },

    finishButton : {
        backgroundColor: '#268596',
        height: 60,
        justifyContent: 'flex-end', 
        alignItems: 'center',
        borderRadius: 10,
    },

    finishButtonText : {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
     
}) 

export default styles;