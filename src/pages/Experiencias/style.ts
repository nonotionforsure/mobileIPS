import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const View = styled.View`
  background-color: ${colors.verdinho};
  margin: 40px;
  border-radius: 20px;
  padding: 25px;
  margin-top: 8px;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 20px;
`

export const Text1 = styled.Text`
  font-size: 21px;
  text-align: center;
  margin-bottom: 10px;
`

export const Image = styled.Image`
  width: 70px; 
  height: 76px;
  border-radius: 50px;
  margin-bottom: 5px;
`