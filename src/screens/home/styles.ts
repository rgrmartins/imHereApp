import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 40
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
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
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 35,
    alignItems: 'center'
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
})