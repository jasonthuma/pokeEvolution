(()=>{"use strict";var e={};function t(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var n=o.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const n=e.p+"img/arrow_down.png",r=e.p+"img/arrow_horiz.png",a=e.p+"img/arrow_left.png",s=e.p+"img/arrow_lg_down.png",i=e.p+"img/arrow_lg_up.png",p=e.p+"img/arrow_right.png";function l(e,t,n,r){$(r).append('<img src="'.concat(t.sprites.front_default,'" alt="').concat(o(t.name),'" width="125px">')),$(r).append('<p class="mb-0">#'.concat(n.id,"</p>")),$(r).append("<h5>".concat(e,"</h5>")),1==t.types.length?$(r).append('<span class="'.concat(t.types[0].type.name,'">').concat(o(t.types[0].type.name),"</span><br>")):($(r).append('<span class="'.concat(t.types[0].type.name,'">').concat(o(t.types[0].type.name),"</span>")),$(r).append('<span class="'.concat(t.types[1].type.name,'">').concat(o(t.types[1].type.name),"</span><br>")))}function c(e,t,n,r,a){"Burmy"==e&&"Plant Cloak"==a?$(r).append('<img src="'.concat(t.sprites.front_default,'" alt="').concat(o(t.name),'" width="125px">')):"Burmy"==e&&"Sandy Cloak"==a?$(r).append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412-sandy.png" alt="'.concat(o(t.name),'" width="125px">')):"Burmy"==e&&"Trash Cloak"==a?$(r).append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412-trash.png" alt="'.concat(o(t.name),'" width="125px">')):$(r).append('<img src="'.concat(t.sprites.front_default,'" alt="').concat(o(t.name),'" width="125px">')),$(r).append('<p class="mb-0">#'.concat(n.id,"</p>")),$(r).append("<h5>".concat(e,"</h5>")),$(r).append('<p class="mb-0">'.concat(a,"</p>")),1==t.types.length?$(r).append('<span class="'.concat(t.types[0].type.name,'">').concat(o(t.types[0].type.name),"</span><br>")):($(r).append('<span class="'.concat(t.types[0].type.name,'">').concat(o(t.types[0].type.name),"</span>")),$(r).append('<span class="'.concat(t.types[1].type.name,'">').concat(o(t.types[1].type.name),"</span><br>")))}function d(e,t){"DOWN"==e?$(t).append('<picture><source media = "(min-width: 575px)" srcset="'.concat(r,'"><img src="').concat(n,'" alt="arrow"></picture>')):"LEFT"==e?$(t).append('<picture><source media = "(min-width: 575px)" srcset="'.concat(i,'"><img src="').concat(a,'" alt="arrow"></picture>')):"RIGHT"==e&&$(t).append('<picture><source media = "(min-width: 575px)" srcset="'.concat(s,'"><img src="').concat(p,'" alt="arrow"></picture>'))}function u(e,t,o,n,r,a,s){try{var i=e[a](s),p=i.value}catch(e){return void o(e)}i.done?t(p):Promise.resolve(p).then(n,r)}function y(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function s(e){u(a,n,r,s,i,"next",e)}function i(e){u(a,n,r,s,i,"throw",e)}s(void 0)}))}}function m(){return(m=y((function*(e){var t,n=".doubleFirstEvo1",r=".doubleFirstEvo2",a=".doubleFirstEvo3",s=".doubleFirstEvo4",i=".doubleSecondEvo1",p=".doubleSecondEvo2",u=".doubleSecondEvo3",y=".doubleSecondEvo4",m=".tripleSecondEvo1",v=".tripleThirdEvo1",h=".triple12",g=".triple23",f="DOWN",$="LEFT",E="RIGHT",_=".double12arrow1",k=".double12arrow2",L=".double12arrow3",S=[[],[],[]],T=[[],[],[]],F=[[],[],[]],x=[];t=(yield w(e.evolution_chain.url)).chain,console.log(t),S[0].push(o(t.species.name)),x.push(S[0]);var P=yield C(t.species.name);if(F[0].push(P),0!=t.evolves_to.length){for(var B=0;B<t.evolves_to.length;B++){S[1].push(o(t.evolves_to[B].species.name));var j=yield C(t.evolves_to[B].species.name);F[1].push(j)}x.push(S[1])}if(2==t.evolves_to.length&&1==t.evolves_to[0].evolves_to.length&&1==t.evolves_to[1].evolves_to.length){S[2].push(o(t.evolves_to[0].evolves_to[0].species.name));var G=yield C(t.evolves_to[0].evolves_to[0].species.name);F[2].push(G),S[2].push(o(t.evolves_to[1].evolves_to[0].species.name));var A=yield C(t.evolves_to[1].evolves_to[0].species.name);F[2].push(A),x.push(S[2])}else if(0!=t.evolves_to.length&&0!=t.evolves_to[0].evolves_to.length){for(var I=0;I<t.evolves_to[0].evolves_to.length;I++){S[2].push(o(t.evolves_to[0].evolves_to[I].species.name));var N=yield C(t.evolves_to[0].evolves_to[I].species.name);F[2].push(N)}x.push(S[2])}1==x.length?(T[0][0]=yield b(x[0][0].toLowerCase()),l(x[0][0],T[0][0],F[0][0],".singleFirstEvo")):2==x.length&&"Burmy"!=x[0][0]?(T[0][0]=yield b(x[0][0].toLowerCase()),l(x[0][0],T[0][0],F[0][0],n),1==x[1].length&&"Kubfu"!=x[0][0]&&"Toxel"!=x[0][0]&&"Rockruff"!=x[0][0]?(T[1][0]=yield b(x[1][0].toLowerCase()),l(x[1][0],T[1][0],F[1][0],i),d(f,_)):1==x[1].length&&"Rockruff"==x[0][0]?(T[1][0]=yield b("lycanroc-midday"),c(x[1][0],T[1][0],F[1][0],i,"Midday Form"),d($,_),T[1][1]=yield b("lycanroc-midnight"),c(x[1][0],T[1][1],F[1][1],p,"Midnight Form"),d(f,k),T[1][2]=yield b("lycanroc-dusk"),c(x[1][0],T[1][2],F[1][1],u,"Dusk Form"),d(E,L)):1==x[1].length&&"Toxel"==x[0][0]?(T[1][0]=yield b("toxtricity-low-key"),c(x[1][0],T[1][0],F[1][0],i,"Low Key Form"),d($,_),T[1][1]=yield b("toxtricity-amped"),c(x[1][0],T[1][1],F[1][1],p,"Amped Form"),d(E,k)):1==x[1].length&&"Kubfu"==x[0][0]?(T[1][0]=yield b("urshifu-rapid-strike"),c(x[1][0],T[1][0],F[1][0],i,"Rapid Strike"),d($,_),T[1][1]=yield b("urshifu-single-strike"),c(x[1][0],T[1][1],F[1][1],p,"Single Strike"),d(E,k)):2==x[1].length&&"Burmy"!=x[0][0]?(T[1][0]=yield b(x[1][0].toLowerCase()),l(x[1][0],T[1][0],F[1][0],i),d($,_),T[1][1]=yield b(x[1][1].toLowerCase()),l(x[1][1],T[1][1],F[1][1],p),d(E,_)):3==x[1].length?(T[1][0]=yield b(x[1][0].toLowerCase()),l(x[1][0],T[1][0],F[1][0],i),d($,_),T[1][1]=yield b(x[1][1].toLowerCase()),l(x[1][1],T[1][1],F[1][1],p),d(f,k),T[1][2]=yield b(x[1][2].toLowerCase()),l(x[1][2],T[1][2],F[1][2],u),d(E,L)):8==x[1].length&&(l(x[0][0],T[0][0],F[0][0],r),l(x[0][0],T[0][0],F[0][0],a),l(x[0][0],T[0][0],F[0][0],s),T[1][0]=yield b(x[1][0].toLowerCase()),l(x[1][0],T[1][0],F[1][0],i),T[1][1]=yield b(x[1][1].toLowerCase()),l(x[1][1],T[1][1],F[1][1],p),T[1][2]=yield b(x[1][2].toLowerCase()),l(x[1][2],T[1][2],F[1][2],u),T[1][3]=yield b(x[1][3].toLowerCase()),l(x[1][3],T[1][3],F[1][3],y),T[1][4]=yield b(x[1][4].toLowerCase()),l(x[1][4],T[1][4],F[1][4],".doubleSecondEvo5"),T[1][5]=yield b(x[1][5].toLowerCase()),l(x[1][5],T[1][5],F[1][5],".doubleSecondEvo6"),T[1][6]=yield b(x[1][6].toLowerCase()),l(x[1][6],T[1][6],F[1][6],".doubleSecondEvo7"),T[1][7]=yield b(x[1][7].toLowerCase()),l(x[1][7],T[1][7],F[1][7],".doubleSecondEvo8"))):3==x.length&&(T[0][0]=yield b(x[0][0].toLowerCase()),l(x[0][0],T[0][0],F[0][0],".tripleFirstEvo"),1==x[1].length?(T[1][0]=yield b(x[1][0].toLowerCase()),l([x[1][0]],T[1][0],F[1][0],m),d(f,h)):2==x[1].length&&(T[1][0]=yield b(x[1][0].toLowerCase()),l(x[1][0],T[1][0],F[1][0],m),d($,h),T[1][1]=yield b(x[1][1].toLowerCase()),l(x[1][1],T[1][1],F[1][1],".tripleSecondEvo2"),d(E,h)),1==x[2].length?(T[2][0]=yield b(x[2][0].toLowerCase()),l(x[2][0],T[2][0],F[2][0],v),d(f,g)):2==x[2].length&&(T[2][0]=yield b(x[2][0].toLowerCase()),l(x[2][0],T[2][0],F[2][0],v),2==x[1].length?d(f,g):d($,g),T[2][1]=yield b(x[2][1].toLowerCase()),l(x[2][1],T[2][1],F[2][1],".tripleThirdEvo2"),2==x[1].length?d(f,g):d(E,g))),"Burmy"==x[0][0]&&(T[0][0]=yield b(x[0][0].toLowerCase()),c(x[0][0],T[0][0],F[0][0],n,"Plant Cloak"),c(x[0][0],T[0][0],F[0][0],r,"Sandy Cloak"),c(x[0][0],T[0][0],F[0][0],a,"Trash Cloak"),c(x[0][0],T[0][0],F[0][0],s,"Plant Cloak"),F[1][3]=F[1][1],F[1][2]=F[1][0],F[1][1]=F[1][0],console.log("species info:",F),T[1][0]=yield b("wormadam-plant"),c(x[1][0],T[1][0],F[1][0],i,"Plant Cloak"),d(f,_),T[1][1]=yield b("wormadam-sandy"),c(x[1][0],T[1][1],F[1][1],p,"Sandy Cloak"),d(f,k),T[1][2]=yield b("wormadam-trash"),c(x[1][0],T[1][2],F[1][2],u,"Trash Cloak"),d(f,L),T[1][3]=yield b(x[1][1].toLowerCase()),l(x[1][1],T[1][3],F[1][3],y),d(f,".double12arrow4"))}))).apply(this,arguments)}function v(e,t,o,n,r,a,s){try{var i=e[a](s),p=i.value}catch(e){return void o(e)}i.done?t(p):Promise.resolve(p).then(n,r)}function h(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function s(e){v(a,n,r,s,i,"next",e)}function i(e){v(a,n,r,s,i,"throw",e)}s(void 0)}))}}function g(e){fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(e),{method:"GET"}).then(t).then((e=>{!function(e){m.apply(this,arguments)}(e)})).catch((()=>{alert("Invalid name, try again")}))}function w(e){return f.apply(this,arguments)}function f(){return(f=h((function*(e){var t=yield fetch(e,{method:"GET"});return yield t.json()}))).apply(this,arguments)}function b(e){return E.apply(this,arguments)}function E(){return(E=h((function*(e){var t=yield fetch("https://pokeapi.co/api/v2/pokemon/".concat(e),{method:"GET"});return yield t.json()}))).apply(this,arguments)}function C(e){return _.apply(this,arguments)}function _(){return(_=h((function*(e){var t=yield fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(e),{method:"GET"});return yield t.json()}))).apply(this,arguments)}$("#searchBtn").click((()=>{var e;e=$("#searchName").val().toLowerCase(),$(".singleFirstEvo").empty(),$(".doubleFirstEvo1").empty(),$(".doubleFirstEvo2").empty(),$(".doubleFirstEvo3").empty(),$(".doubleFirstEvo4").empty(),$(".doubleSecondEvo1").empty(),$(".doubleSecondEvo2").empty(),$(".doubleSecondEvo3").empty(),$(".doubleSecondEvo4").empty(),$(".doubleSecondEvo5").empty(),$(".doubleSecondEvo6").empty(),$(".doubleSecondEvo7").empty(),$(".doubleSecondEvo8").empty(),$(".tripleFirstEvo").empty(),$(".tripleSecondEvo1").empty(),$(".tripleSecondEvo2").empty(),$(".tripleThirdEvo1").empty(),$(".tripleThirdEvo2").empty(),$(".triple12").empty(),$(".triple23").empty(),$(".double12trigger1").empty(),$(".double12trigger2").empty(),$(".double12.trigger3").empty(),$(".double12.trigger4").empty(),$(".double12arrow1").empty(),$(".double12arrow2").empty(),$(".double12arrow3").empty(),$(".double12arrow4").empty(),g(e)})),$("#searchName").keyup((e=>{13===e.keyCode&&$("#searchBtn").click()}))})();