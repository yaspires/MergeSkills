import { View, Text, Button, StyleSheet} from "react-native";
import React, { useState } from 'react'

const onboardingSteps = [
    {
        title: 'Merge Skills',
        subtitle: 'Aprenda programação de um jeito leve e interativo'
    },
    {
        title: 'Explore Trilhas',
        subtitle: 'Escolha uma linguagem, siga seu ritmo e avance passo a passo'
    },
    {
        title: 'Pratique e Evolua',
        subtitle: 'Resolva desafios, ganhe XP e suba de nível enquanto aprende'
    },
    {
        title: 'Crie e Compartilhe',
        subtitle: 'Desenvolva suas próprias trilhas e exercícios para reforçar o aprendizado'
    }
]

export default function OnboardingScreen(){
const [step, setStep] = useState(0)

const handleNext = () => {
    if(step < onboardingSteps.length -1) {
        setStep(step + 1)
    }else{
        // home
    }
}

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{onboardingSteps[step].title}</Text>
                <Text style={styles.subtitle}>{onboardingSteps[step].subtitle}</Text>
            </View>
            <View style={styles.footer}>
                <Button
                title={step === onboardingSteps.length -1 ? 'Começar' : 'Próximo'}
                onPress={handleNext}/>
                <Button 
                title= 'Pular'/>
            </View>
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },
      logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 40,
    },
      footer: {
        width: '100%',
        gap:12,
        paddingBottom: 40,
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#112437'
      },
      subtitle: {
        fontSize: 18,
        color: '#4a4a4a',
        textAlign: 'center',
        marginBottom: 30,
      }
});
