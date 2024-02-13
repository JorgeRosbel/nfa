# Improved nfa.js file

A contribution to the New Frontier Art project (original creators)

## Description

This project aims to streamline and enhance the interaction between artists and the NFA "module," ensuring scalability for future advancements. By providing a user-friendly interface and robust functionalities, our goal is to empower artists in the generative art community, fostering creativity and innovation.

## Installation

1. Add the nfa.js file to your project directory in the header tag

```html
<script src="./nfa.js"></script>
```

## Uso

1. The nfa module will be available globally.Which means that directly from the console you can access. 
You can access it through:
```javascript
$nfa
```

2. -This function does not receive input parameters, it generates a number between 0 and 1.Using the SFC32 algorithm
```javascript
$nfa.rand()
```

3. -Get the hash of my current iteration.
```javascript
$nfa.hash
```

4. -Reset the $nfa.rand() function to generate the same sequence of values again
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

5. -This function has no change:

```javascript

//example
let traitArray = [
  { trait_type: "Theme", value: 'Dark'},
  { trait_type: "Rows",  value: '10'}
]

$nfa.finish(traitArray)
```

6. --General example
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

## License

MIT License

## Version

v: 1.0.0

## Contact

@rosbeldev
