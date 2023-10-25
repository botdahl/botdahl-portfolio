import React from 'react';
import Job from './Job';

export default class Experience extends React.Component {
    render() {
        return(
            <div className="bg-botdahl-300 rounded-xl shadow-xl p-4">
                <h5 className="text-botdahl-800 font-bold text-lg">Experience</h5>
                <div className="text-base-content p-2">

                    {/* List of education */}
                    <Job year="2018-2019" job="Praktik på webbyrå" description="10 veckor av praktik på webbyrån Pija." />
                    <Job year="2018-2019" job="Lagerunderhåll" description="Underhåll på lager." />
                    <Job year="2018-2019" job="Stena återvinning line" description="Sortering." />
                    <Job year="2019-2022" job="Barnskötare" description="Resurs i klassrum och fritidspedagog för elever årskurs 4-6." />

                </div>
            </div>
        );
    }
}