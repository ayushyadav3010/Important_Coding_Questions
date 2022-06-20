class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(Key)
     {
        let hash = 0
        for (let i = 0; i < Key.length; i++) {
            hash = (hash + Key.charCodeAt(i) * i) %
                this.data.length

        }
        return hash;
    }
    set(Key) {
        let address = this._hash(Key);
        if (this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key.value])
             console.log(this.data)
        }
        
            this.data[address].push([Key.value])
            return this.data
    }
    get(Key)
    {
        let address=this._hash(Key);
        const currentBucket=this.data[address]
        console.log(currentBucket)
        if(currentBucket){
        {
            for(let i=0;i<currentBucket.length;i++)
            {
                if(currentBucket[i][0]==Key)
                {
                    return currentBucket[i][1];
                }
            }
        }
    }
        return undefined;

    }

    keys()
    {
       const keyArray=[];
        for(let i=0;i<this.data.length;i++)
        {
            if(this.data[i])
            {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;       
    }
}
const myHashTable = new HashTable(50);
//myHashTable._hash('grapes')
 myHashTable.set('grapes',10000);
 myHashTable.set('Oranges',100);
 myHashTable.get('grapes');
 myHashTable.keys();