
//跳转动态路由
const changeHash = function(){
     //当前动态路由哈希值
     let hash = this.hash;

     //哈希值列表
     let temp = this.$store.state.temp;
     //当前路由在列表中的下标
     let index = temp.findIndex((item)=>{
        return item == hash
     });

     //动态路由跳转,如果已经选择了数据,就可以跳转,否则不进行下一步.
    if(this.options[hash]){
        //如果点击下一步,将当前选择的数据存入共享数据.
        if( hash == 'info'){
            //如果点击完成,将用户选择的数据存储到本地存储.
            localStorage.setItem('userData',JSON.stringify(this.options))
            //跳转到首页.
            this.$router.push({name:'index'})
        }else{
            this.$router.push({name:'options',params:{hash:temp[index+1]}})
        }       
    }
}

//保存用户数据
const saveOptions = function(){
     //当前动态路由哈希值
     let hash = this.hash;

     //把当前的哈希值和选择的数据值和被点击的input的下标存入一个对象.
     this.$store.commit('saveOptions',[hash,this.choosed]);
}

//重设封面时,第一页默认显示上次选择的数据
const beforeRouteEnter = function(to,from,next){ 
    next((vm)=>{
        vm.choosed = vm.options[to.params.hash]
    })
}

//页面跳转时,每页显示上次选择的数据
const beforeRouteUpdate = function(to,from,next){

    //获取目标路由曾经被选中的数据
    let prevChoosed = this.options[to.params.hash];
   
    //将当前选择的数据存入chooseList,方便跳转时设置选中状态
    this.options[from.params.hash] = this.choosed;

    //把目标路由选中的数据设置为组件当前的数据,这样就可以正确设置选中状态.(绑定:checked是不行的)
    this.choosed = prevChoosed;

    //继续跳转
    next();  
}

export {changeHash,saveOptions,beforeRouteEnter,beforeRouteUpdate}