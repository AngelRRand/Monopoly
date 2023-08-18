import React, { useState, useEffect } from 'react';
import { Center, StatusBar, Text, VStack, Input, Button, Box, Heading, Pressable, View } from 'native-base';
import * as Progress from 'react-native-progress';
import { Animated, Easing, Dimensions } from 'react-native';

const Count = () => {
    const [fill, setFill] = useState(0.5);
    const [number, setNumber] = useState(0);

    const backgroundOpacity = new Animated.Value(0);
    const button1Pos = new Animated.Value(0);
    const button2Pos = new Animated.Value(0);
    const button3Pos = new Animated.Value(0);
    const [isButtonsVisible, setButtonsVisible] = useState(false);


    const scale = new Animated.Value(1);

    const pulseAnimation = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.1,
                duration: 2500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 2500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true
            }),
        ]).start(pulseAnimation);
    };

    const handleBackgroundPress = () => {
        if (isButtonsVisible) {
            hideButtons();
        }
    };

    const handlePress = () => {
        showButtons();
    };

    const showButtons = () => {
        Animated.parallel([
            Animated.spring(button1Pos, {
                toValue: -100,
                friction: 8,
                tension: 30,
                useNativeDriver: true
            }),
            Animated.spring(button2Pos, {
                toValue: -200,
                friction: 8,
                tension: 30,
                useNativeDriver: true
            }),
            Animated.spring(button3Pos, {
                toValue: -300,
                friction: 8,
                tension: 30,
                useNativeDriver: true
            })
        ]).start(() => setButtonsVisible(true)); // Establece el estado de isButtonsVisible a true después de que se complete la animación
    };

    const hideButtons = () => {
        Animated.parallel([
            Animated.spring(button1Pos, {
                toValue: 0,
                friction: 8,
                tension: 30,
                useNativeDriver: true
            }),
            Animated.spring(button2Pos, {
                toValue: 0,
                friction: 8,
                tension: 30,
                useNativeDriver: true
            }),
            Animated.spring(button3Pos, {
                toValue: 0,
                friction: 8,
                tension: 30,
                useNativeDriver: true
            })
        ]).start(() => setButtonsVisible(false)); // Establece el estado de isButtonsVisible a false después de que se complete la animación
    };




    useEffect(() => {
        pulseAnimation();
    }, []);

    return (
        <>
            
            <Pressable onPress={handleBackgroundPress}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        backgroundColor: '#1f1e1e',
                        opacity: backgroundOpacity,
                    }}
                />
            </Pressable>
            <StatusBar />
            <View flex={1}>
                <Center flex={1}>
                    <Progress.Circle
                        size={300}
                        progress={fill}
                        thickness={20}
                        color={'#FF5733'}
                        unfilledColor={'#E0E0E0'}
                        borderWidth={1}
                        textStyle={{ fontSize: 50, color: '#1f1e1e' }}
                    />
                </Center>
                <Pressable
                    onPress={handlePress}
                    position="absolute"
                    bottom={10}
                    left={10}
                    size="lg"
                    w={70}
                    h={70}
                    zIndex={2}
                >
                    <Animated.View
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: '#FF5733',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ scale: scale }]
                        }}
                    >
                        <Heading fontSize="4xl">+</Heading>
                    </Animated.View>
                </Pressable>


                <>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: 'green',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ translateY: button1Pos }]
                        }}
                    >
                        <Text style={{ fontSize: 24, color: 'white' }}>1</Text>
                    </Animated.View>

                    <Animated.View
                        style={{
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: 'purple',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ translateY: button2Pos }]
                        }}
                    >
                        <Text style={{ fontSize: 24, color: 'white' }}>2</Text>
                    </Animated.View>

                    <Animated.View
                        style={{
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: 'blue',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ translateY: button3Pos }]
                        }}
                    >
                        <Text style={{ fontSize: 24, color: 'white' }}>3</Text>
                    </Animated.View>
                </>


            </View>
        </>
    )
}

export default Count;



{/* <Modal isOpen={isOpen} onClose={onClose}>
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Ingrese un número</Modal.Header>
                        <Modal.Body>
                            <Input
                                value={number.toString()}
                                onChangeText={(value) => setNumber(Number(value))}
                                keyboardType="numeric"
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onPress={handleSetNumber}>Establecer número</Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal> */}