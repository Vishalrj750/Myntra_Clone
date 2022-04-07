import React from 'react'
import styledComponents from "styled-components"
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/2/928070ca-fead-4dc0-8f01-e8f72564958f1648910548591-Desktop_1920X504--2-.gif" },
  { url: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/e2abb25c-5de9-40de-968b-6e3998897cb61641832422164-A-Line-Kurtas_Desk.jpg" },
  { url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/31200885-2552-4f5a-8a92-be464905ce181646151056720-MFH-Desktop-Banner-.jpg" },
  { url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/349419f2-6b66-4b22-8135-f46c13104a4d1646060784174-Workwear-Collection_Dk.jpg" },
  { url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg" },
  
];

const HomeWrapper = styledComponents.div`
.text-banner-title {
  text-transform: uppercase;
  color: #3e4152;
  letter-spacing: 0.15em;
  font-size: 1.8em;
  margin: 50px 0 10px 30px;
  max-height: 5em;
  font-weight: 600;
}
.img-link-container-1 img,
.img-link-container-2 img,
.img-link-container-3 img,
.img-link-container-4 img,
.img-link-container-5 img,
.img-link-container-6 img,
.img-link-container-7 img,
.img-link-container-8 img,
.img-link-container-9 img,
.img-link-container-10 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-link-container-2 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-row-gap: 0;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
}

.img-link-container-3,
.img-link-container-5 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  grid-row-gap: 0;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
}

.img-link-container-1,
.img-link-container-4,
.img-link-container-6,
.img-link-container-7,
.img-link-container-8,
.img-link-container-9,
.img-link-container-10 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  grid-row-gap: 0;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
}
/* Body part Css Ends */

/* Footer part Css Starts*/
.img-container {
  width: 1080px;
  margin: 40px auto;
}
.footer-image-1,
.footer-image-2,
.footer-image-3,
.footer-image-4 {
  width: 100%;
  margin: 0px auto;
  object-fit: cover;
}

/* Side Image */
.side-image-1 {
  position: fixed;
  right: 0;
  top: 450px;
  cursor: pointer;
}

/* Footer Css Ends */

/* Image Slider CSS */
.slider {
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-top: 70px;
}

.slides {
  width: 500%;
  height: 500px;
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 20%;
  transition: 2s;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/*css for manual slide navigation*/

.navigation-manual {
  position: absolute;
  width: 100%;
  margin-top: -25px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  padding: 3.9px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child) {
  margin-right: 10px;
}

.manual-btn:hover {
  background: gray;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

#radio4:checked ~ .first {
  margin-left: -60%;
}
#radio5:checked ~ .first {
  margin-left: -80%;
}
/*css for automatic navigation*/

.navigation-auto {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 475px;
}

.navigation-auto div {
  border: 2px solid rgba(211, 211, 211, 0.651);
  padding: 1.9px;
  border-radius: 10px;
  transition: 1s;
}

.navigation-auto div:not(:last-child) {
  margin-right: 10px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: gray;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: gray;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: gray;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background: gray;
}
#radio5:checked ~ .navigation-auto .auto-btn5 {
  background: gray;
}
.SimpleImg{
  margin-top:100px;
}

`

function HomeAll() {


  return (
    

<div>

 <div className='SimpleImg'>
    <SimpleImageSlider
    
      width={1400}
      height={300}
      images={images}
      showBullets={true}
      showNavs={true}
      padding = {20}
    />
  </div>
   
  <HomeWrapper>
    <div>

   <div class="text-banner-container">
      <h4 class="text-banner-title">BIGGEST DEALS ON TOP BRANDS</h4>
    </div>

    
  
    <div class="img-link-container-1">
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/814b8ff4-1dec-4a6e-86b8-c26f5c40fe4c1598892518923-Biba.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src= "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/48aa9321-1906-4471-be70-20ef124459971598892519217-M_S.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3f125d86-5139-4ee2-8561-5a610c2624421598892519314-Only.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/90c35c24-ac69-4472-a1a0-be82c087ec181598892519026-F21.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/61c793f2-399c-4b8a-9e93-831adef697381598892519164-Levis.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8f070770-db34-4e20-ab80-59728106460a1598892519078-GAP.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg"
          alt=""
      /></a>
    </div>
    
     <div class="text-banner-container">
      <h4 class="text-banner-title">CATEGORIES TO BAG</h4>
    </div>

    <div class="img-link-container-3">
      <a href="products.html"
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"
          alt=""
      /></a>

      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg"
          alt=""
      /></a>
    </div>
    

    <div class="text-banner-container">
      <h4 class="text-banner-title">EXPLORE TOP BRANDS</h4>
    </div>

    <div class="img-link-container-4">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg"
          alt=""
      /></a>
    </div>
    
    

     <div class="text-banner-container">
      <h4 class="text-banner-title">TRENDING IN WESTERN WEAR</h4>
    </div>

    <div class="img-link-container-1">
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg" 
          alt=""
      /></a>
    </div>
   
   
    <div class="text-banner-container">
      <h4 class="text-banner-title">BIGGEST DEALS ON TOP BRANDS</h4>
    </div>

    <div class="img-link-container-2">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"
          alt=""
      /></a>
    </div>
   

    <div class="text-banner-container">
      <h4 class="text-banner-title">TRENDING IN WESTERN WEAR</h4>
    </div>

    <div class="img-link-container-6">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg"
          alt=""
      /></a>
    </div>
   

    <div class="text-banner-container">
      <h4 class="text-banner-title">TRENDING IN INDIAN WEAR</h4>
    </div>

    <div class="img-link-container-7">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg"
          alt=""
      /></a>
    </div>
   
    <div class="text-banner-container">
      <h4 class="text-banner-title">TRENDING IN SPORTS WEAR</h4>
    </div>

    <div class="img-link-container-8">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg"
          alt=""
      /></a>
    </div>
   
    <div class="text-banner-container">
      <h4 class="text-banner-title">TRENDING IN FOOTWEAR</h4>
    </div>

    <div class="img-link-container-9">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/76d839cb-b561-42a5-aaa3-6d4e49d0c56f1598030134822-Content-mostselling-Footwear-Rocia.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg"
          alt=""
      /></a>
    </div>
   
    <div class="text-banner-container">
      <h4 class="text-banner-title">TRENDING IN ACCESSORIES</h4>
    </div>

    <div class="img-link-container-9">
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg"
          alt="" /></a
      ><a href=""
        ><img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
          alt=""
      /></a>
    </div>
    </div>
    
    </HomeWrapper>

</div>

       
  )
}
   

export  {HomeAll };
