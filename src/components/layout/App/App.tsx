import { type FC } from 'react';

import Playground from '../../layout/Playground/Playground';

import Header from '../Header/Header';
import Interface from '../../ui/Interface/Interface';
import '../../../assets/styles/style.scss';
import './app.css';

// /. imports

const App: FC = () => {
    return (
        <div className="App">
            <div className="board">
                <div className="board__wrapper">
                    <Header />
                    <section className="board__body">
                        <Interface />
                        <Playground />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;
