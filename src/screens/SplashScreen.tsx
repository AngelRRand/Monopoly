import React, { useEffect, useRef } from 'react';
import { Box, Center } from 'native-base';
import { Animated } from 'react-native';
import dalma from '../assets/Splash.png';

const Splash = () => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 1.1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <Center flex={1}>
            <Box>
                <Animated.Image 
                    source={dalma} 
                    style={{ 
                        width: 300, 
                        height: 300,
                        transform: [{ scale: scaleValue }],
                    }} 
                />
            </Box>
        </Center>
    );
};

export default Splash;
