import React from 'react';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div class="flex ...">
                <div class="flex-none w-14 h-14 bg-slate-700 ...">
                    01
                </div>
                <div class="grow h-14 bg-red-400 ...">
                    02
                </div>
                <div class="flex-none w-14 via-fuchsia-400 h-14 ...">
                    03
                </div>
            </div>

        </div>
    );
};

export default Home;