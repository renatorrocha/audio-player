import React from 'react'
import Image from 'next/image'

export default function Galeria() {
  const images = [
    { value: '/images/Sumario-1.jpeg', alt: 'Sumário Um' },
    { value: '/images/Sumario-2.jpeg', alt: 'Sumário Dois' },
    { value: '/images/Card-1.jpg', alt: 'Card Introdução' },
    { value: '/images/Card-2.jpg', alt: 'Card Problema' },
    { value: '/images/Card-3.jpg', alt: 'Card Definição do Problema' },
    { value: '/images/Card-4.jpg', alt: 'Card Componentes do Problema' },
    { value: '/images/Card-5.jpg', alt: 'Card Coleta de Dados' },
    { value: '/images/Card-6.jpg', alt: 'Card Criatividade' },
    { value: '/images/Card-7.jpg', alt: 'Card Materiais e Tecnologia' },
    { value: '/images/Card-8.jpg', alt: 'Card Experimentação' },
    { value: '/images/Card-9.jpg', alt: 'Card Modelo' },
    { value: '/images/Card-10.jpg', alt: 'Card Verificação' },
    { value: '/images/Card-11.jpg', alt: 'Card Desenhos de Construção' },
    { value: '/images/Card-12.jpg', alt: 'Card Solução' },
    { value: '/images/Card-13.jpg', alt: 'Card Conclusão' }
  ]

  return (
    <div className="flex items-center flex-col lg:grid lg:grid-cols-4 justify-items-center gap-12 mt-4">
      {images.map(e => (
        <Image
          className="hover:-translate-y-6  transition-all duration-300"
          key={e.alt}
          width={350}
          height={300}
          alt={e.alt}
          src={e.value}
        />
      ))}
    </div>
  )
}
