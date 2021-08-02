import './App.css';
import {Card} from './components/Card/Card';
import React from 'react';

function App() {
    const objectProps = {
        img: 'https://couponkodi.com/wp-content/themes/theme/style/images/logo/netology-ru-image.png',
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: 'https://netology.ru/',
    }

  return (
    <div className="App">
        <Card objectProps={objectProps}>
            <img src={objectProps.img} className="card-img-top" alt="..."/>
        </Card>
    </div>
  );
}

export default App;
