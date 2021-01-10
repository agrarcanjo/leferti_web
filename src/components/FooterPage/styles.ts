import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    left: 0,
    right: 0, 
    bottom: 0,
    height: 50, 
  },

  footer:{     
    backgroundColor:"#f587bec2",
    justifyContent:'center',
    position: 'absolute',
    left: 0,
    right: 0, 
    bottom: 0,
    height: 50, 
  },

  texIcon: {
    color: '#FFFFFF', 
    fontFamily:'Archivo_400Regular',
    fontSize: 15, 
    letterSpacing: -1,
  }, 
  
  touchableOpacityStyle: {
    backgroundColor: '#1ebea5',
    borderRadius: 10, 
    borderBottomColor: '#158e7b', 
    borderTopColor: '#158e7b', 
  },

  whats: {
  },

  plusWhatsapp: {  
   
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',  
    bottom: 40,
    left: 40,
  },

  headerBackground:{
    position:'absolute',
    bottom: 36,
  },
});

export default styles;