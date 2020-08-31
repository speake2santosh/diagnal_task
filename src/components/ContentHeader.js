import React from 'react'

let backArrow = 'Slices/Back.png';
let Background = 'Slices/nav_bar.png'
const ContentHeader = (props) => {
    return (
        <nav class="flex items-center justify-between flex-wrap  p-6 sticky top-0" style={{ backgroundImage: "url(" + Background + ")" }}  >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">
                    <img alt="" class="h-4" src={backArrow}></img></span> <span className="px-3 SemiBold">{props.title} </span> 
            </div>
            <div>
                <a href="#" class=" text-sm px-4 py-2 
                text-white   mt-4 lg:mt-0"
                ><svg class="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
               </a>
            </div>
        </nav>

    );
}

export default ContentHeader;

