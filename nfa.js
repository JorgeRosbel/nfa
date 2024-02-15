"use strict";
(()=>{
    let launch = {_name : "nfa", _version: "1.0.0"},
    W = window,
    nfa_traits = [],
    nfa_finished = !1,
    params = new URLSearchParams(W.location.search),
    root = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    iteration = parseInt(params.get('iteration') )|| 0,
    hash  = params.get('nfa') || `nfa${Array.from({ length: 36}, () => root[Math.random() * root.length | 0]).join("")}`,
    _hash = hash.slice(3),
    minter = params.get('minter') || Array.from({ length: 44}, () => root[Math.random() * root.length | 0]).join(""),
    getWalletAddress = () => (W.solana && W.solana.publicKey) ? W.solana.publicKey.toString() : null,
    bdc58 = str => str.split('').reduce((r,c) => r * 58 + root.indexOf(c), 0),
    minterHash = minter.split('').reduce((h,_,i)=> {if(i % 11 === 0){h.push(minter.slice(i,i+11))};return h},[]).map(v => bdc58(v)),
    hashsArr = _hash.split('').reduce((h,_,i)=> {if(i % 9 === 0){h.push(_hash.slice(i,i+9))};return h},[]).map(v => bdc58(v)),
    sfc32 =(a, b, c, d) =>{
        return function() {
            a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
            var t = (a + b) | 0;
            a = b ^ b >>> 9;
            b = c + (c << 3) | 0;
            c = (c << 21 | c >>> 11);
            d = d + 1 | 0;
            t = t + d | 0;
            c = c + t | 0;
            return (t >>> 0) / 4294967296;
        }
    },
    rand = sfc32(...hashsArr),
    reset = () =>  W.$nfa.rand = sfc32(...hashsArr),
    randMinter = sfc32(...minterHash),
    resetMinter = () => W.$nfa.randMinter =  sfc32(...minterHash),
    finish = (traitArray) =>{
        if(Array.isArray(traitArray)){
          traitArray.forEach(v => {
            if(typeof(v) !== "object"){
              console.error('No object')
              return;
            }else{
              if(
                Object.keys(v)[0] === 'trait_type' && Object.keys(v)[1] === 'value'
                && typeof(v.trait_type) === 'string' && typeof(v.value) === 'string'
                ){

              }else{
                console.error('bad keys')
                
                return;
              }
            }
          })
          console.log('nfa_Traits_Set');
          nfa_traits = traitArray
        }else{
          console.error('No Array')
          return
        }

        nfa_finished = !0;

        console.log(nfa_finished,nfa_traits)
      }

    W.$nfa = {launch,hash,minter,iteration,rand,reset,finish,randMinter,resetMinter,getWalletAddress}
})()