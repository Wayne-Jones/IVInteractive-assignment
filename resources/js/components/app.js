import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <>
            <Header/>
            
            <Form />
            <Footer />
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
