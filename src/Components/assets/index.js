import fs from 'fs';
import { products } from './products.js';
let copy=products;
const myfunc=(copy)=>{
    copy=products.map((element,index)=>{
        if(element.name.includes('BassHeads')){
            element.category="accessories";
            return element
        }
    })
}
myfunc()

fs.writeFile('./newproducts.js',JSON.stringify(copy),(err)=>{
    console.log(err);
})




