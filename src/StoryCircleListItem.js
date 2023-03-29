import React, {useState, useEffect} from "react";
import {View, Image, TouchableOpacity, Text, StyleSheet, Platform} from "react-native";
import {usePrevious} from "./helpers/StateHelpers";

import DEFAULT_AVATAR from "./assets/images/no_avatar.png";

const StoryCircleListItem = (props) => {

    const {
        item,
        unPressedBorderColor,
        pressedBorderColor,
        avatarSize,
        showText,
        textStyle
    } = props;

    const [isPressed, setIsPressed] = useState(props?.item?.seen);

    const prevSeen = usePrevious(props?.item?.seen);

    useEffect(() => {
        if (prevSeen != props?.item?.seen) {
            setIsPressed(props?.item?.seen);
        }

    }, [props?.item?.seen]);

    const _handleItemPress = item => {
        const {handleStoryItemPress} = props;

        if (handleStoryItemPress) handleStoryItemPress(item);

        setIsPressed(true);
    };

    const size = avatarSize ?? 60;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => _handleItemPress(item)}
                style={[
                    styles.avatarWrapper,
                    {
                        height: size + 4,
                        width: size + 4,
                    },
                    !isPressed
                        ? {
                            borderColor: unPressedBorderColor
                                ? unPressedBorderColor
                                : 'rgb(170,136,34)'
                        }
                        : {
                            borderColor: pressedBorderColor
                                ? pressedBorderColor
                                : 'grey'
                        }
                ]}
            >
                <Image
                    style={{
                        height: size,
                        width: size,
                        borderRadius: 100,
                    }}
                    source={{uri: 'https://mbtech.app/office/images/thumbnail/' + item.avatar}}
                    defaultSource={Platform.OS === 'ios' ? DEFAULT_AVATAR : null}
                />
            </TouchableOpacity>
            {showText &&
                <Text
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                    style={{
                        width: size + 4,
                        ...styles.text,
                        ...textStyle
                    }}>{item.toko}</Text>}
        </View>
    );
}

export default StoryCircleListItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginRight: 10
    },
    avatarWrapper: {
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderColor: 'rgb(170,136,34)',
        borderRadius: 100,
        height: 64,
        width: 64
    },
    text: {
        marginTop: 3,
        textAlign: "center",
        alignItems: "center",
        fontSize: 11
    }
});
