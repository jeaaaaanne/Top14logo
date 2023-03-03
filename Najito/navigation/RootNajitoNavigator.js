import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CocktailsScreen from "../screens/CocktailsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import IngredientsScreen from "../screens/IngredientsScreen";
import { colors } from "../theme/colors";

const Stack = createNativeStackNavigator();

const RootNajitoNavigator = () => {
    return (
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.headerBackground}
        />
        <Stack.Navigator
          initialRouteName="Cocktails"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.headerBackground,
            },
            headerTintColor: colors.headerTint,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Cocktails"
            component={CocktailsScreen}
            options={{ title: "Cocktails" }}
          />
          <Stack.Screen
            name="Ingredients"
            component={IngredientsScreen}
            options={{ title: "Ingredients" }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default RootNajitoNavigator;