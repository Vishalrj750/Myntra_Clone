import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import logo from '../img/myntra_logo.png';
import search from '../img/search.png';
import bag from '../img/bag.png';
import wishlist from '../img/wishlist.png';
import profile from '../img/profile.png';

const NavbarWrapper = styledComponents.div`
.nav{
    height: 10vh;
    display: flex;
    padding: 8px 0px 8px 0px;
    box-shadow: 10px 5px 5px #cecece;
}
.nav-left{
    width: 50vw;
    display: flex;
}
.nav-link{
    text-decoration: none;
}
.nav-title{
    text-decoration: none;
    color: black;
}
.nav-logo{
    width: 100px;
    margin-top: 5px;
    margin-left: 10px;
}
.myntra-logo{
    width: 100%;
}
.nav-men{
    flex: 1;
}
.nav-men-cat{
    visibility: hidden;
}
.nav-women{
    flex: 1;
}
.nav-women-cat{
    visibility: hidden;
}
.nav-kids{
    flex: 1;
}
.nav-kids-cat{
    visibility: hidden;
}
.nav-home-living{
    flex: 1;
}
.nav-home-living-cat{
    visibility: hidden;
}
.nav-beauty{
    flex: 1;
}
.nav-beauty-cat{
    visibility: hidden;
}
.nav-studio{
    flex: 1;
}
.nav-studio-cat{
    visibility: hidden;
}
.nav-men:hover .nav-men-cat{
    visibility: visible;
}
.nav-women:hover .nav-women-cat{
    visibility: visible;
}
.nav-kids:hover .nav-kids-cat{
    visibility: visible;
}
.nav-home-living:hover .nav-home-living-cat{
    visibility: visible;
}
.nav-beauty:hover .nav-beauty-cat{
    visibility: visible;
}
.nav-studio:hover .nav-studio-cat{
    visibility: visible;
}
.nav-right{
    width: 50vw;
    display: flex;
}
.nav-search-div{
    flex: 8;
    display: flex;
}
.nav-search-logo-div{
    flex: 1;
}
.nav-search-input-div{
    flex: 12;
}
.nav-search-logo{
    width: 50%;
    margin-top: 20px;
    margin-left: 30px;
}
.nav-search-input{
    width: 90%;
    height: 60%;
    margin-top: 12px;
    font-size: 15px;
    border: 0px solid;
}
.nav-profile-div{
    flex: 1;
}
.nav-profile-logo-div{
    width: 50%;
    height: 40%;
}
.nav-profile-logo{
    width: 100%;
}
.nav-profile-title-div{
    width: 40%;
    height: 60%;
}
.nav-wishlist-div{
    flex: 1;
}
.nav-wishlist-logo-div{
    width: 50%;
    height: 40%;
}
.nav-wishlist-logo{
    width: 100%;
}
.nav-wishlist-title-div{
    width: 40%;
    height: 60%;
}
.nav-bag-div{
    flex: 1;
}
.nav-bag-logo-div{
    width: 50%;
    height: 40%;
}
.nav-bag-logo{
    width: 100%;
}
.nav-bag-title-div{
    width: 40%;
    height: 60%;
}
`

function Navbar() {
    return(
        <NavbarWrapper>
            <div className="nav">
                <div className="nav-left">
                    <Link to={`/`}>
                        <div className="nav-logo">
                            <img src={ logo } alt="" className="myntra-logo" />
                        </div>
                    </Link>
                    <Link to={`/shop/men`} className="nav-link">
                        <div className="nav-men">
                            <h4 className="nav-title">MEN</h4>
                            <div className="nav-men-cat">Main Div Men</div>
                        </div>
                    </Link>
                    <Link to={`/shop/women`} className="nav-link">
                        <div className="nav-women">
                            <h4 className="nav-title">WOMEN</h4>
                            <div className="nav-women-cat">Main Div Women</div>
                        </div>
                    </Link>
                    <Link to={`/shop/kids`} className="nav-link">
                        <div className="nav-kids">
                            <h4 className="nav-title">KIDS</h4>
                            <div className="nav-kids-cat">Main Div Kids</div>
                        </div>
                    </Link>
                    <Link to={`/shop/home-living`} className="nav-link">
                        <div className="nav-home-living">
                            <h4 className="nav-title">HOME & LIVING</h4>
                            <div className="nav-home-living-cat">Main Div Home & Living</div>
                        </div>
                    </Link>
                    <Link to={`/shop/beauty`} className="nav-link">
                        <div className="nav-beauty">
                            <h4 className="nav-title">BEAUTY</h4>
                            <div className="nav-beauty-cat">Main Div Beauty</div>
                        </div>
                    </Link>
                    <Link to={`/shop/studio`} className="nav-link">
                        <div className="nav-studio">
                            <h4 className="nav-title">STUDIO</h4>
                            <div className="nav-studio-cat">Main Div Studio</div>
                        </div>
                    </Link>
                </div>
                <div className="nav-right">
                    <div className="nav-search-div">
                        <div className="nav-search-logo-div">
                            <img src={ search } alt="" className="nav-search-logo" />
                        </div>
                        <div className="nav-search-input-div">
                            <input type="text" className="nav-search-input" placeholder="Search for Products, Brands and more"/>
                        </div>
                    </div>
                    <div className="nav-profile-div">
                        <div className="nav-profile-logo-div">
                            <img src={ profile } alt="" className="nav-profile-logo" />
                        </div>
                        <div className="nav-profile-title-div">
                            <p className="nav-profile-title">Profile</p>
                        </div>
                    </div>
                    <div className="nav-wishlist-div">
                        <div className="nav-wishlist-logo-div">
                            <img src={ wishlist } alt="" className="nav-wishlist-logo" />
                        </div>
                        <div className="nav-wishlist-title-div">
                            <p className="nav-wishlist-title">Wishlist</p>
                        </div>
                    </div>
                    <div className="nav-bag-div">
                        <div className="nav-bag-logo-div">
                            <img src={ bag } alt="" className="nav-bag-logo" />
                        </div>
                        <div className="nav-bag-title-div">
                            <p className="nav-bag-title">Bag</p>
                        </div>
                    </div>
                </div>
            </div>
        </NavbarWrapper>
    )
}

export { Navbar }