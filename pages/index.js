// pages/index.js
import prisma from '../lib/prisma'

export async function getServerSideProps() {
  const acoes = await prisma.acao.findMany()

  // Serializa BigInt como string
  const acoesSerialized = acoes.map((acao) => ({
    ...acao,
    id: acao.id.toString(),
  }))

  return {
    props: {
      acoes: acoesSerialized,
    },
  }
}

export default function Home({ acoes }) {
  return (
    <div>
      <h1>Ações</h1>
      <ul>
        {acoes.map((acao) => (
          <li key={acao.id}>
            {acao.simbolo} - {acao.nome}
          </li>
        ))}
      </ul>
    </div>
  )
}
