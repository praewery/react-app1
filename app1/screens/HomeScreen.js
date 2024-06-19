import { View, Text,Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Bars3CenterLeftIcon} from 'react-native-heroicons/outline'
import tw from 'twrnc';


const android = Platform.OS === 'android';
export default function HomeScreen() {
    return (
        <View className="flex-1 bg-black">
            <SafeAreaView className={android? "-mb-2" : 'mb-3'}>
                <StatusBar style='light'/>
                <View className="flex-row justify-between item-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                    <Text className="text-white text-3xl font-bold">
                        <Text >Movie</Text>

                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
}