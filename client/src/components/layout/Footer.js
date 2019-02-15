import React, { Component } from 'react';

import Bulma from '../icon/made-with-bulma.png';

class Footer extends Component { 
    render() {
        return (
            <footer className={'footer'}>
                <div className={'content has-text-centered'}>
                    <div>
                        <strong>
                            <a href={'https://jbrasier.fr/'} target={'_blank'} rel={'noopener'}>
                                Créer par Joachim Brasier
                            </a>
                        </strong>
                    </div>
                    <hr />
                    <div>
                        <a href={'https://bulma.io/'} target={'_blank'} rel={'noopener'}>
                            <img src={Bulma} alt={'Construit avec Bulma'} width={'180px'} />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;