import React,{useState} from 'react'
// import babel/plugin-proposal-private-property-in-object

export default function About(props) {

    const [letStyle,setLetStyle]=useState({
        backgroundColor: 'white',
        color:'black'},


    );
    const [btnText,setbtnText] = useState("enable dark mode")

    const toggleClick=()=>
    {
        // console.log("button clicked!!!!");
        if(letStyle.color ==='black')
        {
            setLetStyle({
                backgroundColor: 'rgb(48, 76, 74)',
                color:'white',
                // border: '1px solid white',

            })
            setbtnText("enable light mode");
        }
        else
        {
            setLetStyle({
                backgroundColor: 'white',
                color:'black'
                
            })
            setbtnText("enable dark mode");

        }

    }
    return (
        <div className='container my-3' style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'} } >
            <h1>About  Us</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                            ANSHUMAN THAKUR
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                            AMIT THAKUR
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                            UDIT THAKUR
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                        <div class="accordion-body" style={{background:props.mode==='dark'?'rgb(48, 76, 74)':'white'}}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleClick} className='btn btn-primary my-3'>{btnText}</button> */}

        </div>
    )
}
