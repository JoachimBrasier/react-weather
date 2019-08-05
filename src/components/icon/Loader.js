import React, { Component } from 'react';

import Loading from './loading.svg';

class Loader extends Component {
    render() {
        return (
            <div id={'loader'}>
                <img className={'loader-img'} src={Loading} alt={'Loading...'} />
            </div>
        )
    }
}

export default Loader;