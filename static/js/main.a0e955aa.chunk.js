(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,a){t.exports={description:"ProfileDescription_description__1CYMl",avatar:"ProfileDescription_avatar__1J6U8",name:"ProfileDescription_name__2fAlG",tag:"ProfileDescription_tag__1k2IY",location:"ProfileDescription_location__3rEe8"}},function(t,e,a){t.exports={item:"FriendListItem_item__3Knrc",isOnline:"FriendListItem_isOnline__7d6kZ",isOffline:"FriendListItem_isOffline__a6lD_",avatar:"FriendListItem_avatar__FS9Ox"}},,function(t,e,a){t.exports={statsItem:"StatsItems_statsItem__K0CcJ",label:"StatsItems_label__2KhP8"}},function(t,e,a){t.exports={item:"StatisticsItem_item__NNIe4",label:"StatisticsItem_label__x5aod",percentage:"StatisticsItem_percentage__3xyqv"}},,function(t,e,a){t.exports={statistics:"Statistics_statistics__a_cz-",title:"Statistics_title__yu3er"}},,function(t,e,a){t.exports={stats:"StatsList_stats__e2J_w"}},function(t,e,a){t.exports={profile:"Profile_profile__1vH_K"}},function(t,e,a){t.exports={statList:"StatisticsList_statList__8LUL4"}},function(t,e,a){t.exports={friendList:"FriendList_friendList__1nnzt"}},function(t){t.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(t){t.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(t,e,a){},,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(4),c=a.n(n),i=a(9),s=a.n(i),r=(a(22),a(23),a.p+"static/media/defaultAvatar.7ffcf71e.png"),o=a(2),d=a.n(o),l=a(0),u=function(t){var e=t.avatar,a=void 0===e?r:e,n=t.username,c=t.tag,i=t.location;return Object(l.jsxs)("div",{className:d.a.description,children:[Object(l.jsx)("img",{src:a,alt:"User avatar",className:d.a.avatar}),Object(l.jsx)("p",{className:d.a.name,children:n}),c&&Object(l.jsxs)("p",{className:d.a.tag,children:["@",c]}),i&&Object(l.jsx)("p",{className:d.a.location,children:i})]})},b=a(5),p=a.n(b),f=function(t){var e=t.label,a=t.quantity,n=void 0===a?0:a;return Object(l.jsxs)("li",{className:p.a.statsItem,children:[Object(l.jsx)("span",{className:p.a.label,children:e}),Object(l.jsx)("span",{className:p.a.quantity,children:n})]})},m=a(10),j=a.n(m),O=function(t){var e=t.stats,a=Object.keys(e);return Object(l.jsx)("ul",{className:j.a.stats,children:a.map((function(t){return Object(l.jsx)(f,{label:t,quantity:e[t]},t)}))})},y=a(11),x=a.n(y),_=function(t){var e=t.avatar,a=t.username,n=t.tag,c=t.location,i=t.stats;return Object(l.jsxs)("div",{className:x.a.profile,children:[Object(l.jsx)(u,{username:a,tag:n,location:c,avatar:e}),i&&Object(l.jsx)(O,{stats:i})]})},v=a(6),h=a.n(v),g=function(t,e){return t+Math.round((e-t)*Math.random())},N=function(t){var e,a,n,c=t.label,i=t.percentage,s=void 0===i?0:i;return Object(l.jsxs)("li",{className:h.a.item,style:{backgroundColor:(e=g,a=150,n=220,"rgb(".concat(e(a,n),", ").concat(e(a,n),", ").concat(e(a,n),")"))},children:[Object(l.jsx)("span",{className:h.a.label,children:c}),Object(l.jsxs)("span",{className:h.a.percentage,children:[Number(s),"%"]})]})},w=a(12),L=a.n(w),S=function(t){var e=t.statistics;return Object(l.jsx)("ul",{className:L.a.statList,children:e.map((function(t){var e=t.id,a=t.label,n=t.percentage;return Object(l.jsx)(N,{label:a,percentage:n},e)}))})},I=a(8),U=a.n(I),J=function(t){var e=t.title,a=t.statistics;return Object(l.jsxs)("section",{className:U.a.statistics,children:[e&&Object(l.jsx)("h2",{className:U.a.title,children:e}),Object(l.jsx)(S,{statistics:a})]})},P=a(1),D=a.n(P),k=a.p+"static/media/defaultAvatar.7ffcf71e.png",q=a(3),M=a.n(q),A=function(t){var e=t.avatar,a=t.name,n=t.isOnline,c=void 0!==n&&n;return Object(l.jsxs)("li",{className:M.a.item,children:[Object(l.jsx)("span",{className:c?M.a.isOnline:M.a.isOffline}),Object(l.jsx)("img",{src:e||k,alt:"User avatar",width:"48",className:M.a.avatar}),Object(l.jsx)("p",{className:M.a.name,children:a})]})};A.propeTypes={avatar:D.a.string,name:D.a.string.isRequired,isOnline:D.a.bool};var C=A,F=a(13),G=a.n(F),K=function(t){var e=t.friends;return Object(l.jsx)("ul",{className:G.a.friendList,children:e.map((function(t){var e=t.id,a=t.avatar,n=t.name,c=t.isOnline;return Object(l.jsx)(C,{avatar:a,name:n,isOnline:c},e)}))})};K.protoTypes={friends:D.a.arrayOf(D.a.shape({id:D.a.number.isRequired}))};var R=K,T=(a(27),function(t){var e=t.title;return Object(l.jsx)("th",{children:e})}),Y=(a(28),function(t){var e=t.type,a=t.amount,n=t.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:n})]})}),H=(a(29),function(t){var e=t.transactions,a=Object.keys(e[0]).filter((function(t){return"id"!==t}));return Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:a.map((function(t){return Object(l.jsx)(T,{title:t},t)}))})}),Object(l.jsx)("tbody",{children:e.map((function(t){var e=t.id,a=t.type,n=t.amount,c=t.currency;return Object(l.jsx)(Y,{type:a,amount:n,currency:c},e)}))})]})}),W={user:a(14),statistics:a(15),friends:a(16),transactions:a(17)},z=W.user,E=W.statistics,X=W.friends,B=W.transactions;function Z(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(_,{username:z.username,tag:z.tag,location:z.location,avatar:z.avatar,stats:z.stats}),Object(l.jsx)(J,{title:"Upload stats",statistics:E})]}),Object(l.jsx)(R,{friends:X}),Object(l.jsx)(H,{transactions:B})]})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.querySelector("#root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.a0e955aa.chunk.js.map