import { productType } from './../types/Product';

import { createStore } from 'vuex'
interface Cart{
    id:string,
    price:number
}
export default createStore({
    state(){
        return {
            cart: [] as productType[],
            totalPrice: 0 as number,
            totalItems: 0 as number
        }
    },
    mutations : {
        addToCart(state:any, product:Cart) {
            const item = state.cart.find((item:productType) => item.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            state.totalItems++;
            state.totalPrice += product.price ;
        },
        removeFromCart(state : any, product : Cart) {
            const itemIndex = state.cart.findIndex((item:productType) => item.id === product.id);
            if (itemIndex !== -1) {
                const item = state.cart[itemIndex];
                state.totalItems -= item.quantity;
                state.totalPrice -= Math.floor(item.price * item.quantity);
                state.cart.splice(itemIndex, 1);
            }
        },
        increaseQuantity(state : any,product : Cart){
            const item = state.cart.find((item:productType) => item.id === product.id);
            if (item) {
                item.quantity++;
                state.totalItems++;
                state.totalPrice += product.price ;
            }  
        },
        decreaseQuantity(state : any,product:Cart){
            const item = state.cart.find((item:productType) => item.id ===product.id);
            if (item && item.quantity>0) {
                item.quantity--;
                 state.totalItems--;
                 state.totalPrice -= product.price;
            }   
          
        },
        
        clearCart(state : any) {
            state.cart = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        }
    }
})