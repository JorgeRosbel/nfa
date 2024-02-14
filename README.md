# Improved nfa.js file

A contribution to the New Frontier Art project (original creators)

## Description

This project aims to streamline and enhance the interaction between artists and the NFA "module," ensuring scalability for future advancements. By providing a user-friendly interface and robust functionalities, our goal is to empower artists in the generative art community, fostering creativity and innovation.

This project is based on the main information being entered into nfa.js through the URL parameters of each work and iteration.

## Installation

1. Add the nfa.js file to your project directory in the header tag

```html
<script src="./nfa.js"></script>
```

## Use

1. The nfa module will be available globally.Which means that directly from the console you can access. 
You can access it through:
```javascript
$nfa
```

2. -This function does not receive input parameters, it generates a number between 0 and 1.Using the SFC32 algorithm.he hash is randomly generated.
```javascript
let v = $nfa.rand() 
```
3. -In this case, the intention is to use the wallet address of the minter as a seed. This allows you to generate totally unique seeds!
```javascript

//call
let a = $nfa.randMinter();

//f you want to restart the generator
let b = $nfa.resetMinter();
```

4. -Get the hash of my current iteration.Having this value you can use the nfs parameters in your url like this: `<https://localhost?nfa=hash>`  // `<https://localhost?minter=minterHash>`. If you wish, you can use both in the same project at the same time: `<https://localhost?nfa=hash&minter=minterHash>`

```javascript

//For $nfa.rand() use case
let hash = $nfa.hash;

//For $nfa.randMinter() use case
let minterHash = $nfa.minter;


```

5. -Reset the $nfa.rand() function to generate the same sequence of values again
```javascript
$nfa.rand() //==output 0.543392
$nfa.rand() //==output 0.983212
$nfa.rand() //==output 0.193043

$nfa.reset()

//Same values
$nfa.rand() //==output 0.543392
$nfa.rand() //==output 0.983212
$nfa.rand() //==output 0.193043

```

6. -This function has no change:

```javascript

//example
let traitArray = [
  { trait_type: "Theme", value: 'Dark'},
  { trait_type: "Rows",  value: '10'}
]

$nfa.finish(traitArray)
```

7. Get iteration. Used to get the # of the current iteration
```javascript

//Example
$nfa.iteration 

//You can combine this value with some rule in your artwork

let colors = [
    ['#d91c2f', "#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
    ['#1c0682', '#114ff2', '#568203', '#7FFF6E', '#724F31', '#966C4B'],
    ['#F20587', '#2E038C', '#F2B705', '#F28705', '#BF3604', '#2E038C'],
    ["#284B59", "#689BA6", "#F27B13", "#8C0303", "#F25252", "#689BA6"],
]

let getColor = color[$nfa.iteration]

```


8. --General example
```javascript
//Example 

function setup(){
    const w = Math.min(window.innerWidth,window.innerHeight);


    //Here we declare the seed for random() and noise()
    const seed = Math.floor($nfa.rand() * 99999);
    randomSeed(seed);
    noiseSeed(seed);


    createCanvas(w, w);
    background(255);

    for(let i = 0; i < 15; i++){
        push()
        fill(random(255))
        circle(random(width*.2,width-width*.2),random(height*.2,height-height*.2), w * random(0.06,0.2))
        pop()
        }
    }


    $nfa.finish([
        {
            "trait_type": "Number",
        "value": "10",
            }
    ])


```

## Conclusions

It was fun writing this code.

Certain points of compatibility with NFA still need to be established, but that is out of my hands. I could only simulate uploading a project and apparently I didn't get any errors.

You can review the code, analyze what you think and I'm here to respond if you wish.


## License

MIT License

## Version

v: 1.0.0

## Contact

@rosbeldev
