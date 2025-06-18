export interface productType {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    brand: string;
    discountPercentage : number;
    rating: number;
    stock: number;
    weight: number;
    warrantyInformation : string;
    shippingInformation : string;
    availabilityStatus : boolean;
    reviews : object[];
    minimumOrderQuantity : number;
    returnPolicy: string;
    images?: string[]; 
}