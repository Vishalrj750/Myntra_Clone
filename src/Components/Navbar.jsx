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
    width: 100vw;
    height: 10vh;
    display: flex;
    padding: 8px 0px 8px 0px;
    box-shadow: 10px 5px 5px #cecece;
}
.nav-left{
    width: 50%;
    display: flex;
}
.nav-link{
    text-decoration: none;
}
.nav-title{
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
    width: 60px;
}
.nav-men-cat{
    display: none;
}
.nav-women{
    width: 80px;
}
.nav-women-cat{
    display: none;
}
.nav-kids{
    width: 60px;
}
.nav-kids-cat{
    display: none;
}
.nav-home-living{
    width: 130px;
}
.nav-home-living-cat{
    display: none;
}
.nav-beauty{
    width: 80px;
}
.nav-beauty-cat{
    display: none;
}
.nav-studio{
    width: 80px;
}
.nav-studio-cat{
    display: none;
}
.nav-men:hover .nav-men-cat{
    display: flex;
    // width: 60vw;
    // display: flex;
}
.nav-women:hover .nav-women-cat{
    display: flex;
    margin-top: 50px;
}
.nav-kids:hover .nav-kids-cat{
    display: flex;
}
.nav-home-living:hover .nav-home-living-cat{
    display: flex;
}
.nav-beauty:hover .nav-beauty-cat{
    display: flex;
}
.nav-studio:hover .nav-studio-cat{
    display: flex;
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
                            <div className="nav-title-div">
                                <h4 className="nav-title">MEN</h4>
                            </div>
                            <div className="nav-men-cat">
                                Men Main Dive
                                <div className="nav-men-cat-div1">
                                    <div className="nav-men-cat-topwear">
                                        <h6 className="nav-men-cat-title">Topwear</h6>
                                        <Link to={`/men-tshirt`} className="nav-men-cat-items"><p>T-Shirt</p></Link>
                                        <Link to={`/men-casual-shirts`} className="nav-men-cat-items"><p>Casual Shirts</p></Link>
                                        <Link to={`/men-formal-shirts`} className="nav-men-cat-items"><p>Formal Shirts</p></Link>
                                        <Link to={`/men-sweatshirts`} className="nav-men-cat-items"><p>Sweatshirts</p></Link>
                                        <Link to={`/men-sweaters`} className="nav-men-cat-items"><p>Sweaters</p></Link>
                                        <Link to={`/men-jackets`} className="nav-men-cat-items"><p>Jackets</p></Link>
                                        <Link to={`/men-blazer-coats`} className="nav-men-cat-items"><p>Blazer & Coats</p></Link>
                                        <Link to={`/men-suits`} className="nav-men-cat-items"><p>Suits</p></Link>
                                        <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Rain Jackets</p></Link>
                                    </div>
                                    <div className="nav-men-cat-indian-festival-wear">
                                        <h6 className="nav-men-cat-title">Indian & Festival Wear</h6>
                                        <Link to={`/men-kurtas-kurta-sets`} className="nav-men-cat-items"><p>Kurtas & Kurta Sets</p></Link>
                                        <Link to={`/men-sherwanis`} className="nav-men-cat-items"><p>Sherwanis</p></Link>
                                        <Link to={`/men-nehru-jackets`} className="nav-men-cat-items"><p>Nehru Jackets</p></Link>
                                        <Link to={`/men-dhotis`} className="nav-men-cat-items"><p>Dhotis</p></Link>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div2">
                                    <div className="nav-men-cat-bottomwear">
                                        <h6 className="nav-men-cat-title">Bottomwear</h6>
                                        <Link to={`/men-jeans`} className="nav-men-cat-items"><p>Jeans</p></Link>
                                        <Link to={`/men-casual-trousers`} className="nav-men-cat-items"><p>Casual Trousers</p></Link>
                                        <Link to={`/men-formal-trousers`} className="nav-men-cat-items"><p>Formal Trousers</p></Link>
                                        <Link to={`/men-shorts`} className="nav-men-cat-items"><p>Shorts</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Track Pants & Joggers</p></Link>
                                    </div>
                                    <div className="nav-men-cat-innerwear-sleepwear">
                                        <h6 className="nav-men-cat-title">Innerwear & Sleepwear</h6>
                                        <Link to={`/men-briefs-trunks`} className="nav-men-cat-items"><p>Briefs & Trunks</p></Link>
                                        <Link to={`/men-boxers`} className="nav-men-cat-items"><p>Boxers</p></Link>
                                        <Link to={`/men-vests`} className="nav-men-cat-items"><p>Vests</p></Link>
                                        <Link to={`/men-sleepwear-longwear`} className="nav-men-cat-items"><p>Sleepwear & Longwear</p></Link>
                                        <Link to={`/men-thermals`} className="nav-men-cat-items"><p>Thermals</p></Link>
                                    </div>
                                    <div className="nav-men-cat-plus-size">
                                        <h6 className="nav-men-cat-title">Plus Size</h6>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div3">
                                    <div className="nav-men-cat-footwear">
                                        <h6 className="nav-men-cat-title">Footwear</h6>
                                        <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Casual Shoes</p></Link>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Sport Shoes</p></Link>
                                        <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Formal Shoes</p></Link>
                                        <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Sneakers</p></Link>
                                        <Link to={`/men-sandles-floaters`} className="nav-men-cat-items"><p>Sandles & Floaters</p></Link>
                                        <Link to={`/men-flip-flops`} className="nav-men-cat-items"><p>Flip Flops</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Socks</p></Link>
                                    </div>
                                    <div className="nav-men-cat-personal-care-grooming">
                                        <h6 className="nav-men-cat-title">Personal Care & Grooming</h6>
                                    </div>
                                    <div className="nav-men-cat-sunglasses-frames">
                                        <h6 className="nav-men-cat-title">Sunglasses & Frames</h6>
                                    </div>
                                    <div className="nav-men-cat-watches">
                                        <h6 className="nav-men-cat-title">Watches</h6>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div4">
                                    <div className="nav-men-cat-sports-activewear">
                                        <h6 className="nav-men-cat-title">Sports & Active Wear</h6>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Sport Shoes</p></Link>
                                        <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Sport Sandles</p></Link>
                                        <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Active T-Shirts</p></Link>
                                        <Link to={`/men-trackpants-shorts`} className="nav-men-cat-items"><p>Track Pants & Shorts</p></Link>
                                        <Link to={`/men-tracksuits`} className="nav-men-cat-items"><p>Track Suits</p></Link>
                                        <Link to={`/men-jackets-sweatshirts`} className="nav-men-cat-items"><p>Jackets & Sweat Shirts</p></Link>
                                        <Link to={`/men-sports-accessories`} className="nav-men-cat-items"><p>Sports Accessories</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Sweemwear</p></Link>
                                    </div>
                                    <div className="nav-men-cat-gadgets">
                                        <h6 className="nav-men-cat-title">Gadgets</h6>
                                        <Link to={`/men-smartwearables`} className="nav-men-cat-items"><p>Smart Wearables</p></Link>
                                        <Link to={`/men-fitnes-gadgets`} className="nav-men-cat-items"><p>Fitness Gadgets</p></Link>
                                        <Link to={`/men-headphones`} className="nav-men-cat-items"><p>Headphones</p></Link>
                                        <Link to={`/men-speakers`} className="nav-men-cat-items"><p>Speakers</p></Link>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div5">
                                    <div className="nav-men-cat-fashion-accessories">
                                        <h6 className="nav-men-cat-title">Fashion Accessories</h6>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Wallets</p></Link>
                                        <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Belts</p></Link>
                                        <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Perfumes & Body Mists</p></Link>
                                        <Link to={`/men-trackpants-shorts`} className="nav-men-cat-items"><p>Trimmers</p></Link>
                                        <Link to={`/men-tracksuits`} className="nav-men-cat-items"><p>Deodorants</p></Link>
                                        <Link to={`/men-jackets-sweatshirts`} className="nav-men-cat-items"><p>Ties, Cufflinks & Pocket Squares</p></Link>
                                        <Link to={`/men-sports-accessories`} className="nav-men-cat-items"><p>Accessory Gifts Sets</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Caps & Hats</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Mufflers, Scarfs & Gloves</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Phonecases</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Rings & Wristwears</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Helmets</p></Link>
                                    </div>
                                    <div className="nav-men-cat-bags-bagpacks">
                                        <h6 className="nav-men-cat-title">Bags & Bagpacks</h6>
                                    </div>
                                    <div className="nav-men-cat-luggages-trollies">
                                        <h6 className="nav-men-cat-title">Luggages & Trollies</h6>
                                    </div>
                                </div>
                            </div>
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