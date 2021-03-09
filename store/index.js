import {generatePostsData} from '@/utils/tools';
let {postsData, postsDetail} = generatePostsData();

export const state = () => ({
    postsData,
    postsDetail,
    activePostsList: postsData
});

export const mutations = {
    searchArticle(state, {title}) {
        state.activePostsList = state.activePostsList.filter(item => {
            return item.id === title;
        });
    }
}

export const action = {

};