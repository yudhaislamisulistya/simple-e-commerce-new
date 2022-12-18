import BreadcrumbArea from "./breadcrumb/area"

const Breadcrumb = (props) => {
    return(
        <BreadcrumbArea title={props.title} image={props.image}></BreadcrumbArea>
    )
}

export default Breadcrumb;