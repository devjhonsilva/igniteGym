import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const handleNewAccount = () => {
        navigation.navigate("signUp");
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                    top={-30}
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e o seu corpo.
                    </Text>
                </Center>

                <Center pb={16} px={10}>
                    <Center>
                        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                            Acesse sua conta
                        </Heading>

                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"

                        />
                        <Input
                            placeholder="Senha"
                            secureTextEntry
                        />
                    </Center>
                    <Button title="Acessar" />
                    <Text mt={200} color="white">Ainda não tem acesso?</Text>
                    <Button
                        title="Criar a sua conta"
                        variant="outline"
                        mt={2}
                        onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}
