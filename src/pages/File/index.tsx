import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Button,
    Image,
    View,
    Platform,
    ImageBackground,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import colors from "../../styles/colors";
import { ButtonVoltar } from "../../components";

export default function ImagePickerExample() {
    const navigation = useNavigation();
    function handleVoltar() {
        navigation.navigate("CartaoPostal");
    }
    const [image, setImage] = useState<null | string>(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    Alert.alert("Você precisa dar permissão para acessar suas imagens!");
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleCloseFile = () => {
        setImage(null);
    };

    return (
        <View style={styles.container}>
            {image ? (
                <ImageBackground source={{ uri: image }} style={styles.container}>
                    <View style={styles.buttonTopPosition}>
                        <TouchableOpacity onPress={handleCloseFile}>
                            <Text style={styles.textClose}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.collumnPreviewVisible}>
                        <View style={styles.rowPreviweVisible}>
                            <TouchableOpacity
                                onPress={() => pickImage()}
                                style={styles.buttonPreviewVisible}
                            >
                                <Text style={styles.textPreviewVisible}>Novo arquivo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            ) : (
                <View style={styles.startOver}>
                    <TouchableOpacity
                        onPress={() => pickImage()}
                        style={styles.buttonStartOver}
                    >
                        <Text style={styles.textStartOver}>Abrir arquivo</Text>
                    </TouchableOpacity>
                </View>
            )}
            <ButtonVoltar image={require("../../../assets/sair.png")} onPress={handleVoltar} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonTopPosition: {
        position: "absolute",
        top: "5%",
        right: "5%",
    },
    textClose: {
        color: colors.white,
        fontSize: 20,
    },
    collumnPreviewVisible: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        justifyContent: "flex-end",
    },
    rowPreviweVisible: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonPreviewVisible: {
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4,
    },
    textPreviewVisible: {
        color: colors.white,
        fontSize: 20,
    },
    buttonStartOver: {
        width: 130,
        borderRadius: 4,
        backgroundColor: colors.verdinho,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
    textStartOver: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
    },
    startOver: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
});