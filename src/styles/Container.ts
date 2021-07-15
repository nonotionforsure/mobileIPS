import styled from 'styled-components/native'

export const Image = styled.Image`
width: 300;
 height: 300;
 margin-bottom:20px ;
`

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: beige;
  align-items: center;
  justify-content: center;
`
export const Text = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 500;
  text-align: center;
  margin: 20px;
`
export const Button = styled.TouchableOpacity`
  background-color: green;
  border-color: white;
`