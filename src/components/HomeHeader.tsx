import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'
import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

import { UserPhoto } from "./UserPhoto";
import { useAuth } from "@hooks/useAuth";

export function HomeHeader() {
    const {user, singOut} = useAuth();
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto
                source={user.avatar ? {uri: user.avatar} : defaultUserPhotoImg}
                size={16}
                alt="Imagem do usuário"
                mr={4}
            />
            <VStack flex={1}>
                <Text color="gray.100">Olá,</Text>

                <Heading color="gray.100" fontSize='md' fontFamily='heading'>
                    {user.name}
                </Heading>
            </VStack>

            <TouchableOpacity onPress={singOut}>
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}
