import Card from './Card'
import one from '../assets/img/new1.jpg'
import two from '../assets/img/news2.jpg'
import three from '../assets/img/news3.jpg'
import four from '../assets/img/news4.jpg'

function Allcards(){
    return(
        <center>
        <div className = "text-align-center" style = {{display: "inline-flex"}}>
            
            <Card img = {one}/>
            <Card img = {two}/>
            <Card img = {three}/>
            <Card img = {four}/>
            
        </div>
        </center>
    )
}

export default Allcards;