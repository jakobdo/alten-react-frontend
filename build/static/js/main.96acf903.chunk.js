(this["webpackJsonpalten-app"]=this["webpackJsonpalten-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),s=(a(49),a(4)),o=a(6),m=a(1),i=a(5),u=a.n(i),E=a(7),g=a(8),d=a(42),h=a.n(d).a.create({baseURL:"https://api.altentechnology.dk/api/",responseType:"json"});var f=function(e){for(var t=e.level,a=[],n=1;n<=t;n++)a.push(l.a.createElement(m.Icon,{key:"full_".concat(n)},"star"));for(var r=1;r<=5-t;r++)a.push(l.a.createElement(m.Icon,{key:"empty_".concat(r)},"star_border"));return l.a.createElement(l.a.Fragment,null,a)};var p=function(e){var t=e.technologyLevels;return l.a.createElement(m.Row,null,t.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(m.Col,{s:6,className:"right-align"},l.a.createElement(s.b,{to:"/technologies/".concat(e.slug)},e.name)),l.a.createElement(m.Col,{s:6},l.a.createElement(f,{level:e.level})))})))};var v=function(e){var t=e.consultant,a=t.technologyLevels.slice(0,5);return l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12,m:4},l.a.createElement(s.b,{to:"/consultants/".concat(t.slug)},l.a.createElement("img",{className:"circle responsive-img",src:t.image.medium,alt:t.fullname}))),l.a.createElement(m.Col,{s:12,m:8},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/consultants/".concat(t.slug)},t.fullname)),l.a.createElement("h6",null,t.jobtitle),l.a.createElement("p",null,t.teaser),a.length>0&&l.a.createElement(p,{technologyLevels:a})),l.a.createElement(m.Col,{s:12,className:"center-align"},l.a.createElement(s.b,{className:"waves-effect waves-light btn",to:"/consultants/".concat(t.slug)},"LEARN MORE")))};var b=function(){return l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12},l.a.createElement(m.ProgressBar,null)))};var k=function(){var e=Object(n.useState)(null),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/consultants/get_random/");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",null,l.a.createElement(m.Parallax,{image:l.a.createElement("img",{alt:"",src:"https://api.altentechnology.dk/static/base/gfx/parallax1_5.jpg"}),options:{responsiveThreshold:0}}),l.a.createElement("div",{className:"section white"},l.a.createElement("div",{className:"row container"},l.a.createElement("h2",{className:"header"},"ALTEN Denmark"),l.a.createElement("p",{className:"grey-text text-darken-3 lighten-3"},"ALTEN Group supports the development strategy of its customers in the fields of innovation, R&D and technological information systems. Created 30 years ago in France, the Group has become a world leader in Engineering and Technology consulting. 34.000 highly qualified engineers carry out studies and conception projects for the Technical and Information Systems Divisions of major customers in the industrial and service sectors. ALTEN DANMARK A/S works within Energy, Life Science, Banking, Insurance and Robot Industries."))),l.a.createElement(m.Parallax,{image:l.a.createElement("img",{alt:"",src:"https://api.altentechnology.dk/static/base/gfx/alten.france.jpg"}),options:{responsiveThreshold:0}}),l.a.createElement("div",{className:"section white"},l.a.createElement("div",{className:"row container"},l.a.createElement("h2",{className:"header"},"ALTEN Consultant"),l.a.createElement("div",{className:"grey-text text-darken-3 lighten-3"},a?l.a.createElement(v,{consultant:a}):l.a.createElement(b,null)))),l.a.createElement(m.Parallax,{image:l.a.createElement("img",{alt:"",src:"https://api.altentechnology.dk/static/base/gfx/parallax4.jpg"}),options:{responsiveThreshold:0}}))};var w=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/projects/");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Projects"),l.a.createElement("ul",{className:"list"},a.map((function(e){return l.a.createElement("li",{className:"list-item",key:e.slug},l.a.createElement(m.Card,null,l.a.createElement("h6",null,l.a.createElement(s.b,{to:"/projects/".concat(e.slug)},e.name)),e.industry&&l.a.createElement("strong",null,e.industry.name),l.a.createElement("div",null,e.description),e.consultants.length>0&&l.a.createElement("div",{className:"left-align"},l.a.createElement("br",null),l.a.createElement("strong",null,"Consultants:"),e.consultants.map((function(e){return l.a.createElement("div",{key:e.slug},l.a.createElement(s.b,{to:"/consultants/".concat(e.slug)},e.fullname))}))),l.a.createElement("br",null),e.technologies.length>0&&l.a.createElement("div",{className:"left-align"},e.technologies.map((function(e){return l.a.createElement(s.b,{to:"/technologies/".concat(e.slug),key:e.slug},l.a.createElement(m.Chip,null,e.name))})))))}))))};var N=function(){var e=Object(o.f)().tagSlug,t=Object(n.useState)([]),a=Object(g.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)([]),d=Object(g.a)(i,2),f=d[0],p=d[1];return Object(n.useEffect)((function(){(function(){var t=Object(E.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/consultants/",e&&(a="/consultants/tags/".concat(e,"/")),t.next=4,h.get(a);case 4:n=t.sent,c(n.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(n.useEffect)((function(){(function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/tags/");case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Consultants"),l.a.createElement("div",null,l.a.createElement(s.b,{to:"/consultants"},l.a.createElement(m.Chip,null,"All")),f.map((function(e){return l.a.createElement(s.b,{key:e.slug,to:"/consultants/tags/".concat(e.slug)},l.a.createElement(m.Chip,null,e.name))}))),l.a.createElement("hr",null),l.a.createElement("ul",{className:"list"},r.map((function(e){return l.a.createElement("li",{className:"list-item",key:e.slug},l.a.createElement(m.Card,{actions:[l.a.createElement(s.b,{key:e.slug,to:"/consultants/".concat(e.slug),className:"waves-effect waves-light btn"},"LEARN MORE")],textClassName:"center-align"},l.a.createElement(s.b,{to:"/consultants/".concat(e.slug)},l.a.createElement("img",{className:"circle responsive-img",src:e.image.medium,alt:e.fullname})),l.a.createElement("strong",null,l.a.createElement("h5",{className:"small-heading"},e.fullname)),l.a.createElement("p",null,e.jobtitle)))}))))};a(114);var y=function(e){var t=e.technologies;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.slug},l.a.createElement(s.b,{to:"/technologies/".concat(e.slug,"/")},l.a.createElement(m.Chip,null,e.name)))})))};var j=function(e){var t=e.projects;return l.a.createElement(l.a.Fragment,null,t.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"center-align"},l.a.createElement(m.Icon,null,"group_work")),l.a.createElement(m.Card,{className:"card-main"},l.a.createElement("h2",{className:"center-align"},"Projects"),t.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.slug},l.a.createElement(s.b,{to:"/projects/".concat(e.slug,"/")},l.a.createElement("h5",null,e.name)),l.a.createElement(y,{technologies:e.technologies}))})))))};var C=function(){var e=Object(o.f)().consultantSlug,t=Object(n.useState)(null),a=Object(g.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var t=Object(E.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/consultants/".concat(e,"/"));case 2:a=t.sent,c(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var s=r?encodeURI("Book consultant - ".concat(r.fullname)):"";return l.a.createElement("div",{className:"container"},r?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Card,{className:"card-main"},l.a.createElement("div",{className:"center-align"},l.a.createElement("img",{className:"circle responsive-img",src:r.image.medium,alt:r.fullname})),l.a.createElement("div",{className:"center-align"},l.a.createElement("h2",null,r.fullname),l.a.createElement("h5",null,r.jobtitle),l.a.createElement("hr",null)),l.a.createElement("div",{className:"left-align"},r.description),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.Row,{className:"center-align"},l.a.createElement(m.Col,{s:6},l.a.createElement("a",{href:"mailto:tech@alten.dk?subject=".concat(s),className:"waves-effect waves-light btn"},l.a.createElement(m.Icon,{left:!0},"schedule"),"Book Consultant")),l.a.createElement(m.Col,{s:6},l.a.createElement("a",{href:r.cv,className:"waves-effect waves-light btn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.Icon,{left:!0},"file_download"),"Download CV"))),l.a.createElement("br",null),r.linkedin&&l.a.createElement("div",{className:"center-align"},l.a.createElement("a",{href:r.linkedin,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://api.altentechnology.dk//static/base/logo/linkedin.png",alt:"LinkedIn"})))),r.technologyLevels.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"center-align"},l.a.createElement(m.Icon,null,"star")),l.a.createElement(m.Card,null,l.a.createElement("h2",{className:"center-align"},"Technologies & Tools"),l.a.createElement(p,{technologyLevels:r.technologyLevels}))),l.a.createElement(j,{projects:r.projects}),r.experience.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"center-align"},l.a.createElement(m.Icon,null,"work")),l.a.createElement(m.Card,null,l.a.createElement("h2",{className:"center-align"},"Experience"),l.a.createElement("div",{className:"timeline"},r.experience.map((function(e,t){return l.a.createElement("div",{className:"timeline-event",key:"timeline_key_".concat(t)},l.a.createElement("div",{className:"card timeline-content alten-light-blue"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title alten-header-color"},e.start," - ",e.company),l.a.createElement("p",{className:"alten-p-light-blue"},l.a.createElement("b",null,e.job_title)),l.a.createElement("hr",null),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"timeline-badge blue white-text"},l.a.createElement("i",{className:"material-icons"},"my_location")))})))))):l.a.createElement(b,null))};var x=function(e){var t=e.consultant;return l.a.createElement(m.Col,{s:12,m:6,l:4},l.a.createElement(m.Card,{actions:[l.a.createElement(s.b,{key:"consult_key_".concat(t.slug),className:"waves-effect waves-light btn",to:"/consultants/".concat(t.slug)},"Learn More")],textClassName:"center-align"},l.a.createElement(s.b,{to:"/consultants/".concat(t.slug)},l.a.createElement("img",{className:"circle responsive-img",src:t.image.medium,alt:t.fullname})),l.a.createElement("h5",null,t.fullname),l.a.createElement("strong",null,t.jobtitle)))};var O=function(){var e=Object(o.f)().projectSlug,t=Object(n.useState)(null),a=Object(g.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(E.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/projects/".concat(e,"/"));case 2:a=t.sent,c(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),l.a.createElement("div",{className:"container"},r?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,r.name),l.a.createElement(m.Card,null,l.a.createElement("table",{className:"highlight"},l.a.createElement("tbody",null,r.industry&&l.a.createElement("tr",null,l.a.createElement("th",null,"Industry: "),l.a.createElement("td",null,r.industry.name)),l.a.createElement("tr",null,l.a.createElement("th",null,"Description: "),l.a.createElement("td",null,r.description)),l.a.createElement("tr",null,l.a.createElement("th",null,"Technologies: "),l.a.createElement("td",null,r.technologies.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.slug},l.a.createElement(s.b,{to:"/"},e.name),l.a.createElement("br",null))}))))))),r.consultants.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Consultants"),l.a.createElement(m.Row,null,r.consultants.map((function(e){return l.a.createElement(x,{key:e.slug,consultant:e})}))))):l.a.createElement(b,null))};var S=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(m.Card,null,l.a.createElement("div",{className:"section white"},l.a.createElement("a",{href:"https://www.alten.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{alt:"Alten Sweden",src:"https://api.altentechnology.dk/static/base/gfx/alten.sweden.jpg",width:"100%"})),l.a.createElement("p",{className:"grey-text text-darken-3 lighten-3"},"ALTEN Group supports the development strategy of its customers in the fields of innovation, R&D and technological information systems. Created 30 years ago in France, the Group has become a world leader in Engineering and Technology consulting. 34.000 highly qualified engineers carry out studies and conception projects for the Technical and Information Systems Divisions of major customers in the industrial and service sectors. ALTEN DANMARK A/S works within ",l.a.createElement("b",null,"Energy"),", ",l.a.createElement("b",null,"Life Science"),", ",l.a.createElement("b",null,"Banking"),", ",l.a.createElement("b",null,"Insurance")," and ",l.a.createElement("b",null,"Robot Industries."))),l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12,m:6},l.a.createElement(m.Table,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Website:")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.alten.com/",target:"_blank",rel:"noopener noreferrer"}," ALTEN.com "))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Social media:")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.linkedin.com/company/alten-danmark/about/",target:"_blank",rel:"noopener noreferrer"}," LinkedIn "))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Address:")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://goo.gl/maps/AFAW4SZ9QsACbZF97",target:"_blank",rel:"noopener noreferrer"},"Christians Brygge 28",l.a.createElement("br",null)," 1559 Copenhagen ",l.a.createElement("br",null)," Denmark ")))))))),l.a.createElement("div",null,l.a.createElement("h3",null,"Business Managers")),l.a.createElement(m.Card,null,l.a.createElement("div",{className:"section white"},l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12,m:4},l.a.createElement("img",{className:"circle responsive-img",src:"https://api.altentechnology.dk/static/base/gfx/katrine.png",alt:"Katrine Villumsen"})),l.a.createElement(m.Col,{s:12,m:6},l.a.createElement("h5",null,"Katrine Villumsen"),l.a.createElement(m.Table,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Social media:")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/katrine-villumsen/",target:"_blank",rel:"noopener noreferrer"}," LinkedIn "))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Phone number:")),l.a.createElement("td",null,l.a.createElement("a",{href:"tel:+4541423030"},"+4541423030"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Email:")),l.a.createElement("td",null,l.a.createElement("a",{href:"mailto:katrine.villumsen@alten.dk"},"katrine.villumsen@alten.dk"))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12,m:4},l.a.createElement("img",{className:"circle responsive-img",src:"https://api.altentechnology.dk/static/base/gfx/nikolaj.png",alt:"Nikolaj Enevoldsen"})),l.a.createElement(m.Col,{s:12,m:6},l.a.createElement("h5",null,"Nikolaj Enevoldsen"),l.a.createElement(m.Table,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Social media:")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/nikolajenevoldsen2018/",target:"_blank",rel:"noopener noreferrer"}," LinkedIn "))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Phone number:")),l.a.createElement("td",null,l.a.createElement("a",{href:"tel:+4525529498"},"+4525529498"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Email:")),l.a.createElement("td",null,l.a.createElement("a",{href:"mailto:nikolaj.enevoldsen@alten.dk"},"nikolaj.enevoldsen@alten.dk"))))))))),l.a.createElement("div",null,l.a.createElement("h3",null,"Human Ressources")),l.a.createElement(m.Card,null,l.a.createElement("div",{className:"section white"},l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12,m:4},l.a.createElement("img",{className:"circle responsive-img",src:"https://api.altentechnology.dk/static/base/gfx/katja.jpg",alt:"Katja Linnea Serritzle"})),l.a.createElement(m.Col,{s:12,m:6},l.a.createElement("h5",null,"Katja Linnea Serritzlew"),l.a.createElement(m.Table,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Social media:")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/katja-linnea-serritzlew/",target:"_blank",rel:"noopener noreferrer"}," LinkedIn "))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Phone number:")),l.a.createElement("td",null,l.a.createElement("a",{href:"tel:+4541300003"},"+4541300003"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Email:")),l.a.createElement("td",null,l.a.createElement("a",{href:"mailto:katja.serritzlew@alten.dk"},"katja.serritzlew@alten.dk"))))))))),l.a.createElement("div",null))};var T=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/technologies/");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Technologies & Tools"),l.a.createElement("ul",{className:"list"},l.a.createElement("div",{className:"collection"},a.map((function(e){return l.a.createElement("li",{className:"list-item",key:e.slug},l.a.createElement("div",{className:"card"},l.a.createElement(s.b,{className:"collection-item",to:"/technologies/".concat(e.slug)},e.name)))})))))};var L=function(){var e=Object(o.f)().technologySlug,t=Object(n.useState)(null),a=Object(g.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(E.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/technologies/".concat(e,"/"));case 2:a=t.sent,c(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),l.a.createElement("div",{className:"container"},r?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,r.name),l.a.createElement(m.Card,null,r.description),r.consultants.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Consultants"),l.a.createElement(m.Row,null,r.consultants.map((function(e){return l.a.createElement(x,{key:e.slug,consultant:e})})))),l.a.createElement(j,{projects:r.projects})):l.a.createElement(b,null))};a(115);var A=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/services/");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Services"),l.a.createElement("ul",{className:"list"},a.map((function(e){return l.a.createElement("li",{className:"list-item",key:e.slug},l.a.createElement(m.Card,{header:l.a.createElement(s.b,{to:"/services/".concat(e.slug)},l.a.createElement(m.CardTitle,{image:e.image.medium}))},l.a.createElement(s.b,{to:"/services/".concat(e.slug)},e.name)))}))))};var I=function(e){var t=e.technologies;return l.a.createElement(l.a.Fragment,null,t.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"center-align"},l.a.createElement(m.Icon,null,"star")),l.a.createElement(m.Card,{className:"card-main"},l.a.createElement("h2",{className:"center-align"},"Technologies & Tools"),l.a.createElement(y,{technologies:t}))))};var R=function(){var e=Object(o.f)().serviceSlug,t=Object(n.useState)(null),a=Object(g.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(E.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/services/".concat(e,"/"));case 2:a=t.sent,c(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),l.a.createElement("div",{className:"container"},r?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Card,null,l.a.createElement("h1",null,r.name)),l.a.createElement(j,{projects:r.projects}),l.a.createElement(I,{technologies:r.technologies})):l.a.createElement(b,null))};var _=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(m.Navbar,{fixed:!0,alignLinks:"right",centerChildren:!0,brand:l.a.createElement(s.c,{to:"/"},"ALTEN Denmark"),id:"mobile-nav",menuIcon:l.a.createElement(m.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,outDuration:200,preventScrolling:!0}},l.a.createElement(s.c,{to:"/consultants"},"CONSULTANTS"),l.a.createElement(s.c,{to:"/services"},"SERVICES"),l.a.createElement(s.c,{to:"/about"},"ABOUT"),l.a.createElement(m.Dropdown,{id:"Dropdown_6",options:{constrainWidth:!1,coverTrigger:!1,hover:!0,inDuration:150,outDuration:250},trigger:l.a.createElement("a",{href:"#!"},l.a.createElement(m.Icon,null,"phone"))},l.a.createElement("a",{href:"tel:004541423030"},"+45 4142 3030"),l.a.createElement("a",{href:"tel:004541423030"},"Click to call!")),l.a.createElement(m.NavItem,{href:"mailto:tech@alten.dk"},l.a.createElement(m.Icon,null,"email")))),l.a.createElement("main",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(k,null)),l.a.createElement(o.a,{exact:!0,path:"/consultants"},l.a.createElement(N,null)),l.a.createElement(o.a,{path:"/consultants/tags/:tagSlug"},l.a.createElement(N,null)),l.a.createElement(o.a,{path:"/consultants/:consultantSlug"},l.a.createElement(C,null)),l.a.createElement(o.a,{exact:!0,path:"/projects"},l.a.createElement(w,null)),l.a.createElement(o.a,{path:"/projects/:projectSlug"},l.a.createElement(O,null)),l.a.createElement(o.a,{exact:!0,path:"/technologies"},l.a.createElement(T,null)),l.a.createElement(o.a,{path:"/technologies/:technologySlug"},l.a.createElement(L,null)),l.a.createElement(o.a,{exact:!0,path:"/services"},l.a.createElement(A,null)),l.a.createElement(o.a,{path:"/services/:serviceSlug"},l.a.createElement(R,null)),l.a.createElement(o.a,{path:"/about"},l.a.createElement(S,null)),l.a.createElement(o.a,{path:"*"},l.a.createElement("div",null,"Whoops. Something went wrong! :(")))),l.a.createElement("footer",{className:"page-footer black"},l.a.createElement("div",{className:"container"},l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:12,l:5},l.a.createElement("h5",null,"ALTEN Denmark ApS"),l.a.createElement("address",null,"C/o Work Share Grow",l.a.createElement("br",null),"Christians Brygge 28, 1.",l.a.createElement("br",null),"1559 K\xf8benhavn V"),l.a.createElement("a",{href:"tel:004541423030"},"+45 41 42 30 30"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:tech@alten.dk"},"tech@alten.dk")),l.a.createElement(m.Col,{s:12,l:4},l.a.createElement("h5",null,"Links"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://alten.com"},"Web"),l.a.createElement("br",null),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dk.linkedin.com/company/alten-danmark"},"LinkedIn")),l.a.createElement(m.Col,{s:12,l:3},l.a.createElement("h5",null,"Pages"),l.a.createElement(s.b,{to:"/consultants"},"CONSULTANTS"),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/services"},"SERVICES"),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/about"},"ABOUT")))),l.a.createElement("div",{className:"center-align"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://alten.com"},l.a.createElement("img",{className:"responsive-img",alt:"ALTEN Logo",src:"https://api.altentechnology.dk/static/base/logo/alten.png"}))),l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container center-align"},"\xa9 2020 ALTEN Denmark")))))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()},44:function(e,t,a){e.exports=a(116)}},[[44,1,2]]]);
//# sourceMappingURL=main.96acf903.chunk.js.map