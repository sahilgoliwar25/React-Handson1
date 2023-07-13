import react, {Component} from 'react'
import './ClassComp.css'

class ClassComp extends Component{
    render(){
        return(
            <>
            <div className='body-container'>
            <h1>This is created using Class Component</h1>
            <p>This is done using External CSS</p>
            <p style={{color:"blue"}}>This is done using Inline CSS</p>
            </div>
            </>
        )
    }
}
export default ClassComp