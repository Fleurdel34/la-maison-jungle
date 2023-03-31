import logo from '../assets/logo.png';
import '../Styles/Banner.css';



export function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>)
}



export function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
        <li>Monstera : {monsteraPrice}€</li>
         <li>Lierre : {ivyPrice}€</li>
         <li>Fleurs : {flowerPrice}€</li>
        </ul>
          Total : {monsteraPrice + ivyPrice + flowerPrice }€
          </div>)
}
