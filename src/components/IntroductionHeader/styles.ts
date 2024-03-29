import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#f587bec2", 
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 2,
    paddingTop: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  headerIcon:{
    width:180,
    height:180,  
    borderRadius: 100,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',    
  },

  logo:{
    width:180,
    height:180,
    justifyContent: 'flex-end',
  },
  
  menubar: {
    marginTop: -10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row', 
  },

  iconLoginTop: {
    paddingTop: 40,
    alignItems: 'flex-end'
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
    fontSize: 25, 
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

  iconLogin: {

  },

  menu: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});

export default styles;