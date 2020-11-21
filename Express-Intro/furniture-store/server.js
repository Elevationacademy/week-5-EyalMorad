const express = require('express')
const app = express()
const path = require('path')

//Serving files (dist)
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]





app.get('/',function(req,res){
    res.send("Server is up and running smoothly")
})


//ROUTE
// return the price of the item that was asked for
app.get('/priceCheck/:name',function(req,res){
    const name = req.params.name
    let oPrice= {price:null}
    for(let obj of store){   //search for the same name in the store object
        if(obj.name===name){
            oPrice = {price:obj.price}
        }

    }
    res.send(oPrice)
})

//ROUTE
//reduce the count of the furniture
app.get('/buy/:name',function(req,res){
    const name = req.params.name
    //let oInventory = 
    for(let obj of store){
        if(obj.name===name){
            obj.inventory-=1
            res.send(`Congratulations, you've just bought ${obj.name} for ${obj.price}. There are ${obj.inventory} left now in the store!!`)
        }
    }
    res.end()
})



//ROUTE WITH OPTIONAL PARAMETERS
//
app.get('/sale',(req,res)=>{
    let params = req.query
    if(params.admin){
        //reduce the price of only the items with an inventory greater than 10 by 50%
        for(let obj of store){
            if(obj.inventory>10){
                obj.price=obj.price*0.5
            }
        }
    }

    res.send(store)

})






const port = 3000
app.listen(port,function(){
    console.log(`server is running on port ${port}`) 
})






