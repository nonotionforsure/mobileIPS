import React, { useState, useEffect } from "react";
import { ButtonVoltar } from "../../components"
import { useNavigation } from "@react-navigation/core";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from "react-native";
import { Camera } from "expo-camera";
import colors from "../../styles/colors";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
const tag = "[CAMERA]";
export default function App() {
    const navigation = useNavigation();
    function handleVoltar() {
        navigation.navigate("CartaoPostal");
    }
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);
    const __closeCamera = () => {
        setStartOver(true);
    };
    const __takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    };
    const __savePhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            try {
                const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);
                MediaLibrary.createAlbumAsync("Images", asset, false)
                    .then(() => {
                        Alert.alert("Imagem salva com sucesso!");
                    })
                    .catch(() => {
                        Alert.alert("Erro ao salvar a imagem!");
                    });
            } catch (error) {
                Alert.alert("error");
            }
        } else {
            Alert.alert("Sem permissão para acessar os arquivos");
        }
    };
    return (
        <View style={styles.container}>
            {startOver ? (
                <View style={styles.startOver}>
                    <TouchableOpacity
                        onPress={() => setStartOver(false)}
                        style={styles.buttonStartOver}
                    >
                        <Text style={styles.textStartOver}>Tirar uma foto</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    {previewVisible ? (
                        <ImageBackground
                            source={{ uri: capturedImage && capturedImage.uri }}
                            style={styles.container}
                        >
                            <View style={styles.collumnPreviewVisible}>
                                <View style={styles.rowPreviweVisible}>
                                    <TouchableOpacity
                                        onPress={() => setPreviewVisible(false)}
                                        style={styles.buttonPreviewVisible}
                                    >
                                        <Text style={styles.textPreviewVisible}>nova foto</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={__savePhoto}
                                        style={styles.buttonSavePhoto}
                                    >
                                        <Text style={styles.textPreviewVisible}>salvar a foto</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    ) : (
                        <Camera
                            style={styles.container}
                            type={type}
                            ref={(r) => {
                                if (r) camera = r;
                            }}
                        >
                            <View style={styles.buttonTop}>
                                <View style={styles.buttonTopPosition}>
                                    <TouchableOpacity onPress={__closeCamera}>
                                        <Text style={styles.textClose}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={styles.buttonFlip}
                                    onPress={() => {
                                        setType(
                                            type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back
                                        );
                                    }}
                                >
                                    <Text style={styles.textFlip}> Inverter </Text>
                                </TouchableOpacity>
                                <View style={styles.viewTakePicture}>
                                    <View style={styles.positionTakePicture}>
                                        <TouchableOpacity
                                            onPress={__takePicture}
                                            style={styles.buttonTakePicture}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Camera>
                    )}
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
    startOver: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
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
    buttonSavePhoto: {
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4,
    },
    buttonTop: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
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
    buttonFlip: {
        position: "absolute",
        top: "5%",
        left: "5%",
    },
    textFlip: {
        fontSize: 18,
        marginBottom: 10,
        color: colors.white,
    },
    viewTakePicture: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
    },
    positionTakePicture: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
    },
    buttonTakePicture: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: colors.white,
    },
});