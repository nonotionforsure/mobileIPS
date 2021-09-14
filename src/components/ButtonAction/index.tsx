import React, { Children } from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText, ButtonStyleImage } from "./style";


export default function Button({ size, image, title, onPress, ...rest }: ButtonProps) {
    return (
        <ButtonStyle size={size} onPress={onPress} {...rest}>
            {image && <ButtonStyleImage source={image} />}
            <ButtonStyleText>{title}</ButtonStyleText>
        </ButtonStyle>
    );
}