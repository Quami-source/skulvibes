import React from 'react'
import { Pressable } from 'react-native'

export default function Button({
    children,
    style,
    ...props
}) {
    return (
        <Pressable
            {...props}
            delayLongPress={300}
            style={({ pressed }) => [
                style,
                {
                    opacity: pressed ? 0.35 : 1
                },
            ]}
        >
            {children}
        </Pressable>
    )
}