import Http from '@/utils/request'
import Base from './base'

// 继承Base的所有属性
export default class HomeReq extends Base {
  static getSwiper = () => Http.request(`${this.baseURL}/home/swiperdata`)
  static getCate = () => Http.request(`${this.baseURL}/home/catitems`)
  static getFloor = () => Http.request(`${this.baseURL}/home/floordata`)
}
