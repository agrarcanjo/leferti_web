import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    scroller: {
        flex: 1,
        padding: 20
    },
 
    title: {
        color: '#5c8599',
        fontSize: 24,
        fontFamily: 'Archivo_400Regular',
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6'
    },

    backButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 9,
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
  

    finishButton: {
        backgroundColor: '#268596',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
    },

  

    nextButton: {
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 32,
    },

    nextButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#FFF',
    },

    productItem: { 
        borderRadius: 5,
        flexDirection: 'row', 
        justifyContent: 'center',
        padding: 10,
    },

    productItemSelect: { 
    },

    scrollerProduct: {
        maxHeight: 300,
        paddingBottom: 20,
        overflow: 'scroll',
    },
 

    cardProductSelected: { 
        minWidth: 50,
        minHeight: 64,

        borderRadius: 20,  

        justifyContent:'space-between',
        alignItems: 'center',
        
        backgroundColor: '#ADD8E6',
        borderColor: '#1E90FF',
        padding: 20,
        marginBottom: 32,
        marginRight: 8,
    },

   
    imageRemove: {
        position: 'absolute',
        top: 0,
        right: 0,

        width: 32,
        height: 32,

        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3E2E5',

        overflow: 'hidden',
 
  
        borderRadius: 10,
        marginTop: -10,

        justifyContent: 'center',
        alignItems: 'center',
    },

    productSelectedText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16, 
    },

    switchContainer: {  
        marginTop: 20
    },

    countButton: {
        position: 'absolute',
        top: 0,
        left: 0,


        width: 20,
        height: 20,
   
        overflow: 'hidden', 

        justifyContent: 'center',
        alignItems: 'center',
    },
 
    textCountProduct: { 
        fontSize: 15 ,
        color: "#A52A2A" 
    },

})

export default styles;