import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignUp() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
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
                            Crie sua conta
                        </Heading>

                        <Input
                            placeholder="Nome"
                        />

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
                    <Button title="Criar e acessar" />
                    <Button
                        title="Voltar para o login"
                        variant="outline"
                        mt={24}
                        onPress={handleGoBack}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}
