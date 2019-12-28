import Http from '@/utils/request'
import Base from './base'

export default class Login extends Base {
  static login = (param) => Http.request(`${this.baseURL}/users/wxlogin`, 'POST', param)
}
