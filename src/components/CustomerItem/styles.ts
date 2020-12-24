import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 12, 
    flex: 1,
    
    alignItems: 'center',
    justifyContent:'space-between', 
  },
 
  profileDonw: {    
    flexDirection: 'row',
    alignItems: 'center',     
    justifyContent:'space-between',  
  },
 
  
  firstRow: {
    flexDirection: 'row',  
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 5,
  },
 
  
  value: { 
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 14,
    marginTop: 3,   
  },
 
  
  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14,
  },
 
 
})

export default styles;