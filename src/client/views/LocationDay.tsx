import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import '../utils/Location.css';

const LocationDay = () => {

    const { propsObj, setPropsObj } = useContext(userContext)
    const { locationEventName } = useParams<{ locationEventName: string }>();
    const { sidebarSelection } = useParams<{ sidebarSelection: string }>();

    const getPosts = async () => {
        try {
            const res = await fetch(`/api/posts/${locationEventName}/${sidebarSelection}/view`);
            const posts = await res.json();
            setArray(posts);
            console.log(posts)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const imgBuddy = {
        height: '33%',
        width: '33%',
        borderRadius: '10px'
    }

    const [options, setOptions] = useState(false)
    const [update, setUpdate] = useState('')
    const [array2, setArray2] = useState('')
    const [array, setArray] = useState(propsObj.posts)

    useEffect(() => {
        let correctedDisplayedPosts = displayedPosts.reverse();
        setArray2(correctedDisplayedPosts)
    }, [array])

    useEffect(() => {
        setTimeout(() => { setArray2(displayedPosts); }, 100)
    }, [])

    const hoverEnterPost = (id) => {
        let postBtn = document.querySelector(`#profile-card-${id}`)
        postBtn.classList.remove('invisible')
    }

    const hoverLeavePost = (id) => {
        let postBtn = document.querySelector(`#profile-card-${id}`)
        postBtn.classList.add('invisible')
    }


    //select Posts.id, Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Users.username, Users.email, Users.profileLocation, Users.profileType, Users.profileName
    //from Posts
    //join Users on Posts.userid = Users.id
    //where Posts.locationEventName = ?;

    const displayedPosts = array.map(val => {
        return (


            <Container key={`post-${val.id}`} id={`postid-${val.id}`} className="mt-2 mb-2 cardFinal">
                <div className='row' style={{ margin: "auto" }}>
                    <div className='col-2'></div>
                    <div style={{ width: '100%' }} className='col-8'>
                        <div className="bg-black border border-white rounded mt-2">
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                    <div className="d-flex flex-row align-items-center feed-text px-2"><img style={imgBuddy} className="rounded" src={`${val.profilePhoto}`} width="45"></img>
                                        <div className="d-flex flex-column flex-wrap ml-2"><Link style={{ textDecoration: "none" }} to={`/users/${val.username}`}><h2 className="font-weight-bold ps-5 text-white display-5">{val.profileName}</h2></Link></div>

                                    </div>
                                    <div className="d-flex flex-row align-items-right feed-text px-2">

                                        <div className="d-flex flex-row align-items-right flex-wrap ml-2"><span className="text-black-50 m-1 time badge bg-warning text-dark">{val.tag1}</span><div className="text-black-50  m-1 time badge bg-warning text-dark">{val.tag2}</div><div className="text-black-50  m-1 time badge bg-warning text-dark">{val.tag3}</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1 px-3"><h2 className='text-white'>{val.title}</h2></div>
                            <div className="p-2 px-3"><span className='text-white'>{val.text}</span></div>
                            <div className="p-1 px-3"><span className="text-white-50 time">???? Time Wanted: {val.timeEvent} |</span><span className="text-white-50 time">&nbsp;Price Mimimum: ${val.moneyAmount}</span></div>
                            <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </Container>

        )
    });


    return (

        <div className='custom'>
            
            <div className='p-2'></div>
            {array2}
            <div className='p-3'></div>
                
        </div>

    )
}

export default LocationDay

