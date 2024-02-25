let graph=[]
const dx=[2,2,-2,-2,1,-1,1,-1]
const dy=[1,-1,1,-1,2,2,-2,-2]
function hash(i,j){
    return i*8+j+1
}
function unHash(value){
    let i=Math.floor(value/8)
    let j=value-i*8-1
    while(j<0){
        j+=8
        i--
    }
    return [i,j]
}
function valid(i,j){
    return i>=0 && i<8 && j>=0 && j<8
}
function buildGraph(){
    for(let x=0;x<8;x++){
        for(let y=0;y<8;y++){
            let here=hash(x,y)
            let ad=[]
            for(let i=0;i<8;i++){
                let xx=x+dx[i]
                let yy=y+dy[i]
                if(valid(xx,yy)){
                    ad.push(hash(xx,yy))
                }
            }
            graph[here]=ad;
        }
        
    }
}
function knightMoves(start,end){
    buildGraph()
    let dist=[]
    for(let i=1;i<=64;i++)dist[i]=1e9
    let s=hash(start[0],start[1]),e=hash(end[0],end[1])
    dist[s]=0
    let prev=[],q=[]
    q.push(s)
    let done=false
    while(q.length>0&&!done){
        let u=q.shift()
        for(let i=0;i<graph[u].length;i++){
            let v=graph[u][i];
            if(dist[u]+1<dist[v]){
                dist[v]=dist[u]+1
                prev[v]=u
                q.push(v)
                if(v==e){
                    done=true
                    break
                }
            }
        }
    }
    let order=[]
    let cur=e
    while(cur!=undefined){
        order.unshift(cur)
        cur=prev[cur]
    }
    console.log(`You made it in ${dist[e]} moves!  Here's your path:`)
    for(let i=0;i<order.length;i++){
        let here=unHash(order[i])
        console.log(`[ ${here[0]} , ${here[1]} ]`)
    }
}
knightMoves([0,0],[7,7]) // expected 6 moves !
knightMoves([3,3],[4,3]) // expected 3 moves !
