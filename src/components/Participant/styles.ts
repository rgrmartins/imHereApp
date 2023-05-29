import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E24',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    color: '#fff',
    padding: 16,
    fontSize: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
})