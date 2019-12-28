import Http from '@/utils/request'
import Base from './base'

export default class Search extends Base {
  static getQsearch = (query) => Http.request(`${this.baseURL}/goods/qsearch?query=${query}`)
}
