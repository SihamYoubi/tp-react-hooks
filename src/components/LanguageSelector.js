import React, { useContext } from 'react';
import { LanguageContext } from '../App';
// import { LanguageContext } from './LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
        setLanguage((currentlanguage) =>
            currentlanguage === 'Français' ? 'Anglais' : 'Français'
        );
    };
    return (
        <div>
            <button onClick={toggleLanguage} className='px-5 py-2 rounded'>
                {language}
            </button>
        </div>
    );
};
export default LanguageSelector;
