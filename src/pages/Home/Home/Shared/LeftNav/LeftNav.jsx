import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h5 className='fw-bold'>All category</h5>
            <div>
                <button className='border border-0 py-2 px-3 mb-4 mt-2 bg-secondary bg-gradient bg-opacity-25 rounded '>National News</button>

                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none text-black ps-3' to={`/category/${category.id}`}> {category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;