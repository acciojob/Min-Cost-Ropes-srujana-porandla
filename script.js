function mincost(arr)

// return the min cost
    let minHeap = new MinHeap(arr);
    res = 0;

    while (minHeap.size > 1){
		first = minHeap.pop();
        second = minHeap.pop();

        res = res + first + second;
        minHeap.push(first + second);
	}
       

    return res;
  
}

module.exports=mincost;
