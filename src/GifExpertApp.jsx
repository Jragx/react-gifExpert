import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [Categories, setCategories] = useState(['One Punch']);
    const onAddCategory = NewCategory => {
        // Categories.push(NewCategory);
        console.log(NewCategory);
        if (Categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...Categories]);
    };
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/* Listado de Gift */}
            <ol>
                {Categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}
            </ol>
            {/* Gif Item */}
        </>
    );
};
