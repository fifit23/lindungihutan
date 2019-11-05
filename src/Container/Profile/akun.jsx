import React from 'react';
import Navigation from '../../Component/Navigation';
import Appbar from '../../Component/Appbar';
import { makeStyles } from '@material-ui/core/styles';
import CardAkn from '../../Container/Profile/CardAkn';
import Tabss from '../Profile/Tabs';

function Kampanye(){

    return(
        <div>
            <div>
            </div>
            <Navigation />
            <Appbar />
           <CardAkn />
         <Tabss />

        </div>
    );
}

export default Kampanye;