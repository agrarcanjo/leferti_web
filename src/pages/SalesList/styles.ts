import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  container2: {    
    padding: 3,
    backgroundColor: '#fbc9e4ad',
    paddingBottom: 14,
    
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  saleList: {
    marginTop: 10,
  },

  searchForm: { 
  },

  headerRight:{
    marginRight: 15,
  },
    
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'Archivo_400Regular',
    marginBottom: 10,
    paddingBottom: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: '#FFFFFF', 
    marginVertical: 40,
    flex: 1,
    marginLeft: 25,
  },

  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },

  label: {
    color: '#5c8599',
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '42%',
  },
  
  switchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: '#15c3d6',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  filterButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles;