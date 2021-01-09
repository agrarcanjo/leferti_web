import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f0f7',    
  },
  
  aboutTextContainer:{   
    marginLeft:-30,
    backgroundColor: '#f0f0f7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,

  },
  
  aboutContainer:{
    flex:1, 
    alignItems:'flex-start',
    marginHorizontal:40,
    flexDirection: 'row',
    paddingTop:30,
  },

  image:{
    resizeMode: 'cover',
    width: '25%',
    height: '65%',
    borderRadius: 30,
    shadowRadius: 80,
  },
 
  introductionTextTitle:{
    fontFamily:'Archivo_700Bold',
    fontSize:25,
    color: '#6A6180',
    padding: 10,
  },
 
  introductionText:{
    fontFamily:'Poppins_500Medium',
    fontSize: 15,
    color: '#6A6180',
    padding: 10,
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