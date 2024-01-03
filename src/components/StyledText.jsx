import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Theme from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: Theme.fontSizes.body,
    color: Theme.colors.textPrimary,
    fontFamily: Theme.fonts.main,
    fontWeight: Theme.fontWeights.normal
  },
  colorPrimary: {
    color: Theme.colors.textPrimary
  },
  colorSecondary: {
    color: Theme.colors.textSecondary
  },
  bold: {
    fontWeight: Theme.fontWeights.bold
  },
  subheading: {
    fontSize: Theme.fontSizes.subheading
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})

export default function StyledText ({ children, align, color, fontSize, fontWeight, style, ...restOfProps }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.textPrimary,
    color === 'secondary' && styles.textSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.textAlignCenter,
    style
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}
