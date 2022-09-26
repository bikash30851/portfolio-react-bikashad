import React from 'react'
import bitcoin from '../assets/bitcoin.png'
import bitcgraph from '../assets/bitcgraph.jpg'
import btcdollar from '../assets/btcdollar.jpg'
import pdf from '../assets/AdhikariBFinalPoster.pdf'


// import { Document} from 'react-pdf';

const Bitcoin = () => {
    return (
        <div>
            <section className="itemintro">
                <h1 className="itemsection__title itemsection__title--intro">
                    Machine Learning <strong>Cryptocurrency Prediction</strong>
                </h1>
                <p className="itemsection__subtitle itemsection__subtitle--intro">Python, SVM and Decision Trees</p>
                <img src={bitcoin} alt="Bitcoin alt" className="itemintro__img" />
            </section>

            <div className="portfolio__item--individual">

                <h2 id="machine-learning-project">Machine Learning Project</h2>
                <a href="https://bikash30851.github.io/bitcoin-project-machine-learning-s22/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-success" style={{padding:"10px"}}>View on Github Pages</button>
                </a>
                <a href="https://github.com/bikash30851/bitcoin-project-machine-learning-s22" target="_blank" rel="noopener noreferrer">
                    {/* <button>View on Github Pages</button> */}
                    <button type="button" className="btn btn-success" style={{padding:"10px", margin:"25px"}}>Code Repository</button>
                </a>

                <h3 id="poster-pptx-and-poster-pdf">Poster PDF</h3>
                <div className="pdfcontainer">
                    <iframe className="responsive-iframe" src={pdf} title="poster"></iframe>
                </div>
                
                <p>
                    Forget the SnP Fortune 500 companies, if you have extra change lying around in your car or
                    stuck between the couch cushion, it is time to invest that into Cryptocurrency. With the surge
                    of price and popularity of cryptocurrency, investors are now drawn towards currencies like Bitcoin
                    and Ethereum. In this project, I have developed a model that could be utilized to make prediction
                    of bitcoin and Ethereum prices based upon historical data.
                </p>

                    <p>
                        Features like the time of the year i.e., date, volume of the stock, opening and closing price and
                        the market cap are of particular importance for this study. The crypto market is notorious, and it is
                        known to surge certain times of the year, therefore, the date along with the closing price and the
                        market volume are of particular importance in this study.
                    </p>
                    <p>
                        Data for this study was obtained from the following sources:
                        Cryptocurrency historical data from Kaggle:
                    </p>

                        <ul className="hyperlink">
                            <li><a href="https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory" target="_blank" rel="noopener noreferrer">Cryptocurrency Price History</a> </li>
                            <li><a href="https://www.kaggle.com/datasets/jessevent/all-crypto-currencies" target="_blank" rel="noopener noreferrer">Price History of All Cryptocurrency</a></li>
                        </ul>
                
                <div className='flexbox'>
                    <img src={bitcgraph} alt="Bitcoin alt" className="item__main--image" />
                    <div className='flexTextR'>
                        <h3 id="introduction">Introduction</h3>
                        <p>
                            My goal in this project is to predict the high price of the bitcoin
                            cryptocurrency based upon the origin pirce.
                        </p>
                        <h3 id="initial-exploration">Initial Exploration</h3>
                        <p>
                            The data contained in <code>bitcoin.csv</code> was particulary interesting because of the 
                            combination of relevant information it contained. The initial <code>.info()</code> 
                            analysis revealed the detailed data present in the open high and closing tables. Most of the
                            data contained is either a float or an integer which makes it ideal for mathematical analysis.
                        </p>

                        <p>
                            An initial look at this data shows an ideal data set which is ready for linear regression analysis. 
                        </p>
                        </div>
                </div>
                        <h3 id="linear-regression">Linear Regression</h3>
                        <p>
                            In order to perform the linear regression, using the train_test_split() function the data
                            was split into a training(75%) and a test(25%) set. First the open and high prices were picked 
                            as inital X and Y values for our model which yeilded promising R2 values but not so great mean 
                            squared and root mean squared values. 
                        </p>
                    
                <p>
                    Furthermore, in order to make the model better and in the hope of better metrics 3 other 
                    features were picked in conjunction with Open price and linear regresssion analysis was performed. 
                    It must be a result of using extra parameters to overfit the model, but the model did very well with 3 parameters.
                    The metrics got better as more parameters were added. The volume and market cap I think would be 
                    two of the important parameters to look at for further data analysis.
                </p>

                <h3 id="classification">Classification</h3>
                <p>
                    In order to perform the classification, decision tree and SVM were chosen. First of all the data was 
                    read into a pandas dataframe called dataframe_btc. An initial exploration of the data was performed
                     again in order to obtain a closer view of the data and to look at different features in order to get 
                     ready for decision tree and SVM classification. For decision tree, since the data that I have picked 
                     was the High price as the target, the value is a float64 which is continuous in nature.
                </p>

                <div className='flexbox'>
                    <div className='flexTextL'>
                        <p>
                            Therefore, a grader function was introduced which allowed for bucketing of the data ultimately
                            facilitating the decision tree classification. All the metrics were calculated and then SVM was
                            performed on the data. Similar to decision trees, metrics for the SVM were also calculated and 
                            comparison was done.
                        </p>

                        <h3 id="clustering">Clustering</h3>
                        <p>Performed clustering analysis on the data with 4 features and obtained the results.
                            The clusters and centroids are pretty conjusted which shows that acute clustering of the data.
                            Performed dimensional reduction and visualized the data using scatter plots and scatter matrix.
                            Visualization of the data revealed positive correlation among the features which might be somewhat
                            concerning however, there could be several other lurking factors that should be considiered.
                        </p>
                        </div>
                        <img src={btcdollar} alt="Bitcoin alt" className="item__main--image" />
                </div>

                <p>
                    Random Forrest analysis yeilded an accuracy of 0.99 for both the testing and training sets.
                    Further analysis is performed with Neural Nets.
                </p>

                <h3 id="final-changes">Final Changes</h3>
                <p>
                    My decision tree was overfitting and I was missing an analysis on my test set. 
                    As advised by Dr. Hoot I performed an analysis on my test set and actually got better
                     metrics that could be used for better inference and analysis. I went ahead and did the same
                     thing with the SVM classifier and got meaningful metrics. 
                </p>
                
                <h3 id="narrative-conclusion">Narrative Conclusion</h3>
                <p>
                    After applying various models and analyzing the metrics, it can be concluded that the 
                    high price of bitcoin has a strong positive correlation with the opening price. A PCA 
                    exploration might be handy and useful in order to deermine and gain more confidence to
                     realize if the change in high price can solely be attributed to the opening price of the
                      currency. 
                </p>
            </div>

        </div>
    )
}

export default Bitcoin