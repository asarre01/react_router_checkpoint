import React from 'react';

// Le composant `Nodata` est utilisé pour indiquer qu'aucune donnée n'est disponible ou qu'aucun résultat ne correspond à la recherche ou au filtre.

export default function Nodata() {
    return (
        <div className=' vw-100 d-flex justify-content-center align-items-center '>
            <div>
                {/* Image indiquant l'absence de données */}
                <img src="Nodata-bro.png" alt="No Data" style={{ width: '35rem', minHeight: '35rem' }} className='position-absolute top-50 start-50 translate-middle'/>
            </div>
        </div>
    );
}
