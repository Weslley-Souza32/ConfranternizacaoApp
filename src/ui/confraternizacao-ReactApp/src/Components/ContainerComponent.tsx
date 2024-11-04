import "./style.css"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContainerComponent = (props: any) => {
  return (
    <div className='container'>
      <div className="container-login">
        <div className="wrap-login">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ContainerComponent