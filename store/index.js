import {generatePostsData} from '@/utils/tools';
let {postsDetail} = generatePostsData();

export const state = () => ({
    postsDetail,
    activePostsList: postsDetail
});

export const mutations = {
    searchArticle(state, {title}) {
        state.activePostsList = state.postsDetail.filter(item => {
            return item.title === title;
        });
    }
}

export const action = {

};