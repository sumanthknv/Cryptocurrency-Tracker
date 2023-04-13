import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class cryptocurrenciesList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const UpdatedData = data.map(eachCrypto => ({
      currencyLogo: eachCrypto.currency_logo,
      currencyName: eachCrypto.currency_name,
      euroValue: eachCrypto.euro_value,
      id: eachCrypto.id,
      usdValue: eachCrypto.usd_value,
    }))
    console.log(UpdatedData)
    this.setState({cryptoList: UpdatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="lists-container">
            <div className="table-heading">
              <div className="coin-container">
                <h3 className="coin-heading">Coin Type</h3>
              </div>
              <div className="usd-euro-cont">
                <h3 className="coin-heading">USD</h3>
                <h3 className="coin-heading">EURO</h3>
              </div>
            </div>
            {cryptoList.map(eachList => (
              <CryptocurrencyItem
                cryptoCurrencyDetails={eachList}
                key={eachList.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default cryptocurrenciesList
