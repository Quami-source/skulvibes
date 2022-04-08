import React from 'react'
import { Text } from 'react-native'
import color from '../constants/color'
import Adjust from './Adjust'

export default function NewText({
    style,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    p,
    light,
    medium,
    semiMedium,
    black,
    primary,
    grey,
    deepGrey,
    bold,
    white,
    center,
    children
}) {
    return (
        <Text style={[
            style,
            {
                fontFamily: "Poppins_400Regular",
                color: color.secondary,
            },
            h1 && { fontSize: Adjust(40) },
            h2 && { fontSize: Adjust(34) },
            h3 && { fontSize: Adjust(28) },
            h4 && { fontSize: Adjust(22) },
            h5 && { fontSize: Adjust(18) },
            h6 && { fontSize: Adjust(15) },
            h7 && { fontSize: Adjust(12) },
            p && { fontSize: Adjust(10) },
            light && {fontFamily:'Poppins_300Light'},
            medium && {fontFamily:'Poppins_500Medium'},
            semiMedium && {fontFamily:'Poppins_600SemiBold'},
            bold && {fontFamily:'Poppins_700Bold'},
            grey && {color:color.primaryGrey},
            primary && {color:color.primary},
            black && {color:color.black},
            deepGrey && {color:color.secondaryGrey},
            center && {textAlign:'center'},
            white && {color:color.white}
        ]}>
            {children}
        </Text>
    )
}