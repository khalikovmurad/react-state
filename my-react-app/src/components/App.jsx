import { useState } from 'react'
import styles from './App.module.css'

function App() {

  const [buttonText, setButtonText] = useState('Добавить в корзину')
  const [card, setCard] = useState(false)
  const [cardText, setCardText] = useState('')

  const [details, setDetails] = useState(false)

  const textHandler = () => {
    setButtonText('Уже в корзине')
    setCard(true)
    setCardText('Удалить из корзины')
  }

  const cardTextHandler = () => {
    setButtonText('Добавить в корзину')
    setCard(false)
    setCardText('')
  }

  


  return (
    <div className={styles.card}>
      <div className={styles.photo}><img src="" alt="" /></div>
      <div className={styles.footer}>
        <div className={styles.display}>
          <div>
            <div>Nike Sneakers</div>
            <div>$ 120</div>
          </div>
          <button onClick={() => setDetails(true)}>Детали</button>
        </div>
        <hr />
        <div className={styles.lorem}>
          <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit. Animi, dignissimos</p>
          <button disabled={card} onClick={textHandler}>{buttonText}</button>
          <p onClick={cardTextHandler}>{cardText}</p>
        </div>
      </div>
          {details && (
            <div className={styles.details_cnt}>
              <div><button onClick={() => setDetails(false)}>x</button></div>
              <div>rtshsrthsrthsrthsrth</div>
            </div>
          )}
    </div>
  )
}

export default App
