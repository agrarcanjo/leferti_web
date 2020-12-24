import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 12, 
    flex: 1,
  },

  containerHidden: {
    marginBottom: 12,
    flex: 1,
  },

  profile: {
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  
  profileDonw: {    
    flexDirection: 'row',
    alignItems: 'center',       
    padding: 5,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    flex: 1,  
  },
  
  firstRow: {
    flexDirection: 'row', 
    flex: 1,  
    marginLeft: 10,
    marginBottom: 20,
  },
  

  profileInfo: {
    marginLeft: 10,
    marginRight: 10,
  },

  name: { 
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 14,
    marginTop: 3,
     
  },

  date: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 15,
    marginLeft: 15,
  },
 

  buttonDown: {   
    margin:10,
  },
 

  footer: {
    backgroundColor: '#fafafc',
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 16,
  },

  buttonsContainer: { 
    marginTop: 16,
  },
  
  subContainer: { 
    marginTop: 16,
    justifyContent: 'space-between', 
    flexDirection: 'row',
  },

  switchButton: { 
    flexDirection: 'row',
    alignItems: 'center',
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

  removeButton: {
    height: 36,
    borderRadius: 8, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft: 8,  
    width: 36,    
    marginRight: 8,
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  }
})

export default styles;