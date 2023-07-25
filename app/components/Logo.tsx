import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Logo = () => {
    return (
        <div className='flex w-full justify-center items-center'>
            <div className="spacer ml-8 md:ml-0"></div>
            {/* comunque non è centrato, accidenti */}
            <div className='flex font-bold text-3xl pt-4 pb-1 justify-self-center'>
                <Link href='/'>
                    DhimRealm <sub className='text-sm'>(Alpha)</sub>
                </Link>
            </div>
            <div className="spacer"></div>
            <Menu />
        </div>
    );
};

export default Logo;
