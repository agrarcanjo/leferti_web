import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#f587bec2",
    justifyContent:'space-between', 
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  headerIcon:{
    width:200,
    height:200,  
    borderRadius: 100,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',   
    marginTop: 20,
    marginBottom: 20,
  },
  
  menubar: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginLeft: 10,
  },

  texIcon: {
    color: '#FFFFFF', 
    fontFamily:'Archivo_400Regular',
    fontSize: 54, 
    letterSpacing: -3,
  },
  
  texIconMenu: {
    color: '#FFFFFF', 
    fontFamily:'Archivo_400Regular',
    fontSize: 32, 
    letterSpacing: -1,
  },

  texIcon2: {
    color: '#FFFFFF', 
    fontFamily:'Poppins_400Regular',
    fontSize: 20, 
    letterSpacing: -1,
    borderTopWidth: 0.8,
    borderTopColor: '#FFFFFF'
  },
 
  headerBackground:{
    position:'absolute',
    bottom: 36, 
  },
});

export default styles;