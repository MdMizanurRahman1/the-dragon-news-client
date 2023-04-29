import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-a23boeg27-mdmizanurrahman1.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h5 className='fw-bold'>All category</h5>
            <div>

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