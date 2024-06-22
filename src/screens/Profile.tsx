import { useState } from "react";
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Alert, TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('');
    const toast = useToast();

    async function handlePhotoSelected() {
        setPhotoIsLoading(true);
        try {
            const photoselected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            });

            if (photoselected.canceled) {
                setPhotoIsLoading(false);
                return;
            }

            if (photoselected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoselected.assets[0].uri) as FileSystem.FileInfo;

                if(photoInfo.size && (photoInfo.size /1024 /1024) > 5){
                    return toast.show({
                        title: 'Essa imagem é grande, escolha uma imagem com menos de 5Mb',
                        placement: 'top',
                        bgColor: 'red.500'
                    });
                }
                setUserPhoto(photoselected.assets[0].uri);
            }


        } catch (error) {
            console.log(error);
        } finally {
            setPhotoIsLoading(false)
        }
    }


    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />
            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={5} px={10}>
                    {
                        photoIsLoading ?
                            <Skeleton
                                w={PHOTO_SIZE}
                                h={PHOTO_SIZE}
                                rounded="full"
                                startColor="gray.600"
                                endColor="gray.400"
                            />
                            :
                            <UserPhoto
                                source={{ uri: userPhoto }}
                                alt="Imagem usuário"
                                size={PHOTO_SIZE}
                            />
                    }

                    <TouchableOpacity onPress={handlePhotoSelected}>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Input
                        bg="gray.600"
                        placeholder="Nome"
                    />

                    <Input
                        bg="gray.600"
                        placeholder="E-mail"
                        isDisabled
                    />
                </Center>

                <Center px={10} mt={12} mb={9}>
                    <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily='heading'>
                        Alterar senha
                    </Heading>
                    <Input
                        bg="gray.600"
                        placeholder="Senha antiga"
                        secureTextEntry
                    />
                    <Input
                        bg="gray.600"
                        placeholder="Nova senha"
                        secureTextEntry
                    />
                    <Input
                        bg="gray.600"
                        placeholder="Confirme nova senha"
                        secureTextEntry
                    />
                    <Button
                        title="Atualizar"
                        mt={4}
                    />
                </Center>

            </ScrollView>
        </VStack>
    )
}
