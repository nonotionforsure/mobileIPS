import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: beige;
`
export const View = styled.View`
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 1px;
`

export const Text = styled.Text`
  font-size: 18px;
  margin-top:20px;
  margin-right: 180px;
  color: ${colors.verdinho};
`

export const TextInput = styled.TextInput`
    background-color: ${colors.verdinho};
    border-radius: 30px;
    width: 120px;
    margin-right: 130px;
`
export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.verdinho};
  font-weight: 500;
  margin-bottom: 10px;
  margin-right: 200px;
  
`