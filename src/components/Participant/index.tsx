import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props){
  return (
    <View style={styles.container}>
      <Text key={name} style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
