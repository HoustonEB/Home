export const generatePostsData = function () {
    let ctx = require.context('@/assets/posts', true, /\.md$/)
    let fileNames = ctx.keys().map((item) => {
        return item.match(/\.\/(.*)\.md/)[1]
    })
    let postsDetail = [];
    let postsData = fileNames.map((item) => {
        let mdContent = require(`@/assets/posts/${item}.md`);
        let data = { id: item };

        mdContent = mdContent.replace(/^<hr(.*?)hr>/gis, function (match, p1) {
            p1.replace(/>(\w*): (.*?)</gis, function (mah, i1, i2) {
                data[i1] = i2
                if (['categories', 'tags'].includes(i1)) {
                    data[i1] = i2.split(' ')
                }
            })
            return '';
        }); // 修饰符s使.可以匹配\n换行符
        postsDetail.push({
           ...data,
           content: mdContent
        });
        return data
    })
    postsDetail.sort((x, y) => {
        let xTime = new Date(x.date).getTime();
        let yTime = new Date(y.date).getTime();
        if(xTime > yTime) {
            return -1;
        } else if(xTime < yTime) {
            return 1;
        } else {
            return 0;
        }
    })
    return {
        // postsData,
        postsDetail
    };
}