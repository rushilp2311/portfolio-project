(this["webpackJsonpportfolio-project"]=this["webpackJsonpportfolio-project"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(26),r=a.n(i),s=(a(88),a(5)),c=a(8),o=a(7),m=a(6),p=a(27),u=a(9),d=a(19),h=a(29),f=a(82),g=(a(89),a(52)),E=a(24),b=a(25);var v=function(e){return n.a.createElement(g.a,{className:"bg-transparent jumbotron-fluid p-0"},n.a.createElement(d.a,{fluid:!0},n.a.createElement(E.a,{className:"justify-content-center py-5"},n.a.createElement(b.a,{md:8,sm:12},e.title&&n.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&n.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&n.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},y=a(23),k=a(41);var A=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return n.a.createElement(k.a.div,{className:"g-card-info",style:t},n.a.createElement("p",{className:"g-card-title"},e.title),n.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var C=function(e){return n.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},n.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&n.a.createElement(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},w=a(54),O=a.n(w),j=a(55),x=a.n(j),F=a(56),S=a.n(F),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).handleCardClick=function(e,t){var a=Object(y.a)(l.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),l.setState({items:a})},l.makeItems=function(e){return e.map((function(e){return n.a.createElement(C,{item:e,click:function(t){return l.handleCardClick(e.id,t)},key:e.id})}))},l.state={items:[{id:0,title:"ThaiLime",imgSrc:O.a,selected:!1},{id:1,title:"ThaiLime",imgSrc:x.a,selected:!1},{id:2,title:"ThaiLime",imgSrc:S.a,selected:!1}]},l}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,{fluid:!0},n.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(n.a.Component);var I=function(e){return n.a.createElement("div",null,n.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),n.a.createElement(B,null))};var T=function(e){return n.a.createElement(d.a,{fluid:!0},n.a.createElement(E.a,{className:"justify-content-center"},n.a.createElement(b.a,{md:8},e.children)))},D=a(57),N=a.n(D),P=a(58),L=a.n(P);a(90);var G=function(e){return n.a.createElement("div",null,n.a.createElement(v,{title:e.title}),n.a.createElement(T,null,n.a.createElement("p",null,"We build scalable, sustainable and secure applications for both web and mobile. We are one of the most prefered application development companies for businesses looking for web or app development. Our team is expert in web and mobile development with experience in building application with :",n.a.createElement("br",null)," ",n.a.createElement("b",null,"JAVA (Android) PHP / LARAVEL SWIFT (IOS)")),n.a.createElement("p",null,"Along with the development we have an team experience in graphic designing. We provide our client with excellent graphic desgin including logo, banners etc.")),n.a.createElement(T,null,n.a.createElement("h1",null,"Meet Our Team"),n.a.createElement("ul",{className:"aboutList"},n.a.createElement("li",null,n.a.createElement("div",{class:"card"},n.a.createElement("img",{src:L.a,class:"card-img-top",alt:"soniya"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},n.a.createElement("h2",null,"Miss Soniya")),n.a.createElement("p",null,"CEO")))),n.a.createElement("li",null,n.a.createElement("div",{class:"card"},n.a.createElement("img",{src:N.a,class:"card-img-top",alt:"appu"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},n.a.createElement("h2",null,"Mr. Apurv")),n.a.createElement("p",null,"CTO, Full-Stack Developer")))))))},Q=a(22),Y=a(16),z=a(60),U=a(59),V=a.n(U),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;l.setState(Object(Q.a)({},n,a))},l.handleSubmit=function(e){e.preventDefault(),console.log(e.target),l.setState({disabled:!0}),V.a.post("http://localhost:3030/api/email",l.state).then((function(e){e.data.success?l.setState({disabled:!1,emailSent:!0}):l.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),l.setState({disabled:!1,emailSent:!1})}))},l.state={name:"",email:"",message:"",disabled:!1,emailSent:null},l}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,{title:this.props.title}),n.a.createElement(T,null,n.a.createElement("div",{className:"contactinfo"},n.a.createElement("h3",null,"Our Contact Info : "),n.a.createElement("h5",null,"Canada : (+1)-(647)-673-8995"),n.a.createElement("h5",null,"India : (+91)-(997)-425-8448"),n.a.createElement("h5",null,"Email : ss4softech@gmail.com")),n.a.createElement("hr",null),n.a.createElement(Y.a,{onSubmit:this.handleSubmit},n.a.createElement(Y.a.Group,null,n.a.createElement(Y.a.Label,{htmlFor:"full-name"},"Full Name"),n.a.createElement(Y.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),n.a.createElement(Y.a.Group,null,n.a.createElement(Y.a.Label,{htmlFor:"email"},"Email"),n.a.createElement(Y.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),n.a.createElement(Y.a.Group,null,n.a.createElement(Y.a.Label,{htmlFor:"message"},"Message"),n.a.createElement(Y.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),n.a.createElement(z.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&n.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&n.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(n.a.Component),M=a(10),W=a(14),J=a.n(W),H=a(61),q=a.n(H),X=a(62),K=a.n(X),Z=a(63),$=a.n(Z),_=a(64),ee=a.n(_),te=a(65),ae=a.n(te),le=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={isFlipped:!1},l.handleClick=l.handleClick.bind(Object(M.a)(l)),l}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return n.a.createElement(J.a,{isFlipped:this.state.isFlipped,flipSpeedBackToFront:.1,flipSpeedFrontToBack:.1,flipDirection:"vertical"},n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("img",{style:this.props.styles.image,src:q.a,alt:"computer"}),n.a.createElement("h1",null,"Web Development"),n.a.createElement("h6",null,"More Info")),n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("p",null,"We build website that can help build your business. Give your customers great experience with a great website.We create responsive and mobile friendly design.Our experienced team will create an eye-catching website and desgin. Here are the Technologies we use:"),n.a.createElement("img",{style:this.props.styles.image,src:K.a,alt:"php"}),n.a.createElement("img",{style:this.props.styles.image,src:$.a,alt:"laravel"}),n.a.createElement("img",{style:this.props.styles.image,src:ee.a,alt:"js"}),n.a.createElement("img",{style:this.props.styles.image,src:ae.a,alt:"react"})))}}]),a}(l.Component),ne=a(66),ie=a.n(ne),re=a(67),se=a.n(re),ce=a(68),oe=a.n(ce),me=a(69),pe=a.n(me),ue=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={isFlipped:!1},l.handleClick=l.handleClick.bind(Object(M.a)(l)),l}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return n.a.createElement(J.a,{isFlipped:this.state.isFlipped,flipSpeedBackToFront:.1,flipSpeedFrontToBack:.1,flipDirection:"vertical"},n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("img",{style:this.props.styles.image,src:ie.a,alt:"android"}),n.a.createElement("h1",null,"Android Development"),n.a.createElement("h6",null,"More Info")),n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("p",null,"Android is one of the most widely use platform on mobile phones. We help you build apps for the platform to improve and grow your business. We provide innovative build solutions with the best user-friendly interface with minimal complexity.Our team will convert ideas into great apps that your users can use."),n.a.createElement("img",{style:this.props.styles.image,src:se.a,alt:"java"}),n.a.createElement("img",{style:this.props.styles.image,src:oe.a,alt:"kotlin"}),n.a.createElement("img",{style:this.props.styles.image,src:pe.a,alt:"flutter"})))}}]),a}(l.Component),de=a(70),he=a.n(de),fe=a(71),ge=a.n(fe),Ee=a(72),be=a.n(Ee),ve=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={isFlipped:!1},l.handleClick=l.handleClick.bind(Object(M.a)(l)),l}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return n.a.createElement(J.a,{isFlipped:this.state.isFlipped,flipSpeedBackToFront:.1,flipSpeedFrontToBack:.1,flipDirection:"vertical"},n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("img",{style:this.props.styles.image,src:he.a,alt:"game"}),n.a.createElement("h1",null,"Game Development"),n.a.createElement("h6",null,"More Info")),n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("p",null,"Building game is a tiring task especially if you are beginner. Our team will help you out build your game and put it out on internet so people can enjoy your awesome idea. Here are the technologies we use:"),n.a.createElement("img",{style:this.props.styles.image,src:ge.a,alt:"c"}),n.a.createElement("img",{style:this.props.styles.image,src:be.a,alt:"c++"})))}}]),a}(l.Component),ye=a(73),ke=a.n(ye),Ae=a(74),Ce=a.n(Ae),we=a(75),Oe=a.n(we),je=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={isFlipped:!1},l.handleClick=l.handleClick.bind(Object(M.a)(l)),l}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return n.a.createElement(J.a,{isFlipped:this.state.isFlipped,flipSpeedBackToFront:.1,flipSpeedFrontToBack:.1,flipDirection:"vertical"},n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("img",{style:this.props.styles.image,src:ke.a,alt:"ios"}),n.a.createElement("h1",null,"IOS Development"),n.a.createElement("h6",null,"More Info")),n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("p",null,"IOS is another popluar platform for mobile. To grow your business quickly you have to reach out to vast majority of customers. And we help you with that. Our team help you build user-friendly and great apps for the platform which increases user-interaction. Here are the technologies we use :"),n.a.createElement("img",{style:this.props.styles.image,src:Ce.a,alt:"swift"}),n.a.createElement("img",{style:this.props.styles.image,src:Oe.a,alt:"xcode"})))}}]),a}(l.Component),xe=a(76),Fe=a.n(xe),Se=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={isFlipped:!1},l.handleClick=l.handleClick.bind(Object(M.a)(l)),l}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return n.a.createElement(J.a,{isFlipped:this.state.isFlipped,flipSpeedBackToFront:.1,flipSpeedFrontToBack:.1,flipDirection:"vertical"},n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("img",{style:this.props.styles.image,src:Fe.a,alt:"digital"}),n.a.createElement("h1",null,"Digital Marketing"),n.a.createElement("h6",null,"More Info")),n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("p",null,"Digital Marketing is the essential part of a formula for growing a business. Without marketing its hard to reach out to potential customers and show your product to them. Its hard to target your potential customers without proper guidance. But our team will help you out to reach out to your customers")))}}]),a}(l.Component),Be=a(77),Ie=a.n(Be),Te=a(78),De=a.n(Te),Ne=a(79),Pe=a.n(Ne),Le=a(80),Ge=a.n(Le),Qe=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={isFlipped:!1},l.handleClick=l.handleClick.bind(Object(M.a)(l)),l}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return n.a.createElement(J.a,{isFlipped:this.state.isFlipped,flipSpeedBackToFront:.1,flipSpeedFrontToBack:.1,flipDirection:"vertical"},n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("img",{style:this.props.styles.image,src:Ie.a,alt:"graphics"}),n.a.createElement("h1",null,"Graphic and Logo Design"),n.a.createElement("h6",null,"More Info")),n.a.createElement("div",{style:this.props.styles.card,onClick:this.handleClick},n.a.createElement("p",null,"Every great business has a great a logo.If you want your business to be remembered by all customers you need a catchy logo. Our team will help you design a great logo that suits your business idea. Here are the tools we use :"),n.a.createElement("img",{style:this.props.styles.image,src:De.a,alt:"ai"}),n.a.createElement("img",{style:this.props.styles.image,src:Pe.a,alt:"ps"}),n.a.createElement("img",{style:this.props.styles.image,src:Ge.a,alt:"lr"})))}}]),a}(l.Component),Ye=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={card:{border:"2px solid #eeeeee",borderRadius:"3px",padding:"15px",width:"400px",height:"300px"},image:{height:"50px",width:"50px"}};return n.a.createElement("div",null,n.a.createElement(v,{title:this.props.title}),n.a.createElement(T,null,n.a.createElement("ul",{className:"servicelist"},n.a.createElement("li",null,n.a.createElement(le,{styles:e})),n.a.createElement("li",null,n.a.createElement(ue,{styles:e})),n.a.createElement("li",null,n.a.createElement(ve,{styles:e})),n.a.createElement("li",null,n.a.createElement(je,{styles:e})),n.a.createElement("li",null,n.a.createElement(Se,{styles:e})),n.a.createElement("li",null,n.a.createElement(Qe,{styles:e})))))}}]),a}(n.a.Component),ze=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={title:"Rushil Patel",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Services",path:"/services"}],home:{title:"We Are ShareSoftech",subTitle:"Welcome to Our Digital Home",text:"Checkout out our work below"},about:{title:"About Us"},contact:{title:"Let's Talk"},services:{title:"Services"}},l}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement(d.a,{className:"p-0",fluid:!0},n.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},n.a.createElement(h.a.Brand,null,"ShareSoftech"),n.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),n.a.createElement(h.a.Collapse,{id:"navbar-toggle"},n.a.createElement(f.a,{className:"ml-auto"},n.a.createElement(p.b,{className:"nav-link",to:"/"},"Home"),n.a.createElement(p.b,{className:"nav-link",to:"/about"},"About"),n.a.createElement(p.b,{className:"nav-link",to:"/services"},"Services"),n.a.createElement(p.b,{className:"nav-link",to:"/contact"},"Contact")))),n.a.createElement(u.a,{path:"/",exact:!0,render:function(){return n.a.createElement(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),n.a.createElement(u.a,{path:"/about",render:function(){return n.a.createElement(G,{title:e.state.about.title})}}),n.a.createElement(u.a,{path:"/services",render:function(){return n.a.createElement(Ye,{title:e.state.services.title})}}),n.a.createElement(u.a,{path:"/contact",render:function(){return n.a.createElement(R,{title:e.state.contact.title})}})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(114);r.a.render(n.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a.p+"static/media/restaurant2.cfae16aa.png"},55:function(e,t,a){e.exports=a.p+"static/media/restaurant3.e7e7fe2b.png"},56:function(e,t,a){e.exports=a.p+"static/media/restaurant4.9b623160.png"},57:function(e,t,a){e.exports=a.p+"static/media/appu.619e6267.jpeg"},58:function(e,t,a){e.exports=a.p+"static/media/soniya.9f3c3124.jpeg"},61:function(e,t,a){e.exports=a.p+"static/media/computer.b1e32d45.svg"},62:function(e,t,a){e.exports=a.p+"static/media/php.cfc70d2f.svg"},63:function(e,t,a){e.exports=a.p+"static/media/laravel.a9528250.svg"},64:function(e,t,a){e.exports=a.p+"static/media/js.684127fb.svg"},65:function(e,t,a){e.exports=a.p+"static/media/react.f0793d9f.svg"},66:function(e,t,a){e.exports=a.p+"static/media/android.6500f189.svg"},67:function(e,t,a){e.exports=a.p+"static/media/java.665074ac.svg"},68:function(e,t,a){e.exports=a.p+"static/media/kotlin.11adc7b2.svg"},69:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADpUlEQVR4nO2bsU5UQRSG/7l3kTVqg9HGhhpir1EihYmVsVJewMYnwI61k3ewsoPExEChBQWEkPgA0vsAKkRIFgO7YzGZyLLscu/cMztnZs5Xs3PO/T42XLgLIAiCIAiCIAhCbqjQC1CyuKs7UFjxNkChs/1IvaM9MhFilG+OTYBY5ZujIydm+eb4iIldvhkRKSnIN2MiJBX5ZlRkpCTfjIuI1OSbkZGQonwzNgJSlW9GMydl+WY8Y1KXb1ZgSg7yzRoMyUU+wDBATvIBZgFykw8wCpCjfIBJgFzlAwwC5CwfCBwgd/lAwAAi3xAkgMj/z8QDiPxBJhpA5A8zsQAi/3ImEkDkj8Z7AJE/Hq8BRP7VeAsg8qvhJYDIrw55AJFfD9IAIr8+ZAFEvhskAUS+O40DiPxmNArATT63faod6Qi3i+W2T/VjHeB2sdz2qXd0TbhdLLd96lI4vKZLvoUlM/lmhAOLu3oZCu+JN8lOvhnjCGmETOWbUQ0giZCxfDOuIY0iZC7fjCTAKYLIB+B2FzTE9oJahcbbyi+oebGttaPO/s+TRZfdfOxDO5qQSu8EB/kaagUAZq6VO/N32k8artloH2p8PJAZHaGBfAtpBAZ/6PP1SHI4AoF8C0kEBvLNGp4YiEAo39IoAhP5wCQ+lgJge0F1qr6minyLUwRG8gEG/6BxnjryLbUiMJMPAGXoBSwu8gGg29Ozx3/7O3dvtGbHfiFD+QCTAK7yLVdGYCofYBCgqXzLyAiM5QOBA1DJtwxFYC4fCPhDmFr+eW63y725mfZWnbuvULRCDe5DdX3VP1j/dG/vz9EzAB1PI8gIehtarB0vK9A+WSs2Pv8ofx/OAkCvVX473XzzkPJ8aoL/HkAZ4bx8C/cIwQMANBEuk2/hHIFFAKBZhHHyLVwjsAkAuEWoIt/CMQLJEzEq+ks3VzWqP1mrKl8XBc6mS/TaxYPi1Qfaj9M0hNU7wFLlnXCVfF0U6E0p9KcK6GLw+0xptdpff139EapHWAYAxkcYJX+c9ItwicA2AHB5hIvy60i/CIcIrAMAgxGs/CbSLxI6AvsAgPm7kfr65aU++DXXb5XQJe3aISOwugsaxdnSrc5p9/Bjb7pFLh8AtNLLoe6Ogj8PqMz3zT3cf36ioJ56OV/hcTH/4rre39jycv4I4gkAJBkhrgBAchHiCwAkFSHOAEAyEeINACQRIe4AQPQR4g8ARB0hjQBA1BEEQRAEQRAEQciLfxDhhfi1ULyhAAAAAElFTkSuQmCC"},70:function(e,t){e.exports="data:image/png;base64,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"},71:function(e,t,a){e.exports=a.p+"static/media/c.22405bd1.svg"},72:function(e,t,a){e.exports=a.p+"static/media/c++.5294d27e.svg"},73:function(e,t,a){e.exports=a.p+"static/media/apple.d25981fc.svg"},74:function(e,t,a){e.exports=a.p+"static/media/swift.4470a25e.svg"},75:function(e,t,a){e.exports=a.p+"static/media/xcode.0beb24fa.svg"},76:function(e,t,a){e.exports=a.p+"static/media/digital.6e77d6a1.svg"},77:function(e,t,a){e.exports=a.p+"static/media/graphic-design.3fb2a103.svg"},78:function(e,t,a){e.exports=a.p+"static/media/ai.ae922ce9.svg"},79:function(e,t,a){e.exports=a.p+"static/media/ps.0fe42c62.svg"},80:function(e,t,a){e.exports=a.p+"static/media/lr.8a119d92.svg"},83:function(e,t,a){e.exports=a(115)},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/rushil.fadbb341.jpeg"}},[[83,1,2]]]);
//# sourceMappingURL=main.9837ee45.chunk.js.map