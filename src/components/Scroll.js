function Scroll(props){
    return( 
        <div style = {{overflowY: 'scroll', border: '2px solid white',height: '700px', margin: '5px'}}>
        {props.children};
        </div>
    );
}

export default Scroll;