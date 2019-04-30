import { param2Obj } from '@/utils'

const userMap={
  admin:{
    roles:['admin'],
    token:'admin',
    avatar:'',
    name:'管理员'
  },
  likuifeng:{
    roles:['likuifeng'],
    token:'likuifeng',
    avatar:'',
    name:'李魁峰'
  },
//   jingjike:{
//     roles:['jingjike'],
//     token:'jingjike',
//     avatar:'',
//     name:'经济科'
//   },
//   yuanban:{
//     roles:['yuanban'],
//     token:'yuanban',
//     avatar:'',
//     name:'院办'
//   }
}

export default {
  loginbyusername: config => {
    const { password,username  } = JSON.parse(config.body)
    if(userMap[username]==undefined){
      return 102
    }
    if(password==123456){
      return userMap[username]
    }else{
      return 101
    }
  },
  getuserinfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}