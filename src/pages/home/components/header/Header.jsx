import React from 'react'
import './header.scss'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

export default function Header() {


    return (
        <div className='header_box'>

            <header>
                <div >
                    <div>
                        <img onClick={()=>{
                            window.location.href = '/'
                        }} src="https://firebasestorage.googleapis.com/v0/b/hh3d-a3e75.appspot.com/o/img%2Fpngtree-movie-board-icon-image_1455346.jpg?alt=media&token=c93cf7cd-dd3c-4691-80b5-ef045577137b"/>
                    </div>

                    <div> <a href="category/phimmoi">Phim Moi</a></div>

                    <div><a href="">Phim Le</a></div>

                    <nav>
                        <a href="" className='sup'>The loai</a>
                        <select className='sup_menu'>
                            <option  className='sup_menu_item'>Anime</option>
                            <option  className='sup_menu_item'>Kinh di</option>
                            <option  className='sup_menu_item'>Hai</option>
                        </select>
                    </nav>

                    <div>
                        <a href="">Năm</a>
                        <select>
                            <option value=''>2010</option>
                            <option value=''>2020</option>
                            <option value=''>2023</option>
                        </select>
                    </div>

                    <div>
                        <input type="text" />
                        <IoSearch />
                    </div>
                </div >
            </header>
        </div>
    )
}
