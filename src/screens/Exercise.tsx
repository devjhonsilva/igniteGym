import { HStack, Heading, Icon, VStack, Text, Image, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from "@components/Button";

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <VStack flex={1}>

            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon
                        as={Feather}
                        name="arrow-left"
                        color="green.500"
                        size={6}
                    />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1}>
                        Puxada Frontal
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
            <ScrollView>
            <VStack p={8}>
                <Image
                    w="full"
                    h={80}
                    alt="Nome do exercício"
                    mb={3}
                    resizeMode="cover"
                    rounded="lg"
                    source={{uri: 'data:image/jpeg;base64,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'}}
                />

                <Box bg="gray.600" rounded="md" pb={4} px={4}>
                    <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                    <HStack>
                        <SeriesSvg />
                        <Text color="gray.200" ml="2">
                            3 Séries
                        </Text>
                    </HStack>

                    <HStack>
                        <RepetitionsSvg />
                        <Text color="gray.200" ml="2">
                            12 Repetições
                        </Text>
                    </HStack>
                    </HStack>

                    <Button title="Marcar como realizado"/>
                </Box>
            </VStack>
            </ScrollView>
        </VStack>
    )
}
