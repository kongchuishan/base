/**
 * Created by Administrator on 2015/7/7.
 */
;(function(){
    var arr=[12,3,43,11,56,90,7,66,82];
    function bubbleSort(arr){
        var n=arr.length;//获取数组的长度，既有n个数在排序；
        if(n<=1){//如果arr的长度小于等于1则直接返回arr
            return arr;
        }
        var temp=null;//定义一个临时变量，作交换数据用；
        var bFlag=false;//判断是否排序
        for(var i=0;i<n-1;i++){ //外层循环n-1次
            for(var j=0;j<n-1-i;j++){//内层循环n-1-i次，每次循环都将最大的值放到n-1-i的位置上
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    bFlag=true;
                }
            }
            if(bFlag){
                bFlag=false;
            }else{
                break;//走到这里说明不用排序，优化性能直接跳出
            }
        }

        return arr;
    }
    console.log(bubbleSort(arr));
})();