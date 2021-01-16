import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f0f7',    
  },
  
  introductionTextContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    marginHorizontal:30,
    marginTop:10,
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