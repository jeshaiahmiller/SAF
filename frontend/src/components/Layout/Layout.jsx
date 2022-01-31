import Header from '../Header/Header'


export default function Layout(props) {
  return (
    <div className='layout'>
    <Header loggedIn={props.loggedIn} />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
  )
}
