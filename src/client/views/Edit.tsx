import * as React from "react";
import '../utils/EditUserAccount'
import Image from "react-bootstrap/Image";
import { editProfile } from "../utils/types";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../utils/userContext";
import { useParams, useHistory } from "react-router";

const EditUserAccount = () => {

	const history = useHistory()
	const { propsObj, setPropsObj } = useContext(userContext);
	const { username } = useParams<{ username: string }>();
	const [editingUsername, setEditingUsername] = useState('')
	const [edit, setEdit] = useState<editProfile>()
	const [confirm, setConfirm] = useState(false)
	const [email, setEmail] = useState('')
	const [profilePhoto, setProfilePhoto] = useState('')
	const [profileName, setProfileName] = useState('')
	const [profileLocation, setProfileLocation] = useState('')
	const [profileBio, setProfileBio] = useState('')
	const [tag1, setTag1] = useState('')
	const [tag2, setTag2] = useState('')
	const [tag3, setTag3] = useState('')
	const [profileObject, setProfileObject] = useState({
		userid: null,
		username: username,
		email: "",
		profileName: "",
		profileLocation: "",
		profileBio: "",
		profilePhoto: "",
		profileType: "",
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
			setEditingUsername(info.username)
			setEmail(info.email)
			setProfileName(info.profileName)
			setProfileBio(info.profileBio)
			setProfileLocation(info.profileLocation)
			setProfilePhoto(info.profilePhoto)
			setTag1(info.tag1)
			setTag2(info.tag2)
			setTag3(info.tag3)
		} catch (error) {
			console.log(error);
		}
	};


	const editProfile = async () => {
        let editProf = {
            username: editingUsername,
            email: email,
            profileName: profileName,
			profilePhoto: profilePhoto,
			profileBio: profileBio,
			profileLocation: profileLocation,
			tag1: tag1,
			tag2: tag2,
			tag3: tag3,
			oldUsername: username
        };
        setEdit(editProf)
        setConfirm(true)
    }



    const sendPost = async () => {
        if (confirm) {
            let res = await fetch(`/api/users/${username}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(edit)
            });
            setConfirm(false);
            if (res.ok) {
				console.log('yep')
                history.push(`/users/${username}`)
            } else {
                console.log('uh oh');
            }
        }
    }

	useEffect(() => {
		sendPost()
	}, [edit]);

	useEffect(() => {
		getProfile();
	}, []);

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
												<div className="input-group row m-3">
													<h5>Profile Name:</h5>
													<div className='col-1'></div>
													<input type='text' placeholder='Set Profile Name' onChange={(e) => setProfileName(e.target.value)} value={profileName} className="form-control rounded col-10">

													</input>
													<div className='col-1'></div>
												</div>

												<img
													src={`${profileObject.profilePhoto}`}
													alt=""
													className="rounded"
													width="380"
												></img>

												<div className="input-group row m-3">
													<h5>Profile Picture:</h5>
													<div className='col-1'></div>
													<input type='text' onChange={(e) => setProfilePhoto(e.target.value)} placeholder='Set Profile Picture' value={profilePhoto} className="form-control rounded col-10">

													</input>
													<div className='col-1'></div>
												</div>

												<div className="mt-2">
													<div className='row'>
														<h5>Username:</h5>
														<div className="input-group mb-1">
															<input type='text' onChange={(e) => setEditingUsername(e.target.value)} placeholder='Set Username' value={editingUsername} className="form-control ">

															</input>
														</div>
													</div>
													<div className='row'>
														<h5>Email:</h5>
														<div className="input-group mb-1">
															<input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Set Email' value={email} className="form-control ">

															</input>
														</div>
													</div>
													<div className='row'>
														<h5>Location:</h5>
														<div className="input-group mb-1">
															<input type='text' onChange={(e) => setProfileLocation(e.target.value)} placeholder='Set Location' value={profileLocation} className="form-control ">

															</input>
														</div>
													</div>


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
															<h5>Bio:</h5>
															<div className="input-group mb-1">
																<textarea rows={7} placeholder='Set Bio' onChange={(e) => setProfileBio(e.target.value)} value={profileBio} className="form-control ">

																</textarea>
															</div>
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
													<div className='row'>
														<h5>First Tag:</h5>
														<div className="input-group mb-1">
															<input type='text' placeholder='Set Tag' onChange={(e) => setTag1(e.target.value)} value={tag1} className="form-control ">

															</input>
														</div>
													</div>
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
													<div className='row'>
														<h5>Second Tag:</h5>
														<div className="input-group mb-1">
															<input type='text' placeholder='Set Tag' onChange={(e) => setTag2(e.target.value)} value={tag2} className="form-control ">

															</input>
														</div>
													</div>
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
													<div className='row'>
														<h5>Third Tag:</h5>
														<div className="input-group mb-1">
															<input type='text' placeholder='Set Tag' onChange={(e) => setTag3(e.target.value)} value={tag3} className="form-control ">

															</input>
														</div>
													</div>
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

													<button onClick={() => editProfile()} className='btn btn-warning'>Submit Changes</button>
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
};

export default EditUserAccount;