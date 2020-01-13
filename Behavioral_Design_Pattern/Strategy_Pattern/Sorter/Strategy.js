const BubbleSort = function() {
    this.swap = function(list, a, b){
        const temp = list[b];
        list[b] = list[a]
        list[a] = temp;
    };

    this.sort = function(list){
    
        for(let i = 0; i < list.length; i++){
            let swapped = false;
            for(let j = 0; j < list.length; j++){
                if (list[j] > list[j + 1]){
                    debugger;
                    this.swap(list, j, j + 1)
                    swapped = true;
                }
            }

            if (!swapped){
                break;
            }
        }

        return list
    };
};


const MergeSort = function(){
    this.sort = function(list) {
        if (list.length === 1){
            return list;
        }

        const halve = Math.floor(list.length / 2)
        
        const listA = [...list.slice(0, halve)];
        const listB = [...list.slice(halve, list.length)];

        let a = this.sort(listA);
        let b = this.sort(listB);

        return this.merge(a, b)
    }

    this.merge = function(a,b){
        const c = [];

        while (a.length && b.length){
            if (a[0] > b[0]){
                c.push(b[0]);
                b.shift();
            } else {
                c.push(a[0]);
                a.shift()

            };
        };

        while (a.length){
            c.push(a[0]);
            a.shift()
        };

        while (b.length){
            c.push(b[0]);
            b.shift()
        };

        return c
    };
};

module.exports = { BubbleSort, MergeSort}
