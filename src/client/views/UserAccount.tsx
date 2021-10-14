import * as React from "react";
import "../utils/UserAccount.css";
import Image from "react-bootstrap/Image";
import { nameProps } from "../utils/types";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../utils/userContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UserAccount = () => {
  const { propsObj, setPropsObj } = useContext(userContext);
  const { username } = useParams<{ username: string }>();
  const [profileObject, setProfileObject] = useState({
    userid: null,
    username: username,
    email: "",
    profileName: "",
    profileLocation: "",
    profileBio: "",
    profileType: "",
    profilePhoto: "",
    popularity: "",
    tag1: "",
    tag2: "",
    tag3: "",
    followers: '0',
    likes: '0',
    gigs: '0',
  });

  const getProfile = async () => {
    try {
      const res = await fetch(`/api/users/${username}`);
      const info = await res.json();
      setProfileObject(info);
      console.log(info);
      console.log(profileObject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (propsObj.username !== username) {
    return (
      <>
        <div className="thebody text-white ">
          <div className="container">
            <div className="">
              <div className="">
                <div className="row gutters-sm pt-2 ">
                  <div className="col-md-4 mb-3 mt-2 border-white border-end">
                    <div className="">

                      <div className="rounded opac bg-black border-white customCard card">

                        <div className="d-flex flex-column align-items-center text-center">
                          <h2 className='m-4'>{profileObject.profileName}</h2>
                          <img
                            src={`${profileObject.profilePhoto}`}
                            alt="Error displaying profile photo"
                            className="rounded"
                            width="380"
                          ></img>

                          <div className="mt-2">
                            <h5>

                              <b>{profileObject.username}</b>


                            </h5>
                          
                            <h5>
                              <i>
                                <b>Performance </b>
                              </i>
                              {profileObject.profileType}
                            </h5>

                            <p className=" mb-1">
                              <p className="font-size-sm">
                                Location: {profileObject.profileLocation}
                              </p>
                            </p>
                            <button className="btn btn-dark mb-3">Follow</button>
                            <button className="btn btn-dark ms-1 mb-3">
                              Booking Availability
                            </button>
                            <h5>{profileObject.followers} Followers</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.likes} Likes</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.gigs} Gigs</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="">
                      <div className="card rounded opac customCard mt-2">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                            <svg className="feather feather-email mr-2 icon-inline" stroke="currentColor" stroke-width="1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z"/></svg>
                            
                              &nbsp;Email
                            </h6>
                            <span className='text-white'>{profileObject.email}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="text-white mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-globe mr-2 icon-inline"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                              </svg>
                              &nbsp;Website
                            </h6>
                            <span></span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter mr-2 icon-inline text-white"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                              &nbsp;Twitter
                            </h6>
                            <span></span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram mr-2 icon-inline text-white"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                  x1="17.5"
                                  y1="6.5"
                                  x2="17.51"
                                  y2="6.5"
                                ></line>
                              </svg>
                              &nbsp;Instagram
                            </h6>
                            <span></span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-facebook mr-2 icon-inline text-white"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                              &nbsp;Facebook
                            </h6>
                            <span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 mt-2">
                    <div className=" mb-2">

                      <div className="customCard rounded bg-black opac border-white card ">
                        <div className="rounded ">
                          <div className="">

                            <div className="account-settings">
                              <div className="rounded p-2">
                                <h5>
                                  Bio:
                                </h5>

                                <p>{profileObject.profileBio}</p>
                                <iframe width="100%" height="300" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733319380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{ fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: 100 }}><a href="https://soundcloud.com/travisscott-2" title="Travis Scott" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Travis Scott</a> · <a href="https://soundcloud.com/travisscott-2/highest-in-the-room-remix-feat" title="HIGHEST IN THE ROOM (REMIX) [feat. ROSALÍA &amp; Lil Baby]" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>HIGHEST IN THE ROOM (REMIX) [feat. ROSALÍA &amp; Lil Baby]</a></div>

                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row gutters-sm">
                      <div className="col-sm-6 mb-3">
                        <div className="h-100">

                          <div className="customCard card opac border-white bg-black rounded p-2">

                            <h6 className="d-flex align-items-center mb-3">
                              User Tags:
                            </h6>
                            <h5>{profileObject.tag1}</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.tag2}</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.tag3}</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 mb-3">
                        <div className=" h-100">

                          <div className="customCard card bg-black opac border-white rounded p-2">

                            <h6 className="d-flex align-items-center mb-3">
                              Favorite Venues:
                            </h6>
                            <small>BJCC</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Boutwell Auditorium</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Oak Mtn. Ampitheatre</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Bridgestone Arena</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Music City Center</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (propsObj.username == username) {
    return (
      <>
        <div className="thebody text-white ">
          <div className="container">
            <div className="">
              <div className="">
                <div className="row gutters-sm pt-2 ">
                  <div className="col-md-4 mb-3 mt-2 border-white border-end">
                    <div className="">

                      <div className="rounded opac bg-black border-white customCard card">

                        <div className="d-flex flex-column align-items-center text-center">
                          <h2 className='m-4'>{profileObject.profileName}</h2>
                          <img
                            src={`${profileObject.profilePhoto}`}
                            alt="Error displaying profile photo"
                            className="rounded"
                            width="380"
                          ></img>

                          <div className="mt-2">
                            <h5>

                              <b>{profileObject.username}</b>


                            </h5>
                            <h5>
                              <i>
                                <b>Performance </b>
                              </i>
                              {profileObject.profileType}
                            </h5>

                            <p className=" mb-1">
                              <p className="font-size-sm">
                                Location: {profileObject.profileLocation}
                              </p>
                            </p>
                            <Link to={`/users/${username}/edit`}>
                              <button className="btn btn-dark ms-1 mb-3">
                                Edit
                              </button>
                            </Link>
                            <button className="btn btn-dark ms-1 mb-3">
                              Booking Availability
                            </button>
                            <h5>{profileObject.followers} Followers</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.likes} Likes</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.gigs} Gigs</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="">
                      <div className="card rounded opac customCard mt-2">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                            
                            <svg className="feather feather-email mr-2 icon-inline" stroke="currentColor" stroke-width="1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z"/></svg>
                              &nbsp;Email
                            </h6>
                            <span className='text-white'>{profileObject.email}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="text-white mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-globe mr-2 icon-inline"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                              </svg>
                              &nbsp;Website
                            </h6>
                            <span></span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter mr-2 icon-inline text-white"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                              &nbsp;Twitter
                            </h6>
                            <span></span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram mr-2 icon-inline text-white"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                  x1="17.5"
                                  y1="6.5"
                                  x2="17.51"
                                  y2="6.5"
                                ></line>
                              </svg>
                              &nbsp;Instagram
                            </h6>
                            <span></span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-facebook mr-2 icon-inline text-white"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                              &nbsp;Facebook
                            </h6>
                            <span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 mt-2">
                    <div className=" mb-2">

                      <div className="customCard rounded bg-black opac border-white card ">
                        <div className="rounded ">
                          <div className="">

                            <div className="account-settings">
                              <div className="rounded p-2">
                                <h5>
                                  Bio:
                                </h5>

                                <p>{profileObject.profileBio}</p>
                                <iframe width="100%" height="300" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733319380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{ fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: 100 }}><a href="https://soundcloud.com/travisscott-2" title="Travis Scott" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Travis Scott</a> · <a href="https://soundcloud.com/travisscott-2/highest-in-the-room-remix-feat" title="HIGHEST IN THE ROOM (REMIX) [feat. ROSALÍA &amp; Lil Baby]" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>HIGHEST IN THE ROOM (REMIX) [feat. ROSALÍA &amp; Lil Baby]</a></div>

                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row gutters-sm">
                      <div className="col-sm-6 mb-3">
                        <div className="h-100">

                          <div className="customCard card opac border-white bg-black rounded p-2">

                            <h6 className="d-flex align-items-center mb-3">
                              User Tags:
                            </h6>
                            <h5>{profileObject.tag1}</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.tag2}</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <h5>{profileObject.tag3}</h5>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 mb-3">
                        <div className=" h-100">

                          <div className="customCard card bg-black opac border-white rounded p-2">

                            <h6 className="d-flex align-items-center mb-3">
                              Favorite Venues:
                            </h6>
                            <small>BJCC</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Boutwell Auditorium</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Oak Mtn. Ampitheatre</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Bridgestone Arena</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <small>Music City Center</small>
                            <div
                              className="progress mb-3"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default UserAccount;