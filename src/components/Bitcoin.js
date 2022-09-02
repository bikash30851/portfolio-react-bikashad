import React from 'react'
import bitcoin from '../assets/bitcoin.png'
import "../Styles/ItemStyle.css"


const Bitcoin = () => {
  return (
    <div>
        <section className="intro">
            <h1 className="section__title section__title--intro">
                Machine Learning <strong>Cryptocurrency Prediction</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Python, SVM and Decision Trees</p>
            <img src={bitcoin} alt="Bitcoin alt" className = "intro__img"/>
        </section>

        <div className="portfolio__item--individual">
            <p>
                Forget the SnP Fortune 500 companies, if you have extra change lying around in your car or 
                stuck between the couch cushion, it is time to invest that into Cryptocurrency. With the surge 
                of price and popularity of cryptocurrency, investors are now drawn towards currencies like Bitcoin 
                and Ethereum. In this project, I am looking forward to developing a model that could make prediction
                of bitcoin and Ethereum prices based upon historical data. 

            </p>
            <img src={bitcoin} alt="Bitcoin alt" className="item__main--alt"/>
            <p>
                Features like the time of the year i.e., date, volume of the stock, opening and closing price and
                the market cap might be of particular importance for this study and could help develop a good model. 
                The crypto market is notorious, and it is known to surge certain times of the year, therefore, the 
                date along with the closing price and the market volume might be of particular importance in this 
                study.
            </p>
            <p>
                The output of my model would be an appropriate prediction of bitcoin and Ethereum prices based on 
                current opening and closing value, the date and the total market cap. I will obtain my bitcoin and
                Ethereum historical data from Kaggle: 
                <ul className="hyperlink">
                    <li><a href="https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory" target="_blank" rel="noopener noreferrer">Cryptocurrency Price History</a> </li>
                    <li><a href="https://www.kaggle.com/datasets/jessevent/all-crypto-currencies" target="_blank" rel="noopener noreferrer">Price History of All Cryptocurrency</a></li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default Bitcoin