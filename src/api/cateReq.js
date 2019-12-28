import Http from '@/utils/request'
import Base from './base'

export default class Cate extends Base {
  static getCate = () => Http.request(`${this.baseURL}/categories`)
}
