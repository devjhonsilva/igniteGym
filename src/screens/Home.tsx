import { useState } from "react";
import { Center, VStack, FlatList, HStack, Heading, Text } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";


export function Home() {
    const [groups, setGroups] = useState(['costa', 'ombro', 'biceps', 'peito'])
    const [exercise, setExercise] = useState(['puxada frontal', 'Remada Frontal', 'peito'])
    const [groupSelected, setGroupSelected] = useState('Costa');

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const handleOpenExerciseDetail = () => {
        navigation.navigate('exercise')
    }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>
                    <Text color="gray.200" fontSize="sm">
                        {exercise.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercise}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard
                            onPress={handleOpenExerciseDetail}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />


            </VStack>



        </VStack>
    )
}
