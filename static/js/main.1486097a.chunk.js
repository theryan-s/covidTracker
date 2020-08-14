(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{25:function(e,t,a){},58:function(e,t,a){e.exports=a(86)},63:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(63),a(43)),s=a(44),m=a(50),i=a(49),u=a(116),d=a(120),E=a(121),h=a(122),y=a(16),v=a.n(y),p=(a(25),function(e){var t=e.covidGlobalData,a=t.confirmed,n=t.recovered,o=t.deaths,c=t.date;return r.a.createElement("div",{className:"status"},r.a.createElement(u.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(u.a,{className:"card1",item:!0,component:d.a,xs:12,md:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0},"Global Confirmed"),r.a.createElement(h.a,{variant:"h4"},r.a.createElement(v.a,{end:a,duration:2,separator:","})),r.a.createElement(h.a,null,new Date(c).toDateString()),r.a.createElement(h.a,null,"Active cases of COVID-19"))),r.a.createElement(u.a,{className:"card2",item:!0,component:d.a,xs:12,md:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0},"Global Recovered"),r.a.createElement(h.a,{variant:"h4"},r.a.createElement(v.a,{end:n,duration:2,separator:","})),r.a.createElement(h.a,null,new Date(c).toDateString()),r.a.createElement(h.a,null,"Recovered cases of COVID-19"))),r.a.createElement(u.a,{className:"card3",item:!0,component:d.a,xs:12,md:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0},"Global Deaths"),r.a.createElement(h.a,{variant:"h4"},r.a.createElement(v.a,{end:o,duration:2,separator:","})),r.a.createElement(h.a,null,new Date(c).toDateString()),r.a.createElement(h.a,null,"Death cases of COVID-19")))))}),f=function(e){var t=e.covidCountryData,a=t.countryConfirmed,n=t.countryRecovered,o=t.countryDeaths,c=t.date;return r.a.createElement("div",{className:"status"},r.a.createElement(u.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(u.a,{className:"countryCard1",item:!0,component:d.a,xs:12,md:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0},"Confirmed"),r.a.createElement(h.a,{variant:"h4"},r.a.createElement(v.a,{end:a,duration:2,separator:","})),r.a.createElement(h.a,null,new Date(c).toDateString()),r.a.createElement(h.a,null,"Active cases of COVID-19"))),r.a.createElement(u.a,{className:"countryCard2",item:!0,component:d.a,xs:12,md:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0},"Recovered"),r.a.createElement(h.a,{variant:"h4"},r.a.createElement(v.a,{end:n,duration:2,separator:","})),r.a.createElement(h.a,null,new Date(c).toDateString()),r.a.createElement(h.a,null,"Recovered cases of COVID-19"))),r.a.createElement(u.a,{className:"countryCard3",item:!0,component:d.a,xs:12,md:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0},"Deaths"),r.a.createElement(h.a,{variant:"h4"},r.a.createElement(v.a,{end:o,duration:2,separator:","})),r.a.createElement(h.a,null,new Date(c).toDateString()),r.a.createElement(h.a,null,"Death cases of COVID-19")))))},D=a(123),C=a(124),g=function(){return r.a.createElement("div",{className:"footer"},"Created by Ryan Shao \xa9 2020")},b=a(31),S=a.n(b),w=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({country:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({countryFound:!1}),S()({url:"https://api.covid19api.com/summary",method:"GET",responseType:"json"}).then((function(t){for(var a=t.data.Countries,n=0;n<a.length;n++)a[n].Country.toLowerCase()===e.state.country.toLowerCase()&&(console.log(a[n].TotalConfirmed),e.setState({countryData:{countryConfirmed:a[n].TotalConfirmed,countryRecovered:a[n].TotalRecovered,countryDeaths:a[n].TotalDeaths,date:a[n].Date},countryFound:!0,countryText:a[n].Country,isSearchLoaded:!0}));!1===e.state.countryFound&&alert("Please try another country!"),e.setState({country:""})}))},e.state={globalData:{},countryData:{},country:"",countryFound:!1,countryText:"",isLoaded:!1,isSearchLoaded:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;S()({url:"https://api.covid19api.com/summary",method:"GET",responseType:"json"}).then((function(t){var a=t.data.Global.TotalConfirmed,n=t.data.Global.TotalRecovered,r=t.data.Global.TotalDeaths,o=t.data.Date;e.setState({globalData:{confirmed:a,recovered:n,deaths:r,date:o},isLoaded:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Covid Tracker"),this.state.isLoaded?r.a.createElement(p,{covidGlobalData:this.state.globalData}):r.a.createElement("p",null,"loading..."),r.a.createElement("form",{className:"formContainer",onSubmit:this.handleSubmit},r.a.createElement(D.a,{className:"input",id:"standard-basic",label:"Country",inputProps:{style:{fontSize:18}},InputLabelProps:{style:{fontSize:18}},type:"text",value:this.state.country,onChange:this.handleChange,placeholder:"Search Country"}),r.a.createElement(C.a,{className:"button",variant:"contained",size:"medium",color:"primary",style:{fontSize:"20px"},type:"submit"},"Search")),r.a.createElement("h2",null,this.state.countryText),this.state.isSearchLoaded?r.a.createElement(f,{covidCountryData:this.state.countryData}):r.a.createElement("p",null,"Please input a country!")),r.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.1486097a.chunk.js.map