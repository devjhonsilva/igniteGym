import { useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { AuthContext } from "src/context/AuthContext";

import { useTheme, Box } from "native-base";

export function Routes() {
    const { colors } = useTheme();

    const contextData = useContext(AuthContext);

    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700];

    return (
        <Box flex={1} bg="gray.700">
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    )
}
