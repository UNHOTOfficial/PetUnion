import React from 'react'

export default function Categories() {
    const categories = [
        {
            img:require("./imgs/categories/Electronics_white._CB468586680_.png"),
            title:"Electronics"
        },
        {
            img:require("./imgs/categories/rsz_homeimprovement.png"),
            title:"Audio & Tools",
        },
        {
            img:require("./imgs/categories/Fashion_white._CB468586683_.png"),
            title:"Fashion & Clothes",
        },
        {
            img:require("./imgs/categories/Toys_white._CB468586676_.png"),
            title:"Toys & Kids",
        },
        {
            img:require("./imgs/categories/Beauty_white._CB468586681_.png"),
            title:"Health & Cosmetics",
        },
        {
            img:require("./imgs/categories/Home_white._CB468586683_.png"),
            title:"Home & Kitchen",
        },
        {
            img:require("./imgs/categories/Books_white._CB468586681_.png"),
            title:"Book & Art",
        },
        {
            img:require("./imgs/categories/Sports_white._CB468586678_.png"),
            title:"Sport & Travel",
        }
    ]
  return (
    <div className='container-fluid bg-gray row justify-content-evenly bg-dark bg-opacity-10 p-4 my-3 mx-auto'>
        {categories.map((category)=>(
            <div className='col-1 d-flex flex-column justify-content-evenly'>
                <img className='rounded-pill' style={{width:"5rem"}} src={category.img} alt={category.img.replace(/^.*[\\\/]/)}></img>
                <span>{category.title}</span>
            </div>
        ))}
    </div>
  )
}
