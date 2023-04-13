import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = cryptoCurrencyDetails
  return (
    <li className="list-item">
      <div className="img-name-cont">
        <img src={currencyLogo} alt="currency_name" className="currency-logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
