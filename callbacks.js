console.log("hello i am doing web development")

setTimeout(() => {
    console.log("i ma settimeout 1")
}, 2000);

setTimeout(() => {
    console.log("i ma settimeout 2")
}, 2000);

console.log("Async of javascript")


const fn = () =>{
    console.log("fn fuction is here")
}

const callback = (arg,fn) =>{
    console.log(arg);
    fn()


}

const loadScript = (src, callback) =>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("HAMMAD",fn);
    document.head.append(sc);

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

