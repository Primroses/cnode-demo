import fetch from './fetch'

// 获取topics文章
export const topicList = (data) => {
    return fetch("GET", "topics?limit=50&page=1",{},'fetch');
}

