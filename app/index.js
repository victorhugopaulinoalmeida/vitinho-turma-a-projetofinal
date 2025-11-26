import { StyleSheet, Text, View, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function Page() {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Fundo vivo no estilo Blues */}
      <View style={styles.bgLayer1} />
      <View style={styles.bgLayer2} />
      <View style={styles.bgLayer3} />

      <Animated.View
        style={[
          styles.content,
          { opacity: fade, transform: [{ translateY: slide }] },
        ]}
      >
        <Text style={styles.title}>O Mundo do Blues</Text>

        <View style={styles.separator} />

        <Text style={styles.subtitle}>Bem-vindo ao aplicativo</Text>

        <Text style={styles.intro}>
          Descubra a história, evolução e a alma do Blues — um estilo musical
          marcado pela emoção, expressão e profundidade cultural. Explore suas
          raízes, seus grandes artistas e o legado que atravessou gerações.
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081226", // base azul noite
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  /* Camadas de cor para criar fundo vibrante */
  bgLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#181818ff", // azul escuro mais rico
    opacity: 0.85,
  },

  bgLayer2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#05112cff", // azul vibrante
    opacity: 0.35,
  },

  bgLayer3: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1A4BAF", // tom azul elétrico
    opacity: 0.18,
  },

  content: {
    width: "100%",
    maxWidth: 500,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
  },

  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#5EC7FF", // azul neon suave
    textAlign: "center",
    letterSpacing: 1,
  },

  separator: {
    width: 90,
    height: 3,
    backgroundColor: "#5EC7FF",
    alignSelf: "center",
    marginTop: 12,
    borderRadius: 50,
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#B9D9FF",
    textAlign: "center",
    marginBottom: 16,
  },

  intro: {
    fontSize: 16,
    color: "#E3E8F0",
    lineHeight: 24,
    textAlign: "center",
  },
});
