/**
 * Created by Administrator on 2016/11/19.
 */
/*定义购物车对象*/
function Cart(){
  this.products=[];
  this.sum=0;
  this.allPrice=0;
  //this.config={
  //  close_btn:$('.list_close'),
  //  message:$('.message')
  //};
}
Cart.prototype={
  bindBasic:function(){
    //绑定
    $('.cartsum').html(this.getSum());
    $('#cartprice').html(this.getAllPrice());
  },
  //绑定产品列表,每次点击到购物车执行的方法
  bindList:function(){
    var str='';
    for(var i= 0,len=this.products.length;i<len;i++) {
      str += '<div class="message">';
      str += '  <div class="list_img"><img src="'+this.products[i].image+'" alt=""></div>';
      str += '  <div class="list_desc">';
      str += '  <p><a href="detail.html">'+this.products[i].name+'</a></p>';
      str += '  <p class="cartsum_price">￥<span> '+this.products[i].youhuiPrice+' </span>元</p>';
      str += '  <i class="list_close"></i>';
      str += '  </div>';
      str += '</div>';
    }
    $('.shopping_cart').html(str);
  },

  /*结算*/
  calcalate:function(){},
  /*获取产品个数*/
  getSum:function(){
    this.sum=this.products.length;
    return this.sum;
  },
  /*获取产品总价*/
  getAllPrice:function(){
    var len = this.products.length;
    this.allPrice = 0;
    for(var i= 0,len=this.products.length;i<len;i++){
      this.allPrice+=this.products[i].youhuiPrice;
    }
    return this.allPrice;
  }

};