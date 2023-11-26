/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import ButtonAction from './components/ButtonAction'
import Cards from './components/Cards'

export default function Home() {
  const audio1 = new Audio('cards-1-3.m4a')
  const audio2 = new Audio('cards-4-5.m4a')
  const audio3 = new Audio('cards-6-7.m4a')
  const audio4 = new Audio('cards-8-9.m4a')
  const audio5 = new Audio('cards-10-11.m4a')
  const audio6 = new Audio('cards-12-13.m4a')
  return (
    <main className="flex justify-center items-center flex-col my-6 gap-4 lg:gap-6">
      <h1 className="text-center text-3xl font-bold">MUNARI CARDS</h1>
      <div className="flex flex-col text-xl text-start mx-6 lg:mx-32 lg:text-2xl gap-12">
        <ButtonAction audio={audio1} />

        <Cards
          title="CARD 1"
          description='Introdução: Bem-vindo(a) à jornada do
          design, onde exploraremos a metodologia inovadora de Bruno Munari, do
          livro "Das Coisas Nascem Coisas". Descubra os princípios essenciais do
          design enquanto traçamos paralelos cruciais com a acessibilidade
          visual em jogos. Prepare-se para uma jornada de criatividade e
          inclusão!'
        />

        <Cards
          title="CARD 2"
          description="Problema: Comece pelo essencial, sintetize
          de forma simples a questão; Acessibilidade visual em jogos. Entender
          profundamente o desafio é o alicerce para criar soluções inclusivas e
          impactantes."
        />

        <Cards
          title="CARD 3"
          description="Definição do Problema: No âmbito de Munari
          devemos definir com clareza o que é problema, a acessibilidade visual
          em jogos é um desafio significativo. Elementos como falta de contraste
          e textos pequenos excluem jogadores com deficiências visuais. A
          compreensão profunda desse problema é o ponto de partida para soluções
          impactantes."
        />

        <ButtonAction audio={audio2} />

        <Cards
          title="CARD 4"
          description="Componentes do problema: É de extrema
          importancia compreender quais partes estruturam o problema para
          resolve-lo de forma organizada; os desafios da acessibilidade visual
          em jogos envolvem estruturas sociais como falta de padrões de design
          inclusivos, perpetuando barreiras. Compreender esses elementos é vital
          para transformar a experiência, conforme preconizado pela metodologia
          de Munari."
        />

        <Cards
          title="CARD 5"
          description="Coleta de Dados: O proximo passo é coletar
          dados. Para abordar a acessibilidade visual em jogos, mergulhe em
          pesquisas sobre experiências de jogadores, avalie diretrizes de
          acessibilidade e analise feedbacks. Munari ensina: a compreensão
          detalhada é o alicerce para soluções impactantes."
        />

        <ButtonAction audio={audio3} />

        <Cards
          title="CARD 6"
          description="Criatividade: No caminho de Munari, a
          criatividade é a ferramenta essencial. Para abordar a acessibilidade
          visual em jogos, o designer deve explorar soluções inovadoras. O
          processo criativo não apenas resolve problemas, mas redefine a
          experiência do jogador, seguindo os princípios fundamentais da
          metodologia de Munari."
        />

        <Cards
          title="CARD 7"
          description="Materiais e Teconlogia: Seguindo a abordagem
          de Munari, a escolha cuidadosa de materiais é crucial. Neste projeto,
          utilizamos papel de diversas gramaturas e cores, combinado com
          técnicas digitais para ilustração. Essa seleção meticulosa não apenas
          fortalece a estética, mas também amplifica a acessibilidade visual em
          jogos, como preconizado pela metodologia de Munari."
        />

        <ButtonAction audio={audio4} />

        <Cards
          title="CARD 8"
          description="Experimentação: Munari nos conduz à fase
          vital da experimentação. Testar e ajustar são essenciais ao abordar a
          acessibilidade visual em jogos. Como o mestre Munari sugere,
          exploramos novas possibilidades, refinamos interações e asseguramos
          que cada elemento sirva à inclusão e à experiência do jogador."
        />

        <Cards
          title="CARD 9"
          description="Modelo: Da experimentação, emerge a fase de
          apresentar modelos. Inspirados por Munari, revelamos opções
          cuidadosamente desenvolvidas, resultantes do processo iterativo.
          Testamos cada modelo em busca da solução ideal para aprimorar a
          acessibilidade visual em jogos, seguindo os princípios fundamentais da
          metodologia de Munari."
        />

        <ButtonAction audio={audio5} />
        <Cards
          title="CARD 10"
          description="Verificação Na etapa de verificação,
          apresentamos modelos a potenciais usuários, buscando adequação aos
          requisitos. Em sintonia com Munari, este processo é vital para
          assegurar que o design atenda às necessidades de acessibilidade visual
          em jogos, refletindo o compromisso da metodologia com a experiência
          inclusiva e centrada no usuário."
        />
        <Cards
          title="CARD 11"
          description="Desenhos de Construção: Chegamos à fase de
          desenho de construção, onde precisão é chave. Munari nos guia na
          preparação de desenhos com medidas precisas, essenciais para o
          protótipo final. Este processo garante clareza e legibilidade,
          princípios fundamentais para materializar soluções que aprimorem a
          acessibilidade visual em jogos, conforme preconizado pela metodologia
          de Munari."
        />

        <ButtonAction audio={audio6} />
        <Cards
          title="CARD 12"
          description="Solução A materialização da visão! Munari
          orienta a apreciar a solução final, resultado da jornada de design. Na
          busca por aprimorar a acessibilidade visual em jogos, esta etapa
          revela a fusão de criatividade e precisão, alinhando-se aos princípios
          da metodologia de Munari. O design atinge seu ápice, conectando-se ao
          usuário de forma inclusiva."
        />
        <Cards
          title="CARD 13"
          description="Conclusão: Concluindo a jornada de estudo
          sobre Munari, percebemos que sua metodologia não é apenas uma
          abordagem, mas um guia essencial para designers. Ao focar na
          identificação, experimentação, e materialização, Munari proporciona
          uma estrutura robusta. Na melhoria da acessibilidade visual em jogos,
          a metodologia não só inspira a criatividade, mas também instiga a
          responsabilidade inclusiva. Munari, assim, empodera designers a
          transcenderem desafios, garantindo experiências de jogo acessíveis e
          enriquecedoras para todos os públicos."
        />
      </div>
    </main>
  )
}
