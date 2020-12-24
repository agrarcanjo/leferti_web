import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },

  headerIcon:{ 
    marginTop: 34, 
    color: '#FFFFFF',
    fontSize: 35,
    fontFamily:'Archivo_700Bold',
  },

  header:{
    backgroundColor:"#f587bec2",
    height:80,
    justifyContent:'center',
    alignItems:'center',
  },

  landingContent:{ 
    marginHorizontal:34,
    marginBottom:64,
    flex:1,
  },

  banner:{
    width:'100%',
    resizeMode:'contain'
  },

  title:{
    fontFamily:'Poppins_400Regular',
    color:'#6A6180',
    fontSize:20,
    lineHeight:30,
    marginTop:10
  },

  titleBold:{
    fontFamily:'Poppins_600SemiBold',
  },

  buttonsContainer:{ 
    marginTop: 20,
    justifyContent:'space-between', 

  },

  button:{
    flexDirection: 'row',
    alignItems: 'center', 
    borderRadius:8,
    padding:15,
    marginBottom: 5,
    justifyContent:'space-between',
  },

  buttonPrimary:{
    backgroundColor:'#ffbddec2',
    
  },

  buttonSecondary:{
    backgroundColor:'#ADD8E6',
  },

  label:{
    fontFamily:'Poppins_400Regular',
    color:'#fff',
    fontSize:15,    
    justifyContent:'center',
    alignItems:'center',
    maxWidth: Dimensions.get('window').width/2, 
  },

  value: { 
    fontFamily:'Archivo_700Bold',
    color:'#FFFFFF',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
  },

  totalConnections:{
    fontFamily:'Poppins_400Regular',
    color:'#9C98A6',
    fontSize:12,
    lineHeight:20,
    maxWidth:140,
    marginTop:30,
  }
})

export default styles