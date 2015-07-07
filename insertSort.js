/**
 * Created by Administrator on 2015/7/7.
 */
;(function(){
    var arr=[12,3,43,11,56,90,7,66,82];
    function insertSort(arr){
        var temp=null;//定义一个临时变量保存要插入元素的值
        for(var i=0;i<arr.length;i++){//从索引位置1开始遍历数组
            if(arr[i]<arr[i-1]){
                //只要插入的元素小于已排好序的最大元素的时候才需要进行下面的操作
                temp=arr[i];//把要插入的元素赋值给临时变量
                var p=i-1;//已排好序的数组的最后一项索引为i-1
                while(temp<arr[p]&&p>=0){
                    arr[p+1]=arr[p];//把大于要插入元素（temp）的已排好序预算位置往后挪以为
                    p--;//从后往前遍历已经排好序的元素
                }
                arr[p+1]=temp;//把要插入的元素插入到已排好序的数组中，索引位置为p+1
            }
        }
        return arr;
    }
    console.log(insertSort(arr));
})();