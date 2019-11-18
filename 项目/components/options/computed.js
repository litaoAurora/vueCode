//获取用户数据
const data = {
    get(){
        return this.$store.state.data || [];
    }
}

//获取用户选择的数据
const options = {
    get(){
        return this.$store.state.options;
    }
}

//根据用户数据显示当页内容
const content = {
    get(){
        //当前路由哈希值
        let hash = this.hash;
        //根据用户数据筛选出另一个数组
        return this.data.map((item)=>{
            return (
                (hash == 'owner') ? (item[hash].avatar_url) : item[hash]
                || '这个家伙很懒,什么都没写'
            )
        })
    }
}

//获取当前hash值
const hash = {
    get(){
        return this.$route.params.hash
    }
}

//下一步按钮的变化值
const btnValue = {
    get(){
        return  this.hash == 'info' ? '完成' : '下一步'
    }
}

export {data,options,content,hash,btnValue}