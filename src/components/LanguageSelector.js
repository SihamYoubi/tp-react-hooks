import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

// const LanguageSelector = () => {
//     const { language, setLanguage } = useContext(LanguageContext);

//     const toggleLanguage = () => {
//         setLanguage((currentlanguage) =>
//             currentlanguage === 'Français' ? 'Anglais' : 'Français'
//         );
//     };
//     return (
//         <div>
//             <button onClick={toggleLanguage} className='px-5 py-2 rounded'>
//                 {language}
//             </button>
//         </div>
//     );
// };

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectLanguage = (lang) => {
        setLanguage(lang);
        setIsOpen(false); 
    };

    return (
        <div className="position-relative">
            <button onClick={toggleDropdown} className='px-5 py-2 rounded border bg-light'>
                {language} ▼
            </button>

            {isOpen && (
                <ul className="dropdown-menu show position-absolute">
                    <li onClick={() => handleSelectLanguage('Français')} className="dropdown-item">Français</li>
                    <li onClick={() => handleSelectLanguage('Anglais')} className="dropdown-item">Anglais</li>
                </ul>
            )}
        </div>
    );
};
export default LanguageSelector;
