# How to Share a Secret

From Adi Shamir's [How to Share a Secret](http://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf),
referenced from his paper and 
[the Wikipedia entry](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing), using finite field arithmetic.

## Usage Guide
1. No `npm install` necessary! All in native JS! 
2. Modify test.js values `S`, `N`, and `P` (if you dare) with desired values.
3. Run `node test.js`, and it will reconstruct your secret!
4. Most importantly: have fun. I sure did! 

## Limitations
1. `N` (or `K`, for that matter) has a very specific and unspecified value. Anything above will be insufficient to return the secret.