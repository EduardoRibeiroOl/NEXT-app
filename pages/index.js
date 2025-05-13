import prisma from "../lib/prisma"


function Home(){
    return 
        <div>
        </div>
}
 
export default Home

/*exemplo de carteira

// pages/index.js
import prisma from '../lib/prisma'

export async function getServerSideProps() {
  const carteiras = await prisma.carteira.findMany({
    include: {
      usuario: true,
      acao: true,
    },
  })

  return {
    props: { carteiras },
  }
}

export default function Home({ carteiras }) {
  return (
    <div style={{ padding: '2rem', color: 'white', background: '#111' }}>
      <h1>Carteiras</h1>
      <ul>
        {carteiras.map((c) => (
          <li key={c.id}>
            <strong>{c.usuario?.nomeCompleto}</strong> tem{' '}
            <strong>{c.quantidade}</strong> ações de{' '}
            <strong>{c.acao?.simbolo}</strong> a R${c.precoMedio.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}
*/ 