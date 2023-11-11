const {dataone,datafashion, sportToyBaby, datapremium, sportToyBags, groceriesBeveragesCoffee, groceriesBeveragesTea, women, menData,sportdata, Home, pears, premiumApple }=require ("../dummy/dummy")

const blogController=((req,res)=>{
    res.send(dataone)

})
const fashiondata=((req,res)=>{
    res.send(datafashion)

})

const sportbaby=((req,res)=>{
    res.send(sportToyBaby)

})

const premium=((req,res)=>{
    res.send(datapremium)

})

const sportBags=((req,res)=>{
    res.send(sportToyBags)

})

const BeverageCoffee=((req,res)=>{
    res.send(groceriesBeveragesCoffee)

})


const BeverageTea=((req,res)=>{
    res.send(groceriesBeveragesTea)

})


const womenData=((req,res)=>{
    res.send(women)

})



const men=((req,res)=>{
    res.send(menData)

})


const datadsport=((req,res)=>{
    res.send(sportdata)

})


const HomeData=((req,res)=>{
    res.send(Home)
})

const PearData=((req,res)=>{
    res.send(pears)
})

const AppleData=((req,res)=>{
    res.send(premiumApple)
})







module.exports={blogController,sportBags,premium,sportbaby,fashiondata,BeverageCoffee,BeverageTea,womenData,men,datadsport,HomeData,PearData,AppleData}