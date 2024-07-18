import React, { useState } from 'react';
import '../styles/CollapsibleSection.css';

function CollapsibleSection({ title, content, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapsible-section ${isOpen ? 'open' : ''}`}>
            <div className='section-heading' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </div>
            <div className={`content ${isOpen ? 'show' : ''}`}>
                {content || children}
            </div>
        </div>
    );
}

export default CollapsibleSection;
