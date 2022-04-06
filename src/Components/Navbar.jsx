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
    position: fixed;
    z-index:10;
    top: 0;
    background-color: aliceblue;
}
.nav-left{
    width: 50%;
    display: flex;
    position: relative;
}
.nav-link{
    text-decoration: none;
}
.nav-title-div{
    height: 8vh;
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
    width: 50px;
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
    width: 50px;
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
    width: 80vw;
    padding: 25px;
    background-color: aliceblue;
    box-shadow: 10px 5px 5px #cecece;
    position: absolute;
    left: 20%;
}
.nav-men-cat-title{
    color: red;
}
.nav-men-cat-div1{
    flex: 1;
    text-align: left;
    line-height: 12px;
}
.nav-men-cat-div2{
    flex: 1;
    text-align: left;
    line-height: 12px;
}
.nav-men-cat-div3{
    flex: 1;
    text-align: left;
    line-height: 12px;
}
.nav-men-cat-div4{
    flex: 1;
    text-align: left;
    line-height: 12px;
}
.nav-men-cat-div5{
    flex: 1;
    text-align: left;
    line-height: 12px;
}
.nav-women:hover .nav-women-cat{
    display: flex;
    width: 80vw;
    margin: auto;
    padding: 25px;
    background-color: aliceblue;
    box-shadow: 10px 5px 5px #cecece;
    position: absolute;
    left: 20%;
}
.nav-kids:hover .nav-kids-cat{
    display: flex;
    width: 80vw;
    margin: auto;
    background-color: aliceblue;
    padding: 25px;
    box-shadow: 10px 5px 5px #cecece;
    position: absolute;
    left: 20%;
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
    height: 50%;
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
    height: 50%;
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
    height: 50%;
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
    height: 50%;
}
.nav-men-cat-items{
    text-decoration: none;
    color: black;
    font-size: 15px;
}

.nav-beauty:hover .nav-beauty-cat{
    display: flex;
    width: 80vw;
    margin: auto;
    background-color: aliceblue;
    padding: 25px;
    box-shadow: 10px 5px 5px #cecece;
    position: absolute;
    left: 20%;
}

.nav-home-living:hover .nav-home-living-cat{
    display: flex;
    width: 80vw;
    margin: auto;
    background-color: aliceblue;
    padding: 25px;
    box-shadow: 10px 5px 5px #cecece;
    position: absolute;
    left: 20%;
}

.nav-studio:hover  .nav-studio-cat{
    display: flex;
    flex-direction:column;
    width: 40vw;
    margin: auto;
    background-color: aliceblue;
    padding: 25px;
    box-shadow: 10px 5px 5px #cecece;
    position: absolute;
    left: 20%; 
}
.nav-studio-cat-3 img{
    width: 30vw;
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
                                <div className="nav-men-cat-div1">
                                    <div className="nav-men-cat-topwear">
                                        <h5 className="nav-men-cat-title">Topwear</h5>
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
                                        <h5 className="nav-men-cat-title">Indian & Festival Wear</h5>
                                        <Link to={`/men-kurtas-kurta-sets`} className="nav-men-cat-items"><p>Kurtas & Kurta Sets</p></Link>
                                        <Link to={`/men-sherwanis`} className="nav-men-cat-items"><p>Sherwanis</p></Link>
                                        <Link to={`/men-nehru-jackets`} className="nav-men-cat-items"><p>Nehru Jackets</p></Link>
                                        <Link to={`/men-dhotis`} className="nav-men-cat-items"><p>Dhotis</p></Link>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div2">
                                    <div className="nav-men-cat-bottomwear">
                                        <h5 className="nav-men-cat-title">Bottomwear</h5>
                                        <Link to={`/men-jeans`} className="nav-men-cat-items"><p>Jeans</p></Link>
                                        <Link to={`/men-casual-trousers`} className="nav-men-cat-items"><p>Casual Trousers</p></Link>
                                        <Link to={`/men-formal-trousers`} className="nav-men-cat-items"><p>Formal Trousers</p></Link>
                                        <Link to={`/men-shorts`} className="nav-men-cat-items"><p>Shorts</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Track Pants & Joggers</p></Link>
                                    </div>
                                    <div className="nav-men-cat-innerwear-sleepwear">
                                        <h5 className="nav-men-cat-title">Innerwear & Sleepwear</h5>
                                        <Link to={`/men-briefs-trunks`} className="nav-men-cat-items"><p>Briefs & Trunks</p></Link>
                                        <Link to={`/men-boxers`} className="nav-men-cat-items"><p>Boxers</p></Link>
                                        <Link to={`/men-vests`} className="nav-men-cat-items"><p>Vests</p></Link>
                                        <Link to={`/men-sleepwear-longwear`} className="nav-men-cat-items"><p>Sleepwear & Longwear</p></Link>
                                        <Link to={`/men-thermals`} className="nav-men-cat-items"><p>Thermals</p></Link>
                                    </div>
                                    <div className="nav-men-cat-plus-size">
                                        <h5 className="nav-men-cat-title">Plus Size</h5>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div3">
                                    <div className="nav-men-cat-footwear">
                                        <h5 className="nav-men-cat-title">Footwear</h5>
                                        <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Casual Shoes</p></Link>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Sport Shoes</p></Link>
                                        <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Formal Shoes</p></Link>
                                        <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Sneakers</p></Link>
                                        <Link to={`/men-sandles-floaters`} className="nav-men-cat-items"><p>Sandles & Floaters</p></Link>
                                        <Link to={`/men-flip-flops`} className="nav-men-cat-items"><p>Flip Flops</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Socks</p></Link>
                                    </div>
                                    <div className="nav-men-cat-personal-care-grooming">
                                        <h5 className="nav-men-cat-title">Personal Care & Grooming</h5>
                                    </div>
                                    <div className="nav-men-cat-sunglasses-frames">
                                        <h5 className="nav-men-cat-title">Sunglasses & Frames</h5>
                                    </div>
                                    <div className="nav-men-cat-watches">
                                        <h5 className="nav-men-cat-title">Watches</h5>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div4">
                                    <div className="nav-men-cat-sports-activewear">
                                        <h5 className="nav-men-cat-title">Sports & Active Wear</h5>
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
                                        <h5 className="nav-men-cat-title">Gadgets</h5>
                                        <Link to={`/men-smartwearables`} className="nav-men-cat-items"><p>Smart Wearables</p></Link>
                                        <Link to={`/men-fitnes-gadgets`} className="nav-men-cat-items"><p>Fitness Gadgets</p></Link>
                                        <Link to={`/men-headphones`} className="nav-men-cat-items"><p>Headphones</p></Link>
                                        <Link to={`/men-speakers`} className="nav-men-cat-items"><p>Speakers</p></Link>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div5">
                                    <div className="nav-men-cat-fashion-accessories">
                                        <h5 className="nav-men-cat-title">Fashion Accessories</h5>
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
                                        <h5 className="nav-men-cat-title">Bags & Bagpacks</h5>
                                    </div>
                                    <div className="nav-men-cat-luggages-trollies">
                                        <h5 className="nav-men-cat-title">Luggages & Trollies</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/shop/women`} className="nav-link">
                        <div className="nav-women">
                            <div className="nav-title-div">
                                <h4 className="nav-title">WOMEN</h4>
                            </div>
                            <div className="nav-women-cat">
                                    <div className="nav-men-cat-div1">
                                        <div className="nav-men-cat-topwear">
                                            <h5 className="nav-men-cat-title">Indian & Fusion Wear</h5>
                                            <Link to={`/women-Kurtas & Suits`} className="nav-men-cat-items"><p>Kurtas & Suits</p></Link>
                                            <Link to={`/women-Kurtis,Tunics & Tops`} className="nav-men-cat-items"><p>Kurtis,Tunics & Tops</p></Link>
                                            <Link to={`/women-Ethinc Wear`} className="nav-men-cat-items"><p>Ethinc Wear</p></Link>
                                            <Link to={`/women-Leggings,Salwars & Churidars`} className="nav-men-cat-items"><p>Leggings,Salwars & Churidars</p></Link>
                                            <Link to={`/women-Skirts & Palazzos`} className="nav-men-cat-items"><p>Skirts & Palazzos</p></Link>
                                            <Link to={`/women-Sarees`} className="nav-men-cat-items"><p>Sarees</p></Link>
                                            <Link to={`/women-Dress Materials`} className="nav-men-cat-items"><p>Dress Materials</p></Link>
                                            <Link to={`/women-Lehenga Cholis`} className="nav-men-cat-items"><p>Lehenga Cholis</p></Link>
                                            <Link to={`/women-Dupatta & Shawls`} className="nav-men-cat-items"><p>Dupatta & Shawls</p></Link>
                                            <Link to={`/women-Jackets`} className="nav-men-cat-items"><p>Jackets</p></Link>
                                        </div>
                                        <div className="nav-men-cat-indian-festival-wear">
                                          
                                            <h5 className="nav-men-cat-title">Belts, Scarves & More</h5>
                                            <br />
                                            <h5 className="nav-men-cat-title">Watches & Wearables</h5>
                                        </div>
                                    </div>
                                    <div className="nav-men-cat-div2">
                                        <div className="nav-men-cat-bottomwear">
                                            <h5 className="nav-men-cat-title">Wester Wear</h5>
                                            <Link to={`/women-Dresses`} className="nav-men-cat-items"><p>Dresses</p></Link>
                                            <Link to={`/women-Tops`} className="nav-men-cat-items"><p>Tops</p></Link>
                                            <Link to={`/women-Tshirts`} className="nav-men-cat-items"><p>Tshirts</p></Link>
                                            <Link to={`/women-Jeans`} className="nav-men-cat-items"><p>Jeans</p></Link>
                                            <Link to={`/women-Trousers & Capris`} className="nav-men-cat-items"><p>Trousers & Capris</p></Link>
                                            <Link to={`/women-Shorts & Skirts`} className="nav-men-cat-items"><p>Shorts & Skirts</p></Link>
                                            <Link to={`/women-Co-ords`} className="nav-men-cat-items"><p>Co-ords</p></Link>
                                            <Link to={`/women-Playsuits`} className="nav-men-cat-items"><p>Playsuits</p></Link>
                                            <Link to={`/women-Jumpsuits`} className="nav-men-cat-items"><p>Jumpsuits</p></Link>
                                            <Link to={`/women-Shrugs`} className="nav-men-cat-items"><p>Shrugs</p></Link>
                                            <Link to={`/women-Sweaters & Sweatshirts`} className="nav-men-cat-items"><p>Sweaters & Sweatshirts</p></Link>
                                            <Link to={`/women-Jaackets & Coats`} className="nav-men-cat-items"><p>Jaackets & Coats</p></Link>
                                            <Link to={`/women-Blazers & Waistcoats`} className="nav-men-cat-items"><p>Blazers & Waistcoats</p></Link>

                                    

                                        </div>
                                        
                                        <div className="nav-men-cat-plus-size">
                                            <h5 className="nav-men-cat-title">Plus Size</h5>
                                        </div>
                                    </div>
                                    <div className="nav-men-cat-div3">
                                    <div className="nav-men-cat-plus-size">
                                            <h5 className="nav-men-cat-title">Maternity</h5>
                                        </div>
                                        <div className="nav-men-cat-plus-size">
                                            <h5 className="nav-men-cat-title">Sunglasses & Frames</h5>
                                        </div>
                                        <div className="nav-men-cat-footwear">
                                            <h5 className="nav-men-cat-title">Footwear </h5>
                                            
                                            <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Flats</p></Link>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Casual Shoes</p></Link>
                                            <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Heels</p></Link>
                                            <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Boots</p></Link>
                                            <Link to={`/men-sandles-floaters`} className="nav-men-cat-items"><p>Sports Shoes & Floaters</p></Link>
                                            
                                        </div>
                                    
                                       <div className="nav-men-cat-footwear">
                                            <h5 className="nav-men-cat-title">Sports & Active Wear </h5>
                                            
                                            <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Clothing</p></Link>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Footwear</p></Link>
                                            <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Sports Accessories</p></Link>
                                            <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Sports Equipment</p></Link>
                                            
                                            
                                        </div>

                                     


                  </div>
                                    <div className="nav-men-cat-div4">

                                
                            <div className="nav-men-cat-sports-activewear">
                                            <h5 className="nav-men-cat-title">Lingerie & Sleepwear</h5>
                                            <Link to={`/women-sport-shoes`} className="nav-men-cat-items"><p>Shapewear</p></Link>
                                            <Link to={`/women-sport-sandles`} className="nav-men-cat-items"><p>Briefs</p></Link>
                                            <Link to={`/women-active-tshirts`} className="nav-men-cat-items"><p>Sleepwear & Loungewear</p></Link>
                                            <Link to={`/women-trackpants-shorts`} className="nav-men-cat-items"><p>Swimwear</p></Link>
                                            <Link to={`/women-tracksuits`} className="nav-men-cat-items"><p>Camisoles & Thermals</p></Link>
                                            
                                        </div>
                                        <div className="nav-men-cat-gadgets">
                                            
            
                                            <h5 className="nav-men-cat-title">Beauty & Personal Care</h5>
                                            <Link to={`/women-smartwearables`} className="nav-men-cat-items"><p>Makeup</p></Link>
                                            <Link to={`/women-fitnes-gadgets`} className="nav-men-cat-items"><p>Skincare</p></Link>
                                            <Link to={`/women-headphones`} className="nav-men-cat-items"><p>Premium Beauty</p></Link>
                                            <Link to={`/women-speakers`} className="nav-men-cat-items"><p>Lipsticks</p></Link>
                                            <Link to={`/women-speakers`} className="nav-men-cat-items"><p>Fragrances</p></Link>
                                        </div>
                                    </div>
                                   <div className="nav-men-cat-div5">


                                        <div className="nav-men-cat-fashion-accessories">
                                            <h5 className="nav-men-cat-title">   Gadgets</h5>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Smart Wearables</p></Link>
                                            <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Fitness Gadgets</p></Link>
                                            <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Headphones</p></Link>
                                            <Link to={`/men-trackpants-shorts`} className="nav-men-cat-items"><p>Speakers</p></Link>
    
                                        </div>
                                        <div className="nav-men-cat-fashion-accessories">
                                            <h5 className="nav-men-cat-title">  Jewellery</h5>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Fashion Jewellery</p></Link>
                                            <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Fine Jewellery</p></Link>
                                            <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Earrings</p></Link>
                                          
    
                                        </div>
                                        <div className="nav-men-cat-bags-bagpacks">
                                            <h5 className="nav-men-cat-title">Backpacks</h5>
                                        </div>
                                        <div className="nav-men-cat-luggages-trollies">
                                            <h5 className="nav-men-cat-title">Handbags, Bags & Wallets</h5>
                                        </div>
                                        <div className="nav-men-cat-luggages-trollies">
                                            <h5 className="nav-men-cat-title">Luggages & Trolleys</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/shop/kids`} className="nav-link">
                        <div className="nav-kids">
                            <div className="nav-title-div">
                                <h4 className="nav-title">KIDS</h4>
                            </div>
                            <div className="nav-kids-cat">
                                    <div className="nav-men-cat-div1">
                                        <div className="nav-men-cat-topwear">
                                            <h5 className="nav-men-cat-title">Boys Clothing</h5>
                                            <Link to={`/men-tshirt`} className="nav-men-cat-items"><p>T-Shirt</p></Link>
                                            <Link to={`/men-casual-shirts`} className="nav-men-cat-items"><p>Shorts</p></Link>
                                            <Link to={`/men-formal-shirts`} className="nav-men-cat-items"><p>Jeans</p></Link>
                                            <Link to={`/men-sweatshirts`} className="nav-men-cat-items"><p>Trousers</p></Link>
                                            <Link to={`/men-sweaters`} className="nav-men-cat-items"><p>Clothing Sets</p></Link>
                                            <Link to={`/men-jackets`} className="nav-men-cat-items"><p>Ethinic Wear</p></Link>
                                            <Link to={`/men-blazer-coats`} className="nav-men-cat-items"><p>Track Pants & Pyjamas</p></Link>
                                            <Link to={`/men-suits`} className="nav-men-cat-items"><p>Jacket,Sweater & Sweatshirts</p></Link>
                                            <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Party Wear</p></Link>
                                            <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Innerwear & Thermals</p></Link>
                                            <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Nightwear & Loungewear</p></Link>
                                        </div>

                                                                       
                                    </div>
                                    <div className="nav-men-cat-div2">
                                        <div className="nav-men-cat-bottomwear">
                                            <h5 className="nav-men-cat-title">Girls Clothing</h5>
                                            <Link to={`/men-jeans`} className="nav-men-cat-items"><p>Dresses</p></Link>
                                            <Link to={`/men-casual-trousers`} className="nav-men-cat-items"><p>Tops</p></Link>
                                            <Link to={`/men-formal-trousers`} className="nav-men-cat-items"><p>Tshirts</p></Link>
                                            <Link to={`/men-shorts`} className="nav-men-cat-items"><p>Clothing Sets</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Lehenga Choli</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Kurta Sets</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Party wear</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Dungarees & Jumpsuits</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Skirts & shorts</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Tights & Leggings</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Jeans, Trousers & Capris</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Innerwear & Thermals</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Nightwear & Loungewear</p></Link>
                                            <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Value Packs</p></Link>
                                        </div>
                                       
                                    </div>
                                    <div className="nav-men-cat-div3">
                                        <div className="nav-men-cat-footwear">
                                            <h5 className="nav-men-cat-title">Footwear</h5>
                                            <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Casual Shoes</p></Link>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Sport Shoes</p></Link>
                                            <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Formal Shoes</p></Link>
                                            <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Sneakers</p></Link>
                                            <Link to={`/men-sandles-floaters`} className="nav-men-cat-items"><p>Sandles & Floaters</p></Link>
                                            <Link to={`/men-flip-flops`} className="nav-men-cat-items"><p>Flip Flops</p></Link>
                                            <Link to={`/men-socks`} className="nav-men-cat-items"><p>Socks</p></Link>
                                        </div>
                                        <div className="nav-men-cat-footwear">
                                            <h5 className="nav-men-cat-title"> Toys</h5>
                                            <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Learning & Development</p></Link>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Activity Toys</p></Link>
                                            <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Soft Toys</p></Link>
                                            <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Action Figure / Play set</p></Link>
                                            
                                        </div>
                                       

                                    </div>
                                    <div className="nav-men-cat-div4">
                                        <div className="nav-men-cat-sports-activewear">
                                            <h5 className="nav-men-cat-title"> Infants</h5>
                                            <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Bodysuits</p></Link>
                                            <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Rompers & Sleepsuits</p></Link>
                                            <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Clothing Sets</p></Link>
                                            <Link to={`/men-trackpants-shorts`} className="nav-men-cat-items"><p>Tshirts & Tops</p></Link>
                                            <Link to={`/men-tracksuits`} className="nav-men-cat-items"><p>Winter Wear</p></Link>
                                            <Link to={`/men-jackets-sweatshirts`} className="nav-men-cat-items"><p>Dresses</p></Link>
                                            <Link to={`/men-sports-accessories`} className="nav-men-cat-items"><p>Bottom wear</p></Link>
                                            <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Innerwear & Sleepwear</p></Link>
                                            <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Infant Care</p></Link>
                                        </div>
                                       

                                        <div className="nav-men-cat-gadgets">
                                            <h5 className="nav-men-cat-title">Home & Bath</h5>
                                
                                        </div>
                                        <div className="nav-men-cat-gadgets">
                                            <h5 className="nav-men-cat-title">Personal Care</h5>
                                
                                        </div>
                                        
                                    </div>
                                    <div className="nav-men-cat-div5">
                                        <div className="nav-men-cat-fashion-accessories">
                                            <h5 className="nav-men-cat-title">Fashion Accessories</h5>
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
                                            <h5 className="nav-men-cat-title">Bags & Bagpacks</h5>
                                        </div>
                                        <div className="nav-men-cat-luggages-trollies">
                                            <h5 className="nav-men-cat-title">Luggages & Trollies</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/shop/home-living`} className="nav-link">
                        <div className="nav-home-living">
                            <div className="nav-title-div">
                                <h4 className="nav-title">HOME & LIVING</h4>
                            </div>
                            <div className="nav-home-living-cat">
                                <div className="nav-men-cat-div1">
                                    <div className="nav-men-cat-topwear">
                                        <h5 className="nav-men-cat-title">Bed Linen & Furnishing</h5>
                                        <Link to={`/men-tshirt`} className="nav-men-cat-items"><p>Bedsheets</p></Link>
                                        <Link to={`/men-casual-shirts`} className="nav-men-cat-items"><p>Bedding Sets</p></Link>
                                        <Link to={`/men-formal-shirts`} className="nav-men-cat-items"><p>Blankets, Quilts & Dohars</p></Link>
                                        <Link to={`/men-sweatshirts`} className="nav-men-cat-items"><p>Pillows & Pillow Covers</p></Link>
                                        <Link to={`/men-sweaters`} className="nav-men-cat-items"><p>Bed Covers</p></Link>
                                        <Link to={`/men-jackets`} className="nav-men-cat-items"><p>Diwan Sets</p></Link>
                                        <Link to={`/men-blazer-coats`} className="nav-men-cat-items"><p>Chair Pads & Covers</p></Link>
                                        <Link to={`/men-suits`} className="nav-men-cat-items"><p>Sofa Covers</p></Link>
                                        
                                    </div>
                                    
                                    <div className="nav-men-cat-indian-festival-wear">
                                        <h5 className="nav-men-cat-title">Flooring</h5>
                                        <Link to={`/men-kurtas-kurta-sets`} className="nav-men-cat-items"><p>Carpets</p></Link>
                                        <Link to={`/men-sherwanis`} className="nav-men-cat-items"><p>Floor Mats & Dhurries</p></Link>
                                        <Link to={`/men-nehru-jackets`} className="nav-men-cat-items"><p>Door Mats</p></Link>
                                        
                                    </div>
                                </div>
                                <div className="nav-men-cat-div2">
                                    <div className="nav-men-cat-bottomwear">
                                        <h5 className="nav-men-cat-title">Bath</h5>
                                        <Link to={`/men-jeans`} className="nav-men-cat-items"><p>Bath Towels</p></Link>
                                        <Link to={`/men-casual-trousers`} className="nav-men-cat-items"><p>Hand & Face Towels</p></Link>
                                        <Link to={`/men-formal-trousers`} className="nav-men-cat-items"><p>Beach Towels</p></Link>
                                        <Link to={`/men-shorts`} className="nav-men-cat-items"><p>Towels Set</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Bath Rugs</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Bath Robes</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Bathroom Accessories</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Shower Curtains</p></Link>
                                    </div>
                                    















                                    <div className="nav-men-cat-innerwear-sleepwear">
                                        <h5 className="nav-men-cat-title">Lamps & Lighting</h5>
                                        <Link to={`/men-briefs-trunks`} className="nav-men-cat-items"><p>Floor Lamps</p></Link>
                                        <Link to={`/men-boxers`} className="nav-men-cat-items"><p>Ceiling Lamps</p></Link>
                                        <Link to={`/men-vests`} className="nav-men-cat-items"><p>Table Lamps</p></Link>
                                        <Link to={`/men-sleepwear-longwear`} className="nav-men-cat-items"><p>Wall Lamps</p></Link>
                                        <Link to={`/men-thermals`} className="nav-men-cat-items"><p>Outdoor Lamps</p></Link>
                                        <Link to={`/men-thermals`} className="nav-men-cat-items"><p>String Lights</p></Link>
                                    </div>
                                   
                                </div>
                                <div className="nav-men-cat-div3">
                                    <div className="nav-men-cat-footwear">
                                        <h5 className="nav-men-cat-title">Home Décor</h5>
                                        <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Plants & Planters</p></Link>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Aromas & Candles</p></Link>
                                        <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Clocks</p></Link>
                                        <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Mirrors</p></Link>
                                        <Link to={`/men-sandles-floaters`} className="nav-men-cat-items"><p>Wall Décor</p></Link>
                                        <Link to={`/men-flip-flops`} className="nav-men-cat-items"><p>Festive Decor</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Pooja Essentials</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Wall Shelves</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Fountains</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Showpieces & Vases</p></Link>
                                    </div>

                                    <div className="nav-men-cat-personal-care-grooming">
                                        <h5 className="nav-men-cat-title">Cushions & Cushion Covers</h5>
                                    </div>
                                    <div className="nav-men-cat-sunglasses-frames">
                                        <h5 className="nav-men-cat-title">Curtains</h5>
                                    </div>
                                    <div className="nav-men-cat-watches">
                                        <h5 className="nav-men-cat-title">Home Gift Sets</h5>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div4">
                                    <div className="nav-men-cat-sports-activewear">
                                        <h5 className="nav-men-cat-title"> Kitchen & Table</h5>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Dinnerware & Serveware</p></Link>
                                        <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Cups and Mugs</p></Link>
                                        <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Bakeware & Cookware</p></Link>
                                        <Link to={`/men-trackpants-shorts`} className="nav-men-cat-items"><p>Kitchen Storage & Tools</p></Link>
                                        <Link to={`/men-tracksuits`} className="nav-men-cat-items"><p>Bar & Drinkware</p></Link>
                                        <Link to={`/men-jackets-sweatshirts`} className="nav-men-cat-items"><p>Table Covers & Furnishings</p></Link>
                                        
                                    </div>

                                    <div className="nav-men-cat-gadgets">
                                        <h5 className="nav-men-cat-title">Storage</h5>
                                        <Link to={`/men-smartwearables`} className="nav-men-cat-items"><p>Organisers</p></Link>
                                        <Link to={`/men-fitnes-gadgets`} className="nav-men-cat-items"><p>Hooks & Holders</p></Link>
                                        <Link to={`/men-headphones`} className="nav-men-cat-items"><p>Laundry Bags</p></Link>
                                   
                                    </div>
                                </div>
                                <div className="nav-men-cat-div5">
                                    <div className="nav-men-cat-fashion-accessories">
                                        <h5 className="nav-men-cat-title"> Brands</h5>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>H&M</p></Link>
                                        <Link to={`/men-sport-sandles`} className="nav-men-cat-items"><p>Marks & Spencer</p></Link>
                                        <Link to={`/men-active-tshirts`} className="nav-men-cat-items"><p>Home Centre</p></Link>
                                        <Link to={`/men-trackpants-shorts`} className="nav-men-cat-items"><p>Spaces</p></Link>
                                        <Link to={`/men-tracksuits`} className="nav-men-cat-items"><p>D'Decor</p></Link>
                                        <Link to={`/men-jackets-sweatshirts`} className="nav-men-cat-items"><p>Story@Home</p></Link>
                                        <Link to={`/men-sports-accessories`} className="nav-men-cat-items"><p>Pure Home & Living</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Swayam</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Raymond Home</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Phonecases</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Maspar</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Trident</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Cortina</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Random</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>Ellementry</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>ROMEE</p></Link>
                                        <Link to={`/men-sweemwear`} className="nav-men-cat-items"><p>SEJ by Nisha Gupta</p></Link>
                                    </div>
                                   

                            </div>



                            </div>
                        </div>
                    </Link>
                    <Link to={`/shop/beauty`} className="nav-link">
                        <div className="nav-beauty">
                            <div className="nav-title-div">
                                <h4 className="nav-title">BEAUTY</h4>
                            </div>
                            <div className="nav-beauty-cat">
                            <div className="nav-men-cat-div1">
                                    <div className="nav-men-cat-topwear">
                                        <h5 className="nav-men-cat-title">  Makeup</h5>
                                        <Link to={`/men-tshirt`} className="nav-men-cat-items"><p>Lipstick</p></Link>
                                        <Link to={`/men-casual-shirts`} className="nav-men-cat-items"><p>Lip Gloss</p></Link>
                                        <Link to={`/men-formal-shirts`} className="nav-men-cat-items"><p>Lip Liner</p></Link>
                                        <Link to={`/men-sweatshirts`} className="nav-men-cat-items"><p>Mascara</p></Link>
                                        <Link to={`/men-sweaters`} className="nav-men-cat-items"><p>Eyeliner</p></Link>
                                        <Link to={`/men-jackets`} className="nav-men-cat-items"><p>Kajal</p></Link>
                                        <Link to={`/men-blazer-coats`} className="nav-men-cat-items"><p>Eyeshadow</p></Link>
                                        <Link to={`/men-suits`} className="nav-men-cat-items"><p>Foundation</p></Link>
                                        <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Primer</p></Link>
                                        <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Concealer</p></Link>
                                        <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Compact</p></Link>
                                        <Link to={`/men-rain-jackets`} className="nav-men-cat-items"><p>Nail Polish</p></Link>
                                    </div>
                                  
                                
                                </div>
                                <div className="nav-men-cat-div2">
                                    <div className="nav-men-cat-bottomwear">
                                        <h5 className="nav-men-cat-title">Bottomwear</h5>
                                        <Link to={`/men-jeans`} className="nav-men-cat-items"><p>Jeans</p></Link>
                                        <Link to={`/men-casual-trousers`} className="nav-men-cat-items"><p>Casual Trousers</p></Link>
                                        <Link to={`/men-formal-trousers`} className="nav-men-cat-items"><p>Formal Trousers</p></Link>
                                        <Link to={`/men-shorts`} className="nav-men-cat-items"><p>Shorts</p></Link>
                                        <Link to={`/men-trackpants-joggers`} className="nav-men-cat-items"><p>Track Pants & Joggers</p></Link>
                                    </div>
                                    <div className="nav-men-cat-innerwear-sleepwear">
                                        <h5 className="nav-men-cat-title">Innerwear & Sleepwear</h5>
                                        <Link to={`/men-briefs-trunks`} className="nav-men-cat-items"><p>Briefs & Trunks</p></Link>
                                        <Link to={`/men-boxers`} className="nav-men-cat-items"><p>Boxers</p></Link>
                                        <Link to={`/men-vests`} className="nav-men-cat-items"><p>Vests</p></Link>
                                        <Link to={`/men-sleepwear-longwear`} className="nav-men-cat-items"><p>Sleepwear & Longwear</p></Link>
                                        <Link to={`/men-thermals`} className="nav-men-cat-items"><p>Thermals</p></Link>
                                    </div>
                                    <div className="nav-men-cat-plus-size">
                                        <h5 className="nav-men-cat-title">Plus Size</h5>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div3">
                                    <div className="nav-men-cat-footwear">
                                        <h5 className="nav-men-cat-title">Footwear</h5>
                                        <Link to={`/men-casual-shoes`} className="nav-men-cat-items"><p>Casual Shoes</p></Link>
                                        <Link to={`/men-sport-shoes`} className="nav-men-cat-items"><p>Sport Shoes</p></Link>
                                        <Link to={`/men-formal-shoes`} className="nav-men-cat-items"><p>Formal Shoes</p></Link>
                                        <Link to={`/men-sneakers`} className="nav-men-cat-items"><p>Sneakers</p></Link>
                                        <Link to={`/men-sandles-floaters`} className="nav-men-cat-items"><p>Sandles & Floaters</p></Link>
                                        <Link to={`/men-flip-flops`} className="nav-men-cat-items"><p>Flip Flops</p></Link>
                                        <Link to={`/men-socks`} className="nav-men-cat-items"><p>Socks</p></Link>
                                    </div>
                                    <div className="nav-men-cat-personal-care-grooming">
                                        <h5 className="nav-men-cat-title">Personal Care & Grooming</h5>
                                    </div>
                                    <div className="nav-men-cat-sunglasses-frames">
                                        <h5 className="nav-men-cat-title">Sunglasses & Frames</h5>
                                    </div>
                                    <div className="nav-men-cat-watches">
                                        <h5 className="nav-men-cat-title">Watches</h5>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div4">
                                    <div className="nav-men-cat-sports-activewear">
                                        <h5 className="nav-men-cat-title">Sports & Active Wear</h5>
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
                                        <h5 className="nav-men-cat-title">Gadgets</h5>
                                        <Link to={`/men-smartwearables`} className="nav-men-cat-items"><p>Smart Wearables</p></Link>
                                        <Link to={`/men-fitnes-gadgets`} className="nav-men-cat-items"><p>Fitness Gadgets</p></Link>
                                        <Link to={`/men-headphones`} className="nav-men-cat-items"><p>Headphones</p></Link>
                                        <Link to={`/men-speakers`} className="nav-men-cat-items"><p>Speakers</p></Link>
                                    </div>
                                </div>
                                <div className="nav-men-cat-div5">
                                    <div className="nav-men-cat-fashion-accessories">
                                        <h5 className="nav-men-cat-title">Fashion Accessories</h5>
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
                                        <h5 className="nav-men-cat-title">Bags & Bagpacks</h5>
                                    </div>
                                    <div className="nav-men-cat-luggages-trollies">
                                        <h5 className="nav-men-cat-title">Luggages & Trollies</h5>
                                    </div>
                                
                            </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/shop/studio`} className="nav-link">
                        <div className="nav-studio">
                            <div className="nav-title-div">
                                <h4 className="nav-title">STUDIO</h4>
                            </div>
                            <div className="nav-studio-cat">
                                <div className="nav-studio-cat-1">
                                <img  src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" ></img>
                                </div>
                                <div className="nav-studio-cat-2">
                                <p> Your daily inspiration for everything fashion</p>

                                </div>
                                <div className="nav-studio-cat-3">
                                <img draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/retaillabs/2022/4/6/a4c1ed48-2c78-4377-bd42-a4cc925834421649242476135-6APR22-Shows-main-bannerq.jpg" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/retaillabs/2022/4/6/a4c1ed48-2c78-4377-bd42-a4cc925834421649242476135-6APR22-Shows-main-bannerq.jpg 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/retaillabs/2022/4/6/a4c1ed48-2c78-4377-bd42-a4cc925834421649242476135-6APR22-Shows-main-bannerq.jpg 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/retaillabs/2022/4/6/a4c1ed48-2c78-4377-bd42-a4cc925834421649242476135-6APR22-Shows-main-bannerq.jpg 750w" class="css-1nv89s7"></img>
                            

                                </div>
                                <div className="nav-studio-cat-4">
                                    <br />
                                    
                               <button>EXPLORE STUDIO ></button>
                                </div>

                            
                            
                           
                            
                            
                            </div>
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