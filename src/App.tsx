// import React, { ReactElement } from 'react';

// import './assets/styles/global.css';

// import Routes from './routes';

// function App(): ReactElement {
//   return <Routes />;
// }

// export default App;

import React, { ReactElement } from 'react';
import './assets/styles/global.css';
import Routes from './routes';
import TarefaContext from './contexts/TarefaContext';



const App = () => {
    return (
        <TarefaContext>
           <Routes />
        </TarefaContext>
    );
}

export default App; 