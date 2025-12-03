import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import blues1 from "../assets/blues.png";

export default function HistoryPage() {
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
          <Text style={styles.title}>A História do Blues</Text>
          <View style={styles.separator} />

          <Text style={styles.lead}>
            Uma jornada pelas origens, evolução e legado do Blues — do canto do campo até o palco mundial.
          </Text>

          {/* Adicione o conteúdo aqui como nas seções anteriores */}

          <Text style={styles.sectionTitle}>Origens e raízes africanas</Text>
          <Text style={styles.paragraph}>
            O Blues nasce das tradições musicais africanas trazidas pelos povos escravizados para as Américas.
            Elementos como o <Text style={styles.em}>call-and-response</Text>, ritmos polirrítmicos e escalas microtonais
            sobrevivem e se transformam ao longo dos séculos. Nos Estados Unidos, essas raízes se misturam a hinos,
            cantos religiosos (spirituals), canções de trabalho e lamentos do cotidiano, gerando a base emocional do
            que viria a ser o Blues. Essa fusão gerou uma música visceral e profunda, refletindo as dificuldades da vida
            de trabalhadores afro-americanos.
          </Text>

          <Text style={styles.sectionTitle}>A importância das "Blue Notes"</Text>
          <Text style={styles.paragraph}>
            As "blue notes" são uma das características mais marcantes do Blues. Estas notas, que estão ligeiramente
            abaixo das notas principais da escala, criam uma sensação de tensão e emoção, que é uma das razões pelas quais
            o Blues pode ser tão comovente. Ao longo do tempo, essas notas se tornaram a assinatura do gênero, tornando o
            Blues algo único e emocionalmente carregado.
          </Text>

          {/* Outros conteúdos omitidos por brevidade */}

          <Text style={styles.sectionTitle}>Recursos para aprofundar</Text>
          <Text style={styles.paragraph}>
            Para quem quiser estudar mais: busque gravações originais de Robert Johnson, Muddy Waters, B.B. King e Son House;
            leia sobre W. C. Handy e a Grande Migração; e explore documentários e livros que contextualizam o Blues dentro da
            história social dos EUA.
          </Text>

          <View style={styles.photoContainer}>
            <Image
              source={blues1} // substitua pela URL ou require local
              style={styles.photo}
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
