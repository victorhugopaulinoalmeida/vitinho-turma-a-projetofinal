import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import baile1 from "../assets/baile1.jpg";   

export default function Dance60sPage() {
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
      <View style={styles.bgLayer1} />
      <View style={styles.bgLayer2} />
      <View style={styles.bgLayer3} />

      <Animated.View
        style={[styles.content, { opacity: fade, transform: [{ translateY: slide }] }]}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Ritmo e Bailes nos Anos 60</Text>
          <View style={styles.separator} />

          <Text style={styles.lead}>
            Uma viagem pelo universo dançante da década de 1960 — festas, músicas e movimentos que marcaram uma geração.
          </Text>

          <Text style={styles.sectionTitle}>A explosão da música dançante</Text>
          <Text style={styles.paragraph}>
            Nos anos 60, o ritmo dançante ganhou força com o surgimento de estilos como rock 'n' roll, twist e soul. As rádios transmitiam incessantemente hits que faziam jovens de todas as cidades se levantar para dançar. Bandas e cantores influentes transformaram a pista de dança em um espaço de expressão coletiva e diversão.
          </Text>

          <Text style={styles.sectionTitle}>O fenômeno dos bailes</Text>
          <Text style={styles.paragraph}>
            Os bailes eram eventos centrais da vida social: ginásios, clubes e salões recebiam multidões para dançar. DJs e bandas ao vivo tocavam músicas com batidas rápidas, riffs contagiantes e melodias que convidavam a todos a se movimentar. A moda, os penteados e as coreografias faziam parte da experiência completa.
          </Text>

          <Text style={styles.sectionTitle}>Estilos e danças populares</Text>
          <Text style={styles.paragraph}>
            Twist, Jive, Mambo, Rockabilly e Boogie-Woogie dominaram as pistas. Cada dança possuía movimentos característicos: giros rápidos, passos sincronizados, improvisações individuais ou em casal. A dança tornou-se forma de expressão cultural, conectando jovens de diferentes regiões.
          </Text>

          <Text style={styles.sectionTitle}>A influência da TV e rádio</Text>
          <Text style={styles.paragraph}>
            Programas de TV e rádios locais popularizaram músicas e coreografias. Shows como American Bandstand nos EUA e programas musicais na Europa criaram ícones que inspiravam fãs a dançar, copiar estilos de roupa e imitar movimentos de palco. A música passou a moldar hábitos sociais e comportamentos juvenis.
          </Text>

          <Text style={styles.sectionTitle}>Moda e estilo dos bailes</Text>
          <Text style={styles.paragraph}>
            Minissaias, calças flare, camisas estampadas e sapatos de salto baixo ou botas marcaram a estética dos bailes. O visual era parte da diversão: os jovens queriam se destacar na pista, combinar cores e acompanhar a energia da música. O estilo pessoal tornou-se símbolo de pertencimento e liberdade.
          </Text>

          <Text style={styles.sectionTitle}>Legado cultural</Text>
          <Text style={styles.paragraph}>
            O ritmo dançante e os bailes dos anos 60 influenciaram gerações seguintes. Eles consolidaram a música como elemento social, incentivaram movimentos de liberdade cultural e transformaram o entretenimento em experiência coletiva. Muitos passos e estilos sobreviveram como referência em festas temáticas e dança moderna.
          </Text>

          {/* Espaço para foto no final */}
          <View style={styles.photoContainer}>
            <Image
              source={baile1} // substituir pela URL da sua foto
              style={styles.photo}
              resizeMode="cover"
            />
          </View>

          <View style={{ height: 24 }} />
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081226",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  bgLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0D1B3A",
    opacity: 0.95,
  },

  bgLayer2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0A2A6E",
    opacity: 0.45,
  },

  bgLayer3: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1A4BAF",
    opacity: 0.12,
  },

  content: {
    flex: 1,
    width: "100%",
    maxWidth: 800,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    paddingVertical: 18,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: Platform.OS === "ios" ? 36 : 18,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#7FE0FF",
    textAlign: "center",
    marginBottom: 6,
  },

  separator: {
    width: 80,
    height: 3,
    backgroundColor: "#7FE0FF",
    alignSelf: "center",
    marginBottom: 12,
    borderRadius: 50,
  },

  lead: {
    fontSize: 14,
    color: "#DCEFFE",
    textAlign: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#CDEFFF",
    marginTop: 10,
    marginBottom: 6,
  },

  paragraph: {
    fontSize: 14,
    color: "#E6EEF8",
    lineHeight: 20,
    marginBottom: 10,
    textAlign: "left",
  },

  em: {
    fontStyle: "italic",
    fontWeight: "700",
  },

  smallNote: {
    fontSize: 12,
    color: "#BFDFFF",
    textAlign: "center",
    opacity: 0.9,
  },

  photoContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#7FE0FF",
  },
});
