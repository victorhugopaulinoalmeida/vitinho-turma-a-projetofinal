import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Platform,
} from "react-native";

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
        style={[
          styles.content,
          { opacity: fade, transform: [{ translateY: slide }] },
        ]}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>A História do Blues</Text>
          <View style={styles.separator} />

          <Text style={styles.lead}>
            Uma jornada pelas origens, evolução e legado do Blues — do canto do
            campo até o palco mundial.
          </Text>

          <Text style={styles.sectionTitle}>Origens e raízes africanas</Text>
          <Text style={styles.paragraph}>
            O Blues nasce das tradições musicais africanas trazidas pelos
            povos escravizados para as Américas. Elementos como o{" "}
            <Text style={styles.em}>call-and-response</Text>, ritmos polirrítmicos
            e escalas microtonais sobrevivem e se transformam ao longo dos
            séculos. Nos Estados Unidos, essas raízes se misturam a hinos,
            cantos religiosos (spirituals), canções de trabalho e lamentos do
            cotidiano, gerando a base emocional do que viria a ser o Blues.
          </Text>

          <Text style={styles.sectionTitle}>Do campo para a forma</Text>
          <Text style={styles.paragraph}>
            Entre o final do século XIX e o começo do século XX, surgem formas
            definidas: field hollers (chamados solitários), work songs (canções
            de trabalho) e spirituals evoluem para estrofes cantadas em forma
            narrativa. O uso das chamadas "blue notes" — notas levemente abaixadas
            que criam tensão — e uma estrutura harmônica repetitiva (o famoso
            padrão de 12 compassos) passam a identificar o gênero.
          </Text>

          <Text style={styles.sectionTitle}>Primeiras publicações e difusão</Text>
          <Text style={styles.paragraph}>
            A popularização escrita do Blues começou quando músicos e arranjadores
            afro-americanos e editoras brancas passaram a publicar músicas e
            partituras. W. C. Handy, muitas vezes citado como o "Pai do Blues",
            ajudou a divulgar o gênero com partituras como "St. Louis Blues"
            (1914). Essas publicações permitiram que o Blues alcançasse públicos
            urbanos e se mesclasse com outros estilos em ascensão.
          </Text>

          <Text style={styles.sectionTitle}>Delta Blues — o coração rural</Text>
          <Text style={styles.paragraph}>
            O Delta Blues, originário do Delta do Mississippi, é um dos estilos
            mais primitivos e emocionais: voz crua, guitarra slide, e letras que
            falam de amor, perda, trabalho, migração e espiritualidade. Nomes
            centrais incluem Charley Patton, Robert Johnson (cuja lenda do
            “crossroads” se tornou mito cultural) e Son House. A gravação
            rudimentar desses artistas transmite uma intensidade visceral e
            direta.
          </Text>

          <Text style={styles.sectionTitle}>Migração e o nascimento do Blues urbano</Text>
          <Text style={styles.paragraph}>
            Com a Grande Migração (início do século XX até meados do século),
            milhões de afro-americanos moveram-se do Sul rural para cidades do
            Norte e do Meio-Oeste. Isso transformou o Blues: guitarras elétricas,
            baterias e baixos foram incorporados para competir com o ruído
            urbano. Em Chicago, o Blues elétrico floresceu com figuras como
            Muddy Waters, Howlin' Wolf e Little Walter — som mais alto, riffs
            repetitivos e grandes performances de palco.
          </Text>

          <Text style={styles.sectionTitle}>Características musicais</Text>
          <Text style={styles.paragraph}>
            Tecnicamente, o Blues costuma usar progressões de acordes simples
            (muitas vezes o ciclo I–IV–V em 12 compassos), frases repetitivas,
            e improvisação vocal e instrumental. A expressão — bends na guitarra,
            flexões na voz, fraseados do gaita (harmônica) — é tão importante
            quanto a harmonia. As letras frequentemente combinam narrativa pessoal
            com imagens simbólicas (estradas, bares, trens, noites).
          </Text>

          <Text style={styles.sectionTitle}>Temas e significado social</Text>
          <Text style={styles.paragraph}>
            O Blues foi e é veículo de denúncia, conforto e memória. Retrata a
            vida cotidiana sob opressão racial, dificuldades econômicas e
            desejos humanos. Ao mesmo tempo, é afirmação cultural: celebração da
            sobrevivência, do humor e da resistência. Em diferentes décadas o
            Blues deu voz a experiências marginais e construiu identidade
            comunitária.
          </Text>

          <Text style={styles.sectionTitle}>Subgêneros e evolução</Text>
          <Text style={styles.paragraph}>
            Ao longo do tempo surgiram diversas variações: Piedmont Blues (estilo
            fingerpicking da Costa Leste), Texas Blues (guitarra com fraseados
            amplos), jump blues (mais dançante, influência no R&B), e o Blues
            elétrico urbano. Nos anos 50 e 60 houve um renascimento e fusão com
            rock — artistas como B.B. King, John Lee Hooker e T-Bone Walker abriram
            caminho para guitarristas que influenciaram o rock britânico.
          </Text>

          <Text style={styles.sectionTitle}>Impacto cultural e legado</Text>
          <Text style={styles.paragraph}>
            O Blues moldou o Jazz, o R&B, o Rock 'n' Roll e muita música popular
            do século XX. Bandas e músicos britânicos (Rolling Stones, Eric
            Clapton) reintroduziram o Blues para audiências globais, enquanto o
            gênero continuou a evoluir com novas gerações mantendo a tradição
            viva. Hoje, festivais e centros de preservação (museus, gravações e
            projetos educativos) mantêm a história acessível e em discussão.
          </Text>

          <Text style={styles.sectionTitle}>Instrumentos e técnicas</Text>
          <Text style={styles.paragraph}>
            Guitarra (acústica e elétrica), gaita, piano, contrabaixo e bateria
            são centrais. Técnicas como slide guitar, fingerpicking, vibrato,
            uso de microtons nas linhas vocais e fraseados da gaita são marcas
            do estilo. A economia das notas — dizer muito com pouco — é um traço
            estilístico essencial.
          </Text>

          <Text style={styles.sectionTitle}>Por que o Blues importa hoje?</Text>
          <Text style={styles.paragraph}>
            Além do valor histórico, o Blues continua relevante por ensinar como
            a música pode ser documento social, espaço de cura e motor de
            inovação cultural. Seu espírito está presente em muitos gêneros
            atuais — do soul ao hip-hop — e sua honestidade emocional segue
            inspirando músicos e ouvintes.
          </Text>

          <Text style={styles.sectionTitle}>Recursos para aprofundar</Text>
          <Text style={styles.paragraph}>
            Para quem quiser estudar mais: busque gravações originais de Robert
            Johnson, Muddy Waters, B.B. King e Son House; leia sobre W. C. Handy
            e a Grande Migração; e explore documentários e livros que contextualizam
            o Blues dentro da história social dos EUA.
          </Text>

          <View style={{ height: 24 }} />
          <Text style={styles.smallNote}>
            — Texto resumido e didático para uso escolar; se quiser, eu faço
            também uma versão com **timeline visual**, ou cards para cada
            artista/clássico.
          </Text>
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
    width: "100%",
    maxWidth: 800,
    maxHeight: "92%",
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    paddingVertical: 18,
    paddingHorizontal: 18,
    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    // elevation (Android)
    elevation: 8,
  },

  scrollContent: {
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
});
