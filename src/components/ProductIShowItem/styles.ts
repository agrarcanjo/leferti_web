import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8, 
    flex: 1,  
    justifyContent: 'center', 
    marginBottom: 10,
  },
   
  
  image: {
    width: 88,
    height: 88,
    borderRadius: 20,
    backgroundColor: '#e6e6f0'
  },

  value: { 
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 20,  
  },
  
  label: {
    fontFamily: 'Poppins_600SemiBold', 
    color: '#6a6180',
    fontSize: 20,
  },


  area: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 20,
  },

  infoArea: {
    marginLeft: 30,
    justifyContent: 'space-between',
  },

  userName: {
    fontSize: 17,
    fontFamily: 'Archivo_700Bold',
  },

  seeProfileButton: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: '#4EADBE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
})

export default styles;