import Http from '@/utils/request'
import Base from './base'

export default class GoodsList extends Base {
  static getGoods = obj => Http.get(`${this.baseURL}/goods/search`, obj)
  static goodsDetail = param => Http.request(`${this.baseURL}/goods/detail?goods_id=${param}`)
}
