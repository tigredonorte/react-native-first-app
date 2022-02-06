import { StyleSheet } from 'react-native';

const width = '80%';

export const cancelButton = {
  color: '#AA0000',
}

export const GoalInputStyles = StyleSheet.create({
  modal: {
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: width,
    borderColor: '#000',
    borderWidth: 1,
    padding: 0,
    marginRight: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between'
  },
  buttons: {
    width: '40%'
  }
});
