//index.js
import { parse } from '../../utils/parsing'

Page({
  data: {
    display: '0',
    start: true,
  },
  bindEqualTap(e) {
    console.log(e)
    this.setData({
      display: String(parse(this.data.display)),
      start: true
    })
  },
  tapNum(e) {
    let num = e.currentTarget.dataset.num
    if (this.data.start) {
      this.setData({
        start: false,
        display: num
      })
    } else {
      this.setData({ 
        display: this.data.display + e.currentTarget.dataset.num
      })
    }
  },
  tapCE(e) {
    console.log(parse('2/1'))
    this.setData({
      start: true,
      display: '0'
    })
  }
})
