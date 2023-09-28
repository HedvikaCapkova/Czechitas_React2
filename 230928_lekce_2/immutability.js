//https://kodim.cz/vyvoj-webu/react-2/lekce/hodnoty-stav/cv-imutabilita
//cviceni 1
//1
const names = ['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']

const x = [...names, "hanka"]

x
['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra', 'hanka']

//2
const y = ["romana", ...names]

y
['romana', 'jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']

//3
const z = names

z
['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']
const w = [...names].pop()

w
'ondra'
const w = [...names]

w.pop()
'ondra'
w
['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka']
const r = [...names]

r.splice(3,1,0)
['jitka']
r
['jana', 'pavel', 'eva', 0, 'radek', 'zuzka', 'ondra']
r.splice(3,1,)
[0]
r.splice(3,1)
['radek']
r
['jana', 'pavel', 'eva', 'zuzka', 'ondra']
const ticket = { from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 115 }

const newTicket = {...ticket, duration:"2h"}

newTicket
{from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 115, duration: '2h'}
const ticket2 = {...ticket, price: 130}

ticket2
{from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 130}
const reversed = (array) => {return [...array].reverse()}

reversed(names)
['ondra', 'zuzka', 'radek', 'jitka', 'eva', 'pavel', 'jana']
const remove = (array, index) => {}

const remove = (array, index) => {
    const removed = [...array];
    removed.splice(index, 1);
    return removed;
}

remove(names,3)
['jana', 'pavel', 'eva', 'radek', 'zuzka', 'ondra']


const swap = (array, index1, index2) => {
    const swaped = [...array]
    swaped[index1] = array[index2]
    swaped[index2] = array[index1]
    return swaped
}

swap(names,2,3)
['jana', 'pavel', 'jitka', 'eva', 'radek', 'zuzka', 'ondra']