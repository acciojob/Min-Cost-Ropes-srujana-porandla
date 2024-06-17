function mincost(arr)
{
// return the min cost
   let arrNew=arr.sort((a,b)=>{
	return a-b;
   });
	console.log(arrNew);
    while(arr.length>1){
		let first=arrNew.shift();
		let second=arrNew.shift();
		let sum=first+second;
		arrNew.push(sum);
		arrNew.sort((a, b) => a - b);
		
		});
	}
	return arrNew[0];
}

module.exports=mincost;
