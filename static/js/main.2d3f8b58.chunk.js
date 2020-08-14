(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,a,t){},217:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),c=(t(100),t(80)),s=t(81),i=t(87),m=t(86),u=t(247),d=t(251),h=t(252),E=t(253),v=t(18),y=t.n(v),p=(t(26),function(e){var a=e.covidGlobalData,t=a.confirmed,n=a.recovered,o=a.deaths,l=a.date;return r.a.createElement("div",{className:"status"},r.a.createElement(u.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(u.a,{className:"card1",item:!0,component:d.a,xs:12,md:3},r.a.createElement(h.a,null,r.a.createElement(E.a,{gutterBottom:!0},"Global Confirmed"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(y.a,{end:t,duration:2,separator:","})),r.a.createElement(E.a,null,new Date(l).toDateString()),r.a.createElement(E.a,null,"Active cases of COVID-19"))),r.a.createElement(u.a,{className:"card2",item:!0,component:d.a,xs:12,md:3},r.a.createElement(h.a,null,r.a.createElement(E.a,{gutterBottom:!0},"Global Recovered"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(y.a,{end:n,duration:2,separator:","})),r.a.createElement(E.a,null,new Date(l).toDateString()),r.a.createElement(E.a,null,"Recovered cases of COVID-19"))),r.a.createElement(u.a,{className:"card3",item:!0,component:d.a,xs:12,md:3},r.a.createElement(h.a,null,r.a.createElement(E.a,{gutterBottom:!0},"Global Deaths"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(y.a,{end:o,duration:2,separator:","})),r.a.createElement(E.a,null,new Date(l).toDateString()),r.a.createElement(E.a,null,"Death cases of COVID-19")))))}),D=function(e){var a=e.covidCountryData,t=a.countryConfirmed,n=a.countryRecovered,o=a.countryDeaths,l=a.date;return r.a.createElement("div",{className:"status"},r.a.createElement(u.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(u.a,{className:"countryCard1",item:!0,component:d.a,xs:12,md:3},r.a.createElement(h.a,null,r.a.createElement(E.a,{gutterBottom:!0},"Confirmed"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(y.a,{end:t,duration:2,separator:","})),r.a.createElement(E.a,null,new Date(l).toDateString()),r.a.createElement(E.a,null,"Active cases of COVID-19"))),r.a.createElement(u.a,{className:"countryCard2",item:!0,component:d.a,xs:12,md:3},r.a.createElement(h.a,null,r.a.createElement(E.a,{gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(y.a,{end:n,duration:2,separator:","})),r.a.createElement(E.a,null,new Date(l).toDateString()),r.a.createElement(E.a,null,"Recovered cases of COVID-19"))),r.a.createElement(u.a,{className:"countryCard3",item:!0,component:d.a,xs:12,md:3},r.a.createElement(h.a,null,r.a.createElement(E.a,{gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(y.a,{end:o,duration:2,separator:","})),r.a.createElement(E.a,null,new Date(l).toDateString()),r.a.createElement(E.a,null,"Death cases of COVID-19")))))},f=t(51),C=function(e){var a=e.covidGlobalData,t=a.confirmed,n=a.recovered,o=a.deaths,l=e.covidCountryData,c=l.countryConfirmed,s=l.countryRecovered,i=l.countryDeaths,m=t-n-o,u=c-s-i,d=r.a.createElement(f.Pie,{data:{labels:["Active","Recovered","Deaths"],datasets:[{label:"Global Status",backgroundColor:["#a6d4fa90","#81c78490","#e5737390"],data:[m,n,o]}]},options:{legend:{display:!1},title:{display:!0,text:"Global State"}}}),h=r.a.createElement(f.Pie,{data:{labels:["Active","Recovered","Deaths"],datasets:[{backgroundColor:["#267cc290","#16761b90","#96171790"],data:[u,s,i]}]},options:{legend:{display:!1},title:{display:!0,text:"Country State"}}});return r.a.createElement("div",{className:"chart"},d,h)},b=t(254),g=t(255),S=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Created by Ryan Shao \xa9 2020"))},w=t(52),G=t.n(w),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({country:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.setState({countryFound:!1}),G()({url:"https://api.covid19api.com/summary",method:"GET",responseType:"json"}).then((function(a){for(var t=a.data.Countries,n=0;n<t.length;n++)t[n].Country.toLowerCase()===e.state.country.toLowerCase()&&e.setState({countryData:{countryConfirmed:t[n].TotalConfirmed,countryRecovered:t[n].TotalRecovered,countryDeaths:t[n].TotalDeaths,date:t[n].Date},countryFound:!0,countryText:t[n].Country,isSearchLoaded:!0});!1===e.state.countryFound&&alert("Please try another country!"),e.setState({country:""})}))},e.state={globalData:{},countryData:{},country:"",countryFound:!1,countryText:"",isLoaded:!1,isSearchLoaded:!1},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;G()({url:"https://api.covid19api.com/summary",method:"GET",responseType:"json"}).then((function(a){var t=a.data.Global.TotalConfirmed,n=a.data.Global.TotalRecovered,r=a.data.Global.TotalDeaths,o=a.data.Date;e.setState({globalData:{confirmed:t,recovered:n,deaths:r,date:o},isLoaded:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Covid Tracker"),this.state.isLoaded?r.a.createElement(p,{covidGlobalData:this.state.globalData}):r.a.createElement("p",null,"loading..."),r.a.createElement("form",{className:"formContainer",onSubmit:this.handleSubmit},r.a.createElement(b.a,{className:"input",id:"filled-basic",label:"Country",variant:"filled",type:"text",value:this.state.country,onChange:this.handleChange,placeholder:"Search Country..."}),r.a.createElement(g.a,{className:"button",variant:"contained",size:"large",color:"primary",type:"submit"},"Search")),r.a.createElement("h2",null,this.state.countryText),this.state.isSearchLoaded?r.a.createElement(D,{covidCountryData:this.state.countryData}):r.a.createElement("p",null,"Please input a country!"),this.state.isSearchLoaded?r.a.createElement(C,{covidGlobalData:this.state.globalData,covidCountryData:this.state.countryData}):null),r.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,a,t){},95:function(e,a,t){e.exports=t(217)}},[[95,1,2]]]);
//# sourceMappingURL=main.2d3f8b58.chunk.js.map