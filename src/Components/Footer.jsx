import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import FooterSnippet1 from "../img/FooterSnippet1.jpg"
import FooterSnippet2 from "../img/FooterSnippet2.jpg"


const Footer = () => {

    const FooterDiv=styled.div`
    display:flex;
    width:80%;
    justify-content:space-evenly;
    `
    const OuterDiv=styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    background-color:#fafbfd;
    flex-direction:column;
    align-items:center;
    `
    const StyledLink=styled(Link)`
    text-decoration:none;
    text-align:left;
    color:grey;
    `
    const InnerDiv=styled.div`
    display:flex;
    flex-direction:column;

    `

    const InnerDiv1=styled.div`
    display:flex;
    flex-direction:column;
    width:72%;

    `
    const Styledh5=styled.h5`
    text-align:left;
    `
    const Styledh52=styled.h5`
    text-align:left;
    margin:0;
    padding:0;
    padding-top:30px;

    `
    const Styledh4=styled.h4`
    text-align:left;
    `
    const Styledh42=styled.h4`
    text-align:left;
    margin:0;
    padding:0;
    padding-top:30px;

    `
    const Styledimg=styled.img`
    height:80px;
    margin-top:-20px;
    padding:0;
    `
    const Styledp2=styled.p`
    text-align:left;
    color:grey;`


    const Styledimg2=styled.img`
    margin-top:20px;
    `
    const Styledimg1=styled.img`
    height:30px;
    width:150px;
    `

    const Styledp3=styled.p`
    text-align:left;
    color:grey;
    font-size:13px;
    font-size:14px;

`

    const Styledp32=styled.p`
    text-align:left;
    margin:0;
    padding:0;
    font-size:14px;
    color:grey;`

    const Styledli=styled.li`
    text-align:left;
    color:grey;`

    
    
  return (
    <OuterDiv>
        
        <FooterDiv>
            <InnerDiv>
            <Styledh5>ONLINE SHOPPING</Styledh5>
            <StyledLink to="">Men</StyledLink>
            <StyledLink to="">Women</StyledLink>
            <StyledLink to="">Kids</StyledLink>
            <StyledLink to="">Home & Living</StyledLink>
            <StyledLink to="">Beauty</StyledLink>
            <StyledLink to="">Gift Cards</StyledLink>
            <StyledLink to="">Myntra Insider</StyledLink>
            </InnerDiv>
            <InnerDiv>
            <Styledh5>USEFUL LINKS</Styledh5>
            <StyledLink to="">Contact Us</StyledLink>
            <StyledLink to="">FAQ</StyledLink>
            <StyledLink to="">T&C</StyledLink>
            <StyledLink to="">Terms Of Use</StyledLink>
            <StyledLink to="">Track Orders</StyledLink>
            <StyledLink to="">Shipping</StyledLink>
            <StyledLink to="">Cancellation</StyledLink>
            <StyledLink to="">Returns</StyledLink>
            <StyledLink to="">Whitehat</StyledLink>
            <StyledLink to="">Blog</StyledLink>
            <StyledLink to="">Careers</StyledLink>
            <StyledLink to="">Privacy Policy</StyledLink>
            <StyledLink to="">Site Map</StyledLink>
            <StyledLink to="">Corporate Information</StyledLink>

            </InnerDiv>
            <InnerDiv>            <Styledh5>EXPERIENCE MYNTRA APP ON MOBILE</Styledh5>
            <Styledimg src="data:image/png;base64,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"/>
          <Styledp2>KEEP IN TOUCH</Styledp2>
            <Styledimg1 src={FooterSnippet2}/>

            </InnerDiv>
            <InnerDiv>

          <Styledimg2 src={FooterSnippet1}/>
            </InnerDiv>
   </FooterDiv>
   <InnerDiv1>
   <Styledh5>Popular Searches</Styledh5>
   <Styledp3>Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</Styledp3>
   </InnerDiv1>
 <InnerDiv1>
     <Styledh5>Registered Office Address</Styledh5>
     <Styledp3>Buildings Alyssa,<br/>
Begonia and Clover situated in Embassy Tech Village,<br/>
Outer Ring Road,<br/>
Devarabeesanahalli Village,<br/>
Varthur Hobli,<br/>
Bengaluru – 560103, India</Styledp3>
 </InnerDiv1>
 <InnerDiv1>
     <Styledh42>ONLINE SHOPPING MADE EASY AT MYNTRA</Styledh42>
     <Styledp32>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</Styledp32>
 </InnerDiv1>
 <InnerDiv1>
     <Styledh42>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</Styledh42>
     <Styledp32>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</Styledp32>
 </InnerDiv1>
 <InnerDiv1>
     <ol>
         <Styledli><strong>Smart men’s clothing</strong>- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</Styledli>
    <Styledli><strong>Trendy women’s clothing</strong> - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</Styledli>
     <Styledli><strong>Fashionable footwear</strong>- While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</Styledli>
    <Styledli><strong>Stylish accessories</strong> - Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</Styledli>
    <Styledli><strong>Fun and frolic</strong> - Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</Styledli>
     <Styledli><strong>Beauty begins here</strong> - You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</Styledli>
     </ol>
     <Styledp3>Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</Styledp3>
 <Styledh42>AFFORDABLE FASHION AT YOUR FINGERTIPS</Styledh42>
 <Styledp32>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</Styledp32>
 <Styledh42>MYNTRA INSIDER</Styledh42>
 <Styledp32>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.<br/><br/>

There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</Styledp32>
 <Styledh52>Insider</Styledh52>
 <ul>
     <Styledli>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</Styledli>
 <Styledli>Curated collections from celeb stylists.</Styledli>
 </ul>
 <Styledh52>Elite</Styledh52>
 <ul>
     <Styledli>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</Styledli>
     <Styledli>Exclusive early access to Limited Edition products</Styledli>
 </ul>
 <Styledh52>Icon</Styledh52>
 <ul>
 <Styledli>
 Chance to get on guest lists for special events.
 </Styledli>
 </ul>
 <Styledh52>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</Styledh52>
 <Styledp32>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.<br/><br/>

Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.<br/><br/>

Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.<br/><br/>

If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</Styledp32>
 <ol>
     <Styledli><Styledh5>Keep Up With What Your Favourite Fashion Icons Are Upto</Styledh5>
     <Styledp32>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.<br/><br/>

Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</Styledp32></Styledli>
 <Styledli><Styledh5>Quick Fashion Tip And Tricks</Styledh5>
 <Styledp32>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</Styledp32></Styledli>
 <Styledli><Styledh5>Updates on What Is Trending and New Product Launches</Styledh5>
 <Styledp32>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.<br/><br/>

Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</Styledp32></Styledli>
 <Styledli><Styledh5>Explicit Step-By-Step Beauty Routines From Experts</Styledh5>
 <Styledp32>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.
     </Styledp32></Styledli>
     <Styledli><Styledh5>Celebrity Confessions And A Look Into Their Lives</Styledh5>
     <Styledp32>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.<br/><br/>

If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</Styledp32></Styledli>
 </ol>


 <Styledh52>MYNTRA APP</Styledh52>
 <Styledp32>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</Styledp32>
<Styledh52>HISTORY OF MYNTRA</Styledh52>
<Styledp32>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.<br/><br/>

The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</Styledp32>
 <Styledh52>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</Styledh52>
 <Styledp32>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.<br/><br/>

Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</Styledp32>
 </InnerDiv1>
    </OuterDiv>
  )
}

export default Footer