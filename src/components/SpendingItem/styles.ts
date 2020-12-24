import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 12, 
    flex: 1,
    flexDirection: 'row',
    
    alignItems: 'center', 
  },

  switchButton: {  
    alignItems: 'center',
    width: '15%', 
    marginRight: 20,
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

  inputBlock: {
    alignItems: 'center'
  },
  
  removeButton: {
    height: 36,
    borderRadius: 8, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft: 8,  
    width: 36,    
    marginRight: 8,
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
  
  contactButton: {
    backgroundColor: '#32c5307d',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 10,
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  }
})

export default styles;