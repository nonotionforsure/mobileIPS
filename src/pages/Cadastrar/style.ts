import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 36px;
  color: ${colors.black};
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`
export const Form = styled.KeyboardAvoidingView``
export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
`
export const Label = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  padding: 5px;
`
export const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  font-size: 18px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 50%;
`