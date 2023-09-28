//https://kodim.cz/vyvoj-webu/react-2/lekce/hodnoty-stav/cv-imutabilita
//cviceni 1 Jednoduché spready polí
const names = ['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']

//1 Přidejte na konec pole hodnotu 'hanka'
const x = [...names, "hanka"]

x
['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra', 'hanka']

//2 Přidejte na začátek pole hodnotu 'romana'
const y = ["romana", ...names]

y
['romana', 'jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']

//3 Vytvořte čistou kopii pole
const z = names

z
['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']

//4 Odstraňte poslední prvek pole
const w = [...names].pop()

w
'ondra'
const w = [...names]

w.pop()
'ondra'

w
['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka']

//5 Odstraňte z pole hodnotu na třetím indexu
const r = [...names]

r.splice(3,1)
['radek']
r
['jana', 'pavel', 'eva', 'zuzka', 'ondra']

//cviceni 2 Jednoduché spready objektů
const ticket = { from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 115 }

//1 Přidejte do objektu vlastnot duration s hodnotu 2h
const newTicket = {...ticket, duration:"2h"}

newTicket
{from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 115, duration: '2h'}

//2 Změňte vlastnost price na hodnotu 130
const ticket2 = {...ticket, price: 130}

ticket2
{from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 130}

//cviceni 3 Imutabilita
//1 Vytvořte funkci reversed, která obrátí pořadí prvků v poli
const reversed = (array) => {return [...array].reverse()}

reversed(names)
['ondra', 'zuzka', 'radek', 'jitka', 'eva', 'pavel', 'jana']

//2 Vytvořte funkci remove, která obdrží pole a index. Funkce smaže prvek na zadaném indexu
const remove = (array, index) => {
    const removed = [...array];
    removed.splice(index, 1);
    return removed;
}

remove(names,3)
['jana', 'pavel', 'eva', 'radek', 'zuzka', 'ondra']

//3 Vytvořte funkci swap, která obdrží pole a dva indexy. Funkce prohodí prvky na těchto indexech
const swap = (array, index1, index2) => {
    const swaped = [...array]
    swaped[index1] = array[index2]
    swaped[index2] = array[index1]
    return swaped
}

swap(names,2,3)
['jana', 'pavel', 'jitka', 'eva', 'radek', 'zuzka', 'ondra']

//cviceni 4 Imutabilita 2
//1 Vytvořte funkci drag, která obdrží pole a dva indexy. Funkce přetáhne prvek na prvním indexu na místo označené druhým indexem
drag([10, 11, 12, 13, 14, 15], 4, 1)
[10, 14, 11, 12, 13, 15]

const drag = (array, from, to) => {
    const result = [...array];
    result.splice(from, 1);
    result.splice(to, 0, array[from]);
    return result;
  };

//2 Vytvořte funkci rotate, která obdrží pole a kladné celé číslo. Funkce odrotuje pole doprava o zadaný počet kroků

rotate([10, 11, 12, 13, 14, 15], 4)
[12, 13, 14, 15, 10, 11]

const rotate = (array, steps) => {
    const result = [...array];
    const tail = result.splice(-steps);
    result.unshift(...tail);
    return result;
  };

//3 Vytvořte funkci shuffle, která náhodně zamíchá prvky v poli
const shuffle = (array) => {
    const result = [...array];
    result.sort(() => Math.random() - 0.5);
    return result;
  };