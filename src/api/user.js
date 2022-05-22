/*
 * @Author: your name
 * @Date: 2021-09-06 18:06:41
 * @LastEditTime: 2021-09-07 13:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\api\user.js
 */
// import request from "./../utils/request"
import axios from 'axios'
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/app/'
})

export const logins = (data) => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        data
    })

}
export const sendSms = (data) => {
    return request({
        method: 'GET',
        url: `/v1_0/sms/codes/${data}`,

    })

}
export const getUserData = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user'

    })
}
// 获取用户的频道
export const UserPingd = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user/channels'

    })
}
// 获取用户频道列表
export const UserChannleList = (params) => {
    // console.log(params)
    return request({
        method: 'GET',
        url: `/v1_1/articles`,
        params
    })
}
//获取全部频道
export const allChannleList = () => {
    return request({
        method: 'GET',
        url: '/v1_0/channels'

    })
}
// 修改用户频道的接口
export const upChannle = (data) => {
    return request({
        method: 'PATCH',
        url: '/v1_0/user/channels',
        data
    })
}
// 删除用户指定频道
export const deleteChannle = (data) => {
    return request({
        method: 'DELETE',
        url: `/v1_0/user/channels/${data}`
    })
}
// 搜索联想建议的接口
export const searchLevent = (q) => {
    return request({
        method: 'GET',
        url: '/v1_0/suggestion',
        params: {
            q
        }
    })
}
// 搜索结果的接口
export const searchResults = (params) => {
    return request({
        method: 'GET',
        url: '/v1_0/search',
        params

    })
}
// 获得搜索历史的接口
export const Searchhistory = () => {
    return request({
        method: 'GET',
        url: '/v1_0/search/histories'

    })
}
// 关注文章的接口
export const focuson = (userID) => {
    // console.log(userID)
    return request({
        method: "POST",
        url: '/v1_0/user/followings',
        data: {
            target: userID
        }

    })
}

// 取消关注文章的接口
export const Cancelattention = (userID) => {
    return request({
        method: 'DELETE',
        url: `/v1_0/user/followings/${userID}`
    })
}
// 对文章进行收藏的接口
export const xxshouc = (userID) => {
    return request({
        url: '/v1_0/article/collections',
        method: 'POST',
        data: {
            target: userID
        }
    })

}
// 对文章取消收藏的接口
export const quxiao = (userID) => {
    // console.log(userID)
    return request({
        url: `/v1_0/article/collections/${userID}`,
        method: 'DELETE'
    })
}
// 文章点赞
export const dianz = (userID) => {
    // console.log(userID)
    return request({
        url: '/v1_0/article/likings',
        method: 'POST',
        data: {
            target: userID
        }
    })
}
// 文章取消点赞
export const quxidianz = (userId) => {
    return request({
        url: `/v1_0/article/likings/${userId}`,
        method: 'DELETE'
    })

}
// 获取用户个人信息
export const getUserDatess = () => {
    return request({
        url: '/v1_0/user/profile',
        method: "get"
    })
}
// 更新用户资料
export const upUserDate = (data) => {
    return request({
        url: '/v1_0/user/profile',
        method: 'PATCH',
        data
    })
}