import './Pizza.css';
function Burger(){
    return(
        <>
        <div className='container'>
           <div className='container-pizza'>
              <h1>Burger🍔🍔🍔</h1>
              <span className='container-item-pizza'>Glorius Heavenly Burgers...🤩😊</span>
              <h2 className='name'>₨.150/-</h2>
           </div>

           <div className='container-pizza'>
              <h1>Ice-Creme🍨🍨🍨</h1>
              <span className='container-item-pizza'>You will love it the way its made...🤩😊</span>
              <h2 className='name'>₨.100/-</h2>
           </div>

           <div className='container-pizza'>
              <h1>Doughnut🍩🍩🍩</h1>
              <span className='container-item-pizza'>Go nuts, with our Doughnuts...🤩😊</span>
              <h2 className='name'>₨.200/-</h2>
           </div>
        </div>
        </>
    )
}
export default Burger;