import React from 'react'
import './Home.css';

export const Home = () => {
  return (
    <>
      <section className='lancamento'>
        <div className='component-lancamento'>
          <div className='novo-lancamento'>
            <p>
              <img
                width="20" height="20"
                src="https://img.icons8.com/ios-filled/50/sparkling--v1.png"
                alt="ícone de brilho"
                className="icon-novo"
              />
              Novo lançamento 2025
            </p>
          </div>

          <h1 className='titulo-grande'>
            Som que <span className='texto-degrade'>transcende</span>
          </h1>

          <h2 className='subtitulo-padrao'>
            Experimente a perfeição sonora com o AURA Pro. Drivers de titânio, cancelamento de ruído adaptativo e 50 horas de pura imersão.
          </h2>

          <div className='button'>
            <div className='button-comprar'>
              <p>Comprar - R$ 1.299</p>
            </div>
            <div className='button-video'>
              <p>
                <img
                  src="https://img.icons8.com/ios/50/play--v1.png"
                  alt="play"
                  className="icon-play"
                />
                Ver vídeo
              </p>
            </div>
          </div>

          <div className='avaliacao'>
            <div className='img-avaliador'>
              <img src="/Imagem/Pessoa1.jpg" alt="Pessoa 1" className="img-overlap" />
              <img src="/Imagem/Pessoa2.jpg" alt="Pessoa 2" className="img-overlap" />
              <img src="/Imagem/Pessoa3.jpg" alt="Pessoa 3" className="img-overlap" />
              <img src="/Imagem/Pessoa4.jpg" alt="Pessoa 4" className="img-overlap" />
            </div>
            <div className='avaliacao-estrela'>
              <p className='estrela'>
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              </p>
              <p className='quantidade-avaliacao'>+2.500 avaliações 5 estrelas</p>
            </div>
          </div>
        </div>

        <div className='imagem-destaque'>
          <img src="/Imagem/fone.png" alt="Fone Aura Principal" />
        </div>
      </section>

      <section id="features" className='components-feature'>
        <div className='parte-feature'>
          <p className='tag-destaque'>Feature</p>
        </div>

        <div className='todos-titulos'>
          <div className='titulo-centralizado'>
            <h1 className='titulo-grande'>Tecnologia de <span className='texto-degrade'>ponta</span></h1>
          </div>
          <div className='subtitulo-centralizado'>
            <h2 className='subtitulo-padrao'>Cada detalhe foi projetado para oferecer a melhor experiência sonora possível.</h2>
          </div>
        </div>

        <div className='feature-cards'>
          <div className='card'>
            <div className='card-img'>
              <img src="https://img.icons8.com/sf-regular-filled/48/full-battery.png" alt="full-battery" />
            </div>
            <div className='card-titulo'>
              <p>50h de Bateria</p>
            </div>
            <div className='card-subtitulo'>
              <p>Ouça sem parar por dias</p>
            </div>
          </div>

          <div className='card'>
            <div className='card-img'>
              <img src="https://img.icons8.com/ios-filled/50/bluetooth.png" alt="bluetooth" />
            </div>
            <div className='card-titulo'>
              <p>Bluetooth 5.3</p>
            </div>
            <div className='card-subtitulo'>
              <p>Conexão ultra estável</p>
            </div>
          </div>

          <div className='card'>
            <div className='card-img'>
              <img src="https://img.icons8.com/ios/50/medium-volume--v1.png" alt="medium-volume--v1" />
            </div>
            <div className='card-titulo'>
              <p>ANC Adaptativo</p>
            </div>
            <div className='card-subtitulo'>
              <p>Cancelamento inteligente</p>
            </div>
          </div>

          <div className='card'>
            <div className='card-img'>
              <img src="https://img.icons8.com/ios/50/musical-notes.png" alt="musical-notes" />
            </div>
            <div className='card-titulo'>
              <p>Hi-Res Audio</p>
            </div>
            <div className='card-subtitulo'>
              <p>Qualidade de estúdio</p>
            </div>
          </div>
        </div>

        <div className='feature-design espacamento-extra'>
          <div className='imagem-destaque'>
            <img src="/Imagem/fone2.png" alt="Fone Aura Design" />
          </div>

          <div className='texto-design'>
            <h1 className='titulo-grande'>Design que <span className='texto-degrade'>inspira</span></h1>
            <h2 className='subtitulo-padrao'>Almofadas de espuma memory com couro proteico premium. Headband ajustável em aço inoxidável. Feito para maratonas sonoras com o máximo conforto.</h2>

            <div className='lista-beneficios'>
              <div className='item-beneficio'>
                <div className='icon-beneficio-box'>
                  <img width="24" height="24" src="https://img.icons8.com/ios/50/shield.png" alt="shield" className='icon-beneficio' />
                </div>
                <p className='paragrafo-design'>2 anos de garantia</p>
              </div>
              
              <div className='item-beneficio'>
                <div className='icon-beneficio-box'>
                  <img width="24" height="24" src="https://img.icons8.com/ios/50/warranty--v1.png" alt="warranty--v1" className='icon-beneficio'/>
                </div>
                <p className='paragrafo-design'>Premiado Red Dot Design</p>
              </div>
            </div>
          </div>
        </div>

        <div id="especificacoes" className='parte-feature espacamento-extra'>
          <p className='tag-destaque'>Especificações</p>
        </div>

        <div className='todos-titulos'>
          <div className='titulo-centralizado'>
            <h1 className='titulo-grande'>Números que <span className='texto-degrade'>impressionam</span></h1>
          </div>
          <div className='subtitulo-centralizado'>
            <h2 className='subtitulo-padrao'>Especificações técnicas de nível profissional para os ouvidos mais exigentes.</h2>
          </div>
        </div>

        <div className='secao-especificacao'>
          <div className='grid-cards-especificacao'>
            <div className='card-especificacao'>
              <p className='especificacao-label'>Drivers</p>
              <p className='especificacao-valor'>40mm Titânio</p>
            </div>
            <div className='card-especificacao'>
              <p className='especificacao-label'>Resposta</p>
              <p className='especificacao-valor'>4Hz - 40kHz</p>
            </div>
            <div className='card-especificacao'>
              <p className='especificacao-label'>Impedância</p>
              <p className='especificacao-valor'>32Ω</p>
            </div>
            <div className='card-especificacao'>
              <p className='especificacao-label'>Peso</p>
              <p className='especificacao-valor'>254g</p>
            </div>
            <div className='card-especificacao'>
              <p className='especificacao-label'>Codec</p>
              <p className='especificacao-valor'>LDAC, AAC, SBC</p>
            </div>
            <div className='card-especificacao'>
              <p className='especificacao-label'>Carregamento</p>
              <p className='especificacao-valor'>USB-C Rápido</p>
            </div>
          </div>

          <div className='imagem-especificacao'>
             <img src="/Imagem/fone3.png" alt="Fone Aura Especificação" />
          </div>
        </div>
      </section>

      <section id="reviews" className='secao-reviews espacamento-extra'>
        <div className='parte-feature'>
          <p className='tag-destaque'>Reviews</p>
        </div>

        <div className='todos-titulos'>
          <div className='titulo-centralizado'>
            <h1 className='titulo-grande'>O que dizem <span className='texto-degrade'>sobre nós</span></h1>
          </div>
        </div>

        <div className='grid-reviews'>
          <div className='card-review'>
            <div className='review-estrelas'>
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
            </div>
            <p className='review-texto'>
              "A clareza sonora é impressionante. Nunca ouvi tantos detalhes nas minhas produções."
            </p>
            <div className='review-autor'>
              <img src="/Imagem/Pessoa1.jpg" alt="Lucas Mendes" className='autor-foto' />
              <div className='autor-info'>
                <p className='autor-nome'>Lucas Mendes</p>
                <p className='autor-cargo'>Produtor Musical</p>
              </div>
            </div>
          </div>

          <div className='card-review'>
            <div className='review-estrelas'>
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
            </div>
            <p className='review-texto'>
              "Finalmente um fone que entrega o que promete. O ANC é o melhor que já testei."
            </p>
            <div className='review-autor'>
              <img src="/Imagem/Pessoa2.jpg" alt="Ana Clara" className='autor-foto' />
              <div className='autor-info'>
                <p className='autor-nome'>Ana Clara</p>
                <p className='autor-cargo'>Audiófila</p>
              </div>
            </div>
          </div>

          <div className='card-review'>
            <div className='review-estrelas'>
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
              <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star" />
            </div>
            <p className='review-texto'>
              "Uso em todas as minhas sessions. Conforto absurdo mesmo após horas de uso."
            </p>
            <div className='review-autor'>
              <img src="/Imagem/Pessoa3.jpg" alt="Roberto Silva" className='autor-foto' />
              <div className='autor-info'>
                <p className='autor-nome'>Roberto Silva</p>
                <p className='autor-cargo'>DJ Profissional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='secao-cta-final espacamento-extra'>
        <div className='conteudo-cta'>
          <h1 className='cta-titulo'>
            Pronto para <br/> 
            <span className='cta-destaque'>ouvir diferente?</span>
          </h1>
          
          <p className='cta-descricao'>
            Frete grátis para todo Brasil. Garantia de 2 anos. 30 dias para devolução.
          </p>

          <div className='cta-botao'>
            <p>Comprar agora — R$ 1.299</p>
          </div>

          <p className='cta-parcelamento'>
            ou 12x de R$ 108,25 sem juros
          </p>
        </div>
      </section>

    </>
  )
}

export default Home