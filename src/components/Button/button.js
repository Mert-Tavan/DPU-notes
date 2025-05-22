import React from 'react'
import { Pressable, Text, ActivityIndicator } from 'react-native'

import styles from './button.styles'

export default ({ loading = false, onPress, title }) => {
    return (
        <Pressable
            style={styles.container}
            disabled={loading}
            onPress={onPress} >
            { 
                loading ?
                    <ActivityIndicator size={20} color='white' /> :
                    <Text style={styles.title} >{title}</Text>
            }
        </Pressable>
    )
}