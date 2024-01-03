import{H as M,T as R,M as L,_ as T}from"./Gallery.70aad80e.js";import{_ as A,r as y,o as I,z as j,k as s,l,F as w,A as S,q as r,s as v,B as x,t as C,C as B,T as N,d as H,m as t,D as O,E as W,v as E,G as $}from"./entry.3e006807.js";const D={id:"spinnerContainer",class:"beigeColor headline text-2xl textDark"},V={__name:"Spinner",setup(_){let o=0,n=y(0);const a=["Surfing","Relaxing","Exploring","Remote Work","Connecting"];I(()=>{o=setInterval(()=>c(),3e3)}),j(()=>clearInterval(o));function c(){n.value=(n.value+1)%a.length}return(h,p)=>(s(),l("div",D,[(s(),l(w,null,S(a,(i,d)=>r(N,{name:"spinnerItem"},{default:v(()=>[x(n)==d?(s(),l("div",{class:"spinnerItem",key:d},C(i),1)):B("",!0)]),_:2},1024)),64))]))}},q=A(V,[["__scopeId","data-v-024f7242"]]),F={class:"brightBg section"},z=t("h2",{class:"sectionHeadline"},"OUR AMENITIES",-1),G={id:"carousselContainer",class:"w-[95%] bg-white max-w-3xl shadow-md"},P={id:"carousselTextContainer"},U=["onMouseover","onClick"],Y=H({__name:"Carousel",props:{carouselItems:{type:Array}},setup(_){const o=_,n=o.carouselItems.length;let a=y(o.carouselItems[0].imageSrc),c=0,h=0;I(()=>{p()}),j(()=>clearInterval(h));function p(){h=setInterval(()=>d(),3e3)}function i(u,g){a.value=o.carouselItems[u].imageSrc,c=u,g&&clearInterval(h)}function d(){i((c+1)%n)}return(u,g)=>(s(),l("div",F,[z,t("div",G,[t("div",P,[(s(!0),l(w,null,S(o.carouselItems,(b,f)=>(s(),l("div",{class:W(["carousselTextItem",{active:f==x(c)}]),onMouseover:k=>i(f,!0),onClick:k=>i(f,!1),onMouseleave:g[0]||(g[0]=k=>p())},C(b.description),43,U))),256))]),t("div",{id:"carousselImageContainer",style:O({"background-image":"url("+x(a)+")"})},null,4)])]))}});const J=""+globalThis.__publicAssetsURL("prabath-berni.jpg");const K=t("header",{class:"beigeColor fixed top-0 w-full",id:"ctaHeader"},[E(" Contact us at "),t("a",{href:"mailto:hello@remote-nest.com",id:"mailto"},[t("b",null,"hello@remote-nest.com")])],-1),Q={class:"bgImgCenter max-h-[50vh] min-h-[24rem] text-slate-50 flex justify-center items-center",style:{"background-image":"url(/header.jpg)"}},X={id:"headerContainer"},Z=t("div",{class:"block m-auto content-center text-center beigeColor headline sm:text-5xl text-3xl p-3 textDark"}," REMOTE NEST VILLA ",-1),ee=t("div",{id:"subheadline",class:"block headline mt-6 text-2xl text-center text-white drop-shadow-lg"}," YOUR HOME IN AHANGAMA FOR ",-1),te=t("div",{class:"darkBg section px-2"},[t("h2",{class:"sectionHeadline"},"WELCOME TO THE REMOTE NEST VILLA"),t("p",{class:"max-w-2xl px-2"}," Your home in the tropic town of Ahangama for relaxing, surfing and exploring the beautiful nature and bustling life around us. But not only can you wind down and relax, we also make sure that you can get your real life obligations done: We have fibre internet and ergonomic work spaces in each room. Wake and surf in the morning, hack away your tasks in the daytime. Enjoy the spacious kitchen and living area for relaxing and chatting or use the fully equiped kitchen to get creative and make some smoothies with tropic fruits. The area around us has a great offer for the evenings: Enjoy nice restaurants, meet laid back people in bars or in vibrant clubs, all reachable within max. 5 min of a scooter ride. ")],-1),oe={class:"brightBg section px-2",id:"gallerySection"},ne=t("h2",{class:"sectionHeadline"},"GALLERY",-1),ae=$('<div class="darkBg section px-2"><h2 class="sectionHeadline">PRICING</h2><table id="pricing"><tr style="font-size:.8rem;"><td></td><td align="right">Standard rate</td><td align="right">December-January</td></tr><tr><td align="right">Small room:</td><td align="right" width="120px">37 Eur/night</td><td align="right" width="120px">47 Eur/night</td></tr><tr><td align="right">Medium room:</td><td align="right">42 Eur/night</td><td align="right">52 Eur/night</td></tr><tr><td align="right">Big room:</td><td align="right">47 Eur/night</td><td align="right">57 Eur/night</td></tr><tr><td align="right">Whole villa:</td><td align="right">115 Eur/night</td><td align="right">140 Eur/night</td></tr></table><p class="max-w-2xl px-2" style="text-align:center;font-size:0.9rem;margin-bottom:1rem;"><br> Discount for stays ≥7 nights: <b>5%</b><br> Discount for stays ≥28 nights: <b>10%</b> <br><br> Low season rates (April-November) are negotiable </p><p style="text-align:center;"><h3>Check our rooms on airbnb:</h3><br><a href="https://airbnb.com/h/remote-nest-villa" style="text-decoration:underline;">Whole villa</a><br><a href="https://airbnb.com/h/remote-nest-large" style="text-decoration:underline;">Large room</a><br><a href="https://airbnb.com/h/remote-nest-medium" style="text-decoration:underline;">Medium room</a><br><a href="https://airbnb.com/h/remote-nest-small" style="text-decoration:underline;">Small room</a><br></p></div><a id="location" target="_blank" href="https://www.google.de/maps/place/Remote+Nest+Villa/@5.977729,80.3722828,14.3z/data=!4m6!3m5!1s0x3ae1156749fcfb69:0xd0b0a14d520bab89!8m2!3d5.9722249!4d80.3772126!16s%2Fg%2F11v5v5ngsv?entry=ttu"><span id="mapOverlay">Click to open in googlemaps</span></a><div class="brightBg section px-4 about"><h2 class="sectionHeadline">ABOUT US</h2><div id="about" class="max-w-3xl"><img src="'+J+'"><p id="about-text"> We are Prabath, owner of &quot;Machan Curry Pot&quot;, and Berni from Germany. We got to know each other in December &#39;22 and after some time we figured out 2 things: That we get along very well and that we both enjoy creating nice experiences for people. So in March &#39;23 we partnered together and started building the Remote Nest Villa. No big companies involved, just Berni designing the interior plan and the furniture and Prabath hiring people from the village and managing the construction.<br> We are no boutique hotel, we don&#39;t offer expensive experiences and we don&#39;t have 5 staff members looking out for you. What we do have is a beautiful villa for a fair price and the willingness to make sure that you have a nice experience and feel welcome. Ask us anything and we will do our best to provide. We are looking forward to hosting you :) </p></div></div>',3),e="gallery-images/",m="carousel-images/",se={__name:"index",setup(_){const o=[{src:e+"m_room1.jpg",caption:"M-Room"},{src:e+"kitchen_counter.jpg",caption:"Fully equipped kitchen"},{src:e+"diningarea3.jpg",caption:"Outside dining area"},{src:e+"livingroom_window.jpg",caption:"Living room"},{src:e+"livingroom_sofa.jpg",caption:"Living room"},{src:e+"livingroom_door.jpg",caption:"Living room"},{src:e+"workstation.jpg",caption:"Comfortable desks in each room"},{src:e+"s_room.jpg",caption:"S-Room"},{src:e+"s_bathroom.jpg ",caption:"Bathroom of S-Room"},{src:e+"s_bathroom_shower.jpg",caption:"Shower of S-Room"},{src:e+"l_room.jpg",caption:"L-Room"},{src:e+"l_room2.jpg",caption:"L-Room"},{src:e+"l_bathroom.jpg",caption:"Bathroom of L-Room"},{src:e+"l_bathroom2.jpg",caption:"Bathroom of L-Room"},{src:e+"l_shower.jpg",caption:"Outdoor shower of L-Room"},{src:e+"diningarea.jpg",caption:"Dining area"},{src:e+"diningarea2.jpg",caption:"Dining area"},{src:e+"garden.jpg",caption:"Garden in front of the living room"},{src:e+"outside.jpg",caption:"Wall and gate surrounding the whole property"},{src:e+"shower.jpg",caption:"Shower to get your surf board clean"},{src:e+"floorplan.jpg",caption:"Floorplan"}],n=[{imageSrc:m+"3bedroom.jpg",description:"3 bed rooms with queen size beds and private bathrooms"},{imageSrc:m+"workstation.jpg",description:"50Mbps fibre internet, ergonomic chair and desk in each room"},{imageSrc:m+"m_room1.jpg",description:"AC in each bedroom"},{imageSrc:m+"kitchen.jpg",description:"Fully equipped, spacious kitchen"},{imageSrc:m+"livingroom.jpg",description:"Spacious living area"},{imageSrc:m+"sion.jpg",description:"900m to the next surf spot"}];y(!1);function a(){document.body.classList.toggle("body-no-scroll"),console.log("toggling Modal")}return(c,h)=>{const p=R,i=L,d=M,u=q,g=Y,b=T;return s(),l(w,null,[r(d,null,{default:v(()=>[r(p,null,{default:v(()=>[E("Remote Nest Villa")]),_:1}),r(i,{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=12.0, minimum-scale=1, user-scalable=yes"})]),_:1}),K,t("div",Q,[t("div",X,[Z,ee,r(u)])]),r(g,{carouselItems:n}),te,t("div",oe,[ne,r(b,{images:o,class:"max-w-3xl",onToggleModal:a})]),ae],64)}}};export{se as default};