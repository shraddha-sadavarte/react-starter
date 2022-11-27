import './Pizza.css';
function Fries(){
    return(
        <>
        <div className='container'>
           <div className='container-pizza'>
              <h1>Fries🍟🍟🍟</h1>
              <span className='container-item-pizza'>Feel the Crispiness...🤩😊</span>
              <h2 className='name'>₨.100/-</h2>
           </div>

           <div className='container-pizza'>
              <h1>Noodles🍜🍜🍜</h1>
              <span className='container-item-pizza'>Nothing can replace its taste...🤩😊</span>
              <h2 className='name'>₨.120/-</h2>
           </div>

           <div className='container-pizza'>
              <h1>Cupcake🧁🧁🧁</h1>
              <span className='container-item-pizza'>Delicious than you imagine...🤩😊</span>
              <h2 className='name'>₨.220/-</h2>
           </div>
        </div>
        </>
    )
}
export default Fries;