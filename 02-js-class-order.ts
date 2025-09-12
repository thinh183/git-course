

class Order{
    orderId:number;
    customerName:string;
    items:{name:string;price:number;amount:number,discount:number}[]
    totalAmount:number;
    orderdiscount:number;
    constructor(orderId:number, customerName:string,items:string,totalAmount:number, orderdiscount:number){
        this.orderId=orderId;
        this.customerName=customerName;
        this.items=[]
        this.totalAmount=0;
        this.orderdiscount= orderdiscount
    
    }
    //tạo phương thức addItem để thêm sản phẩm vào đơn hàng
   addItem(Product:{name:string;price:number;amount:number,discount:number}){
    this.items.push(Product)
   }
   //tổng số tiền đơn hàng
   calculateTotal(){
    let pricepay=0;
    for (let item of this.items){
        pricepay+= item.price*item.amount
    }
    this.totalAmount=pricepay*(1-this.orderdiscount/100)
    return this.totalAmount
   }
   
}
