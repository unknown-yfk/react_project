import Header from './components/Header'

function Apps() {

  const name = "Fike"
  // const x = false
  return (
    <div className="Apps">
    
        <h1 >hello {name}</h1>
        {/* <h2>hello from {x ? 'yes' : 'no'}</h2> */}
        <Header />
    </div>
  );
}

export default Apps;
