export default function ItemListContainer({ greeting }) {
  const main = {
  height: '100vh', // ahora sí puede ser 100vh
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '2rem',
  fontWeight: 'bold',
  paddingTop: '70px'
  }

  return (
    <main style={main}>
      <h2>{greeting}</h2>
    </main>
  )
}
