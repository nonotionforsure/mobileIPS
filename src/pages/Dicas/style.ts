import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: beige;
`
export const View = styled.View`
  background-color: ${colors.verdinho};
  margin-bottom: 300px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;

`

export const Text = styled.Text`
  font-size: 18px;
  color: ${colors.white};

`
