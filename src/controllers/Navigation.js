import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons"

/** SCREENS */
import Home from "../screens/Home";
import Contacts from "../screens/Contacts";
import DetailNews from "../screens/DetailNews";

/** ...code */

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNews() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={Home}
                options={{
                    title: "Новости",
                    headerStyle: {
                        backgroundColor: "#eb5d3d",
                    },
                    headerTitleStyle: {
                        color: "#fff"
                    }
                }}
            />
            <Stack.Screen
                name={"DetailNews"}
                component={DetailNews}
            />
        </Stack.Navigator>
    )
}

function StackInfo() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Contacts"}
                component={Contacts}
                options={{
                    title: "Контакты",
                }}
            />
        </Stack.Navigator>
    )
}

export function MainNavigatorStack() {
    return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={{
              headerShown: false
          }}
          >
              <Tab.Screen
                  options={{
                      title: "Новости",
                      tabBarIcon: (tabInfo) => {
                          return (
                              <AntDesign
                                  name="copy1"
                                  size={24}          
                                  color={tabInfo.focused ? "#eb5d3d" : "#8e8e93"}
                              />
                          );
                      },
                  }}
                  name="NewsTab"
                  component={StackNews}
              />
              <Tab.Screen name="ContactsTab"
                          options={{
                              title: "Контакты",
                              tabBarIcon: (tabInfo) => {
                                  return (
                                      <AntDesign name="contacts" size={24} color={tabInfo.focused ? "#eb5d3d" : "#8e8e93"} />
                                  );                       
                              },
                          }}
                          component={StackInfo}
              />
          </Tab.Navigator>
      </NavigationContainer>
    );
}
