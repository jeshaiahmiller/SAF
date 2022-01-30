import Header from '../Header/Header'


export default function Layout(props) {
  return (
    <div className='layout'>
    <Header user={props.user} />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
  )
}
