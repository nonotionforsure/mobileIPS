import styled, { css } from 'styled-components/native'
import { ButtonStyleProps } from '../../interfaces/ButtonStyle.interface'
import colors from '../../styles/colors'

const sizeVariations = {
  default: css`
  `,
  define: css`
    width: 100px;
  `
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  background-color: ${colors.brown};
  font-size: 18px;
  border-radius: 5px;
  margin: 10px;

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`
