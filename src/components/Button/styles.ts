
import styled, { css } from 'styled-components/native'
import colors from '../../styles/colors'
import { ButtonStyleProps } from "../../interfaces/ButtonStyle.interface"

const sizeVariations = {
  default: css`
  `,
  define: css`
    width: 120px;
  `
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  background-color: ${colors.brown};
  border-radius: 5px;
  margin-top: 10px;
  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: ${colors.gray};
  font-weight: bold;
  text-align: center;
  padding: 10px;
  font-size: 18px;
`