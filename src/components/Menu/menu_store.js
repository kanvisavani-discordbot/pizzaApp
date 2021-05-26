import {bevragesData, dipsData, menuData, toppingsData} from "../Data/Data";

const {makeAutoObservable} = require("mobx");

class MenuStore {
    constructor() {
        makeAutoObservable(this)
    }

    pizzaToppings=[]
    pizzaTitle=''
    pizzaSize=''
    pizzaDips = []
    pizzaCocks=[]
    pizzaPrice=0
    pizzaTax=0
    pizzaDeliveryCharge=0
    pizzaTotalPrice=0

    pizzaDipsCreate(){
        dipsData.map(item=>this.pizzaDips[item.id]=0)
    }

    pizzaToppingsCreate(){
        toppingsData.map(item=>this.pizzaToppings[item.id]=0)
    }

    pizzaCocksCreate(){
        bevragesData.map(item=>this.pizzaCocks[item.id]=0)
    }

    pizzaPriceCalculation(){
        this.pizzaTax= this.pizzaPrice*10/100;
        this.pizzaDeliveryCharge = this.pizzaPrice*5/100;
        this.pizzaTotalPrice=this.pizzaPrice+this.pizzaTax+this.pizzaDeliveryCharge;
    }

    pizzaItemInitialize(){
        this.pizzaToppings=[]
        this.pizzaTitle=''
        this.pizzaSize=''
        this.pizzaDips = []
        this.pizzaCocks=[]
        this.pizzaPrice=0
        this.pizzaTax=0
        this.pizzaDeliveryCharge=0
        this.pizzaTotalPrice=0
        this.pizzaToppingsCreate();
        this.pizzaCocksCreate();
        this.pizzaDipsCreate();
    }
}

export const menu_store = window.menu_store = new MenuStore()
