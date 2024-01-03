import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    paddingBottom: 5,
    paddingTop: 5,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

const RepositoryItemHeader = ({
  fullName,
  ownerAvatarUrl,
  language,
  description
}) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={style.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>
        {fullName}
      </StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={style.language}>{language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={style.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

export default RepositoryItem
