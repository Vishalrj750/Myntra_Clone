import styled from 'styled-components';
import Img from '../img/profile_login.webp';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAuth } from "../Redux/action";

const ProfileWrapper = styled.div`
margin-top: 13vh;
background-color: aliceblue;
.profile{
    width: 30vw;
    margin: auto;
    background-color: white;
    text-align: left;
}
.img{
    width: 100%;
}
.profile-details{
    padding: 25px;
}
.profile-login-signup{
    color: red;
    padding-left: 25px;
}
.login-signup-input{
    font-size: 16px;
    padding: 8px;
    text-align: center;
    width: 90%;
}
.profile-btn-div{
    padding-left: 25px;
}
.profile-btn{
    width: 90%;
    background-color: #ff3f6c;
    padding: 8px;
    color: white;
    font-size: 20px;
}
`

function Profile() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch( toggleAuth(true) )
        navigate('/wishlist')
    }


    return(
        <ProfileWrapper>
            <div className="profile">
                <div className="profile-img">
                    <img src={ Img } alt="" className="img" />
                </div>
                <div className="profile-details">
                    <h1 className="profile-login-signup">Login/Signup</h1>
                    <input type="phone" className="login-signup-input" placeholder="Mobile Number" />
                    <p className="terms-conditions">By Continuing, I agree to the terms of use & privacy policy</p>
                </div>
                <div className="profile-btn-div">
                    <button className="profile-btn" onClick={ () => handleClick() } >CONTINUE</button>
                    <p className="have-trouble">Have trouble logging in? Get help</p>
                </div>
            </div>
        </ProfileWrapper>
    )
}

export { Profile }