import { StyleSheet, Text, View, Animated, Image, ScrollView } from "react-native";
import { useEffect, useRef } from "react";
import foto  from "../assets/foto.jpeg";

export default function AboutMe() {
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
      {/* Fundo no estilo blues */}
      <View style={styles.bgLayer1} />
      <View style={styles.bgLayer2} />
      <View style={styles.bgLayer3} />

      <ScrollView contentContainerStyle={{ alignItems: "center", padding: 20 }}>
        <Animated.View
          style={[
            styles.card,
            { opacity: fade, transform: [{ translateY: slide }] },
          ]}
        >
          {/* Foto quadrada */}
          <Image
            source={foto}
            style={styles.avatar}
          />

          <Text style={styles.title}>Sobre Mim</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>
            Olá! Meu nome é vitinho e este é o meu aplicativo.  
            Sou uma pessoa apaixonada por tecnologia, design e criação de projetos
            que possam trazer experiências únicas e interessantes.
          </Text>

          <Text style={styles.text}>
            Estou sempre buscando aprender mais, evoluir e transformar ideias em
            algo real. Gosto de explorar novas áreas, entender como as coisas
            funcionam e colocar a mão na massa para criar algo meu.
          </Text>

          <Text style={styles.text}>
            Esse aplicativo faz parte da minha jornada de aprendizado e evolução.
            Obrigado por conhecer um pouco mais sobre mim!
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

/* ------------------- ESTILOS ------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081226",
  },

  /* Camadas de fundo */
  bgLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#161b2b",
    opacity: 0.9,
  },
  bgLayer2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0b2e66",
    opacity: 0.25,
  },
  bgLayer3: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1A4BAF",
    opacity: 0.12,
  },

  card: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop: 60,
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 12, // quadrado com borda suave
    alignSelf: "center",
    marginBottom: 18,
    backgroundColor: "#d9e6ff",
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#5EC7FF",
    textAlign: "center",
  },

  separator: {
    width: 80,
    height: 4,
    backgroundColor: "#5EC7FF",
    alignSelf: "center",
    borderRadius: 50,
    marginVertical: 14,
  },

  text: {
    fontSize: 16,
    color: "#E3E8F0",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
  },
});
