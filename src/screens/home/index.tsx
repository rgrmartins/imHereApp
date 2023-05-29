import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native'

import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home(){
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
      if (!participantName) {
          return Alert.alert("Nome Inválido", "Você precisa informar um nome para o participante!")
      }
      if (participants.includes(participantName)) {
        return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
      }

      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('')
  }
  
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover Participante", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
            setParticipants(prevState => prevState.filter(item => item !== name))
            Alert.alert('Sucesso', 'Participante removido com sucesso!')
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate} >Sexta-feira, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda neste evento. Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
