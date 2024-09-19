// import React, { useEffect } from 'react';
// import { View, Modal, Text, StyleSheet } from 'react-native';
// import Animated, {
//     useSharedValue,
//     useAnimatedStyle,
//     withTiming,
//     withRepeat,
//     Easing,
// } from 'react-native-reanimated';

// interface LoaderProps {
//     visible: boolean;
//     text?: string;
// }

// const Loader: React.FC<LoaderProps> = ({ visible, text }) => {
//     const scale = useSharedValue(1);

//     useEffect(() => {
//         // Pulse animation effect
//         scale.value = withRepeat(
//             withTiming(1.5, {
//                 duration: 1000,
//                 easing: Easing.inOut(Easing.ease),
//             }),
//             -1, // -1 means infinite repetition
//             true, // Reverse back to original value
//         );
//     }, []);

//     const animatedStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ scale: scale.value }],
//         };
//     });

//     return (
//         <Modal transparent={true} animationType="fade" visible={visible}>
//             <View style={styles.modalBackground}>
//                 <View style={styles.loaderContainer}>
//                     <Animated.View style={[styles.animatedCircle, animatedStyle]} />
//                     {text && <Text style={styles.loadingText}>{text}</Text>}
//                 </View>
//             </View>
//         </Modal>
//     );
// };

// const styles = StyleSheet.create({
//     modalBackground: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     loaderContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     animatedCircle: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         backgroundColor: '#838384',
//     },
//     loadingText: {
//         marginTop: 20,
//         fontSize: 16,
//         color: '#838384',
//     },
// });

// export default Loader;



import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated';

interface LoaderProps {
    visible: boolean;
    text?: string;
}

const Loader: React.FC<LoaderProps> = ({ visible, text }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        // Pulse animation effect
        scale.value = withRepeat(
            withTiming(1.5, {
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
            }),
            -1, // -1 means infinite repetition
            true, // Reverse back to original value
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    if (!visible) return null;

    return (
        <View style={styles.loaderBackground}>
            <View style={styles.loaderContainer}>
                <Animated.View style={[styles.animatedCircle, animatedStyle]} />
                {text && <Text style={styles.loadingText}>{text}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loaderBackground: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#838384',
    },
    loadingText: {
        marginTop: 20,
        fontSize: 16,
        color: '#838384',
    },
});

export default Loader;
