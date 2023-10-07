import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Cats">Cats</NavLink></li>
                <li><NavLink to="/categories/Dogs">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrots">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptiles">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>

            <style jsx>{`
                .active {
                    background-color: lightgreen !important;
                }    
            `}</style>
        </nav>
    );
};

export default CategoryNavigation;