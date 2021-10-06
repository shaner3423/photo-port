import React from 'react';

function Nav() {
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header>
            <h2>
                <a href="/">
                    <span role='img' arial-label='camera'> 📸 </span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li 
                        className='mx-1'
                        key={cateogry.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li> 
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;