/**
 * Created by Administrator on 2015/7/7.
 */
;(function(){
    var arr=[12,3,43,11,56,90,7,66,82];
    function quickSort(arr){
        var len=arr.length;//获取arr的长度
        if(len<=1){//如果arr的长度小于等于1则直接返回arr
            return arr;
        }
        var pIndex=Math.floor(len/2);//获取基准点的索引下标
        var pivot=arr.splice(pIndex,1);//用splice的方法获取基准的pivot=arr[pIndex]
        //此时的arr是去除pIndex项之后的剩余项
        var left=[];
        var right=[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]<pivot[0]){//如果小于基准点就放到数组left中
                left.push(arr[i]);
            }else{//如果大于基准点就放到数组right中
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat(pivot,quickSort(right));
    }
    console.log(quickSort(arr));
})();