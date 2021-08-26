class NumberAzeriTranslator {
    teklik = ['', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz'];
    onluq = ['', 'on', 'iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan'];
    yuzluk = ['', 'min', 'milyon', 'milyard', 'trilyon'];
    constructor (number) {
        this.number = number;
    }

    translate () {
        let divider = 1;
        const arr = [];
        let number = this.number;
    
        while (divider <= number) {
            const remain = number % (divider * 10);
            number -= remain;
            arr.push(remain / (10 ** arr.length));
            divider *= 10;
        }
    
    
        let index = 0;
        let sentense = [];
        while(arr.length) {
            const triple = arr.splice(0, 3);
            const result = this.getTripleString(triple);
            if (result.length) {
                sentense.push(this.getTripleString(triple) + ' ' + this.yuzluk[index]);
            }
            index++;
        }

        return sentense.reverse().join(' ');
    }

    getTripleString(triple) {
        const arr = [];
        const [teklik, onluq, yuzluk] = triple;
        if (yuzluk) {
            arr.push(`${this.teklik[yuzluk]} yüz`);
        }

        if (onluq) {
            arr.push(`${this.onluq[onluq]}`);
        }

        if (teklik) {
            arr.push(this.teklik[teklik]);
        }

        return arr.join(' ');
    }
}

module.exports = NumberAzeriTranslator;