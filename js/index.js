/**
 * Created by Administrator on 2016/11/19.
 */
/*转换产品*/
$(document).ready(function () {
  function transformProduct(data) {
    var product = new Product()
    product.name = data.name;
    product.brand = data.brand;
    product.huohao = data.huohao;
    product.marketPrice = data.price;
    product.youhuiPrice = parseInt(data.youhuijia);
    product.buySum = data.sum;
    product.jifen = data.jifen;
    product.pepnum = data.pepnum;
    product.image = data.image;
    return product
  }

  /*转换产品列表*/
  function transformProducts(data) {
    var products = []
    for (var i = 0; i < data.length; i++) {
      var product = transformProduct(data[i])
      products.push(product)
    }
    return products
  }

  /*转换购物车*/
  function transformCart(data) {
    var cart = new Cart()
    cart.sum = data.sum;
    cart.allPrice = parseInt(data.allprice);
    cart.products = transformProducts(data.products)
    return cart;
  }

  var cart;
  var product;
//页面的业务逻辑

  $my.myAjax({
    url: '/MM/json/data.json',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var json = JSON.parse(data);
      product = transformProduct(json.product);
      cart = transformCart(json.cart);
      /*使用对象中的方法属性*/
      product.bindDOMDetail();
      product.bindDOMImage();
      cart.bindBasic();
      cart.bindList();

      /*绑定事件*/
      $('.buy_btn').on('click', function () {
        /*购物车新增一个产品*/
        cart.products.push(product);
        ///*更新购物车 - 重新绑定购物车*/
        cart.bindBasic();
        cart.bindList();
      });
      $('.list_close').on('click',function () {

        cart.products.pop(product);
        cart.bindBasic();
        cart.bindList();
      });
    }
  });
});
