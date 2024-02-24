import linkedList from "linkedList.js";
class HashMap{
    constructor(){
        this.ar=[]
        this.mkeys=new linkedList()
    }
    hash(key){
        let hashcode=0
        const prime=31,mod=1e3
        for(let i=0;i<key.length;i++){
            hashcode=(hashcode*prime+key.charCodeAt(i))%mod
        }
        return hashcode
    }
    set(key,value){
        let hashcode=this.hash(key)
        if(this.ar[hashcode]==undefined){
            this.mkeys.append(key)
        }
        this.ar[hashcode]=value
    }
    get(key){
        let hashcode=this.hash(key)
        if(this.ar[hashcode]==undefined)return null
        return this.ar[hashcode]
    }
    has(key){
        let hashcode=this.hash(key)
        return this.ar[hashcode]!=undefined
    }
    remove(key){
        let hashcode=this.hash(key)
        let h=this.has(key)
        if(h){
            let i=this.mkeys.find(key)
            this.mkeys.removeAt(i)
        }
        this.ar[hashcode]=undefined
        return h
    }
    length(){
        return this.mkeys.size()
    }
    clear(){
        while(this.mkeys.size()>0){
            let key=this.mkeys.back()
            let hashcode=this.hash(key)
            this.ar[hashcode]=undefined
            this.mkeys.pop()
        }
    }
    keys(){
        return this.mkeys.values()
    }
    values(){
        let a=this.keys()
        let b=[]
        for(let i=0;i<a.length;i++){
            let hashcode=this.hash(a[i])
            b.push(this.ar[hashcode])
        }
        return b
    }
    entries(){
        let a=this.keys()
        let b=[]
        for(let i=0;i<a.length;i++){
            let hashcode=this.hash(a[i])
            b.push([a[i],this.ar[hashcode]])
        }
        return b
    }
}
