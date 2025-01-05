import { useState } from 'react';
import  NavLinks  from './NavLinks';
import MobileNav from "./MobileNav";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header'>
            <div className='main-header'>
                <div className='main-header-container'>
                    <div className='main-header-inner'>
                        <h4 className='subtitle'>Welcome to</h4>
                        <h1 className='title'>NC News</h1>
                        
                    </div>

                    <NavLinks />
                    <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </header>
    )
}