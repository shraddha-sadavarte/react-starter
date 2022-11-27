import './Pizza.css';
function Pizza(){
    return(
        <>
           <div className='container'>
           <div className='container-pizza'>
              <h1>Pizza 🍕🍕🍕</h1>
              <span className='container-item-pizza'>A delicious pizza make your smile wider...🤩😊</span>
              <h2 className='name'>₨.200/-</h2>
           </div>

           <div className='container-pizza'>
              <h1>Cake 🎂🎂🎂</h1>
              <span className='container-item-pizza'>A delicious cakes for celebration...🤩😊</span>
              <h2 className='name'>₨.300/-</h2>
           </div>

           <div className='container-pizza'>
              <h1>Cookie🍪🍪🍪</h1>
              <span className='container-item-pizza'>Cookies for your smile...🤩😊</span>
              <h2 className='name'>₨.250/-</h2>
           </div>
           </div>
        </>
    )
}
export default Pizza;