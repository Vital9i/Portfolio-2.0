import React from 'react';
import { Icon } from '../icon/Icon';

type LogoProrsType = {
    idLogo:string
}

export  const Logo = (props:LogoProrsType) => {
    return (

        <a href=''>
            <Icon iconId={props.idLogo} viewBox='0 0 97 59'/>
        </a>

    );
};

