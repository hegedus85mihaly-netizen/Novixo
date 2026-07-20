const products=[
{name:'Amazfit Balance',price:'189 €'},
{name:'Huawei Watch Fit 4',price:'159 €'},
{name:'Roborock Q5',price:'299 €'},
{name:'Persil Universal',price:'18 €'},
{name:'Sony WF-C700N',price:'79 €'}
];
document.getElementById('products').innerHTML=products.map(p=>`<div class='card'><h3>${p.name}</h3><p>${p.price}</p><button>Kosárba</button></div>`).join('');