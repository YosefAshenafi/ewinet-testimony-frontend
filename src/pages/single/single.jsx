import React from 'react'
import SideBar from '../../components/sidebar/sideBar'
import SinglePost from '../../components/singlePost/singlePost'
import './single.css'


export default function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <SideBar />
        </div>
    )
}
