import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f0f7',    
  },
  header:{
    backgroundColor:"#FF69B4",
    height:250,
    justifyContent:'center',
    alignItems:'center'
  },
  headerIcon:{
    width:200,
    height:200,
    marginTop: 84, 
    color: '#FFFFFF',
    fontSize: 54,
    fontFamily:'Archivo_700Bold',
  },
  headerBackground:{
    position:'absolute',
    bottom: 36,
  },
  introductionTextContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    marginHorizontal:40,
  },
 
  introductionText:{
    fontFamily:'Poppins_500Medium',
    fontSize:24,
    color: '#6A6180',
  },
  introductionFooter:{
    height:40,
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center',
    flexDirection:'row',
    marginTop:50,
  },
})

export default styles;