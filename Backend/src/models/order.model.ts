import { Schema,Types, model } from "mongoose";
import { Food, FoodSchema } from "./food.model";
import { OrderStatus } from "../constants/order_status";

export interface LatLng{
    lat:string;
    lng:string;

}
export const LatLngSchema=new Schema<LatLng>({
    lat:{required:true,type:String},
    lng:{required:true,type:String}
});
export interface OrderItem{
    food:Food;
    price:number;
    quantity:number;

}
export const OrderItemSchema=new Schema<OrderItem>({
    food:{type:FoodSchema,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
});

export interface Order{
    id:string;
    items:OrderItem[];
    totalPrice:number;
    name:string;
    address:string;
    addressLatLng:LatLng;
    paymentId:string;
    status:OrderStatus;
    user:Types.ObjectId;//this is typescript type
    createdAt:Date;//these are not necessary to implement in schema;simply write timestamp:true;
    updatedAt:Date;
}
const orderSchema=new Schema<Order>({
    name:{type:String,required:true},
    address:{type:String,required:true},
    addressLatLng:{type:LatLngSchema,required:true},
    paymentId:{type:String},
    totalPrice:{type:Number,required:true},
    items:{type:[OrderItemSchema],required:true},
    status:{type:String,default:OrderStatus.NEW},
    user:{type:Schema.Types.ObjectId,required:true},//here is schema type
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});
export const OrderModel=model<Order>('order',orderSchema);