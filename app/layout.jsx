import { Stack } from 'expo-router'
import React from 'react'

export default function layout() {
  return (
    <Stack 
    screenOptions={{
        headerShown: false,
    }}
>
    <Stack.Screen name='exercise' options={{
      presentation: "fullScreenModal"
    }}
    ></Stack.Screen>
     <Stack.Screen name='exercisesDetail' options={{
      presentation: "modal"
    }}
    ></Stack.Screen>
    </Stack>
      )
}
