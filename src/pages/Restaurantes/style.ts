import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const View = styled.View`
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 10px;
`

export const Text = styled.Text`
  font-size: 18px;
  color: ${colors.verdinho};
`
export const TextInput = styled.TextInput`
    background-color: ${colors.verdinho};
    border-radius: 30px;
`
