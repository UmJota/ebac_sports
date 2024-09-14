import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { addItem } from './store/reducer/Carrinho'
import { toggleFavorite } from './store/reducer/Favorito'
import { RootState, AppDispatch } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]) // Produtos serão mantidos localmente por enquanto
  const dispatch = useDispatch<AppDispatch>()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(addItem(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
