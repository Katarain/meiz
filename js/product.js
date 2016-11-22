/**
 * Created by Administrator on 2016/11/19.
 */
function Product(){
  /*产品名称*/
  this.name='';
  /*品牌*/
  this.brand='';
  /*货号*/
  this.huohao='';
  /*积分*/
  this.jifen=0;
  /*浏览人数*/
  this.pepnum=0;
  /*市场价格*/
  this.marketPrice=0;
  /*优惠价格*/
  this.youhuiPrice=0;
  /*已出售*/
  this.buySum=0;
  /*放大镜*/
  this.image='';
}
Product.prototype={
  /*普通购买*/
  buy:function(){},
  /*绑定图片列表*/
  bindDOMImage:function(){
    $('#small_img,#big_img').attr('src',this.image);
  },
  /*绑定详细信息*/
  bindDOMDetail:function(){
    /*绑定元素*/
    var str = '';
    str += '<div class="p_title"><h1>'+this.name+'</h1></div>';
    str += '  <div class="p_summary">';
    str += '  <p>品 牌：'+this.brand+'&nbsp;&nbsp;&nbsp;&nbsp;货号： '+this.huohao+' </p>';
    str += '<p class="market_price">市场价：<del> ¥'+this.marketPrice+' </del></p>';
    str += '<p class="yh_price">优惠价：<span>¥'+this.youhuiPrice+' </span> </p>';
    str += '<p>所得积分：'+this.jifen+'</p>';
    str += '<p class="saled">已售出：<span>'+this.buySum+'</span>件 &nbsp;&nbsp;&nbsp;&nbsp; 浏览人数：<span>'+this.pepnum+'</span></p>';
    str += '</div>';
    $('.product_js').html(str)
  },
  /*绑定事件*/
  bindEvents:function(){}
};