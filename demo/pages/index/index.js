const v = require('../../utils/verifiction');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 提交表单
  formSubmit:function(e){
    let data = e.detail.value
    let result = v.required(data)
    if(!result){
    	 wx.showModal({
        title: '提示',
        content: '请完善表单',
        showCancel: false,
        
      })
    }
    if (v.isNull(data.name)){
      wx.showModal({
        title: '提示',
        content: '请填写名称',
        showCancel: false,
        
      })
    }
    if (!v.isPhone(data.phone)) {
        wx.showModal({
        title: '提示',
        content: '请填写合理的手机号',
        showCancel: false,
        
      })
    }
    if(!v.isEmail(data.email)){
    	wx.showModal({
        title: '提示',
        content: '请填写合理的邮箱号',
        showCancel: false,
        
      })
    }
  }
})